-- CafePOS Tjap Kemiri - MySQL 8 production schema
-- The localhost UI is offline-first; this schema is the migration target for Hostinger Business.

CREATE DATABASE IF NOT EXISTS tjap_kemiri_pos CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE tjap_kemiri_pos;

CREATE TABLE outlets (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  timezone VARCHAR(64) NOT NULL DEFAULT 'Asia/Jakarta',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE roles (
  id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(32) NOT NULL UNIQUE,
  name VARCHAR(80) NOT NULL,
  level TINYINT UNSIGNED NOT NULL
);

CREATE TABLE permissions (
  id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(80) NOT NULL UNIQUE,
  name VARCHAR(120) NOT NULL,
  module VARCHAR(60) NOT NULL
);

CREATE TABLE role_permissions (
  role_id TINYINT UNSIGNED NOT NULL,
  permission_id SMALLINT UNSIGNED NOT NULL,
  can_view BOOLEAN NOT NULL DEFAULT TRUE,
  can_create BOOLEAN NOT NULL DEFAULT FALSE,
  can_update BOOLEAN NOT NULL DEFAULT FALSE,
  can_approve BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (role_id, permission_id),
  FOREIGN KEY (role_id) REFERENCES roles(id),
  FOREIGN KEY (permission_id) REFERENCES permissions(id)
);

CREATE TABLE employees (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  outlet_id BIGINT UNSIGNED NOT NULL,
  role_id TINYINT UNSIGNED NOT NULL,
  name VARCHAR(120) NOT NULL,
  username VARCHAR(120) NULL UNIQUE,
  password_hash VARCHAR(255) NULL,
  pin_hash VARCHAR(255) NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (outlet_id) REFERENCES outlets(id),
  FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE devices (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  outlet_id BIGINT UNSIGNED NOT NULL,
  device_key CHAR(36) NOT NULL UNIQUE,
  name VARCHAR(100) NOT NULL,
  last_sync_at DATETIME NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  FOREIGN KEY (outlet_id) REFERENCES outlets(id)
);

CREATE TABLE attendance_logs (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  employee_id BIGINT UNSIGNED NOT NULL,
  device_id BIGINT UNSIGNED NOT NULL,
  clock_in_at DATETIME NOT NULL,
  clock_out_at DATETIME NULL,
  correction_note TEXT NULL,
  corrected_by BIGINT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (employee_id) REFERENCES employees(id),
  FOREIGN KEY (device_id) REFERENCES devices(id),
  FOREIGN KEY (corrected_by) REFERENCES employees(id)
);

CREATE TABLE operational_shifts (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  outlet_id BIGINT UNSIGNED NOT NULL,
  device_id BIGINT UNSIGNED NOT NULL,
  opened_by BIGINT UNSIGNED NOT NULL,
  closed_by BIGINT UNSIGNED NULL,
  handover_note TEXT NULL,
  opened_at DATETIME NOT NULL,
  closed_at DATETIME NULL,
  status ENUM('open','closed') NOT NULL DEFAULT 'open',
  FOREIGN KEY (outlet_id) REFERENCES outlets(id),
  FOREIGN KEY (device_id) REFERENCES devices(id),
  FOREIGN KEY (opened_by) REFERENCES employees(id),
  FOREIGN KEY (closed_by) REFERENCES employees(id)
);

CREATE TABLE menu_categories (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE menu_items (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  category_id BIGINT UNSIGNED NOT NULL,
  name VARCHAR(140) NOT NULL,
  price DECIMAL(14,2) NULL,
  estimated_hpp DECIMAL(14,2) NULL,
  image_url VARCHAR(500) NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  is_price_placeholder BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES menu_categories(id)
);

CREATE TABLE ingredients (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  category ENUM('bar','kitchen','prep','packaging','operational') NOT NULL,
  name VARCHAR(160) NOT NULL,
  base_unit VARCHAR(24) NOT NULL,
  current_qty DECIMAL(16,3) NOT NULL DEFAULT 0,
  average_unit_cost DECIMAL(16,4) NOT NULL DEFAULT 0,
  minimum_qty DECIMAL(16,3) NULL,
  low_stock_alert BOOLEAN NOT NULL DEFAULT TRUE,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  UNIQUE KEY uq_ingredient_name (name)
);

CREATE TABLE ingredient_aliases (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  ingredient_id BIGINT UNSIGNED NOT NULL,
  alias_name VARCHAR(160) NOT NULL,
  UNIQUE KEY uq_ingredient_alias (alias_name),
  FOREIGN KEY (ingredient_id) REFERENCES ingredients(id)
);

CREATE TABLE recipes (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  menu_item_id BIGINT UNSIGNED NULL,
  name VARCHAR(160) NOT NULL,
  type ENUM('menu','prep') NOT NULL,
  production_mode ENUM('on_order','batch') NOT NULL DEFAULT 'on_order',
  yield_qty DECIMAL(16,3) NOT NULL DEFAULT 1,
  yield_unit VARCHAR(24) NOT NULL DEFAULT 'Porsi',
  status ENUM('draft','active','archived') NOT NULL DEFAULT 'draft',
  version INT UNSIGNED NOT NULL DEFAULT 1,
  created_by BIGINT UNSIGNED NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (menu_item_id) REFERENCES menu_items(id),
  FOREIGN KEY (created_by) REFERENCES employees(id)
);

CREATE TABLE recipe_components (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  recipe_id BIGINT UNSIGNED NOT NULL,
  ingredient_id BIGINT UNSIGNED NULL,
  prep_recipe_id BIGINT UNSIGNED NULL,
  quantity DECIMAL(16,3) NOT NULL,
  unit VARCHAR(24) NOT NULL,
  CHECK ((ingredient_id IS NOT NULL) <> (prep_recipe_id IS NOT NULL)),
  FOREIGN KEY (recipe_id) REFERENCES recipes(id),
  FOREIGN KEY (ingredient_id) REFERENCES ingredients(id),
  FOREIGN KEY (prep_recipe_id) REFERENCES recipes(id)
);

CREATE TABLE cafe_tables (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  outlet_id BIGINT UNSIGNED NOT NULL,
  table_number VARCHAR(20) NOT NULL,
  status ENUM('empty','occupied','reserved') NOT NULL DEFAULT 'empty',
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  UNIQUE KEY uq_outlet_table (outlet_id, table_number),
  FOREIGN KEY (outlet_id) REFERENCES outlets(id)
);

CREATE TABLE reservations (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  table_id BIGINT UNSIGNED NOT NULL,
  customer_name VARCHAR(140) NOT NULL,
  phone VARCHAR(40) NULL,
  guest_count SMALLINT UNSIGNED NULL,
  reserved_at DATETIME NOT NULL,
  note TEXT NULL,
  status ENUM('reserved','seated','cancelled','no_show') NOT NULL DEFAULT 'reserved',
  created_by BIGINT UNSIGNED NOT NULL,
  FOREIGN KEY (table_id) REFERENCES cafe_tables(id),
  FOREIGN KEY (created_by) REFERENCES employees(id)
);

CREATE TABLE orders (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  public_number INT UNSIGNED NOT NULL UNIQUE,
  client_uuid CHAR(36) NOT NULL UNIQUE,
  outlet_id BIGINT UNSIGNED NOT NULL,
  shift_id BIGINT UNSIGNED NOT NULL,
  operator_id BIGINT UNSIGNED NOT NULL,
  table_id BIGINT UNSIGNED NULL,
  customer_name VARCHAR(140) NULL,
  order_type ENUM('dine_in','take_away','delivery') NOT NULL,
  status ENUM('draft','open','paid','voided','refunded') NOT NULL DEFAULT 'draft',
  subtotal DECIMAL(14,2) NOT NULL DEFAULT 0,
  discount_total DECIMAL(14,2) NOT NULL DEFAULT 0,
  grand_total DECIMAL(14,2) NOT NULL DEFAULT 0,
  sent_to_bar_at DATETIME NULL,
  paid_at DATETIME NULL,
  created_at DATETIME NOT NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (outlet_id) REFERENCES outlets(id),
  FOREIGN KEY (shift_id) REFERENCES operational_shifts(id),
  FOREIGN KEY (operator_id) REFERENCES employees(id),
  FOREIGN KEY (table_id) REFERENCES cafe_tables(id)
);

CREATE TABLE order_items (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  order_id BIGINT UNSIGNED NOT NULL,
  menu_item_id BIGINT UNSIGNED NOT NULL,
  item_name_snapshot VARCHAR(160) NOT NULL,
  unit_price_snapshot DECIMAL(14,2) NOT NULL,
  recipe_version_snapshot INT UNSIGNED NULL,
  quantity DECIMAL(10,3) NOT NULL,
  note TEXT NULL,
  discount_type ENUM('percent','amount') NULL,
  discount_value DECIMAL(14,2) NULL,
  discount_reason TEXT NULL,
  line_total DECIMAL(14,2) NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (menu_item_id) REFERENCES menu_items(id)
);

CREATE TABLE order_discounts (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  order_id BIGINT UNSIGNED NOT NULL,
  type ENUM('percent','amount') NOT NULL,
  value DECIMAL(14,2) NOT NULL,
  reason TEXT NOT NULL,
  created_by BIGINT UNSIGNED NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (created_by) REFERENCES employees(id)
);

CREATE TABLE payments (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  order_id BIGINT UNSIGNED NOT NULL,
  method ENUM('qris_bni_physical','debit_card') NOT NULL,
  amount DECIMAL(14,2) NOT NULL,
  reference_number VARCHAR(120) NULL,
  reconciliation_status ENUM('unreconciled','reconciled') NOT NULL DEFAULT 'unreconciled',
  confirmed_by BIGINT UNSIGNED NOT NULL,
  paid_at DATETIME NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (confirmed_by) REFERENCES employees(id)
);

CREATE TABLE stock_movements (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  ingredient_id BIGINT UNSIGNED NOT NULL,
  type ENUM('stock_in','sale','production','waste','adjustment','count') NOT NULL,
  quantity_delta DECIMAL(16,3) NOT NULL,
  quantity_before DECIMAL(16,3) NOT NULL,
  quantity_after DECIMAL(16,3) NOT NULL,
  unit_cost_snapshot DECIMAL(18,4) NULL,
  total_cost_snapshot DECIMAL(18,2) NULL,
  reference_type VARCHAR(40) NULL,
  reference_id BIGINT UNSIGNED NULL,
  reason TEXT NULL,
  created_by BIGINT UNSIGNED NOT NULL,
  approved_by BIGINT UNSIGNED NULL,
  created_at DATETIME NOT NULL,
  FOREIGN KEY (ingredient_id) REFERENCES ingredients(id),
  FOREIGN KEY (created_by) REFERENCES employees(id),
  FOREIGN KEY (approved_by) REFERENCES employees(id)
);

CREATE TABLE stock_counts (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  outlet_id BIGINT UNSIGNED NOT NULL,
  status ENUM('draft','pending_approval','approved','cancelled') NOT NULL DEFAULT 'draft',
  counted_by BIGINT UNSIGNED NOT NULL,
  approved_by BIGINT UNSIGNED NULL,
  note TEXT NULL,
  created_at DATETIME NOT NULL,
  approved_at DATETIME NULL,
  FOREIGN KEY (outlet_id) REFERENCES outlets(id),
  FOREIGN KEY (counted_by) REFERENCES employees(id),
  FOREIGN KEY (approved_by) REFERENCES employees(id)
);

CREATE TABLE stock_count_items (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  stock_count_id BIGINT UNSIGNED NOT NULL,
  ingredient_id BIGINT UNSIGNED NOT NULL,
  system_qty DECIMAL(16,3) NOT NULL,
  actual_qty DECIMAL(16,3) NOT NULL,
  variance DECIMAL(16,3) NOT NULL,
  reason TEXT NULL,
  FOREIGN KEY (stock_count_id) REFERENCES stock_counts(id),
  FOREIGN KEY (ingredient_id) REFERENCES ingredients(id)
);

CREATE TABLE outlet_tasks (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  outlet_id BIGINT UNSIGNED NOT NULL,
  title VARCHAR(180) NOT NULL,
  note TEXT NULL,
  assignee_id BIGINT UNSIGNED NOT NULL,
  created_by BIGINT UNSIGNED NOT NULL,
  priority ENUM('normal','high') NOT NULL DEFAULT 'normal',
  status ENUM('pending','in_progress','done') NOT NULL DEFAULT 'pending',
  due_at DATETIME NULL,
  completed_at DATETIME NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (outlet_id) REFERENCES outlets(id),
  FOREIGN KEY (assignee_id) REFERENCES employees(id),
  FOREIGN KEY (created_by) REFERENCES employees(id)
);

CREATE TABLE imported_documents (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  outlet_id BIGINT UNSIGNED NOT NULL,
  document_type ENUM('purchase_invoice','report','other') NOT NULL DEFAULT 'other',
  original_filename VARCHAR(255) NOT NULL,
  storage_path VARCHAR(500) NOT NULL,
  mime_type VARCHAR(120) NOT NULL DEFAULT 'application/pdf',
  file_size BIGINT UNSIGNED NOT NULL,
  uploaded_by BIGINT UNSIGNED NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (outlet_id) REFERENCES outlets(id),
  FOREIGN KEY (uploaded_by) REFERENCES employees(id)
);

CREATE TABLE data_import_runs (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  outlet_id BIGINT UNSIGNED NOT NULL,
  import_type ENUM('stock_in_excel') NOT NULL,
  original_filename VARCHAR(255) NOT NULL,
  accepted_rows INT UNSIGNED NOT NULL DEFAULT 0,
  rejected_rows INT UNSIGNED NOT NULL DEFAULT 0,
  imported_by BIGINT UNSIGNED NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (outlet_id) REFERENCES outlets(id),
  FOREIGN KEY (imported_by) REFERENCES employees(id)
);

CREATE TABLE audit_logs (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  outlet_id BIGINT UNSIGNED NOT NULL,
  employee_id BIGINT UNSIGNED NULL,
  action VARCHAR(80) NOT NULL,
  entity_type VARCHAR(80) NOT NULL,
  entity_id VARCHAR(80) NOT NULL,
  before_json JSON NULL,
  after_json JSON NULL,
  reason TEXT NULL,
  device_id BIGINT UNSIGNED NULL,
  created_at DATETIME NOT NULL,
  INDEX idx_audit_entity (entity_type, entity_id),
  INDEX idx_audit_created (created_at),
  FOREIGN KEY (outlet_id) REFERENCES outlets(id),
  FOREIGN KEY (employee_id) REFERENCES employees(id),
  FOREIGN KEY (device_id) REFERENCES devices(id)
);

CREATE TABLE tax_settings (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  outlet_id BIGINT UNSIGNED NOT NULL,
  label VARCHAR(100) NOT NULL DEFAULT 'Pajak restoran / PBJT',
  rate DECIMAL(6,3) NOT NULL DEFAULT 0,
  is_price_inclusive BOOLEAN NOT NULL DEFAULT TRUE,
  effective_from DATE NOT NULL,
  effective_until DATE NULL,
  configured_by BIGINT UNSIGNED NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (outlet_id) REFERENCES outlets(id),
  FOREIGN KEY (configured_by) REFERENCES employees(id)
);

CREATE TABLE vendors (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  outlet_id BIGINT UNSIGNED NOT NULL,
  name VARCHAR(160) NOT NULL,
  phone VARCHAR(40) NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  UNIQUE KEY uq_outlet_vendor (outlet_id, name),
  FOREIGN KEY (outlet_id) REFERENCES outlets(id)
);

CREATE TABLE purchases (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  outlet_id BIGINT UNSIGNED NOT NULL,
  vendor_id BIGINT UNSIGNED NOT NULL,
  invoice_number VARCHAR(120) NOT NULL,
  purchase_date DATE NOT NULL,
  total_amount DECIMAL(16,2) NOT NULL,
  note TEXT NULL,
  received_by BIGINT UNSIGNED NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_vendor_invoice (vendor_id, invoice_number),
  FOREIGN KEY (outlet_id) REFERENCES outlets(id),
  FOREIGN KEY (vendor_id) REFERENCES vendors(id),
  FOREIGN KEY (received_by) REFERENCES employees(id)
);

CREATE TABLE purchase_items (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  purchase_id BIGINT UNSIGNED NOT NULL,
  ingredient_id BIGINT UNSIGNED NOT NULL,
  quantity DECIMAL(16,3) NOT NULL,
  unit VARCHAR(24) NOT NULL,
  unit_cost DECIMAL(16,4) NOT NULL,
  line_total DECIMAL(16,2) NOT NULL,
  FOREIGN KEY (purchase_id) REFERENCES purchases(id),
  FOREIGN KEY (ingredient_id) REFERENCES ingredients(id)
);

CREATE TABLE operating_expenses (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  outlet_id BIGINT UNSIGNED NOT NULL,
  expense_date DATE NOT NULL,
  category ENUM('operational','utilities','maintenance','transportation','marketing','other') NOT NULL,
  vendor_or_payee VARCHAR(160) NOT NULL,
  invoice_number VARCHAR(120) NOT NULL,
  payment_method ENUM('bank_transfer','qris','debit_card') NOT NULL,
  amount DECIMAL(16,2) NOT NULL,
  note TEXT NOT NULL,
  document_id BIGINT UNSIGNED NULL,
  recorded_by BIGINT UNSIGNED NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (outlet_id) REFERENCES outlets(id),
  FOREIGN KEY (document_id) REFERENCES imported_documents(id),
  FOREIGN KEY (recorded_by) REFERENCES employees(id)
);

CREATE TABLE finance_daily_closings (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  outlet_id BIGINT UNSIGNED NOT NULL,
  closing_date DATE NOT NULL,
  sales_total DECIMAL(16,2) NOT NULL,
  estimated_hpp DECIMAL(16,2) NOT NULL,
  operating_expense_total DECIMAL(16,2) NOT NULL,
  estimated_gross_profit DECIMAL(16,2) NOT NULL,
  estimated_operating_profit DECIMAL(16,2) NOT NULL,
  qris_total DECIMAL(16,2) NOT NULL,
  debit_total DECIMAL(16,2) NOT NULL,
  note TEXT NOT NULL,
  closed_by BIGINT UNSIGNED NOT NULL,
  closed_at DATETIME NOT NULL,
  UNIQUE KEY uq_outlet_finance_closing (outlet_id, closing_date),
  FOREIGN KEY (outlet_id) REFERENCES outlets(id),
  FOREIGN KEY (closed_by) REFERENCES employees(id)
);

CREATE TABLE addon_options (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  price DECIMAL(14,2) NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE addon_recipe_components (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  addon_id BIGINT UNSIGNED NOT NULL,
  ingredient_id BIGINT UNSIGNED NOT NULL,
  quantity DECIMAL(16,3) NOT NULL,
  unit VARCHAR(24) NOT NULL,
  FOREIGN KEY (addon_id) REFERENCES addon_options(id),
  FOREIGN KEY (ingredient_id) REFERENCES ingredients(id)
);

CREATE TABLE accounting_settings (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  outlet_id BIGINT UNSIGNED NOT NULL,
  company_name VARCHAR(180) NOT NULL,
  bank_name VARCHAR(120) NOT NULL,
  bank_account_number VARCHAR(80) NULL,
  currency_code CHAR(3) NOT NULL DEFAULT 'IDR',
  updated_by BIGINT UNSIGNED NOT NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_accounting_settings_outlet (outlet_id),
  FOREIGN KEY (outlet_id) REFERENCES outlets(id),
  FOREIGN KEY (updated_by) REFERENCES employees(id)
);

CREATE TABLE accounting_accounts (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  outlet_id BIGINT UNSIGNED NOT NULL,
  account_code VARCHAR(20) NOT NULL,
  account_name VARCHAR(160) NOT NULL,
  report_group ENUM(
    'asset_current','asset_fixed','contra_asset','liability','equity',
    'revenue','other_income','cogs','selling_expense','admin_expense','other_expense'
  ) NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_outlet_account_code (outlet_id, account_code),
  FOREIGN KEY (outlet_id) REFERENCES outlets(id)
);

CREATE TABLE accounting_opening_balances (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  outlet_id BIGINT UNSIGNED NOT NULL,
  as_of_date DATE NOT NULL,
  cash_amount DECIMAL(18,2) NOT NULL DEFAULT 0,
  bank_amount DECIMAL(18,2) NOT NULL DEFAULT 0,
  inventory_amount DECIMAL(18,2) NOT NULL DEFAULT 0,
  fixed_asset_cost DECIMAL(18,2) NOT NULL DEFAULT 0,
  accumulated_depreciation DECIMAL(18,2) NOT NULL DEFAULT 0,
  liability_amount DECIMAL(18,2) NOT NULL DEFAULT 0,
  initial_capital DECIMAL(18,2) NOT NULL DEFAULT 0,
  recorded_by BIGINT UNSIGNED NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_outlet_opening_date (outlet_id, as_of_date),
  FOREIGN KEY (outlet_id) REFERENCES outlets(id),
  FOREIGN KEY (recorded_by) REFERENCES employees(id)
);

CREATE TABLE accounting_journal_entries (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  outlet_id BIGINT UNSIGNED NOT NULL,
  journal_date DATE NOT NULL,
  reference_number VARCHAR(120) NOT NULL,
  description VARCHAR(255) NOT NULL,
  debit_account_id BIGINT UNSIGNED NOT NULL,
  credit_account_id BIGINT UNSIGNED NOT NULL,
  amount DECIMAL(18,2) NOT NULL,
  source_type ENUM('sale','tax','cogs','expense','purchase','waste','asset','depreciation','adjustment','manual','opening') NOT NULL,
  source_id VARCHAR(100) NULL,
  reversal_of_id BIGINT UNSIGNED NULL,
  recorded_by BIGINT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_journal_outlet_date (outlet_id, journal_date),
  INDEX idx_journal_reference (reference_number),
  INDEX idx_journal_reversal (reversal_of_id),
  FOREIGN KEY (outlet_id) REFERENCES outlets(id),
  FOREIGN KEY (debit_account_id) REFERENCES accounting_accounts(id),
  FOREIGN KEY (credit_account_id) REFERENCES accounting_accounts(id),
  FOREIGN KEY (reversal_of_id) REFERENCES accounting_journal_entries(id),
  FOREIGN KEY (recorded_by) REFERENCES employees(id),
  CHECK (amount > 0),
  CHECK (debit_account_id <> credit_account_id)
);

CREATE TABLE fixed_assets (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  outlet_id BIGINT UNSIGNED NOT NULL,
  asset_name VARCHAR(180) NOT NULL,
  asset_category ENUM('building','inventory') NOT NULL,
  acquisition_date DATE NOT NULL,
  reference_number VARCHAR(120) NOT NULL,
  acquisition_cost DECIMAL(18,2) NOT NULL,
  salvage_value DECIMAL(18,2) NOT NULL DEFAULT 0,
  useful_life_months INT UNSIGNED NOT NULL,
  is_opening_asset BOOLEAN NOT NULL DEFAULT FALSE,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  recorded_by BIGINT UNSIGNED NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (outlet_id) REFERENCES outlets(id),
  FOREIGN KEY (recorded_by) REFERENCES employees(id),
  CHECK (acquisition_cost > salvage_value)
);

ALTER TABLE operating_expenses
  ADD COLUMN account_id BIGINT UNSIGNED NULL AFTER category,
  ADD CONSTRAINT fk_operating_expense_account
    FOREIGN KEY (account_id) REFERENCES accounting_accounts(id);

ALTER TABLE data_import_runs
  MODIFY COLUMN import_type ENUM('stock_in_excel','finance_journal_excel') NOT NULL;

INSERT INTO roles (code, name, level) VALUES
('owner', 'Owner', 1),
('finance', 'Finance', 2),
('head_barista', 'Head Barista', 3),
('barista_senior', 'Barista Senior', 4),
('barista_junior', 'Barista Junior', 5);

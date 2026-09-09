const rupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));

const nowTime = () =>
  new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Jakarta",
  }).format(new Date());

const BUSINESS_TIME_ZONE = "Asia/Jakarta";
function businessDate(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: BUSINESS_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .formatToParts(date)
    .reduce((result, part) => ({ ...result, [part.type]: part.value }), {});
  return `${parts.year}-${parts.month}-${parts.day}`;
}

function localTimestamp(date = new Date()) {
  return `${businessDate(date)}T${new Intl.DateTimeFormat("en-GB", {
    timeZone: BUSINESS_TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date)}`;
}

const seedMenuItems = [
  {
    id: 1,
    name: "Cucu Cemangka",
    price: 22000,
    category: "Signature",
    visual: "CC",
    tone: "signature",
    active: true,
  },
  {
    id: 2,
    name: "Regal Brule",
    price: 24000,
    category: "Signature",
    visual: "RB",
    tone: "signature",
  },
  {
    id: 3,
    name: "Buttterscot",
    price: 23000,
    category: "Coffee",
    visual: "BT",
    tone: "coffee",
  },
  {
    id: 4,
    name: "Coconut Creamy",
    price: 24000,
    category: "Coffee",
    visual: "CC",
    tone: "coffee",
  },
  {
    id: 5,
    name: "Chocolate",
    price: 21000,
    category: "Non Coffee",
    visual: "CH",
    tone: "chocolate",
  },
  {
    id: 6,
    name: "Tjap Kemiri",
    price: 25000,
    category: "Signature",
    visual: "TK",
    tone: "signature",
  },
  {
    id: 7,
    name: "Manggo Tea",
    price: 19000,
    category: "Tea",
    visual: "MT",
    tone: "tea",
  },
  {
    id: 8,
    name: "Blackcurrant Tea",
    price: 19000,
    category: "Tea",
    visual: "BT",
    tone: "tea",
  },
  {
    id: 9,
    name: "Teteh Es",
    price: 12000,
    category: "Tea",
    visual: "TE",
    tone: "tea",
  },
  {
    id: 10,
    name: "Ice Matcha Latte",
    price: 24000,
    category: "Non Coffee",
    visual: "ML",
    tone: "tea",
  },
  {
    id: 11,
    name: "Americano",
    price: 18000,
    category: "Coffee",
    visual: "AM",
    tone: "coffee",
  },
  {
    id: 12,
    name: "Apple Black Coffee Foam",
    price: 25000,
    category: "Coffee",
    visual: "AF",
    tone: "coffee",
  },
  {
    id: 13,
    name: "Strawberry Salt Foam",
    price: 23000,
    category: "Non Coffee",
    visual: "SF",
    tone: "chocolate",
  },
];

const employees = [
  {
    id: 1,
    name: "Rana",
    username: "rana",
    role: "Owner",
    pin: "1234",
    canServe: false,
  },
  {
    id: 2,
    name: "Sofi",
    username: "sofi",
    role: "Finance",
    pin: "1234",
    canServe: false,
  },
  {
    id: 3,
    name: "Odong",
    username: "odong",
    role: "Head Barista",
    pin: "1234",
    canServe: true,
  },
  {
    id: 4,
    name: "Ayu",
    username: "ayu",
    role: "Barista Senior",
    pin: "1234",
    canServe: true,
  },
  {
    id: 5,
    name: "Hawari",
    username: "hawari",
    role: "Barista Junior",
    pin: "1234",
    canServe: true,
  },
  {
    id: 6,
    name: "Adam",
    username: "adam",
    role: "Barista Junior",
    pin: "1234",
    canServe: true,
  },
];

const terminalAccounts = [
  {
    id: "tablet-kasir-1",
    name: "Tablet Kasir 1",
    email: "kasir1@tjapkemiri.com",
    pin: "1234",
    active: true,
  },
];

const PERSONAL_AUTH_SESSION_KEY = "tjap-kemiri-personal-session-v1";
const TERMINAL_AUTH_STORAGE_KEY = "tjap-kemiri-terminal-session-v1";
const POS_OPERATOR_SESSION_KEY = "tjap-kemiri-pos-operator";

const seedIngredients = [
  ["SKM", "Bahan Bar", 2850, "Gram", 1000],
  ["REGAL", "Bahan Bar", 740, "Gram", 300],
  ["BEANS ROBUS", "Bahan Bar", 1700, "Gram", 500],
  ["BEANS ARABICA", "Bahan Bar", 980, "Gram", 500],
  ["CREAMER", "Bahan Bar", 1620, "Gram", 600],
  ["UHT", "Bahan Bar", 6200, "Gram", 2000],
  ["MINERAL", "Bahan Bar", 8500, "Gram", 2000],
  ["FOAM", "Bahan Bar", 340, "Sdm", null],
  ["GULA", "Bahan Bar", 4200, "Gram", 1500],
  ["TEH", "Bahan Bar", 1300, "Gram", 400],
  ["ZODA", "Bahan Bar", 760, "Gram", 500],
  ["POWDER COKLAT BENDROP", "Bahan Bar", 450, "Gram", 300],
  ["POWDER MATCHA", "Bahan Bar", 180, "Gram", 200],
  ["SELAI STRAWBERRY", "Bahan Bar", 620, "Gram", 250],
  ["S. DOUBLE FRESH MANGGO", "Bahan Bar", 920, "Gram", 300],
  ["S. DELIFRU WATERMELON", "Bahan Bar", 430, "Gram", 300],
  ["S DELIFRU COCONUT", "Bahan Bar", 510, "Gram", 300],
  ["CUP TJAP KEMIRI", "Kemasan", 86, "Pcs", 30],
  ["CUP POLOS", "Kemasan", 24, "Pcs", 30],
  ["SEDOTAN", "Kemasan", 118, "Pcs", 50],
  ["NUGGET", "Bahan Kitchen", 1100, "Gram", 500],
  ["KENTANG", "Bahan Kitchen", 2800, "Gram", 1000],
  ["SOSIS", "Bahan Kitchen", 740, "Gram", 400],
  ["AYAM SERUNDENG", "Bahan Kitchen", 1280, "Gram", 500],
  ["CRUMBLE", "Bahan Bar", 800, "Gram", 250],
  ["S. DRIPP BUTTERSCOT", "Bahan Bar", 1000, "Gram", 250],
  ["S. DRIPP VANILLA", "Bahan Bar", 1000, "Gram", 250],
  ["S. TRIESTE BRULE", "Bahan Bar", 1000, "Gram", 250],
  ["S. DELIFRU GRAPE", "Bahan Bar", 1000, "Gram", 250],
  ["S. DELIFRU GREEN APPLE", "Bahan Bar", 1000, "Gram", 250],
  ["SYRUP BLACKCURRANT", "Bahan Bar", 0, "Gram", null],
].map((item, index) => ({
  id: index + 1,
  name: item[0],
  category: item[1],
  qty: item[2],
  unit: item[3],
  minimum: item[4],
  avgCost:
    [
      24, 42, 145, 215, 34, 22, 2, 900, 18, 48, 15, 105, 480, 62, 78, 76, 80,
      1450, 1100, 120, 58, 28, 64, 72, 35, 85, 82, 88, 80, 80, 0,
    ][index] || 0,
  provisional: index >= 24,
}));

const paidAddons = [
  {
    id: "coffee",
    name: "Tambahan Coffee",
    price: 5000,
    stockIngredient: "BEANS ARABICA",
    stockQty: 16,
    stockUnit: "Gram",
  },
  {
    id: "foam",
    name: "Tambahan Foam",
    price: 4000,
    stockIngredient: "FOAM",
    stockQty: 2,
    stockUnit: "Sdm",
  },
];

// Resep mengikuti "Gramasi minuman .pdf". Espresso dipetakan ke beans Arabica
// dengan rasio 16 gram beans untuk 30 gram espresso; foam tetap dicatat sebagai
// bahan prep sampai formula raw material-nya disepakati.
const recipesByMenuId = {
  1: [
    ["UHT", 100],
    ["SKM", 20],
    ["S. DELIFRU WATERMELON", 20],
    ["REGAL", 10],
    ["CUP TJAP KEMIRI", 1],
  ],
  2: [
    ["UHT", 100],
    ["CREAMER", 10],
    ["S. TRIESTE BRULE", 15],
    ["REGAL", 10],
    ["CUP TJAP KEMIRI", 1],
  ],
  3: [
    ["UHT", 100],
    ["CREAMER", 20],
    ["S. DRIPP BUTTERSCOT", 20],
    ["BEANS ARABICA", 10.667],
    ["FOAM", 2],
    ["CUP POLOS", 1],
  ],
  4: [
    ["UHT", 100],
    ["CREAMER", 20],
    ["S DELIFRU COCONUT", 20],
    ["BEANS ARABICA", 10.667],
    ["FOAM", 2],
    ["CUP POLOS", 1],
  ],
  5: [
    ["UHT", 100],
    ["POWDER COKLAT BENDROP", 20],
    ["MINERAL", 20],
    ["CUP POLOS", 1],
  ],
  6: [
    ["UHT", 100],
    ["BEANS ARABICA", 16],
    ["SKM", 25],
    ["CREAMER", 20],
    ["CUP TJAP KEMIRI", 1],
  ],
  7: [
    ["TEH", 100],
    ["S. DOUBLE FRESH MANGGO", 20],
    ["GULA", 20],
    ["CUP POLOS", 1],
  ],
  8: [
    ["TEH", 100],
    ["SYRUP BLACKCURRANT", 20],
    ["GULA", 20],
    ["CUP POLOS", 1],
  ],
  9: [
    ["TEH", 100],
    ["GULA", 40],
    ["CUP POLOS", 1],
  ],
  10: [
    ["UHT", 100],
    ["S. DRIPP VANILLA", 20],
    ["GULA", 20],
    ["POWDER MATCHA", 3],
    ["MINERAL", 25],
    ["CUP POLOS", 1],
  ],
  11: [
    ["BEANS ARABICA", 16],
    ["MINERAL", 70],
    ["CUP POLOS", 1],
  ],
  12: [
    ["S. DELIFRU GREEN APPLE", 20],
    ["GULA", 10],
    ["BEANS ARABICA", 10.667],
    ["MINERAL", 100],
    ["FOAM", 2],
    ["CUP POLOS", 1],
  ],
  13: [
    ["SELAI STRAWBERRY", 15],
    ["S. DOUBLE FRESH MANGGO", 10],
    ["S. DELIFRU GREEN APPLE", 10],
    ["ZODA", 100],
    ["FOAM", 2],
    ["CUP POLOS", 1],
  ],
};

const today = businessDate();

const seedAccountingAccounts = [
  { code: "1101", name: "Kas", group: "asset-current" },
  { code: "1102", name: "Bank BNI", group: "asset-current" },
  { code: "1103", name: "Persediaan Bahan Baku", group: "asset-current" },
  { code: "1201", name: "Perolehan Aset Tetap", group: "asset-fixed" },
  { code: "1202", name: "Akumulasi Penyusutan", group: "contra-asset" },
  { code: "2101", name: "Utang Pajak / PBJT", group: "liability" },
  { code: "2199", name: "Kewajiban Lain", group: "liability" },
  { code: "3101", name: "Modal Awal", group: "equity" },
  { code: "3199", name: "Selisih Saldo Awal", group: "equity" },
  { code: "4101", name: "Penjualan", group: "revenue" },
  { code: "4201", name: "Pendapatan Lain", group: "other-income" },
  { code: "4202", name: "Pendapatan Bunga Bank", group: "other-income" },
  { code: "5101", name: "Harga Pokok Penjualan", group: "cogs" },
  { code: "6101", name: "Upah Tenaga Kerja", group: "selling-expense" },
  { code: "6102", name: "Pengemasan", group: "selling-expense" },
  { code: "6103", name: "Pengiriman", group: "selling-expense" },
  { code: "6104", name: "BBM Operasional", group: "selling-expense" },
  { code: "6105", name: "Pemasaran", group: "selling-expense" },
  { code: "6106", name: "BBM dan Parkir", group: "selling-expense" },
  { code: "6201", name: "Gaji Pegawai Tetap", group: "admin-expense" },
  { code: "6202", name: "Biaya Lainnya", group: "admin-expense" },
  { code: "6203", name: "Dekorasi", group: "admin-expense" },
  { code: "6204", name: "Listrik", group: "admin-expense" },
  { code: "6205", name: "PDAM", group: "admin-expense" },
  { code: "6206", name: "Telepon dan Internet", group: "admin-expense" },
  { code: "6207", name: "Alat Tulis Kantor", group: "admin-expense" },
  { code: "6208", name: "Fotokopi, Cetak, dan Materai", group: "admin-expense" },
  { code: "6209", name: "Perlengkapan", group: "admin-expense" },
  { code: "6210", name: "Makan dan Minum", group: "admin-expense" },
  { code: "6211", name: "Pajak Lain", group: "admin-expense" },
  { code: "6212", name: "Pemeliharaan Inventaris", group: "admin-expense" },
  { code: "6213", name: "Penyusutan Bangunan", group: "admin-expense" },
  { code: "6214", name: "Penyusutan Inventaris", group: "admin-expense" },
  { code: "6301", name: "Administrasi Bank", group: "other-expense" },
  { code: "6302", name: "Pembulatan", group: "other-expense" },
];

const ACCOUNT_REPORT_CODES = {
  1101: "111.01.01",
  1102: "112.01.01",
  1103: "114.01.01",
  1201: "131.02.01",
  1202: "132.02.01",
  2101: "211.02.01",
  2199: "211.01.01",
  3101: "300.01.01",
  3199: "302.01.99",
  4101: "411.01.01",
  4201: "821.01.04",
  4202: "821.01.01",
  5101: "500.01.01",
  6101: "511.01.01",
  6102: "511.02.01",
  6103: "511.03.01",
  6104: "611.01.01",
  6105: "611.02.01",
  6106: "611.03.01",
  6201: "711.01.01",
  6202: "711.01.02",
  6203: "711.02.01",
  6204: "711.03.01",
  6205: "711.03.02",
  6206: "711.03.03",
  6207: "711.05.01",
  6208: "711.05.02",
  6209: "711.05.03",
  6210: "711.06.01",
  6211: "711.06.03",
  6212: "711.07.02",
  6213: "711.08.01",
  6214: "711.08.02",
  6301: "811.01.02",
  6302: "811.01.01",
};

function firstDayOfMonth(date = today) {
  return `${String(date).slice(0, 7)}-01`;
}

const initialState = {
  portal: location.pathname.startsWith("/admin")
    ? "admin"
    : location.pathname.startsWith("/pos")
      ? "pos"
      : "login",
  view: location.pathname.startsWith("/admin") ? "dashboard" : "pos",
  category: "Semua",
  search: "",
  billSearch: "",
  reportPeriod: "today",
  financeTab: "summary",
  financePeriodStart: firstDayOfMonth(),
  financePeriodEnd: today,
  teamTab: "structure",
  navExpanded: false,
  orderType: "Dine-in",
  customer: "",
  table: "",
  operatorId: location.pathname.startsWith("/admin") ? 1 : 3,
  cart: [],
  orderDiscount: null,
  activeBillId: null,
  menuItems: structuredClone(seedMenuItems).map((item) => ({
    active: true,
    ...item,
  })),
  nextOrderNumber: 1000005,
  bills: [
    {
      id: 1000004,
      customer: "Nadia",
      table: "4",
      operatorId: 3,
      type: "Dine-in",
      businessDate: today,
      shiftId: "shift-demo",
      createdAt: "11:42",
      createdAtIso: `${today}T11:42:00`,
      updatedAt: localTimestamp(),
      total: 67000,
      items: [
        { ...seedMenuItems[5], qty: 1 },
        { ...seedMenuItems[8], qty: 2 },
      ],
    },
  ],
  transactions: [
    {
      id: 1000001,
      businessDate: today,
      shiftId: "shift-demo",
      status: "Paid",
      total: 82000,
      method: "QRIS BNI",
      operator: "Odong",
      operatorId: 3,
      time: "09:22",
      reconciliationStatus: "Sesuai",
    },
    {
      id: 1000002,
      businessDate: today,
      shiftId: "shift-demo",
      status: "Paid",
      total: 46000,
      method: "Debit",
      operator: "Ayu",
      operatorId: 4,
      time: "10:15",
      reconciliationStatus: "Belum",
    },
    {
      id: 1000003,
      businessDate: today,
      shiftId: "shift-demo",
      status: "Paid",
      total: 71000,
      method: "QRIS BNI",
      operator: "Hawari",
      operatorId: 5,
      time: "11:06",
      reconciliationStatus: "Belum",
    },
  ],
  tables: Array.from({ length: 12 }, (_, index) => ({
    id: String(index + 1),
    status: index === 3 ? "occupied" : index === 6 ? "reserved" : "empty",
    customer: index === 3 ? "Nadia" : index === 6 ? "Dimas" : "",
    since: index === 3 ? "11:42" : index === 6 ? "14:00" : "",
  })),
  attendanceDate: today,
  attendance: {
    3: { in: "07:48", out: null },
    4: { in: "07:55", out: null },
    5: { in: "08:02", out: null },
  },
  attendanceHistory: [],
  shift: {
    id: "shift-demo",
    businessDate: today,
    isOpen: true,
    openedBy: "Odong",
    openedAt: "07:45",
  },
  ingredients: seedIngredients,
  stockCounts: [],
  purchases: [],
  stockWastages: [],
  expenses: [
    {
      id: 1,
      date: today,
      category: "Operasional",
      accountCode: "6204",
      vendor: "PLN",
      invoice: "PLN-DEMO",
      amount: 15000,
      method: "Transfer",
      note: "Data contoh biaya listrik",
      by: "Sofi",
      createdAt: "08:30",
      createdAtIso: localTimestamp(),
    },
  ],
  financeClosings: [],
  financeAdjustments: [],
  manualJournals: [],
  fixedAssets: [],
  accountingAccounts: structuredClone(seedAccountingAccounts),
  accountingSettings: {
    companyName: "PT TJAP KEMIRI MAKMUR",
    bankName: "BNI",
    bankAccountNumber: "",
    currency: "IDR",
  },
  openingBalances: {
    asOf: today,
    cash: 0,
    bank: 0,
    inventory: 0,
    fixedAssetCost: 0,
    accumulatedDepreciation: 0,
    liabilities: 0,
    initialCapital: 0,
  },
  voidRefunds: [],
  stockMovements: [],
  shiftHistory: [],
  workTasks: [
    {
      id: 1,
      title: "Cek stok bahan pembukaan",
      assigneeId: 3,
      priority: "Tinggi",
      status: "Berjalan",
      due: "08:15",
      note: "Pastikan bahan bar utama aman.",
    },
    {
      id: 2,
      title: "Rekonsiliasi QRIS BNI",
      assigneeId: 2,
      priority: "Normal",
      status: "Belum",
      due: "17:00",
      note: "Cocokkan mutasi dengan transaksi POS.",
    },
    {
      id: 3,
      title: "Sanitasi area bar",
      assigneeId: 5,
      priority: "Normal",
      status: "Selesai",
      due: "10:30",
      note: "Checklist operasional harian.",
    },
  ],
  documents: [],
  importHistory: [],
  auditLog: [
    {
      id: 1,
      action: "Shift operasional dibuka",
      detail: "Outlet mulai melayani",
      by: "Odong",
      time: "07:45",
    },
  ],
  settings: {
    dailySalesTarget: 500000,
    staleBillMinutes: 90,
    requirePaymentReference: false,
  },
  tax: {
    label: "Pajak restoran / PBJT",
    rate: 10,
    included: true,
    provisional: true,
  },
  lastSync: "Tersimpan lokal",
  dataRevision: 0,
  schemaVersion: 9,
};

const STORAGE_KEY = "tjap-kemiri-pos-v9";
const LEGACY_STORAGE_KEY = "tjap-kemiri-pos-v8";
const OLDER_STORAGE_KEY = "tjap-kemiri-pos-v7";
const OLDEST_STORAGE_KEY = "tjap-kemiri-pos-v6";
function readStoredState() {
  try {
    return JSON.parse(
        localStorage.getItem(STORAGE_KEY) ||
        localStorage.getItem(LEGACY_STORAGE_KEY) ||
        localStorage.getItem(OLDER_STORAGE_KEY) ||
        localStorage.getItem(OLDEST_STORAGE_KEY) ||
        "null",
    );
  } catch {
    return null;
  }
}

function migrateState(stored) {
  if (!stored) return structuredClone(initialState);
  const migrated = {
    ...structuredClone(initialState),
    ...stored,
    schemaVersion: 9,
  };
  migrated.settings = { ...initialState.settings, ...(stored.settings || {}) };
  migrated.accountingSettings = {
    ...initialState.accountingSettings,
    ...(stored.accountingSettings || {}),
  };
  migrated.openingBalances = {
    ...initialState.openingBalances,
    ...(stored.openingBalances || {}),
  };
  const accountMap = new Map(
    structuredClone(seedAccountingAccounts).map((account) => [
      account.code,
      { active: true, ...account },
    ]),
  );
  (stored.accountingAccounts || []).forEach((account) =>
    accountMap.set(account.code, {
      ...(accountMap.get(account.code) || {}),
      active: true,
      ...account,
    }),
  );
  migrated.accountingAccounts = [...accountMap.values()];
  migrated.menuItems = structuredClone(seedMenuItems).map((seed) => ({
    active: true,
    ...seed,
    ...(stored.menuItems || []).find((item) => item.id === seed.id),
  }));
  migrated.ingredients = structuredClone(seedIngredients).map((seed) => ({
    ...seed,
    ...(stored.ingredients || []).find((item) => item.name === seed.name),
  }));
  migrated.transactions = (stored.transactions || []).map((tx) => ({
    businessDate: today,
    shiftId: "shift-demo",
    status: "Paid",
    hppSource:
      Number.isFinite(Number(tx.hpp)) && tx.hpp != null
        ? "recipe-snapshot"
        : "estimate-40",
    ...tx,
    operatorId:
      Number(tx.operatorId) ||
      employees.find((employee) => employee.name === tx.operator)?.id ||
      null,
  }));
  const billMap = new Map();
  (stored.bills || [])
    .map((bill) => ({
      businessDate: today,
      shiftId: migrated.shift?.id || "shift-demo",
      ...bill,
      createdAtIso:
        bill.createdAtIso ||
        `${bill.businessDate || today}T${bill.createdAt || "00:00"}:00`,
    }))
    .forEach((bill) => billMap.set(bill.id, bill));
  migrated.bills = [...billMap.values()];
  migrated.expenses = (stored.expenses || []).map((expense) => ({
    date: today,
    createdAtIso: `${expense.date || today}T${expense.createdAt || "00:00"}:00`,
    accountCode: expense.accountCode || defaultExpenseAccountCode(expense),
    ...expense,
  }));
  migrated.financeAdjustments ||= [];
  migrated.manualJournals ||= [];
  migrated.fixedAssets ||= [];
  migrated.stockWastages ||= [];
  migrated.voidRefunds ||= [];
  migrated.stockMovements ||= [];
  migrated.attendanceHistory ||= [];
  migrated.activeBillId = null;
  migrated.lastSync = "Tersimpan lokal";
  if (migrated.attendanceDate !== today) {
    migrated.attendanceHistory.push({
      date: migrated.attendanceDate || today,
      records: migrated.attendance || {},
    });
    migrated.attendance = {};
    migrated.attendanceDate = today;
  }
  return migrated;
}

const stored = readStoredState();
let state = migrateState(stored);

function readJsonStorage(storage, key) {
  try {
    return JSON.parse(storage.getItem(key) || "null");
  } catch {
    return null;
  }
}

function personalSessionEmployee() {
  const session = readJsonStorage(sessionStorage, PERSONAL_AUTH_SESSION_KEY);
  return employees.find(
    (employee) =>
      employee.id === Number(session?.employeeId) &&
      session?.type === "employee",
  );
}

function terminalSessionAccount() {
  const session = readJsonStorage(localStorage, TERMINAL_AUTH_STORAGE_KEY);
  return terminalAccounts.find(
    (account) =>
      account.id === session?.terminalId &&
      account.active &&
      session?.type === "terminal",
  );
}

let authenticatedEmployee = personalSessionEmployee();
let authenticatedTerminal = terminalSessionAccount();
const sessionPosOperatorId = Number(
  sessionStorage.getItem(POS_OPERATOR_SESSION_KEY),
);
const sessionPosEmployee = employees.find(
  (employee) => employee.id === sessionPosOperatorId && employee.canServe,
);
Object.assign(state, {
  portal: initialState.portal,
  view: initialState.view,
  operatorId:
    state.portal === "admin" && authenticatedEmployee
      ? authenticatedEmployee.id
      : sessionPosEmployee?.id || initialState.operatorId,
});
let modalState = null;
let modalDismissLocked = false;
let inputPersistTimer = null;
let confirmedPosOperatorId = sessionPosEmployee?.id || 0;
let paymentCommitLocked = false;
let stateMirrorTimer = null;
let attendanceCameraStream = null;
let attendanceCaptureBlob = null;
let attendancePreviewUrl = null;
let loginMode = new URLSearchParams(location.search).get("mode") || "personal";

function posOperatorIsConfirmed() {
  return (
    operator().canServe &&
    isEmployeePresent(operator().id) &&
    confirmedPosOperatorId === Number(operator().id)
  );
}

function confirmPosOperator(employeeId) {
  confirmedPosOperatorId = Number(employeeId);
  sessionStorage.setItem(
    POS_OPERATOR_SESSION_KEY,
    String(confirmedPosOperatorId),
  );
}

function resetPosOperatorConfirmation() {
  confirmedPosOperatorId = 0;
  sessionStorage.removeItem(POS_OPERATOR_SESSION_KEY);
}

function requireConfirmedPosOperator() {
  authenticatedTerminal = terminalSessionAccount();
  if (state.portal !== "pos" || !authenticatedTerminal) {
    resetPosOperatorConfirmation();
    navigateToLogin("terminal", true);
    showToast("Masuk dengan akun tablet kasir untuk melanjutkan", "error");
    return false;
  }
  if (posOperatorIsConfirmed()) return true;
  const selectedOperator = operator();
  if (
    selectedOperator.canServe &&
    confirmedPosOperatorId === Number(selectedOperator.id) &&
    !isEmployeePresent(selectedOperator.id)
  ) {
    resetPosOperatorConfirmation();
    chooseOperatorModal(true);
    showToast(
      `${selectedOperator.name} belum aktif dalam absensi`,
      "error",
    );
    return false;
  }
  chooseOperatorModal(true);
  showToast("Pilih petugas kasir sebelum melayani", "error");
  return false;
}

function schedulePersist() {
  clearTimeout(inputPersistTimer);
  inputPersistTimer = setTimeout(persist, 250);
}

const iconPaths = {
  pos: '<rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 7h8M8 11h2m3 0h3M8 15h2m3 0h3"/>',
  bills: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"/><path d="M9 8h6M9 12h6"/>',
  tables:
    '<rect x="3" y="6" width="18" height="8" rx="2"/><path d="M6 14v5m12-5v5M8 6V3m8 3V3"/>',
  attendance:
    '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0M19 4v4m-2-2h4"/>',
  shift: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  dashboard:
    '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  inventory:
    '<path d="m3 7 9-4 9 4-9 4-9-4Z"/><path d="m3 7 9 4 9-4v10l-9 4-9-4V7Z"/><path d="M12 11v10"/>',
  report: '<path d="M4 20V10m6 10V4m6 16v-7m4 7H2"/>',
  finance:
    '<rect x="3" y="5" width="18" height="15" rx="3"/><path d="M3 10h18M7 15h4m6-2v4m-2-2h4"/>',
  menuItem:
    '<path d="M5 5h11v8a5.5 5.5 0 0 1-11 0V5Z"/><path d="M16 7h1.5a2.5 2.5 0 0 1 0 5H16M4 21h14"/>',
  team: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 20a6 6 0 0 1 12 0m0-5a5 5 0 0 1 6 5"/>',
  tasks:
    '<path d="M9 5h11M9 12h11M9 19h11M4 5l1 1 2-2M4 12l1 1 2-2M4 19l1 1 2-2"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 21h16"/>',
  upload: '<path d="M12 21V9m-5 5 5-5 5 5M4 3h16"/>',
  menu: '<path d="M4 5h16M4 12h16M4 19h16"/><circle cx="7" cy="5" r="1"/><circle cx="7" cy="12" r="1"/><circle cx="7" cy="19" r="1"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  cart: '<circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/><path d="M3 4h2l2 11h11l2-7H7"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3m3 0-1 14H7L6 7m4 4v6m4-6v6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  pay: '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h3"/>',
  save: '<path d="M5 3h12l2 2v16H5V3Z"/><path d="M8 3v6h8V3M8 21v-8h8v8"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/>',
  camera:
    '<path d="M4 7h3l2-3h6l2 3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/><circle cx="12" cy="13" r="4"/>',
  tag: '<path d="M20 12 12 20 4 12V4h8l8 8Z"/><circle cx="9" cy="9" r="1"/>',
  receipt:
    '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
  warning: '<path d="M12 3 2.8 20h18.4L12 3Z"/><path d="M12 9v5m0 3h.01"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  logout: '<path d="M10 17l5-5-5-5m5 5H3m12-9h5v18h-5"/>',
  backspace: '<path d="m3 12 6-7h12v14H9l-6-7Z"/><path d="m13 9 5 6m0-6-5 6"/>',
};

function icon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || iconPaths.menu}</svg>`;
}

function persistentStateSnapshot() {
  const data = { ...state };
  [
    "portal",
    "view",
    "category",
    "search",
    "billSearch",
    "reportPeriod",
    "financeTab",
    "financePeriodStart",
    "financePeriodEnd",
    "teamTab",
    "navExpanded",
  ].forEach((key) => delete data[key]);
  return data;
}

function persist() {
  state.dataRevision = Date.now();
  const data = persistentStateSnapshot();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  queueStateMirror(data);
}

function openStateMirrorDatabase() {
  if (!("indexedDB" in globalThis))
    return Promise.reject(new Error("Penyimpanan cadangan tidak tersedia"));
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("tjap-kemiri-state", 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains("snapshots"))
        request.result.createObjectStore("snapshots", { keyPath: "key" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function writeStateMirror(snapshot) {
  const db = await openStateMirrorDatabase();
  await new Promise((resolve, reject) => {
    const tx = db.transaction("snapshots", "readwrite");
    tx.objectStore("snapshots").put({
      key: "latest",
      savedAt: localTimestamp(),
      schemaVersion: snapshot.schemaVersion,
      data: snapshot,
    });
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}

function queueStateMirror(snapshot) {
  clearTimeout(stateMirrorTimer);
  stateMirrorTimer = setTimeout(() => {
    writeStateMirror(structuredClone(snapshot)).catch(() => {});
  }, 600);
}

async function readStateMirror() {
  const db = await openStateMirrorDatabase();
  const record = await new Promise((resolve, reject) => {
    const request = db
      .transaction("snapshots", "readonly")
      .objectStore("snapshots")
      .get("latest");
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
  db.close();
  return record;
}

function operator() {
  return (
    employees.find((employee) => employee.id === Number(state.operatorId)) ||
    employees[0]
  );
}
function attendanceRecord(employeeId) {
  return state.attendance?.[Number(employeeId)] || null;
}
function isEmployeePresent(employeeId) {
  const record = attendanceRecord(employeeId);
  return Boolean(record?.in && !record?.out);
}
function attendanceAvailabilityLabel(employeeId) {
  const record = attendanceRecord(employeeId);
  if (record?.in && !record?.out) return `Hadir sejak ${record.in}`;
  if (record?.out) return `Sudah absen pulang ${record.out}`;
  return "Belum absen masuk";
}
function roleLabel(role) {
  return (
    { Owner: "Pemilik", Finance: "Keuangan", "Head Barista": "Kepala Barista" }[
      role
    ] || role
  );
}
function orderTypeLabel(type) {
  return (
    {
      "Dine-in": "Makan di Tempat",
      "Take away": "Bawa Pulang",
      Delivery: "Pesan Antar",
    }[type] || type
  );
}
function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
function itemTotal(item) {
  const addonTotal = (item.addons || []).reduce(
    (sum, addon) => sum + addon.price,
    0,
  );
  const base = (item.price + addonTotal) * item.qty;
  if (!item.discount) return base;
  return Math.max(
    0,
    item.discount.type === "percent"
      ? base * (1 - item.discount.value / 100)
      : base - item.discount.value,
  );
}
function totals() {
  const raw = state.cart.reduce(
    (sum, item) =>
      sum +
      (item.price +
        (item.addons || []).reduce(
          (addonSum, addon) => addonSum + addon.price,
          0,
        )) *
        item.qty,
    0,
  );
  const afterItem = state.cart.reduce((sum, item) => sum + itemTotal(item), 0);
  const itemDiscount = raw - afterItem;
  const orderDiscount = state.orderDiscount
    ? Math.min(
        afterItem,
        state.orderDiscount.type === "percent"
          ? (afterItem * state.orderDiscount.value) / 100
          : state.orderDiscount.value,
      )
    : 0;
  return {
    raw,
    itemDiscount,
    orderDiscount,
    total: Math.max(0, afterItem - orderDiscount),
  };
}

function isActiveTransaction(tx) {
  return !["Refunded", "Voided"].includes(tx.status);
}
function periodStart(period = state.reportPeriod) {
  const date = new Date(`${businessDate()}T12:00:00+07:00`);
  if (period === "7d") date.setDate(date.getDate() - 6);
  if (period === "30d") date.setDate(date.getDate() - 29);
  return businessDate(date);
}
function inPeriod(date, period = state.reportPeriod) {
  if (period === "all") return true;
  if (period === "today") return date === businessDate();
  return date >= periodStart(period) && date <= businessDate();
}
function periodLabel(period = state.reportPeriod) {
  return (
    { today: "Hari ini", "7d": "7 hari", "30d": "30 hari", all: "Semua" }[
      period
    ] || "Hari ini"
  );
}
function transactionsForPeriod(period = state.reportPeriod) {
  return state.transactions.filter((tx) =>
    inPeriod(tx.businessDate || businessDate(), period),
  );
}
function activeTransactionsForPeriod(period = state.reportPeriod) {
  return transactionsForPeriod(period).filter(isActiveTransaction);
}
function transactionOperatorId(transaction) {
  return (
    Number(transaction.operatorId) ||
    employees.find((employee) => employee.name === transaction.operator)?.id ||
    null
  );
}
function canViewAllSales(role = operator().role) {
  return ["Owner", "Finance", "Head Barista"].includes(role);
}
function visibleSalesTransactions(period = state.reportPeriod) {
  const transactions = activeTransactionsForPeriod(period);
  if (canViewAllSales()) return transactions;
  return transactions.filter(
    (transaction) => transactionOperatorId(transaction) === operator().id,
  );
}
function salesSummaryByEmployee(transactions = activeTransactionsForPeriod()) {
  return employees
    .filter((employee) => employee.canServe)
    .map((employee) => {
      const rows = transactions.filter(
        (transaction) => transactionOperatorId(transaction) === employee.id,
      );
      const sales = rows.reduce(
        (sum, transaction) => sum + Number(transaction.total || 0),
        0,
      );
      return {
        ...employee,
        transactionCount: rows.length,
        sales,
        average: rows.length ? sales / rows.length : 0,
      };
    })
    .sort(
      (a, b) => b.sales - a.sales || b.transactionCount - a.transactionCount,
    );
}
function transactionItemCount(transaction) {
  return (transaction.items || []).reduce(
    (sum, item) => sum + Number(item.qty || 0),
    0,
  );
}
function timeToMinutes(value = "00:00") {
  const [hours, minutes] = String(value).split(/[.:]/).map(Number);
  return Number.isFinite(hours) && Number.isFinite(minutes)
    ? hours * 60 + minutes
    : 0;
}
function billAgeMinutes(bill) {
  const raw =
    bill.createdAtIso ||
    `${bill.businessDate || businessDate()}T${bill.createdAt || "00:00"}:00`;
  const timestamp = Date.parse(
    /[zZ]|[+-]\d\d:\d\d$/.test(raw) ? raw : `${raw}+07:00`,
  );
  return Number.isFinite(timestamp)
    ? Math.max(0, Math.floor((Date.now() - timestamp) / 60000))
    : 0;
}
function formatAge(minutes) {
  if (minutes < 15) return "Baru";
  if (minutes < 60) return `${minutes} menit`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours}j ${rest}m` : `${hours} jam`;
}
function taskIsOverdue(task) {
  return (
    task.status !== "Selesai" &&
    timeToMinutes(task.due) < timeToMinutes(nowTime())
  );
}
function closingReadiness(date = businessDate()) {
  const pendingTransactions = state.transactions.filter(
    (tx) =>
      (tx.businessDate || businessDate()) === date &&
      isActiveTransaction(tx) &&
      tx.reconciliationStatus !== "Sesuai",
  );
  const openBills = state.bills.filter(
    (bill) => (bill.businessDate || date) === date,
  );
  const shiftOpen = Boolean(
    state.shift.isOpen && (state.shift.businessDate || date) === date,
  );
  const accountingDifference = balanceSheetReport(date).difference;
  const blockers = [
    pendingTransactions.length
      ? `${pendingTransactions.length} pembayaran belum sesuai`
      : "",
    openBills.length ? `${openBills.length} tagihan aktif belum selesai` : "",
    shiftOpen ? "shift outlet masih berjalan" : "",
    Math.abs(accountingDifference) >= 1
      ? `neraca berselisih ${rupiah(accountingDifference)}`
      : "",
  ].filter(Boolean);
  return {
    ready: blockers.length === 0,
    blockers,
    pendingTransactions,
    openBills,
    shiftOpen,
    accountingDifference,
  };
}
function topSellingItems(transactions = activeTransactionsForPeriod("today")) {
  const totalsByItem = new Map();
  transactions.forEach((tx) =>
    (tx.items || []).forEach((item) => {
      const current = totalsByItem.get(item.name) || {
        name: item.name,
        qty: 0,
        revenue: 0,
      };
      current.qty += Number(item.qty || 0);
      current.revenue += Number(item.price || 0) * Number(item.qty || 0);
      totalsByItem.set(item.name, current);
    }),
  );
  return [...totalsByItem.values()].sort(
    (a, b) => b.qty - a.qty || b.revenue - a.revenue,
  );
}
function attentionItemsForRole(role = operator().role) {
  const items = [];
  const lowStock = state.ingredients.filter(
    (item) => item.minimum != null && item.qty <= item.minimum,
  );
  const staleBills = state.bills.filter(
    (bill) =>
      billAgeMinutes(bill) >= Number(state.settings.staleBillMinutes || 90),
  );
  const pending = activeTransactionsForPeriod("today").filter(
    (tx) => tx.reconciliationStatus !== "Sesuai",
  );
  const todayTransactions = activeTransactionsForPeriod("today");
  const hppEstimated = estimatedHppCount(todayTransactions);
  const myOverdue = state.workTasks.filter(
    (task) => task.assigneeId === operator().id && taskIsOverdue(task),
  );
  if (["Owner", "Finance"].includes(role) && pending.length)
    items.push({
      tone: "warning",
      title: `${pending.length} pembayaran belum sesuai`,
      detail: rupiah(pending.reduce((sum, tx) => sum + tx.total, 0)),
      view: "finance",
    });
  if (["Owner", "Finance"].includes(role) && state.shift.isOpen)
    items.push({
      tone: "info",
      title: "Shift masih berjalan",
      detail: `Dibuka ${state.shift.openedAt} oleh ${state.shift.openedBy}`,
      view: "shift",
    });
  if (["Owner", "Finance"].includes(role) && hppEstimated)
    items.push({
      tone: "info",
      title: `${hppEstimated} transaksi memakai HPP estimasi`,
      detail: "Transaksi lama memakai dasar 40%",
      view: "reports",
    });
  if (["Owner", "Finance"].includes(role)) {
    const balanceDifference = balanceSheetReport(businessDate()).difference;
    if (Math.abs(balanceDifference) >= 1)
      items.push({
        tone: "danger",
        title: `Neraca berselisih ${rupiah(balanceDifference)}`,
        detail: "Periksa saldo awal dan jurnal",
        view: "finance",
      });
  }
  if (staleBills.length)
    items.push({
      tone: "warning",
      title: `${staleBills.length} tagihan melewati batas`,
      detail: `Batas ${state.settings.staleBillMinutes} menit`,
      view: state.portal === "pos" ? "bills" : "shift",
    });
  if (role !== "Finance" && canAccessView("inventory") && lowStock.length)
    items.push({
      tone: "danger",
      title: `${lowStock.length} bahan menipis`,
      detail: lowStock
        .slice(0, 2)
        .map((item) => item.name)
        .join(", "),
      view: "inventory",
    });
  if (!["Owner", "Finance"].includes(role) && myOverdue.length)
    items.push({
      tone: "danger",
      title: `${myOverdue.length} tugas melewati waktu`,
      detail: myOverdue[0].title,
      view: "tasks",
    });
  return items;
}
function ingredientByName(name) {
  return state.ingredients.find((item) => item.name === name);
}
function recipeComponents(itemId) {
  return recipesByMenuId[Number(itemId)] || [];
}
function recipeHpp(item) {
  return recipeComponents(item.id).reduce(
    (sum, [name, qty]) =>
      sum + Number(ingredientByName(name)?.avgCost || 0) * qty,
    0,
  );
}
function itemHpp(item) {
  const addonHpp = (item.addons || []).reduce(
    (sum, addon) =>
      sum +
      Number(ingredientByName(addon.stockIngredient)?.avgCost || 0) *
        addon.stockQty,
    0,
  );
  return (recipeHpp(item) + addonHpp) * Number(item.qty || 0);
}
function aggregateStockUsage(items) {
  const usage = new Map();
  for (const item of items || []) {
    for (const [name, qty] of recipeComponents(item.id))
      usage.set(name, (usage.get(name) || 0) + qty * item.qty);
    for (const addon of item.addons || [])
      usage.set(
        addon.stockIngredient,
        (usage.get(addon.stockIngredient) || 0) + addon.stockQty * item.qty,
      );
  }
  return usage;
}
function stockUsageDelta(oldItems, newItems) {
  const oldUsage = aggregateStockUsage(oldItems);
  const newUsage = aggregateStockUsage(newItems);
  const delta = new Map();
  new Set([...oldUsage.keys(), ...newUsage.keys()]).forEach((name) =>
    delta.set(name, (newUsage.get(name) || 0) - (oldUsage.get(name) || 0)),
  );
  return delta;
}
function validateStockDelta(delta) {
  const shortages = [];
  delta.forEach((qty, name) => {
    const ingredient = ingredientByName(name);
    if (qty > 0 && (!ingredient || ingredient.qty < qty))
      shortages.push(
        `${name} kurang ${Math.ceil(qty - Number(ingredient?.qty || 0))} ${ingredient?.unit || "unit"}`,
      );
  });
  return shortages;
}
function applyStockDelta(orderId, oldItems, newItems, reason) {
  const delta = stockUsageDelta(oldItems, newItems);
  const shortages = validateStockDelta(delta);
  if (shortages.length) return { ok: false, shortages };
  delta.forEach((qty, name) => {
    if (!qty) return;
    const ingredient = ingredientByName(name);
    if (!ingredient) return;
    const before = ingredient.qty;
    ingredient.qty = Math.max(0, ingredient.qty - qty);
    state.stockMovements.push({
      id: `${Date.now()}-${ingredient.id}`,
      orderId,
      ingredientId: ingredient.id,
      ingredient: name,
      delta: -qty,
      before,
      after: ingredient.qty,
      reason,
      businessDate: businessDate(),
      by: operator().name,
      createdAt: nowTime(),
    });
  });
  return { ok: true };
}
function sellableQty(item) {
  const components = recipeComponents(item.id);
  if (!components.length) return Number.POSITIVE_INFINITY;
  return Math.max(
    0,
    Math.floor(
      Math.min(
        ...components.map(
          ([name, qty]) => Number(ingredientByName(name)?.qty || 0) / qty,
        ),
      ),
    ),
  );
}

const navConfig = {
  pos: [
    ["pos", "Kasir", "pos"],
    ["bills", "Tagihan", "bills"],
    ["tables", "Meja", "tables"],
    ["shift", "Shift", "shift"],
  ],
  admin: [
    ["dashboard", "Ringkasan", "dashboard"],
    ["sales-history", "Penjualan", "receipt"],
    ["finance", "Keuangan", "finance"],
    ["reports", "Laporan", "report"],
    ["inventory", "Stok", "inventory"],
    ["menu-hpp", "Menu & HPP", "menuItem"],
    ["tasks", "Tugas", "tasks"],
    ["team", "Tim dan Akses", "team"],
    ["attendance", "Absensi", "attendance"],
  ],
};

const roleAccess = {
  Owner: [
    "dashboard",
    "sales-history",
    "finance",
    "reports",
    "inventory",
    "menu-hpp",
    "tasks",
    "team",
    "attendance",
  ],
  Finance: [
    "dashboard",
    "sales-history",
    "finance",
    "reports",
    "inventory",
    "menu-hpp",
    "tasks",
    "team",
    "attendance",
  ],
  "Head Barista": [
    "dashboard",
    "sales-history",
    "reports",
    "inventory",
    "menu-hpp",
    "tasks",
    "team",
    "attendance",
  ],
  "Barista Senior": [
    "dashboard",
    "sales-history",
    "inventory",
    "menu-hpp",
    "tasks",
    "attendance",
  ],
  "Barista Junior": [
    "dashboard",
    "sales-history",
    "inventory",
    "menu-hpp",
    "tasks",
    "attendance",
  ],
};

const roleActions = {
  Owner: [
    "finance",
    "finance-adjustment",
    "finance-close",
    "reconcile",
    "stock-in",
    "stock-count",
    "stock-waste",
    "stock-approve",
    "minimum",
    "tax",
    "menu-edit",
    "menu-availability",
    "control-settings",
    "task-create",
    "refund",
    "data-backup",
  ],
  Finance: [
    "finance",
    "finance-adjustment",
    "finance-close",
    "reconcile",
    "stock-in",
    "refund",
    "data-backup",
  ],
  "Head Barista": [
    "stock-in",
    "stock-count",
    "stock-waste",
    "stock-approve",
    "minimum",
    "menu-availability",
    "task-create",
  ],
  "Barista Senior": ["stock-count", "stock-waste", "menu-availability"],
  "Barista Junior": [],
};
function canPerform(action) {
  return (roleActions[operator().role] || []).includes(action);
}

function canAccessView(view) {
  if (state.portal === "pos")
    return navConfig.pos.some(([allowedView]) => allowedView === view);
  return (roleAccess[operator().role] || []).includes(view);
}

function defaultViewForPortal() {
  return state.portal === "pos"
    ? "pos"
    : (roleAccess[operator().role] || ["team"])[0];
}

function pageMeta() {
  const data = {
    pos: ["Pesanan Baru", "Kelola pesanan pelanggan"],
    bills: ["Tagihan Aktif", "Pesanan yang belum dibayar"],
    tables: ["Status Meja", "Lihat penggunaan meja"],
    attendance: ["Absensi", "Jam kerja hari ini"],
    shift: ["Shift Operasional", "Kelola layanan outlet"],
    dashboard: [
      `Ringkasan ${roleLabel(operator().role)}`,
      "Kondisi outlet hari ini",
    ],
    inventory: ["Stok", "Bahan, pembelian, dan batas minimum"],
    "menu-hpp": [
      ["Owner", "Finance"].includes(operator().role)
        ? "Menu & HPP"
        : "Ketersediaan Menu",
      ["Owner", "Finance"].includes(operator().role)
        ? "Harga, pajak, dan biaya resep"
        : "Aktifkan atau jeda menu",
    ],
    reports: ["Laporan & Data", "Impor dan ekspor data"],
    "sales-history": [
      canViewAllSales() ? "Penjualan Tim" : "Penjualan Saya",
      canViewAllSales()
        ? "Histori transaksi seluruh petugas"
        : "Histori transaksi akun Anda",
    ],
    finance: ["Keuangan", "Pembayaran, biaya, dan tutup buku"],
    tasks: ["Tugas Outlet", "Pekerjaan tim"],
    team: ["Tim dan Akses", "Jabatan dan kewenangan"],
  };
  return data[state.view] || data.pos;
}

function renderLoginPage() {
  state.portal = "login";
  document.querySelector("#modal-root").innerHTML = "";
  const isPersonal = loginMode !== "terminal";
  const signedEmployee = authenticatedEmployee;
  const signedTerminal = authenticatedTerminal;
  document.querySelector("#app").innerHTML = `
    <main class="login-page">
      <section class="login-brand-panel">
        <img src="/Logo/Logo%20tjap%20kemiri.png" alt="Tjap Kemiri" />
        <div><span class="eyebrow">SISTEM OPERASIONAL OUTLET</span><h1>Satu pintu masuk, dua jenis akun</h1><p>Akun karyawan digunakan untuk ruang kerja pribadi dan absensi. Akun perangkat hanya digunakan oleh tablet kasir.</p></div>
      </section>
      <section class="login-access-panel">
        <div class="login-access-head"><span class="eyebrow">MASUK</span><h2>Pilih jenis akses</h2><p>Jenis akun menentukan ruang kerja dan tidak dapat saling menggantikan.</p></div>
        <div class="login-mode-switch" role="tablist" aria-label="Jenis akun">
          <button class="${isPersonal ? "active" : ""}" data-action="login-mode" data-mode="personal" role="tab" aria-selected="${isPersonal}">${icon("user")}Akun Karyawan</button>
          <button class="${isPersonal ? "" : "active"}" data-action="login-mode" data-mode="terminal" role="tab" aria-selected="${!isPersonal}">${icon("pos")}Tablet Kasir</button>
        </div>
        ${
          isPersonal
            ? `<div class="login-panel-content"><div class="login-context"><strong>Akun pribadi</strong><span>Dashboard jabatan, absensi selfie, tugas, dan histori.</span></div>${signedEmployee ? `<div class="signed-session-card"><span class="avatar">${initials(signedEmployee.name)}</span><div><strong>${escapeHtml(signedEmployee.name)}</strong><small>${roleLabel(signedEmployee.role)} · sesi aktif</small></div><button class="button primary" data-action="resume-personal-session">Buka Akun</button><button class="button ghost" data-action="logout-account">Keluar Sesi</button></div>` : `<div class="login-account-grid">${employees.map((employee) => `<button class="login-account-card" data-action="personal-login" data-id="${employee.id}"><span class="employee-avatar">${initials(employee.name)}</span><span><strong>${escapeHtml(employee.name)}</strong><small>${roleLabel(employee.role)}</small></span>${icon("arrow")}</button>`).join("")}</div>`}</div>`
            : `<div class="login-panel-content"><div class="login-context"><strong>Akun perangkat</strong><span>Sesi persisten khusus tablet yang berada di meja kasir.</span></div>${signedTerminal ? `<div class="signed-session-card terminal-session-card"><span class="terminal-session-icon">${icon("pos")}</span><div><strong>${escapeHtml(signedTerminal.name)}</strong><small>${escapeHtml(signedTerminal.email)} · terhubung</small></div><button class="button primary" data-action="resume-terminal-session">Buka Kasir</button><button class="button ghost" data-action="terminal-logout">Ganti Perangkat</button></div>` : `<div class="terminal-login-form"><div class="field"><label>Email perangkat</label><input id="terminal-email" type="email" autocomplete="username" value="kasir1@tjapkemiri.com" /></div><div class="field"><label>PIN perangkat</label><input id="terminal-pin" type="password" inputmode="numeric" maxlength="4" autocomplete="current-password" placeholder="4 angka" /></div><button class="button primary" data-action="terminal-login">Masuk Tablet Kasir</button></div>`}</div>`
        }
      </section>
    </main>`;
}

function navigateToLogin(mode = "personal", replace = false) {
  loginMode = mode;
  const url = `/login?mode=${mode}`;
  history[replace ? "replaceState" : "pushState"]({}, "", url);
  renderLoginPage();
}

function routeApplication({ replace = false } = {}) {
  const path = location.pathname;
  authenticatedEmployee = personalSessionEmployee();
  authenticatedTerminal = terminalSessionAccount();
  if (path.startsWith("/admin")) {
    if (!authenticatedEmployee) {
      navigateToLogin("personal", true);
      return;
    }
    state.portal = "admin";
    state.operatorId = authenticatedEmployee.id;
    if (!canAccessView(state.view)) state.view = defaultViewForPortal();
    if (replace) history.replaceState({}, "", "/admin");
    renderShell();
    return;
  }
  if (path.startsWith("/pos")) {
    if (!authenticatedTerminal) {
      navigateToLogin("terminal", true);
      return;
    }
    state.portal = "pos";
    state.view = ["pos", "bills", "tables", "shift"].includes(state.view)
      ? state.view
      : "pos";
    const savedOperator = employees.find(
      (employee) =>
        employee.id ===
          Number(sessionStorage.getItem(POS_OPERATOR_SESSION_KEY)) &&
        employee.canServe,
    );
    state.operatorId = savedOperator?.id || 3;
    if (replace) history.replaceState({}, "", "/pos");
    renderShell();
    if (!posOperatorIsConfirmed()) chooseOperatorModal(true);
    return;
  }
  if (!path.startsWith("/login")) {
    navigateToLogin("personal", true);
    return;
  }
  loginMode = new URLSearchParams(location.search).get("mode") || "personal";
  renderLoginPage();
}

function renderShell() {
  if (state.portal === "admin" && !personalSessionEmployee()) {
    navigateToLogin("personal", true);
    return;
  }
  if (state.portal === "pos" && !terminalSessionAccount()) {
    navigateToLogin("terminal", true);
    return;
  }
  const [title, subtitle] = pageMeta();
  const availableNav = navConfig[state.portal]
    .filter(([view]) => canAccessView(view))
    .map(([view, label, iconName]) => {
      if (
        view === "menu-hpp" &&
        !["Owner", "Finance"].includes(operator().role)
      )
        return [view, "Ketersediaan", iconName];
      return [view, label, iconName];
    });
  const primaryViewsByRole = {
    Owner: ["dashboard", "sales-history", "finance", "inventory"],
    Finance: ["dashboard", "sales-history", "finance", "inventory"],
    "Head Barista": [
      "dashboard",
      "sales-history",
      "inventory",
      "attendance",
    ],
    "Barista Senior": [
      "dashboard",
      "sales-history",
      "tasks",
      "attendance",
    ],
    "Barista Junior": [
      "dashboard",
      "sales-history",
      "tasks",
      "attendance",
    ],
  };
  const primaryViews = new Set(
    primaryViewsByRole[operator().role] || ["dashboard"],
  );
  const primaryNav =
    state.portal === "admin"
      ? availableNav.filter(([view]) => primaryViews.has(view))
      : availableNav;
  const secondaryNav =
    state.portal === "admin"
      ? availableNav.filter(([view]) => !primaryViews.has(view))
      : [];
  const nav = primaryNav
    .map(
      ([view, label, iconName]) => `
    <button class="nav-button ${state.view === view ? "active" : ""}" data-action="nav" data-view="${view}" title="${label}" aria-label="${label}" ${state.view === view ? 'aria-current="page"' : ""}>
      ${icon(iconName)}<span>${label}</span>
    </button>`,
    )
    .join("");
  const secondaryActive = secondaryNav.some(([view]) => view === state.view);
  document.querySelector("#app").innerHTML = `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand-mark">K</div>
        ${nav}
        ${secondaryNav.length ? `<button class="nav-button ${secondaryActive ? "active" : ""} ${state.navExpanded ? "expanded" : ""}" data-action="toggle-more-nav" title="Menu lainnya" aria-label="Menu lainnya" aria-expanded="${state.navExpanded}" ${secondaryActive ? 'aria-current="page"' : ""}>${icon("menu")}<span>Lainnya</span></button>${state.navExpanded ? `<div class="nav-flyout" style="--primary-count:${primaryNav.length}"><div class="nav-flyout-head"><strong>Menu lainnya</strong><small>${roleLabel(operator().role)}</small></div><div class="nav-flyout-grid">${secondaryNav.map(([view, label, iconName]) => `<button class="nav-flyout-button ${state.view === view ? "active" : ""}" data-action="nav" data-view="${view}" aria-label="${label}" ${state.view === view ? 'aria-current="page"' : ""}>${icon(iconName)}<span>${label}</span></button>`).join("")}</div></div>` : ""}` : ""}
        <div class="nav-spacer"></div>
        ${state.portal === "admin" ? `<button class="nav-button" data-action="logout-account" title="Keluar dari akun" aria-label="Keluar dari akun">${icon("logout")}<span>Keluar</span></button>` : ""}
      </aside>
      <main class="workspace">
        <header class="topbar">
          <img class="topbar-logo" src="/Logo/Logo%20tjap%20kemiri.png" alt="Tjap Kemiri" />
          <div class="topbar-divider"></div>
          <div class="page-heading"><h1>${title}</h1><p>${subtitle}</p></div>
          <div class="topbar-actions">
            <button class="status-pill" data-action="${state.portal === "pos" ? "terminal-session" : "connection-status"}"><span class="status-dot ${navigator.onLine ? "" : "offline"}"></span>${state.portal === "pos" ? escapeHtml(authenticatedTerminal?.name || "Tablet tidak dikenal") : navigator.onLine ? "Terhubung" : "Terputus"} · ${state.lastSync}</button>
            <button class="person-pill" data-action="${state.portal === "admin" ? "account-session" : "choose-operator"}"><span class="avatar">${initials(operator().name)}</span>${operator().name}</button>
          </div>
        </header>
        <div class="content">${renderView()}</div>
      </main>
    </div>`;
}

function renderView() {
  if (state.view === "pos") return renderPOS();
  if (state.view === "bills") return renderBills();
  if (state.view === "tables") return renderTables();
  if (state.view === "attendance") return renderAttendance();
  if (state.view === "shift") return renderShift();
  if (state.view === "inventory") return renderInventory();
  if (state.view === "menu-hpp") return renderMenuHpp();
  if (state.view === "reports") return renderReports();
  if (state.view === "sales-history") return renderSalesHistory();
  if (state.view === "finance") return renderFinance();
  if (state.view === "tasks") return renderTasks();
  if (state.view === "team") return renderTeam();
  return renderDashboard();
}

function renderPOS() {
  const categories = [
    "Semua",
    ...new Set(
      state.menuItems
        .filter((item) => item.active !== false)
        .map((item) => item.category),
    ),
  ];
  const filtered = state.menuItems.filter(
    (item) =>
      item.active !== false &&
      (state.category === "Semua" || item.category === state.category) &&
      item.name.toLowerCase().includes(state.search.toLowerCase()),
  );
  const sum = totals();
  return `<div class="pos-layout">
    <section class="catalog-panel">
      <div class="operator-assurance"><div class="operator-assurance-main"><span class="operator-assurance-icon">${icon("user")}</span><span><small>PETUGAS AKTIF</small><strong>${escapeHtml(operator().name)}</strong><em>${roleLabel(operator().role)}</em></span></div><button class="button ghost compact" data-action="choose-operator">Ganti Petugas</button></div>
      <div class="catalog-tools">
        <div class="order-meta">
          <div class="segmented">
            ${["Dine-in", "Take away", "Delivery"].map((type) => `<button class="segment ${state.orderType === type ? "active" : ""}" data-action="order-type" data-type="${type}">${orderTypeLabel(type)}</button>`).join("")}
          </div>
          <div class="field"><input id="customer-input" value="${escapeHtml(state.customer)}" placeholder="Nama pelanggan ${state.orderType === "Dine-in" ? "" : "(opsional)"}" /></div>
          <div class="field"><input id="table-input" value="${escapeHtml(state.table)}" placeholder="${state.orderType === "Dine-in" ? "Nomor meja" : "Nomor antrean (opsional)"}" /></div>
        </div>
        <div class="search-row">
          <div class="search-box">${icon("search")}<input id="search-input" value="${escapeHtml(state.search)}" placeholder="Cari menu..." /></div>
          <button class="icon-button" data-action="new-order" title="Pesanan baru">${icon("plus")}</button>
        </div>
      </div>
      <div class="category-strip">${categories.map((category) => `<button class="chip ${state.category === category ? "active" : ""}" data-action="category" data-category="${category}">${category}</button>`).join("")}</div>
      <div class="menu-grid">${menuCardsHtml(filtered)}</div>
    </section>
    <aside class="cart-panel">
      <div class="cart-head"><h2>${state.activeBillId ? "Ubah Tagihan" : "Keranjang"}</h2><span class="order-number">PESANAN #${state.nextOrderNumber}</span></div>
      <div class="cart-list">${renderCartItems()}</div>
      <div class="cart-summary">
        <div class="summary-row"><span>Subtotal</span><strong>${rupiah(sum.raw)}</strong></div>
        ${sum.itemDiscount ? `<div class="summary-row discount"><span>Diskon item</span><strong>− ${rupiah(sum.itemDiscount)}</strong></div>` : ""}
        ${sum.orderDiscount ? `<div class="summary-row discount"><span>Diskon transaksi</span><strong>− ${rupiah(sum.orderDiscount)}</strong></div>` : ""}
        <div class="summary-row total"><span>Total</span><span>${rupiah(sum.total)}</span></div>
        <div class="summary-row" style="justify-content:flex-end"><span>${state.tax.included ? `${state.tax.label} ${state.tax.rate}% sudah termasuk` : "Pajak belum diatur"}</span></div>
      </div>
      <div class="cart-footer">
        <button class="button secondary" data-action="open-bill" ${state.cart.length ? "" : "disabled"}>${icon("save")}${state.activeBillId ? "Perbarui Tagihan" : "Simpan Tagihan"}</button>
        <button class="button primary" data-action="payment" ${state.cart.length ? "" : "disabled"}>${icon("pay")}Bayar Sekarang</button>
      </div>
    </aside>
  </div>`;
}

function menuCardsHtml(items) {
  return items
    .map((item) => {
      const available = sellableQty(item);
      return `<button class="menu-card" data-action="add-item" data-id="${item.id}" ${available <= 0 ? "disabled" : ""}><div class="menu-visual ${item.tone}">${item.visual}</div><div class="menu-copy">${available < 10 ? `<span class="stock-badge">${available > 0 ? `${available} tersisa` : "Habis"}</span>` : ""}<span class="menu-name">${item.name}</span><span class="menu-price">${rupiah(item.price)}</span></div></button>`;
    })
    .join("");
}

function renderCartItems() {
  if (!state.cart.length)
    return `<div class="empty-cart"><div>${icon("cart")}<p>Keranjang masih kosong</p><small>Sentuh kartu menu untuk menambahkan pesanan.</small></div></div>`;
  return (
    state.cart
      .map(
        (item) => `<article class="cart-item">
    <div>
      <div class="cart-item-name">${item.name}</div>
      <div class="cart-item-note">${item.note || "Normal"}${item.discount ? ` · Diskon ${item.discount.type === "percent" ? `${item.discount.value}%` : rupiah(item.discount.value)}` : ""}</div>
      ${(item.addons || []).length ? `<div class="cart-addon-list">${item.addons.map((addon) => `<button class="cart-addon-chip" data-action="remove-addon" data-id="${item.id}" data-addon-id="${addon.id}" aria-label="Hapus ${escapeHtml(addon.name)} dari ${escapeHtml(item.name)}"><span>${escapeHtml(addon.name)}</span>${icon("close")}</button>`).join("")}</div>` : ""}
      <div class="qty-control">
        <button class="qty-button" data-action="qty" data-id="${item.id}" data-delta="-1" aria-label="Kurangi ${escapeHtml(item.name)}">${icon("minus")}</button>
        <span class="qty-value">${item.qty}</span>
        <button class="qty-button" data-action="qty" data-id="${item.id}" data-delta="1" aria-label="Tambah ${escapeHtml(item.name)}">${icon("plus")}</button>
      </div>
    </div>
    <div>
      <div class="cart-item-price">${rupiah(itemTotal(item))}</div>
      <div class="mini-actions">
        <button class="mini-button ${(item.addons || []).length ? "active" : ""}" data-action="addon-item" data-id="${item.id}" title="Tambahan berbayar" aria-label="Tambahan berbayar untuk ${escapeHtml(item.name)}">${icon("plus")}</button>
        <button class="mini-button ${item.discount ? "active" : ""}" data-action="discount-item" data-id="${item.id}" title="Diskon item" aria-label="Diskon ${escapeHtml(item.name)}">%</button>
        <button class="mini-button" data-action="note-item" data-id="${item.id}" title="Catatan" aria-label="Catatan ${escapeHtml(item.name)}">${icon("receipt")}</button>
        <button class="mini-button" data-action="remove-item" data-id="${item.id}" title="Hapus" aria-label="Hapus ${escapeHtml(item.name)}">${icon("trash")}</button>
      </div>
    </div>
  </article>`,
      )
      .join("") +
    `<button class="button ghost" style="width:100%;margin:12px 0 4px;min-height:40px" data-action="discount-order">${icon("tag")} Diskon transaksi</button>`
  );
}

function renderBills() {
  const query = state.billSearch.trim().toLowerCase();
  const visibleBills = state.bills.filter(
    (bill) =>
      !query ||
      bill.customer.toLowerCase().includes(query) ||
      String(bill.table || "").includes(query) ||
      String(bill.id).includes(query),
  );
  return `<div class="page-stack">
    <div class="section-head"><div><h2>${state.bills.length} tagihan aktif</h2><p>Cari nama, meja, atau nomor pesanan.</p></div><button class="button primary" data-action="new-order">${icon("plus")}Pesanan Baru</button></div>
    <div class="search-box bill-search">${icon("search")}<input id="bill-search-input" value="${escapeHtml(state.billSearch)}" placeholder="Cari tagihan" /></div>
    <div class="grid-cards">${billCardsHtml(visibleBills, query ? "Tagihan tidak ditemukan." : "Belum ada tagihan aktif.")}</div>
  </div>`;
}

function billCardsHtml(bills, emptyMessage) {
  if (!bills.length)
    return `<div class="surface"><p class="muted">${emptyMessage}</p></div>`;
  return bills
    .map((bill) => {
      const age = billAgeMinutes(bill);
      const stale = age >= Number(state.settings.staleBillMinutes || 90);
      const employeeName =
        employees.find((employee) => employee.id === bill.operatorId)?.name ||
        "Karyawan";
      return `<article class="order-card ${stale ? "stale" : ""}">
        <div class="order-card-head"><div><h3>${escapeHtml(bill.customer)}</h3><p>PESANAN #${bill.id} · ${orderTypeLabel(bill.type)}${bill.table ? ` · Meja ${escapeHtml(bill.table)}` : ""}</p></div><span class="tag ${stale ? "cleaning" : "open"}">${stale ? "Periksa" : "Aktif"}</span></div>
        <p>${bill.items.reduce((sum, item) => sum + item.qty, 0)} item · ${formatAge(age)} · ${employeeName}</p>
        <div class="card-total">${rupiah(bill.total)}</div>
        <div class="card-actions"><button class="button ghost icon-only" data-action="print-bill" data-id="${bill.id}" title="Cetak tiket" aria-label="Cetak tiket pesanan ${bill.id}">${icon("receipt")}</button><button class="button ghost" data-action="reopen-bill" data-id="${bill.id}">Ubah</button><button class="button primary" data-action="pay-bill" data-id="${bill.id}">Bayar</button></div>
      </article>`;
    })
    .join("");
}

function statusLabel(status) {
  return { empty: "Kosong", occupied: "Terisi", reserved: "Dipesan" }[status];
}

function releaseTable(tableId, orderId = null) {
  if (!tableId) return;
  const stillUsed = state.bills.some(
    (bill) =>
      bill.id !== orderId && String(bill.table || "") === String(tableId),
  );
  if (stillUsed) return;
  const table = state.tables.find((item) => item.id === String(tableId));
  if (table)
    Object.assign(table, {
      status: "empty",
      customer: "",
      since: "",
      phone: "",
      guests: null,
    });
}

function occupyTable(tableId, customer) {
  if (!tableId) return;
  const table = state.tables.find((item) => item.id === String(tableId));
  if (table)
    Object.assign(table, {
      status: "occupied",
      customer,
      since: nowTime(),
      phone: "",
      guests: null,
    });
}

function renderTables() {
  return `<div class="page-stack">
    <div class="section-head"><div><h2>Meja Outlet</h2><p>Status mengikuti tagihan dan pembayaran.</p></div><button class="button secondary" data-action="reserve-table">${icon("plus")}Reservasi</button></div>
    <div class="table-grid">${state.tables
      .map(
        (table) => `<article class="table-card ${table.status}">
      <div class="table-card-head"><div><h3>Meja ${escapeHtml(table.id)}</h3><p>${escapeHtml(table.customer || "Belum ada pelanggan")}</p></div><span class="tag ${table.status}">${statusLabel(table.status)}</span></div>
      ${table.since ? `<div class="timer">${table.status === "reserved" ? "Pukul" : "Sejak"} ${table.since}</div>` : ""}
      <div class="card-actions" style="margin-top:16px">
        ${table.status === "empty" ? `<button class="button ghost" data-action="use-table" data-id="${table.id}">Buat Pesanan</button>` : ""}
        ${table.status === "reserved" ? `<button class="button ghost" data-action="use-table" data-id="${table.id}">Gunakan Meja</button>` : ""}
      </div>
    </article>`,
      )
      .join("")}</div>
  </div>`;
}

function renderAttendance() {
  return `<div class="page-stack">
    <div class="section-head"><div><h2>Absensi hari ini</h2><p>Absensi pribadi terpisah dari shift operasional outlet.</p></div><span class="tag present">${Object.values(state.attendance).filter((record) => record.in && !record.out).length} sedang hadir</span></div>
    <div class="employee-grid">${employees
      .map((employee) => {
        const record = state.attendance[employee.id];
        const present = record?.in && !record?.out;
        const isOwnAccount = employee.id === operator().id;
        const canViewEvidence =
          isOwnAccount ||
          ["Owner", "Finance", "Head Barista"].includes(operator().role);
        const latestSelfieId = record?.selfieOutId || record?.selfieInId;
        const latestSelfieLabel = record?.selfieOutId
          ? "Selfie Pulang"
          : "Selfie Masuk";
        return `<article class="employee-card"><div class="employee-avatar">${initials(employee.name)}</div><h3>${employee.name}</h3><p>${roleLabel(employee.role)}</p>
        <span class="tag ${present ? "present" : ""}">${present ? `Masuk ${record.in}` : record?.out ? `Pulang ${record.out}` : "Belum masuk"}</span>
        <div class="attendance-card-actions">${isOwnAccount ? `<button class="button ${present ? "secondary" : "primary"}" data-action="attendance" data-id="${employee.id}">${icon("camera")}${present ? "Absen Pulang" : "Absen Masuk"}</button>` : ""}${canViewEvidence && latestSelfieId ? `<button class="button ghost" data-action="view-attendance-selfie" data-photo-id="${latestSelfieId}" data-name="${escapeHtml(employee.name)}">${latestSelfieLabel}</button>` : ""}</div>
      </article>`;
      })
      .join("")}</div>
  </div>`;
}

function renderShift() {
  const shiftTransactions = state.transactions.filter(
    (tx) => tx.shiftId === state.shift.id && isActiveTransaction(tx),
  );
  const qrisSales = shiftTransactions
    .filter((tx) => tx.method.startsWith("QRIS"))
    .reduce((sum, tx) => sum + tx.total, 0);
  const debitSales = shiftTransactions
    .filter((tx) => tx.method === "Debit")
    .reduce((sum, tx) => sum + tx.total, 0);
  if (!state.shift.isOpen)
    return `<div class="page-stack"><div class="shift-hero"><div><h2>Shift operasional belum dibuka</h2><p>Pilih karyawan yang mulai bertugas. Tidak ada pencatatan modal awal.</p></div><button class="button primary" data-action="open-shift">Buka Shift</button></div></div>`;
  return `<div class="page-stack">
    <div class="shift-hero"><div><h2>Shift operasional berjalan</h2><p>Dibuka ${state.shift.openedAt} oleh ${state.shift.openedBy}</p></div><div class="shift-amount"><small>Penjualan digital</small><strong>${rupiah(qrisSales + debitSales)}</strong></div></div>
    <div class="stats-grid">
      ${statCard("QRIS BNI", rupiah(qrisSales), "receipt", `${shiftTransactions.filter((tx) => tx.method.startsWith("QRIS")).length} transaksi`)}
      ${statCard("Kartu debit", rupiah(debitSales), "pay", `${shiftTransactions.filter((tx) => tx.method === "Debit").length} transaksi`)}
      ${statCard("Total transaksi", String(shiftTransactions.length), "report", "Shift aktif")}
      ${statCard("Operator aktif", `${Object.values(state.attendance).filter((record) => record.in && !record.out).length} orang`, "user", "Berdasarkan absensi")}
    </div>
    <div class="two-column"><div class="surface"><h3>Aktivitas shift</h3><div class="activity-list">${
      shiftTransactions
        .slice()
        .reverse()
        .map((tx) =>
          activityRow(
            icon("receipt"),
            `PESANAN #${tx.id}`,
            `${tx.time} · ${tx.operator} · ${tx.method}`,
            rupiah(tx.total),
          ),
        )
        .join("") || `<p class="muted">Belum ada transaksi pada shift ini.</p>`
    }</div></div>
    <div class="surface"><h3>Kontrol shift outlet</h3><div class="shift-checks"><div class="check-row ${state.bills.length ? "pending" : "done"}">${icon(state.bills.length ? "warning" : "check")}<span><strong>Tagihan aktif</strong><small>${state.bills.length ? `${state.bills.length} belum selesai` : "Semua selesai"}</small></span></div><div class="check-row done">${icon("check")}<span><strong>Pembayaran digital</strong><small>${shiftTransactions.length} transaksi tercatat</small></span></div></div><button class="button danger shift-close-button" data-action="close-shift">${icon("logout")}${state.bills.length ? `Selesaikan ${state.bills.length} Tagihan` : "Tutup Shift"}</button><p class="muted" style="font-size:11px;margin-top:12px">Gunakan PIN Kepala Barista dan isi catatan serah terima.</p></div></div>
  </div>`;
}

function statCard(label, value, iconName, foot) {
  return `<article class="stat-card"><div class="stat-icon">${icon(iconName)}</div><div class="stat-label">${label}</div><div class="stat-value">${value}</div><div class="stat-foot">${foot}</div></article>`;
}
function activityRow(iconHtml, main, sub, value) {
  return `<div class="activity-row"><div class="activity-icon">${iconHtml}</div><div><div class="activity-main">${main}</div><div class="activity-sub">${sub}</div></div><div class="activity-value">${value}</div></div>`;
}

function attentionPanel(items) {
  return `<section class="surface"><div class="panel-title"><div><h3>Perlu Tindakan</h3><p>Masalah yang perlu diselesaikan.</p></div><span class="attention-count">${items.length}</span></div><div class="attention-list">${items.length ? items.map((item) => `<button class="attention-item ${item.tone}" data-action="nav" data-view="${item.view}"><span class="attention-dot"></span><span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.detail)}</small></span>${icon("arrow")}</button>`).join("") : `<div class="all-clear">${icon("check")}<span><strong>Semua terkendali</strong><small>Tidak ada tindakan mendesak.</small></span></div>`}</div></section>`;
}

function quickActions(items) {
  return `<div class="quick-actions">${items.map((item) => `<button class="quick-action" data-action="${item.action || "nav"}" ${item.view ? `data-view="${item.view}"` : ""}>${icon(item.icon)}<span><strong>${item.label}</strong><small>${item.detail}</small></span></button>`).join("")}</div>`;
}

function salesPerformancePanel(transactions, limit = 5) {
  const summaries = salesSummaryByEmployee(transactions).slice(0, limit);
  const highest = Math.max(1, ...summaries.map((summary) => summary.sales));
  const panelAction =
    state.view === "sales-history"
      ? `<span class="tag empty">${periodLabel()}</span>`
      : `<button class="button ghost compact" data-action="nav" data-view="sales-history">Lihat Histori</button>`;
  return `<section class="surface"><div class="panel-title"><div><h3>Kinerja Penjualan Tim</h3><p>Nilai transaksi berdasarkan petugas.</p></div>${panelAction}</div><div class="performance-list">${summaries
    .map(
      (summary) =>
        `<div class="performance-row"><span class="avatar small">${initials(summary.name)}</span><div class="performance-main"><div><strong>${summary.name}</strong><small>${summary.transactionCount} transaksi</small></div><div class="performance-track"><span style="width:${(summary.sales / highest) * 100}%"></span></div></div><strong>${rupiah(summary.sales)}</strong></div>`,
    )
    .join("")}</div></section>`;
}

function renderOwnerDashboard() {
  const todayTransactions = activeTransactionsForPeriod("today");
  const sales = todayTransactions.reduce((sum, tx) => sum + tx.total, 0);
  const discounts = todayTransactions.reduce(
    (sum, tx) => sum + Number(tx.discountTotal || 0),
    0,
  );
  const lowStock = state.ingredients.filter(
    (item) => item.minimum != null && item.qty <= item.minimum,
  );
  const metrics = financeMetrics();
  const target = Math.max(0, Number(state.settings.dailySalesTarget || 0));
  const targetPercent = target ? Math.min(100, (sales / target) * 100) : 0;
  const topItems = topSellingItems(todayTransactions);
  const attention = attentionItemsForRole("Owner");
  const hourly = Array.from({ length: 15 }, (_, index) => ({
    hour: 8 + index,
    value: 0,
  }));
  todayTransactions.forEach((tx) => {
    const hour = Number(String(tx.time || "0").split(/[.:]/)[0]);
    const bucket = hourly.find((item) => item.hour === hour);
    if (bucket) bucket.value += tx.total;
  });
  const hourlyMax = Math.max(1, ...hourly.map((item) => item.value));
  return `<div class="page-stack">
    <section class="role-hero owner-hero"><div><span class="eyebrow">KONTROL PEMILIK</span><h2>${targetPercent.toFixed(0)}% dari target harian</h2><p>${rupiah(sales)} dari ${rupiah(target)}</p><div class="progress-track"><span style="width:${targetPercent}%"></span></div></div><button class="button secondary" data-action="control-settings">Atur Target</button></section>
    <div class="stats-grid">
      ${statCard("Penjualan hari ini", rupiah(sales), "report", businessDate())}
      ${statCard("Laba operasional", rupiah(metrics.operatingProfit), "report", "Estimasi setelah pajak, HPP & biaya")}
      ${statCard("Tagihan aktif", String(state.bills.length), "bills", rupiah(state.bills.reduce((sum, bill) => sum + bill.total, 0)))}
      ${statCard("Pengecualian", String(attention.length), "warning", attention.length ? "Perlu keputusan" : "Semua terkendali")}
    </div>
    <div class="two-column">
      <section class="surface"><div class="panel-title"><div><h3>Penjualan per Jam</h3><p>Transaksi hari ini.</p></div><span class="tag empty">Data Langsung</span></div><div class="chart real-chart">${hourly.map((item) => `<div class="chart-bar ${item.value ? "has-value" : ""}" style="height:${Math.max(4, (item.value / hourlyMax) * 100)}%" title="${item.hour}:00 · ${rupiah(item.value)}"><span>${item.hour}</span></div>`).join("")}</div></section>
      ${attentionPanel(attention)}
    </div>
    <div class="two-column"><section class="surface"><div class="panel-title"><div><h3>Menu terlaris</h3><p>Dasar prioritas stok dan promosi.</p></div></div><div class="activity-list">${
      topItems
        .slice(0, 5)
        .map((item, index) =>
          activityRow(
            `<span class="rank-number">${index + 1}</span>`,
            item.name,
            `${item.qty} item terjual`,
            rupiah(item.revenue),
          ),
        )
        .join("") ||
      `<p class="muted">Detail item akan muncul dari transaksi baru.</p>`
    }</div></section>
    <section class="surface"><div class="panel-title"><div><h3>Tindakan Cepat</h3><p>Fungsi utama pemilik.</p></div></div>${quickActions(
      [
        {
          view: "finance",
          icon: "finance",
          label: "Keuangan",
          detail: "Cocokkan dan tutup buku",
        },
        {
          view: "reports",
          icon: "report",
          label: "Laporan",
          detail: "Ekspor dan analisis",
        },
        {
          view: "inventory",
          icon: "inventory",
          label: "Stok",
          detail: `${lowStock.length} bahan menipis`,
        },
        {
          view: "menu-hpp",
          icon: "menuItem",
          label: "Menu & HPP",
          detail: `Diskon ${rupiah(discounts)}`,
        },
      ],
    )}</section></div>
    ${salesPerformancePanel(todayTransactions)}
  </div>`;
}

function renderFinanceDashboard() {
  const readiness = closingReadiness();
  const metrics = financeMetrics();
  const balanceControl = balanceSheetReport(businessDate());
  const todayTransactions = activeTransactionsForPeriod("today");
  const missingReferences = todayTransactions.filter(
    (tx) => !tx.paymentReference,
  ).length;
  const expenses = state.expenses
    .filter((expense) => expense.date === businessDate())
    .reduce((sum, expense) => sum + expense.amount, 0);
  const closing = latestClosing();
  const attention = attentionItemsForRole("Finance");
  const checks = [
    {
      ok: !readiness.shiftOpen,
      title: "Shift outlet sudah ditutup",
      detail: readiness.shiftOpen
        ? `Masih berjalan sejak ${state.shift.openedAt}`
        : "Selesai",
    },
    {
      ok: readiness.openBills.length === 0,
      title: "Tidak ada tagihan aktif",
      detail: readiness.openBills.length
        ? `${readiness.openBills.length} belum dilunasi`
        : "Selesai",
    },
    {
      ok: readiness.pendingTransactions.length === 0,
      title: "Pembayaran sudah cocok",
      detail: readiness.pendingTransactions.length
        ? `${readiness.pendingTransactions.length} transaksi menunggu`
        : "Selesai",
    },
    {
      ok: !closingNeedsRevision(),
      title: "Tidak ada revisi tertunda",
      detail: closingNeedsRevision()
        ? "Koreksi baru perlu versi laporan"
        : "Selesai",
    },
    {
      ok: Math.abs(openingBalanceDifference()) < 1,
      title: "Saldo awal seimbang",
      detail:
        Math.abs(openingBalanceDifference()) < 1
          ? "Selesai"
          : `Selisih ${rupiah(openingBalanceDifference())}`,
    },
    {
      ok: Math.abs(balanceControl.difference) < 1,
      title: "Neraca seimbang",
      detail:
        Math.abs(balanceControl.difference) < 1
          ? "Selesai"
          : `Selisih ${rupiah(balanceControl.difference)}`,
    },
  ];
  return `<div class="page-stack"><section class="role-hero finance-hero"><div><span class="eyebrow">KONTROL KEUANGAN</span><h2>${readiness.ready ? "Siap menutup buku" : `${readiness.blockers.length} langkah tersisa`}</h2><p>Pendapatan bersih ${rupiah(metrics.sales)} · laba operasional ${rupiah(metrics.operatingProfit)}</p></div><button class="button ${readiness.ready ? "primary" : "secondary"}" data-action="nav" data-view="finance">Buka Keuangan</button></section>
    <div class="stats-grid">${statCard("Belum dicocokkan", String(readiness.pendingTransactions.length), "finance", rupiah(readiness.pendingTransactions.reduce((sum, tx) => sum + tx.total, 0)))}${statCard("Tanpa referensi", String(missingReferences), "receipt", state.settings.requirePaymentReference ? "Referensi wajib" : "Referensi opsional")}${statCard("Biaya hari ini", rupiah(expenses), "tag", `${state.expenses.filter((row) => row.date === businessDate()).length} pencatatan`)}${statCard("Tutup buku", closing ? `v${closing.version || 1}` : "Belum", "report", closingNeedsRevision() ? "Perlu revisi" : closing ? "Arsip tersimpan" : "Menunggu")}</div>
    <div class="two-column"><section class="surface"><div class="panel-title"><div><h3>Kesiapan tutup buku</h3><p>Sistem mencegah penutupan prematur.</p></div><span class="readiness-badge ${readiness.ready ? "ready" : "pending"}">${checks.filter((item) => item.ok).length}/${checks.length}</span></div><div class="checklist">${checks.map((item) => `<div class="check-row ${item.ok ? "done" : "pending"}">${icon(item.ok ? "check" : "warning")}<span><strong>${item.title}</strong><small>${item.detail}</small></span></div>`).join("")}</div></section>${attentionPanel(attention)}</div>
    <section class="surface"><div class="panel-title"><div><h3>Pembayaran Belum Cocok</h3><p>Transaksi terbaru lebih dahulu.</p></div><button class="button ghost compact" data-action="nav" data-view="finance">Lihat Semua</button></div><div class="activity-list">${
      readiness.pendingTransactions
        .slice()
        .reverse()
        .slice(0, 6)
        .map((tx) =>
          activityRow(
            icon("finance"),
            `PESANAN #${tx.id}`,
            `${tx.time} · ${tx.method}${tx.paymentReference ? ` · ${tx.paymentReference}` : " · tanpa referensi"}`,
            rupiah(tx.total),
          ),
        )
        .join("") ||
      `<div class="all-clear">${icon("check")}<span><strong>Semua pembayaran cocok</strong><small>Tidak ada transaksi tertunda.</small></span></div>`
    }</div></section>
    <div class="two-column"><section class="surface"><div class="panel-title"><div><h3>Komposisi Pembayaran</h3><p>Nilai pembayaran digital hari ini.</p></div></div><div class="payment-mix">${[
      ["QRIS BNI", metrics.qris, "receipt"],
      ["Kartu Debit", metrics.debit, "pay"],
    ]
      .map(([label, value, iconName]) => {
        const total = Math.max(1, metrics.qris + metrics.debit);
        return `<div class="payment-mix-row"><span>${icon(iconName)}${label}</span><strong>${rupiah(value)}</strong><div class="performance-track"><span style="width:${(value / total) * 100}%"></span></div></div>`;
      })
      .join(
        "",
      )}</div></section>${salesPerformancePanel(todayTransactions, 4)}</div>
  </div>`;
}

function renderBaristaDashboard() {
  const employee = operator();
  const attendance = state.attendance[employee.id];
  const present = attendance?.in && !attendance?.out;
  const myTasks = state.workTasks.filter(
    (task) => task.assigneeId === employee.id,
  );
  const activeTasks = myTasks.filter((task) => task.status !== "Selesai");
  const lowStock = state.ingredients.filter(
    (item) => item.minimum != null && item.qty <= item.minimum,
  );
  const attention = attentionItemsForRole(employee.role);
  const myTransactions = activeTransactionsForPeriod("today")
    .filter((transaction) => transactionOperatorId(transaction) === employee.id)
    .sort((a, b) => String(b.time).localeCompare(String(a.time)));
  const mySales = myTransactions.reduce(
    (sum, transaction) => sum + Number(transaction.total || 0),
    0,
  );
  const myItems = myTransactions.reduce(
    (sum, transaction) => sum + transactionItemCount(transaction),
    0,
  );
  return `<div class="page-stack"><section class="role-hero barista-hero"><div><span class="eyebrow">RUANG KERJA ${roleLabel(employee.role).toUpperCase()}</span><h2>Halo, ${employee.name}</h2><p>${state.shift.isOpen ? `Shift berjalan sejak ${state.shift.openedAt} · ${state.shift.openedBy}` : "Shift outlet belum dibuka"}</p></div><button class="button primary" data-action="nav" data-view="attendance">Buka Absensi</button></section>
    <div class="stats-grid">${statCard("Absensi saya", present ? "Hadir" : attendance?.out ? "Pulang" : "Belum", "attendance", present ? `Masuk ${attendance.in}` : "Buka menu Absensi")}${statCard("Transaksi saya", String(myTransactions.length), "receipt", `${myItems} item tercatat`)}${statCard("Penjualan saya", rupiah(mySales), "report", "Hanya transaksi akun Anda")}${statCard("Tugas saya", String(activeTasks.length), "tasks", `${myTasks.filter((task) => task.status === "Selesai").length} selesai`)}</div>
    <div class="two-column"><section class="surface"><div class="panel-title"><div><h3>Prioritas saya</h3><p>Urutan kerja yang paling dekat.</p></div><button class="button ghost compact" data-action="nav" data-view="tasks">Semua tugas</button></div><div class="activity-list">${
      activeTasks
        .sort((a, b) => a.due.localeCompare(b.due))
        .slice(0, 5)
        .map((task) =>
          activityRow(
            icon(taskIsOverdue(task) ? "warning" : "tasks"),
            task.title,
            `${task.due} · ${task.priority}${taskIsOverdue(task) ? " · terlambat" : ""}`,
            `<button class="button ghost compact" data-action="toggle-task" data-id="${task.id}">Selesai</button>`,
          ),
        )
        .join("") ||
      `<div class="all-clear">${icon("check")}<span><strong>Tugas selesai</strong><small>Tidak ada pekerjaan aktif untuk Anda.</small></span></div>`
    }</div></section>${attentionPanel(attention)}</div>
    <section class="surface"><div class="panel-title"><div><h3>Penjualan Saya Hari Ini</h3><p>Transaksi terbaru yang Anda layani.</p></div><button class="button ghost compact" data-action="nav" data-view="sales-history">Lihat Histori</button></div><div class="activity-list">${
      myTransactions
        .slice(0, 5)
        .map((transaction) =>
          activityRow(
            icon("receipt"),
            `PESANAN #${transaction.id}`,
            `${transaction.time} · ${transaction.method}`,
            rupiah(transaction.total),
          ),
        )
        .join("") ||
      `<p class="muted">Belum ada transaksi atas nama Anda hari ini.</p>`
    }</div></section>
    <section class="surface"><div class="panel-title"><div><h3>Tindakan Cepat</h3><p>Fungsi kerja utama.</p></div></div>${quickActions(
      [
        {
          view: "attendance",
          icon: "attendance",
          label: "Absensi",
          detail: present ? `Masuk ${attendance.in}` : "Selfie masuk atau pulang",
        },
        {
          view: "sales-history",
          icon: "receipt",
          label: "Penjualan Saya",
          detail: `${myTransactions.length} transaksi hari ini`,
        },
        {
          view: "tasks",
          icon: "tasks",
          label: "Tugas",
          detail: `${activeTasks.length} masih aktif`,
        },
        {
          view: "inventory",
          icon: "inventory",
          label: "Stok",
          detail: `${lowStock.length} bahan menipis`,
        },
      ].filter((item) => !item.view || canAccessView(item.view)),
    )}</section></div>`;
}

function renderHeadBaristaDashboard() {
  const todayTransactions = activeTransactionsForPeriod("today");
  const lowStock = state.ingredients.filter(
    (item) => item.minimum != null && item.qty <= item.minimum,
  );
  const pausedMenus = state.menuItems.filter((item) => item.active === false);
  const activeTasks = state.workTasks.filter(
    (task) => task.status !== "Selesai",
  );
  const presentTeam = employees.filter((employee) => {
    const record = state.attendance[employee.id];
    return employee.canServe && record?.in && !record?.out;
  });
  const sales = todayTransactions.reduce(
    (sum, transaction) => sum + Number(transaction.total || 0),
    0,
  );
  const attention = attentionItemsForRole("Head Barista");
  return `<div class="page-stack"><section class="role-hero head-barista-hero"><div><span class="eyebrow">KONTROL KEPALA BARISTA</span><h2>${presentTeam.length} anggota tim sedang bertugas</h2><p>${state.shift.isOpen ? `Shift berjalan sejak ${state.shift.openedAt} · ${todayTransactions.length} transaksi` : "Shift outlet belum dibuka"}</p></div><button class="button primary" data-action="nav" data-view="attendance">Lihat Absensi</button></section>
    <div class="stats-grid">${statCard("Penjualan tim", rupiah(sales), "report", `${todayTransactions.length} transaksi`)}${statCard("Bahan menipis", String(lowStock.length), "inventory", lowStock.length ? "Perlu tindak lanjut" : "Stok aman")}${statCard("Menu dijeda", String(pausedMenus.length), "menuItem", pausedMenus.length ? "Perlu diperiksa" : "Semua tersedia")}${statCard("Tugas tim aktif", String(activeTasks.length), "tasks", `${state.workTasks.filter((task) => task.status === "Selesai").length} selesai`)}</div>
    <div class="two-column"><section class="surface"><div class="panel-title"><div><h3>Kondisi Tim</h3><p>Absensi dan beban kerja hari ini.</p></div><button class="button ghost compact" data-action="nav" data-view="attendance">Lihat Absensi</button></div><div class="activity-list">${employees
      .filter((employee) => employee.canServe)
      .map((employee) => {
        const record = state.attendance[employee.id];
        const taskCount = state.workTasks.filter(
          (task) =>
            task.assigneeId === employee.id && task.status !== "Selesai",
        ).length;
        return activityRow(
          `<span class="avatar small">${initials(employee.name)}</span>`,
          employee.name,
          `${roleLabel(employee.role)} · ${taskCount} tugas aktif`,
          record?.in && !record?.out
            ? `<span class="tag present">Hadir ${record.in}</span>`
            : `<span class="tag reserved">Belum hadir</span>`,
        );
      })
      .join("")}</div></section>${attentionPanel(attention)}</div>
    <div class="two-column">${salesPerformancePanel(todayTransactions, 4)}<section class="surface"><div class="panel-title"><div><h3>Tindakan Cepat</h3><p>Kontrol operasional bar.</p></div></div>${quickActions(
      [
        {
          view: "inventory",
          icon: "inventory",
          label: "Stok",
          detail: `${lowStock.length} bahan menipis`,
        },
        {
          view: "menu-hpp",
          icon: "menuItem",
          label: "Ketersediaan",
          detail: `${pausedMenus.length} menu dijeda`,
        },
        {
          view: "tasks",
          icon: "tasks",
          label: "Tugas Tim",
          detail: `${activeTasks.length} masih aktif`,
        },
        {
          view: "sales-history",
          icon: "receipt",
          label: "Penjualan Tim",
          detail: `${todayTransactions.length} transaksi hari ini`,
        },
      ],
    )}</section></div>
  </div>`;
}

function renderSeniorBaristaDashboard() {
  const employee = operator();
  const myTasks = state.workTasks.filter(
    (task) => task.assigneeId === employee.id,
  );
  const activeTasks = myTasks
    .filter((task) => task.status !== "Selesai")
    .sort((a, b) => a.due.localeCompare(b.due));
  const myTransactions = activeTransactionsForPeriod("today")
    .filter((transaction) => transactionOperatorId(transaction) === employee.id)
    .sort((a, b) => String(b.time).localeCompare(String(a.time)));
  const mySales = myTransactions.reduce(
    (sum, transaction) => sum + Number(transaction.total || 0),
    0,
  );
  const lowStock = state.ingredients.filter(
    (item) => item.minimum != null && item.qty <= item.minimum,
  );
  const pausedMenus = state.menuItems.filter((item) => item.active === false);
  const attention = attentionItemsForRole("Barista Senior");
  return `<div class="page-stack"><section class="role-hero senior-barista-hero"><div><span class="eyebrow">RUANG KERJA BARISTA SENIOR</span><h2>Halo, ${employee.name}</h2><p>${state.shift.isOpen ? "Anda dapat membantu kontrol stok dan ketersediaan menu" : "Shift outlet belum dibuka"}</p></div><button class="button primary" data-action="nav" data-view="attendance">Buka Absensi</button></section>
    <div class="stats-grid">${statCard("Penjualan saya", rupiah(mySales), "receipt", `${myTransactions.length} transaksi`)}${statCard("Rata-rata transaksi", rupiah(myTransactions.length ? mySales / myTransactions.length : 0), "report", "Kinerja hari ini")}${statCard("Tugas saya", String(activeTasks.length), "tasks", `${myTasks.filter((task) => task.status === "Selesai").length} selesai`)}${statCard("Bahan menipis", String(lowStock.length), "inventory", lowStock.length ? "Periksa stok fisik" : "Stok aman")}</div>
    <div class="two-column"><section class="surface"><div class="panel-title"><div><h3>Prioritas Saya</h3><p>Pekerjaan aktif berdasarkan batas waktu.</p></div><button class="button ghost compact" data-action="nav" data-view="tasks">Semua Tugas</button></div><div class="activity-list">${
      activeTasks
        .slice(0, 5)
        .map((task) =>
          activityRow(
            icon(taskIsOverdue(task) ? "warning" : "tasks"),
            task.title,
            `${task.due} · ${task.priority}`,
            `<button class="button ghost compact" data-action="toggle-task" data-id="${task.id}">Selesai</button>`,
          ),
        )
        .join("") ||
      `<div class="all-clear">${icon("check")}<span><strong>Tugas selesai</strong><small>Tidak ada pekerjaan aktif.</small></span></div>`
    }</div></section>${attentionPanel(attention)}</div>
    <div class="two-column"><section class="surface"><div class="panel-title"><div><h3>Penjualan Saya Hari Ini</h3><p>Transaksi terbaru yang Anda layani.</p></div><button class="button ghost compact" data-action="nav" data-view="sales-history">Lihat Histori</button></div><div class="activity-list">${
      myTransactions
        .slice(0, 5)
        .map((transaction) =>
          activityRow(
            icon("receipt"),
            `PESANAN #${transaction.id}`,
            `${transaction.time} · ${transaction.method}`,
            rupiah(transaction.total),
          ),
        )
        .join("") ||
      `<p class="muted">Belum ada transaksi atas nama Anda hari ini.</p>`
    }</div></section><section class="surface"><div class="panel-title"><div><h3>Tindakan Cepat</h3><p>Fungsi pendampingan operasional.</p></div></div>${quickActions(
      [
        {
          view: "attendance",
          icon: "attendance",
          label: "Absensi",
          detail: "Selfie masuk atau pulang",
        },
        {
          view: "inventory",
          icon: "inventory",
          label: "Hitung Stok",
          detail: `${lowStock.length} bahan perlu perhatian`,
        },
        {
          view: "menu-hpp",
          icon: "menuItem",
          label: "Ketersediaan",
          detail: `${pausedMenus.length} menu dijeda`,
        },
        {
          view: "sales-history",
          icon: "receipt",
          label: "Penjualan Saya",
          detail: `${myTransactions.length} transaksi hari ini`,
        },
      ],
    )}</section></div>
  </div>`;
}

function renderDashboard() {
  if (operator().role === "Owner") return renderOwnerDashboard();
  if (operator().role === "Finance") return renderFinanceDashboard();
  if (operator().role === "Head Barista") return renderHeadBaristaDashboard();
  if (operator().role === "Barista Senior")
    return renderSeniorBaristaDashboard();
  return renderBaristaDashboard();
}

function renderInventory() {
  const low = state.ingredients.filter(
    (item) => item.minimum != null && item.qty <= item.minimum,
  ).length;
  const canManageMinimum = canPerform("minimum");
  return `<div class="page-stack">
    <div class="section-head"><div><h2>${state.ingredients.length} bahan aktif</h2><p>${low} bahan berada di bawah batas minimum.</p></div><div class="inventory-toolbar">${canManageMinimum ? `<button class="button secondary" data-action="minimum-stock">Atur Minimum</button>` : ""}${canPerform("stock-waste") ? `<button class="button secondary" data-action="stock-waste">${icon("minus")}Stok Keluar</button>` : ""}${canPerform("stock-count") ? `<button class="button secondary" data-action="stock-count">Hitung Stok</button>` : ""}${canPerform("stock-in") ? `<button class="button primary" data-action="stock-in">${icon("plus")}Stok Masuk</button>` : ""}</div></div>
    ${state.stockCounts.length ? `<section class="surface"><h3>Menunggu konfirmasi supervisor</h3><div class="activity-list">${state.stockCounts.map((draft) => activityRow(icon("warning"), draft.itemName, `Sistem ${draft.expected} ${draft.unit} · Fisik ${draft.actual} ${draft.unit} · ${draft.by}`, canPerform("stock-approve") ? `<button class="button primary" style="min-height:38px;padding:0 12px;font-size:11px" data-action="approve-stock-count" data-id="${draft.id}">Konfirmasi</button>` : `<span class="tag reserved">Menunggu</span>`)).join("")}</div></section>` : ""}
    ${state.stockWastages.length ? `<section class="surface"><h3>Stok keluar terbaru</h3><div class="activity-list">${state.stockWastages.slice().reverse().slice(0, 5).map((row) => activityRow(icon("minus"), row.itemName, `${row.reason} | ${row.by} | ${row.date}`, `-${row.qty} ${row.unit}`)).join("")}</div></section>` : ""}
    ${
      state.purchases.length
        ? `<section class="surface"><h3>Pembelian bahan terbaru</h3><div class="activity-list">${state.purchases
            .slice()
            .reverse()
            .slice(0, 5)
            .map((purchase) =>
              activityRow(
                icon("receipt"),
                `${purchase.vendor} · ${purchase.invoice}`,
                `${purchase.itemName} · ${purchase.qty} ${purchase.unit} · ${purchase.by}`,
                rupiah(purchase.totalPrice),
              ),
            )
            .join("")}</div></section>`
        : ""
    }
    <section class="surface" style="padding:8px 10px"><table class="data-table"><thead><tr><th>Bahan</th><th>Kategori</th><th>Stok saat ini</th><th>Harga rata-rata</th><th>Batas minimum</th><th>Status</th></tr></thead><tbody>
      ${state.ingredients
        .map((item) => {
          const isLow = item.minimum != null && item.qty <= item.minimum;
          const minimumLabel =
            item.minimum == null
              ? "Belum diatur"
              : `${item.minimum.toLocaleString("id-ID")} ${item.unit}`;
          return `<tr><td><strong>${item.name}</strong>${item.provisional ? `<div class="muted" style="font-size:9px">Perlu verifikasi</div>` : ""}</td><td>${item.category}</td><td class="stock-level ${isLow ? "low" : ""}">${item.qty.toLocaleString("id-ID")} ${item.unit}</td><td>${rupiah(item.avgCost || 0)} / ${item.unit}</td><td>${canManageMinimum ? `<button class="minimum-link" data-action="edit-minimum" data-id="${item.id}" title="Ubah batas minimum ${item.name}">${minimumLabel}</button>` : minimumLabel}</td><td><span class="tag ${isLow ? "cleaning" : "empty"}">${isLow ? "Menipis" : "Aman"}</span></td></tr>`;
        })
        .join("")}
    </tbody></table></section>
  </div>`;
}

function renderMenuHpp() {
  if (!["Owner", "Finance"].includes(operator().role)) {
    return `<div class="page-stack"><div class="section-head"><div><h2>Ketersediaan menu</h2><p>Jeda menu sementara tanpa mengubah harga atau resep.</p></div><span class="tag present">${state.menuItems.filter((item) => item.active !== false).length} aktif</span></div><div class="availability-grid">${state.menuItems
      .map((item) => {
        const available = sellableQty(item);
        const paused = item.active === false;
        return `<article class="availability-card ${paused || available <= 0 ? "unavailable" : ""}"><div class="availability-visual ${item.tone}">${item.visual}</div><div><h3>${escapeHtml(item.name)}</h3><p>${available <= 0 ? "Stok resep tidak cukup" : `${available} porsi dari stok resep`}</p></div><button class="availability-toggle ${paused ? "paused" : "active"}" data-action="toggle-menu-availability" data-id="${item.id}">${paused ? "Jeda" : "Aktif"}</button></article>`;
      })
      .join(
        "",
      )}</div><p class="helper-note">Status “Habis” tetap otomatis mengikuti bahan resep. Tombol ini hanya untuk menjeda menu karena alasan operasional atau kualitas.</p></div>`;
  }
  const taxRate = Number(state.tax.rate || 0);
  return `<div class="page-stack">
    <div class="section-head"><div><h2>Harga dan HPP</h2><p>Harga termasuk ${state.tax.label} ${taxRate}%.</p></div>${canPerform("tax") ? `<button class="button secondary" data-action="tax-settings">Atur Pajak</button>` : ""}</div>
    <section class="surface" style="background:var(--warning-soft);box-shadow:none;border-color:#ead0a8"><strong style="font-size:12px;color:var(--warning)">Tarif pajak masih perlu verifikasi daerah</strong><p style="margin:6px 0 0;font-size:11px;color:var(--muted)">HPP dihitung dari gramasi PDF dan harga rata-rata stok lokal. Bahan bertanda data awal perlu diverifikasi sebelum laporan dijadikan angka final.</p></section>
    <section class="surface" style="padding:8px 10px"><table class="data-table"><thead><tr><th>Menu</th><th>Harga termasuk pajak</th><th>Harga dasar</th><th>Pajak</th><th>HPP estimasi</th><th>Margin kotor</th><th>Status</th></tr></thead><tbody>
      ${state.menuItems
        .map((item) => {
          const base =
            state.tax.included && taxRate
              ? item.price / (1 + taxRate / 100)
              : item.price;
          const tax = item.price - base;
          const hpp = recipeHpp(item);
          const margin = base - hpp;
          const marginPct = base ? (margin / base) * 100 : 0;
          return `<tr><td><strong>${item.name}</strong><div class="muted" style="font-size:10px">${item.category} · ${recipeComponents(item.id).length} komponen</div></td><td>${canPerform("menu-edit") ? `<button class="minimum-link" data-action="edit-menu-price" data-id="${item.id}"><strong>${rupiah(item.price)}</strong></button>` : `<strong>${rupiah(item.price)}</strong>`}</td><td>${rupiah(base)}</td><td>${rupiah(tax)}</td><td>${rupiah(hpp)} <span class="tag reserved" style="margin-left:5px">Resep</span></td><td class="${margin < 0 ? "stock-level low" : "stock-level"}">${rupiah(margin)} · ${marginPct.toFixed(1)}%</td><td>${canPerform("menu-availability") ? `<button class="availability-toggle ${item.active === false ? "paused" : "active"}" data-action="toggle-menu-availability" data-id="${item.id}">${item.active === false ? "Jeda" : "Aktif"}</button>` : `<span class="tag ${item.active === false ? "cleaning" : "empty"}">${item.active === false ? "Jeda" : "Aktif"}</span>`}</td></tr>`;
        })
        .join("")}
    </tbody></table></section>
  </div>`;
}

const roleDetails = {
  Owner: {
    scope: "Seluruh bisnis",
    duties: [
      "Pantau penjualan, laba kotor, dan risiko",
      "Tetapkan harga, pajak, serta hak akses",
      "Tinjau laporan dan audit seluruh aktivitas",
    ],
    access: [
      "Keuangan",
      "Penjualan seluruh tim",
      "Semua laporan",
      "Menu & HPP",
      "Tim dan akses",
      "Audit",
    ],
  },
  Finance: {
    scope: "Keuangan & kontrol",
    duties: [
      "Rekonsiliasi QRIS BNI dan kartu debit",
      "Catat pembelian vendor serta nomor nota",
      "Ekspor laporan keuangan dan arsip dokumen",
    ],
    access: [
      "Keuangan",
      "Penjualan seluruh tim",
      "Rekonsiliasi",
      "Biaya",
      "Pembelian",
      "HPP",
    ],
  },
  "Head Barista": {
    scope: "Operasional outlet",
    duties: [
      "Buka dan tutup shift",
      "Konfirmasi hitung stok",
      "Atur ketersediaan menu dan tugas",
    ],
    access: [
      "Ringkasan",
      "Penjualan seluruh tim",
      "Ketersediaan menu",
      "Stok",
      "Tugas",
      "Absensi",
    ],
  },
  "Barista Senior": {
    scope: "Pelayanan & pendampingan",
    duties: [
      "Layani pesanan dan tagihan aktif",
      "Jalankan daftar kerja dan hitung stok",
      "Jeda menu bermasalah",
    ],
    access: [
      "Ringkasan",
      "Penjualan sendiri",
      "Kasir",
      "Ketersediaan menu",
      "Stok",
      "Tugas",
      "Absensi",
    ],
  },
  "Barista Junior": {
    scope: "Pelayanan harian",
    duties: [
      "Layani pesanan sesuai resep",
      "Perbarui tugas outlet",
      "Absensi dan gunakan shift outlet bersama",
    ],
    access: [
      "Kasir",
      "Penjualan sendiri",
      "Lihat stok",
      "Lihat ketersediaan",
      "Tugas sendiri",
      "Absensi",
      "Shift lihat",
    ],
  },
};

function estimatedHppTotal(
  transactions = activeTransactionsForPeriod("today"),
) {
  return transactions.reduce(
    (sum, tx) => sum + transactionHpp(tx),
    0,
  );
}

function transactionHpp(transaction) {
  return transaction.hpp != null && Number.isFinite(Number(transaction.hpp))
    ? Number(transaction.hpp)
    : Number(transaction.total || 0) * 0.4;
}

function estimatedHppCount(transactions = []) {
  return transactions.filter(
    (transaction) =>
      transaction.hpp == null || !Number.isFinite(Number(transaction.hpp)),
  ).length;
}

function renderSalesHistory() {
  const transactions = visibleSalesTransactions()
    .slice()
    .sort((a, b) =>
      `${b.businessDate || ""} ${b.time || ""}`.localeCompare(
        `${a.businessDate || ""} ${a.time || ""}`,
      ),
    );
  const sales = transactions.reduce(
    (sum, transaction) => sum + Number(transaction.total || 0),
    0,
  );
  const itemCount = transactions.reduce(
    (sum, transaction) => sum + transactionItemCount(transaction),
    0,
  );
  const qris = transactions
    .filter((transaction) => transaction.method.startsWith("QRIS"))
    .reduce((sum, transaction) => sum + Number(transaction.total || 0), 0);
  const debit = transactions
    .filter((transaction) => transaction.method === "Debit")
    .reduce((sum, transaction) => sum + Number(transaction.total || 0), 0);
  const allAccess = canViewAllSales();
  const scopeLabel = allAccess
    ? "Seluruh transaksi outlet"
    : `Hanya transaksi ${operator().name}`;
  return `<div class="page-stack">
    <div class="section-head report-head"><div><h2>${allAccess ? "Histori Penjualan Tim" : "Histori Penjualan Saya"}</h2><p>${scopeLabel} · ${periodLabel()}</p></div><div class="report-actions"><span class="access-scope">${icon("user")}${scopeLabel}</span><button class="button secondary" data-action="export-sales-excel">${icon("download")}Excel</button><button class="button primary" data-action="export-sales-pdf">${icon("download")}PDF</button></div></div>
    <div class="segmented report-period">${[
      ["today", "Hari ini"],
      ["7d", "7 hari"],
      ["30d", "30 hari"],
      ["all", "Semua"],
    ]
      .map(
        ([value, label]) =>
          `<button class="segment ${state.reportPeriod === value ? "active" : ""}" data-action="report-period" data-period="${value}">${label}</button>`,
      )
      .join("")}</div>
    <div class="stats-grid">${statCard("Total penjualan", rupiah(sales), "report", `${transactions.length} transaksi`)}${statCard("Rata-rata transaksi", rupiah(transactions.length ? sales / transactions.length : 0), "receipt", periodLabel())}${statCard("Item tercatat", String(itemCount), "menuItem", "Berdasarkan rincian pesanan")}${statCard("Metode utama", qris >= debit ? "QRIS BNI" : "Debit", qris >= debit ? "receipt" : "pay", rupiah(Math.max(qris, debit)))}</div>
    <div class="two-column">${
      allAccess
        ? salesPerformancePanel(transactions, 5)
        : `<section class="surface"><div class="panel-title"><div><h3>Ringkasan Akun</h3><p>Hanya data transaksi Anda.</p></div></div><div class="activity-list">${activityRow(icon("user"), operator().name, roleLabel(operator().role), `${transactions.length} transaksi`)}${activityRow(icon("menuItem"), "Item terjual", "Rincian pesanan tercatat", String(itemCount))}</div></section>`
    }<section class="surface"><div class="panel-title"><div><h3>Komposisi Pembayaran</h3><p>Total berdasarkan metode pembayaran.</p></div></div><div class="payment-mix">${[
      ["QRIS BNI", qris, "receipt"],
      ["Kartu Debit", debit, "pay"],
    ]
      .map(([label, value, iconName]) => {
        const total = Math.max(1, qris + debit);
        return `<div class="payment-mix-row"><span>${icon(iconName)}${label}</span><strong>${rupiah(value)}</strong><div class="performance-track"><span style="width:${(value / total) * 100}%"></span></div></div>`;
      })
      .join("")}</div></section></div>
    <section class="surface"><div class="section-head compact-head"><div><h3>Daftar Transaksi</h3><p>Data tersimpan sesuai petugas saat pembayaran.</p></div></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Pesanan</th><th>Tanggal</th><th>Waktu</th><th>Petugas</th><th>Pelanggan</th><th>Metode</th><th>Referensi</th><th>Item</th><th>Total</th><th>Aksi</th></tr></thead><tbody>${
      transactions
        .map(
          (transaction) =>
            `<tr><td><strong>#${transaction.id}</strong></td><td>${transaction.businessDate || businessDate()}</td><td>${transaction.time || "-"}</td><td>${escapeHtml(transaction.operator || "-")}</td><td>${escapeHtml(transaction.customer || "-")}${transaction.table ? `<small class="table-subtext">Meja ${escapeHtml(transaction.table)}</small>` : ""}</td><td>${escapeHtml(transaction.method || "-")}</td><td>${escapeHtml(transaction.paymentReference || "-")}</td><td>${transactionItemCount(transaction)}</td><td><strong>${rupiah(transaction.total)}</strong></td><td><button class="button ghost compact" data-action="print-transaction" data-id="${transaction.id}">Struk</button>${canPerform("refund") ? `<button class="button ghost compact" data-action="refund-transaction" data-id="${transaction.id}">Pengembalian</button>` : ""}</td></tr>`,
        )
        .join("") ||
      `<tr><td colspan="10" class="muted">Belum ada transaksi pada periode ini.</td></tr>`
    }</tbody></table></div></section>
  </div>`;
}

function renderReports() {
  const reportTransactions = activeTransactionsForPeriod();
  const sales = reportTransactions.reduce((sum, tx) => sum + tx.total, 0);
  const reportTax =
    state.tax.included && state.tax.rate
      ? sales - sales / (1 + Number(state.tax.rate) / 100)
      : 0;
  const netSales = sales - reportTax;
  const hpp = estimatedHppTotal(reportTransactions);
  const hppEstimated = estimatedHppCount(reportTransactions);
  const qrisSales = reportTransactions
    .filter((tx) => tx.method.startsWith("QRIS"))
    .reduce((sum, tx) => sum + tx.total, 0);
  const debitSales = reportTransactions
    .filter((tx) => tx.method === "Debit")
    .reduce((sum, tx) => sum + tx.total, 0);
  const unreconciled = reportTransactions.filter(
    (tx) => tx.reconciliationStatus !== "Sesuai",
  ).length;
  const canReconcile = canPerform("reconcile");
  return `<div class="page-stack">
    <div class="section-head report-head"><div><h2>Laporan Operasional · ${periodLabel()}</h2><p>${businessDate()} · data tablet</p></div><div class="report-actions">
      <button class="button secondary" data-action="download-template">${icon("download")}Template Impor</button>
      <button class="button secondary" data-action="trigger-excel-import">${icon("upload")}Impor Excel</button>
      <button class="button secondary" data-action="trigger-pdf-import">${icon("upload")}Arsip PDF</button>
      ${canPerform("data-backup") ? `<button class="button secondary" data-action="data-tools">${icon("save")}Cadangan Data</button>` : ""}
      <button class="button primary" data-action="export-excel">${icon("download")}Excel</button>
      <button class="button primary" data-action="export-pdf">${icon("download")}PDF</button>
      <input class="hidden" id="excel-import-file" type="file" accept=".xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
      <input class="hidden" id="pdf-import-file" type="file" accept="application/pdf,.pdf" />
    </div></div>
    <div class="segmented report-period">${[
      ["today", "Hari ini"],
      ["7d", "7 hari"],
      ["30d", "30 hari"],
      ["all", "Semua"],
    ]
      .map(
        ([value, label]) =>
          `<button class="segment ${state.reportPeriod === value ? "active" : ""}" data-action="report-period" data-period="${value}">${label}</button>`,
      )
      .join("")}</div>
    <div class="stats-grid">
      ${statCard("Penjualan bruto", rupiah(sales), "report", `${reportTransactions.length} transaksi lunas`)}
      ${statCard(hppEstimated ? "HPP campuran" : "HPP resep", rupiah(hpp), "inventory", hppEstimated ? `${hppEstimated} transaksi lama memakai estimasi 40%` : "Snapshot resep saat transaksi")}
      ${statCard("Laba kotor estimasi", rupiah(netSales - hpp), "report", `Setelah pajak ${rupiah(reportTax)}`)}
      ${statCard("Pembayaran digital", rupiah(qrisSales + debitSales), "finance", `${unreconciled} belum dicocokkan`)}
    </div>
    <div class="two-column">
      <section class="surface"><h3>Ringkasan kontrol</h3><div class="activity-list">
        ${activityRow(icon("receipt"), "QRIS BNI", "Konfirmasi manual QR fisik", rupiah(qrisSales))}
        ${activityRow(icon("pay"), "Kartu debit", "Data mesin EDC", rupiah(debitSales))}
        ${activityRow(icon("inventory"), "Nilai persediaan", "Stok × harga rata-rata", rupiah(state.ingredients.reduce((s, item) => s + item.qty * Number(item.avgCost || 0), 0)))}
        ${activityRow(icon("attendance"), "Karyawan hadir", "Belum absen pulang", `${Object.values(state.attendance).filter((r) => r.in && !r.out).length} orang`)}
      </div></section>
      <section class="surface"><h3>Impor & arsip terbaru</h3><div class="activity-list">
        ${
          state.documents
            .slice()
            .reverse()
            .slice(0, 4)
            .map((doc) =>
              activityRow(
                icon("receipt"),
                doc.name,
                `${doc.kind} · ${doc.sizeLabel} · ${doc.by}`,
                `<button class="button ghost compact" data-action="download-document" data-id="${doc.id}">Buka</button>`,
              ),
            )
            .join("") || `<p class="muted">Belum ada PDF yang diarsipkan.</p>`
        }
      </div><p class="helper-note">Impor Excel hanya menambah stok dari sheet <strong>Stok Masuk</strong>. PDF disimpan sebagai bukti dokumen dan tidak mengubah angka otomatis.</p></section>
    </div>
    <section class="surface"><div class="section-head compact-head"><div><h3>Transaksi dan Rekonsiliasi</h3><p>Cocokkan pembayaran dengan data QRIS atau EDC.</p></div></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Pesanan</th><th>Tanggal</th><th>Waktu</th><th>Operator</th><th>Metode</th><th>Total</th><th>HPP</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${
      reportTransactions
        .slice()
        .reverse()
        .map(
          (tx) =>
            `<tr><td><strong>#${tx.id}</strong></td><td>${tx.businessDate}</td><td>${tx.time}</td><td>${tx.operator}</td><td>${tx.method}</td><td>${rupiah(tx.total)}</td><td>${rupiah(transactionHpp(tx))}${tx.hpp == null ? `<small class="table-subtext">Estimasi 40%</small>` : ""}</td><td>${tx.reconciliationStatus === "Sesuai" ? `<span class="tag empty">Sesuai</span>` : canReconcile ? `<button class="button ghost compact" data-action="reconcile-payment" data-id="${tx.id}">Tandai Sesuai</button>` : `<span class="tag reserved">Belum</span>`}</td><td><button class="button ghost compact" data-action="print-transaction" data-id="${tx.id}">Struk</button>${canPerform("refund") ? `<button class="button ghost compact" data-action="refund-transaction" data-id="${tx.id}">Pengembalian</button>` : ""}</td></tr>`,
        )
        .join("") ||
      `<tr><td colspan="9" class="muted">Belum ada transaksi pada periode ini.</td></tr>`
    }</tbody></table></div></section>
  </div>`;
}

function financeMetrics(date = businessDate()) {
  const transactions = state.transactions.filter(
    (tx) =>
      (tx.businessDate || businessDate()) === date && isActiveTransaction(tx),
  );
  const grossSales = transactions.reduce((sum, tx) => sum + tx.total, 0);
  const taxRate = Number(state.tax.rate || 0) / 100;
  const tax =
    state.tax.included && taxRate ? grossSales - grossSales / (1 + taxRate) : 0;
  const revenueAdjustments = state.financeAdjustments
    .filter((row) => row.date === date && row.target === "Pendapatan")
    .reduce(
      (sum, row) =>
        sum + (row.direction === "Tambah" ? row.amount : -row.amount),
      0,
    );
  const expenseAdjustments = state.financeAdjustments
    .filter((row) => row.date === date && row.target === "Biaya")
    .reduce(
      (sum, row) =>
        sum + (row.direction === "Tambah" ? row.amount : -row.amount),
      0,
    );
  const sales = grossSales - tax + revenueAdjustments;
  const hpp = estimatedHppTotal(transactions);
  const expenses = Math.max(
    0,
    state.expenses
      .filter((expense) => expense.date === date)
      .reduce((sum, expense) => sum + expense.amount, 0) + expenseAdjustments,
  );
  const qris = transactions
    .filter((tx) => tx.method.startsWith("QRIS"))
    .reduce((sum, tx) => sum + tx.total, 0);
  const debit = transactions
    .filter((tx) => tx.method === "Debit")
    .reduce((sum, tx) => sum + tx.total, 0);
  return {
    transactionCount: transactions.length,
    estimatedHppCount: estimatedHppCount(transactions),
    grossSales,
    tax,
    sales,
    hpp,
    expenses,
    qris,
    debit,
    revenueAdjustments,
    expenseAdjustments,
    grossProfit: sales - hpp,
    operatingProfit: sales - hpp - expenses,
  };
}

const ACCOUNT_GROUP_LABELS = {
  "asset-current": "Aset Lancar",
  "asset-fixed": "Aset Tetap",
  "contra-asset": "Kontra Aset",
  liability: "Kewajiban",
  equity: "Ekuitas",
  revenue: "Pendapatan Usaha",
  "other-income": "Pendapatan Lain",
  cogs: "Harga Pokok Penjualan",
  "selling-expense": "Beban Penjualan",
  "admin-expense": "Beban Umum dan Administrasi",
  "other-expense": "Beban Lain",
};

function accountingAccount(code) {
  return state.accountingAccounts.find(
    (account) => String(account.code) === String(code),
  );
}

function activeAccounts(groups = []) {
  return state.accountingAccounts.filter(
    (account) =>
      account.active !== false && (!groups.length || groups.includes(account.group)),
  );
}

function defaultExpenseAccountCode(expense = {}) {
  const text = `${expense.category || ""} ${expense.vendor || ""} ${expense.note || ""}`.toLowerCase();
  if (text.includes("listrik") || text.includes("pln")) return "6204";
  if (text.includes("pdam") || text.includes("air")) return "6205";
  if (text.includes("internet") || text.includes("telepon")) return "6206";
  if (text.includes("pemasaran") || text.includes("marketing")) return "6105";
  if (text.includes("parkir")) return "6106";
  if (text.includes("transport") || text.includes("bbm")) return "6104";
  if (text.includes("perawatan") || text.includes("pemeliharaan")) return "6212";
  return "6202";
}

function includedTax(total) {
  const rate = Number(state.tax.rate || 0) / 100;
  return state.tax.included && rate ? total - total / (1 + rate) : 0;
}

function financeRange() {
  const start = state.financePeriodStart || firstDayOfMonth();
  const end = state.financePeriodEnd || businessDate();
  return start <= end ? { start, end } : { start: end, end: start };
}

function dateInRange(date, start, end) {
  const value = String(date || "");
  return value >= start && value <= end;
}

function monthCountInRange(start, end) {
  if (!start || !end || start > end) return 0;
  const [startYear, startMonth] = start.split("-").map(Number);
  const [endYear, endMonth] = end.split("-").map(Number);
  return Math.max(0, (endYear - startYear) * 12 + endMonth - startMonth + 1);
}

function assetDepreciation(asset, start, end) {
  if (asset.active === false || asset.acquisitionDate > end) return 0;
  const effectiveStart =
    asset.acquisitionDate > start ? asset.acquisitionDate : start;
  const elapsedBefore = monthCountInRange(asset.acquisitionDate, effectiveStart) - 1;
  const remainingMonths = Math.max(
    0,
    Number(asset.usefulLifeMonths || 0) - Math.max(0, elapsedBefore),
  );
  const months = Math.min(monthCountInRange(effectiveStart, end), remainingMonths);
  const depreciable = Math.max(
    0,
    Number(asset.cost || 0) - Number(asset.salvageValue || 0),
  );
  return Number(asset.usefulLifeMonths || 0)
    ? (depreciable / Number(asset.usefulLifeMonths)) * months
    : 0;
}

function openingJournalEntries() {
  const opening = state.openingBalances;
  const rows = [];
  const add = (debitCode, creditCode, amount, description) => {
    if (!Number(amount)) return;
    rows.push({
      id: `opening-${debitCode}-${creditCode}`,
      date: opening.asOf,
      reference: "SALDO-AWAL",
      description,
      debitCode,
      creditCode,
      amount: Number(amount),
      source: "Saldo Awal",
      automatic: true,
      by: "Keuangan",
    });
  };
  add("1101", "3199", opening.cash, "Saldo awal kas");
  add("1102", "3199", opening.bank, "Saldo awal bank");
  add("1103", "3199", opening.inventory, "Saldo awal persediaan");
  add("1201", "3199", opening.fixedAssetCost, "Saldo awal aset tetap");
  add("3199", "1202", opening.accumulatedDepreciation, "Akumulasi penyusutan awal");
  add("3199", "2199", opening.liabilities, "Kewajiban awal");
  add("3199", "3101", opening.initialCapital, "Modal awal");
  return rows;
}

function journalEntriesForRange(start, end, includeOpening = false) {
  const rows = [];
  const add = (entry) => {
    const amount = Number(entry.amount || 0);
    if (!amount || !dateInRange(entry.date, start, end)) return;
    rows.push({ automatic: true, ...entry, amount });
  };
  state.transactions.filter(isActiveTransaction).forEach((tx) => {
    const date = tx.businessDate || businessDate();
    const gross = Number(tx.total || 0);
    const tax = includedTax(gross);
    const sales = gross - tax;
    add({
      id: `sale-${tx.id}`,
      date,
      reference: `PESANAN-${tx.id}`,
      description: `Penjualan oleh ${tx.operator || "petugas"}`,
      debitCode: "1102",
      creditCode: "4101",
      amount: sales,
      source: "Penjualan",
      by: tx.operator || "Sistem",
    });
    add({
      id: `tax-${tx.id}`,
      date,
      reference: `PESANAN-${tx.id}`,
      description: state.tax.label,
      debitCode: "1102",
      creditCode: "2101",
      amount: tax,
      source: "Pajak",
      by: tx.operator || "Sistem",
    });
    add({
      id: `hpp-${tx.id}`,
      date,
      reference: `PESANAN-${tx.id}`,
      description: "Pemakaian bahan berdasarkan resep",
      debitCode: "5101",
      creditCode: "1103",
      amount: transactionHpp(tx),
      source: "HPP",
      by: "Sistem",
    });
  });
  state.expenses.forEach((expense) =>
    add({
      id: `expense-${expense.id}`,
      date: expense.date,
      reference: expense.invoice,
      description: `${expense.vendor}${expense.note ? `, ${expense.note}` : ""}`,
      debitCode: expense.accountCode || defaultExpenseAccountCode(expense),
      creditCode: "1102",
      amount: expense.amount,
      source: "Biaya",
      by: expense.by,
    }),
  );
  state.purchases.forEach((purchase) =>
    add({
      id: `purchase-${purchase.id}`,
      date: purchase.date || businessDate(),
      reference: purchase.invoice,
      description: `Pembelian ${purchase.itemName} dari ${purchase.vendor}`,
      debitCode: "1103",
      creditCode: "1102",
      amount: purchase.totalPrice,
      source: "Pembelian Stok",
      by: purchase.by,
    }),
  );
  state.stockWastages.forEach((wastage) =>
    add({
      id: `wastage-${wastage.id}`,
      date: wastage.date,
      reference: `STOK-KELUAR-${wastage.id}`,
      description: `${wastage.itemName}, ${wastage.reason}${wastage.note ? `, ${wastage.note}` : ""}`,
      debitCode: "6202",
      creditCode: "1103",
      amount: wastage.totalCost,
      source: "Stok Keluar",
      by: wastage.by,
    }),
  );
  state.financeAdjustments.forEach((adjustment) => {
    const revenue = adjustment.target === "Pendapatan";
    const increase = adjustment.direction === "Tambah";
    add({
      id: `adjustment-${adjustment.id}`,
      date: adjustment.date,
      reference: adjustment.reference,
      description: adjustment.reason,
      debitCode: revenue ? (increase ? "1102" : "4101") : increase ? "6302" : "1102",
      creditCode: revenue ? (increase ? "4101" : "1102") : increase ? "1102" : "6302",
      amount: adjustment.amount,
      source: "Koreksi",
      by: adjustment.by,
    });
  });
  state.fixedAssets.forEach((asset) => {
    if (!asset.isOpening)
      add({
        id: `asset-${asset.id}`,
        date: asset.acquisitionDate,
        reference: asset.reference || `ASET-${asset.id}`,
        description: `Perolehan aset ${asset.name}`,
        debitCode: "1201",
        creditCode: "1102",
        amount: asset.cost,
        source: "Aset Tetap",
        by: asset.by,
      });
    const depreciationStart =
      state.openingBalances.asOf > start ? state.openingBalances.asOf : start;
    const depreciation = assetDepreciation(asset, depreciationStart, end);
    add({
      id: `depreciation-${asset.id}-${start}-${end}`,
      date: end,
      reference: `SUSUT-${asset.id}`,
      description: `Penyusutan garis lurus ${asset.name}`,
      debitCode: asset.category === "Bangunan" ? "6213" : "6214",
      creditCode: "1202",
      amount: depreciation,
      source: "Penyusutan",
      by: "Sistem",
    });
  });
  state.manualJournals.forEach((journal) =>
    add({ ...journal, source: "Jurnal Manual", automatic: false }),
  );
  if (includeOpening && dateInRange(state.openingBalances.asOf, start, end))
    rows.push(...openingJournalEntries());
  return rows.sort(
    (a, b) =>
      String(a.date).localeCompare(String(b.date)) ||
      String(a.reference).localeCompare(String(b.reference)),
  );
}

function accountMovement(entries, code) {
  return entries.reduce(
    (sum, entry) =>
      sum +
      (entry.debitCode === code ? entry.amount : 0) -
      (entry.creditCode === code ? entry.amount : 0),
    0,
  );
}

function accountReportCode(account) {
  return account.reportCode || ACCOUNT_REPORT_CODES[account.code] || account.code;
}

function reportDateLabel(date) {
  const value = new Date(`${date}T12:00:00+07:00`);
  if (Number.isNaN(value.getTime())) return String(date || "");
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  })
    .format(value)
    .toUpperCase();
}

function trialBalanceNumber(value, showZero = false) {
  const amount = Math.round(Math.abs(Number(value || 0)));
  if (!amount && !showZero) return "";
  return new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 }).format(
    amount,
  );
}

function trialBalanceReport(end = businessDate()) {
  const openingDate = state.openingBalances.asOf || end;
  const start = openingDate <= end ? openingDate : end;
  const entries = journalEntriesForRange(start, end, true);
  const rows = activeAccounts()
    .map((account) => {
      const balance = accountMovement(entries, account.code);
      return {
        ...account,
        reportCode: accountReportCode(account),
        balance,
        debit: balance > 0 ? balance : 0,
        credit: balance < 0 ? Math.abs(balance) : 0,
      };
    })
    .sort((a, b) =>
      a.reportCode.localeCompare(b.reportCode, "id-ID", { numeric: true }),
    );
  const totalDebit = rows.reduce((sum, row) => sum + row.debit, 0);
  const totalCredit = rows.reduce((sum, row) => sum + row.credit, 0);
  return {
    start,
    end,
    rows,
    entries,
    totalDebit,
    totalCredit,
    difference: totalDebit - totalCredit,
  };
}

function profitLossReport(start, end) {
  const entries = journalEntriesForRange(start, end);
  const details = (group, creditNormal = false) =>
    activeAccounts([group]).map((account) => ({
      ...account,
      amount:
        accountMovement(entries, account.code) * (creditNormal ? -1 : 1),
    }));
  const revenueDetails = details("revenue", true);
  const otherIncomeDetails = details("other-income", true);
  const cogsDetails = details("cogs");
  const sellingDetails = details("selling-expense");
  const adminDetails = details("admin-expense");
  const otherExpenseDetails = details("other-expense");
  const total = (rows) => rows.reduce((sum, row) => sum + row.amount, 0);
  const revenue = total(revenueDetails);
  const cogs = total(cogsDetails);
  const grossProfit = revenue - cogs;
  const sellingExpenses = total(sellingDetails);
  const adminExpenses = total(adminDetails);
  const operatingProfit = grossProfit - sellingExpenses - adminExpenses;
  const otherIncome = total(otherIncomeDetails);
  const otherExpenses = total(otherExpenseDetails);
  return {
    start,
    end,
    entries,
    revenueDetails,
    otherIncomeDetails,
    cogsDetails,
    sellingDetails,
    adminDetails,
    otherExpenseDetails,
    revenue,
    cogs,
    grossProfit,
    sellingExpenses,
    adminExpenses,
    operatingProfit,
    otherIncome,
    otherExpenses,
    netProfit: operatingProfit + otherIncome - otherExpenses,
  };
}

function openingBalanceDifference() {
  const opening = state.openingBalances;
  const assets =
    Number(opening.cash || 0) +
    Number(opening.bank || 0) +
    Number(opening.inventory || 0) +
    Number(opening.fixedAssetCost || 0) -
    Number(opening.accumulatedDepreciation || 0);
  return assets - Number(opening.liabilities || 0) - Number(opening.initialCapital || 0);
}

function balanceSheetReport(end) {
  const opening = state.openingBalances;
  const balances = new Map(state.accountingAccounts.map((account) => [account.code, 0]));
  balances.set("1101", Number(opening.cash || 0));
  balances.set("1102", Number(opening.bank || 0));
  balances.set("1103", Number(opening.inventory || 0));
  balances.set("1201", Number(opening.fixedAssetCost || 0));
  balances.set("1202", -Number(opening.accumulatedDepreciation || 0));
  balances.set("2199", -Number(opening.liabilities || 0));
  balances.set("3101", -Number(opening.initialCapital || 0));
  const entries = journalEntriesForRange(opening.asOf, end);
  entries.forEach((entry) => {
    balances.set(
      entry.debitCode,
      Number(balances.get(entry.debitCode) || 0) + entry.amount,
    );
    balances.set(
      entry.creditCode,
      Number(balances.get(entry.creditCode) || 0) - entry.amount,
    );
  });
  const assetRows = activeAccounts(["asset-current"]).map((account) => ({
    ...account,
    amount: Number(balances.get(account.code) || 0),
  }));
  const fixedRows = activeAccounts(["asset-fixed", "contra-asset"]).map(
    (account) => ({ ...account, amount: Number(balances.get(account.code) || 0) }),
  );
  const liabilityRows = activeAccounts(["liability"]).map((account) => ({
    ...account,
    amount: -Number(balances.get(account.code) || 0),
  }));
  const equityRows = activeAccounts(["equity"]).map((account) => ({
    ...account,
    amount: -Number(balances.get(account.code) || 0),
  }));
  const currentProfit = profitLossReport(opening.asOf, end).netProfit;
  const sum = (rows) => rows.reduce((total, row) => total + row.amount, 0);
  const currentAssets = sum(assetRows);
  const fixedAssets = sum(fixedRows);
  const totalAssets = currentAssets + fixedAssets;
  const liabilities = sum(liabilityRows);
  const equity = sum(equityRows) + currentProfit;
  const physicalInventoryValue = state.ingredients.reduce(
    (total, item) => total + Number(item.qty || 0) * Number(item.avgCost || 0),
    0,
  );
  return {
    end,
    assetRows,
    fixedRows,
    liabilityRows,
    equityRows,
    currentAssets,
    fixedAssets,
    totalAssets,
    liabilities,
    equity,
    currentProfit,
    totalLiabilitiesEquity: liabilities + equity,
    difference: totalAssets - liabilities - equity,
    physicalInventoryValue,
    inventoryDifference:
      Number(balances.get("1103") || 0) - physicalInventoryValue,
  };
}

function latestClosing(date = businessDate()) {
  return (
    state.financeClosings
      .filter((closing) => closing.date === date)
      .sort((a, b) => Number(b.version || 1) - Number(a.version || 1))[0] ||
    null
  );
}

function closingNeedsRevision(date = businessDate()) {
  const closing = latestClosing(date);
  if (!closing) return false;
  return state.financeAdjustments.some(
    (row) =>
      row.date === date && row.createdAtIso > (closing.closedAtIso || ""),
  );
}

function financeTabsHtml() {
  const tabs = [
    ["summary", "Ringkasan"],
    ["income", "Laba Rugi"],
    ["balance", "Neraca"],
    ["trial", "Neraca Saldo"],
    ["journal", "Jurnal dan Saldo"],
  ];
  return `<div class="segmented finance-tabs">${tabs
    .map(
      ([value, label]) =>
        `<button class="segment ${state.financeTab === value ? "active" : ""}" data-action="finance-tab" data-tab="${value}">${label}</button>`,
    )
    .join("")}</div>`;
}

function financePeriodControls() {
  const { start, end } = financeRange();
  return `<div class="finance-filter"><div class="field"><label>Mulai</label><input id="finance-period-start" type="date" value="${start}" /></div><div class="field"><label>Sampai</label><input id="finance-period-end" type="date" value="${end}" max="${businessDate()}" /></div><div class="finance-presets"><button class="button ghost compact" data-action="finance-period-preset" data-period="month">Bulan Ini</button><button class="button ghost compact" data-action="finance-period-preset" data-period="year">Tahun Ini</button></div></div>`;
}

function financeAsOfControls() {
  const { end } = financeRange();
  return `<div class="finance-filter"><div class="field"><label>Per tanggal</label><input id="finance-period-end" type="date" value="${end}" max="${businessDate()}" /></div></div>`;
}

function financeReportActions() {
  return `<div class="report-actions"><button class="button secondary" data-action="finance-import-excel">${icon("upload")}Impor Jurnal</button><button class="button secondary" data-action="finance-import-pdf">${icon("upload")}Arsip PDF</button><button class="button secondary" data-action="export-finance-excel">${icon("download")}Excel</button><button class="button primary" data-action="export-finance-pdf">${icon("download")}PDF</button></div>`;
}

function statementRows(rows, showZero = true) {
  const visible = showZero ? rows : rows.filter((row) => Math.abs(row.amount) >= 1);
  return (
    visible
      .map(
        (row) =>
          `<div class="statement-row detail"><span>${escapeHtml(row.name)}</span><strong>${rupiah(row.amount)}</strong></div>`,
      )
      .join("") ||
    `<div class="statement-row detail muted"><span>Belum ada nilai</span><strong>${rupiah(0)}</strong></div>`
  );
}

function renderProfitLoss() {
  const { start, end } = financeRange();
  const report = profitLossReport(start, end);
  return `<div class="page-stack">
    ${financeTabsHtml()}
    <div class="section-head report-head"><div><h2>Laporan Laba Rugi</h2><p>${escapeHtml(state.accountingSettings.companyName)} | ${start} sampai ${end}</p></div>${financeReportActions()}</div>
    ${financePeriodControls()}
    <section class="surface statement-sheet">
      <div class="statement-title"><strong>${escapeHtml(state.accountingSettings.companyName)}</strong><h3>LAPORAN LABA RUGI</h3><span>${start} sampai ${end}</span></div>
      <div class="statement-section"><h4>PENDAPATAN</h4>${statementRows(report.revenueDetails)}<div class="statement-row total"><span>TOTAL PENDAPATAN</span><strong>${rupiah(report.revenue)}</strong></div></div>
      <div class="statement-section"><h4>HARGA POKOK PENJUALAN</h4>${statementRows(report.cogsDetails)}<div class="statement-row total"><span>LABA KOTOR</span><strong>${rupiah(report.grossProfit)}</strong></div></div>
      <div class="statement-section"><h4>BEBAN PENJUALAN</h4>${statementRows(report.sellingDetails)}<div class="statement-row subtotal"><span>Total Beban Penjualan</span><strong>${rupiah(report.sellingExpenses)}</strong></div></div>
      <div class="statement-section"><h4>BEBAN UMUM DAN ADMINISTRASI</h4>${statementRows(report.adminDetails)}<div class="statement-row subtotal"><span>Total Beban Umum dan Administrasi</span><strong>${rupiah(report.adminExpenses)}</strong></div><div class="statement-row total"><span>LABA USAHA</span><strong>${rupiah(report.operatingProfit)}</strong></div></div>
      <div class="statement-section"><h4>PENDAPATAN DAN BEBAN LAIN</h4>${statementRows(report.otherIncomeDetails, false)}${statementRows(report.otherExpenseDetails, false)}<div class="statement-row total net"><span>LABA BERSIH</span><strong>${rupiah(report.netProfit)}</strong></div></div>
    </section>
  </div>`;
}

function renderBalanceSheet() {
  const { end } = financeRange();
  const report = balanceSheetReport(end);
  const balanced = Math.abs(report.difference) < 1;
  return `<div class="page-stack">
    ${financeTabsHtml()}
    <div class="section-head report-head"><div><h2>Laporan Neraca</h2><p>${escapeHtml(state.accountingSettings.companyName)} | per ${end}</p></div>${financeReportActions()}</div>
    ${financePeriodControls()}
    <div class="balance-check ${balanced ? "ok" : "warning"}">${icon(balanced ? "check" : "warning")}<span><strong>${balanced ? "Neraca seimbang" : `Selisih ${rupiah(report.difference)}`}</strong><small>${balanced ? "Total aset sama dengan kewajiban dan ekuitas." : "Periksa saldo awal, akun jurnal, atau transaksi yang belum lengkap."}</small></span></div>
    <section class="surface statement-sheet">
      <div class="statement-title"><strong>${escapeHtml(state.accountingSettings.companyName)}</strong><h3>LAPORAN NERACA</h3><span>Per ${end}</span></div>
      <div class="balance-columns">
        <div><div class="statement-section"><h4>ASET LANCAR</h4>${statementRows(report.assetRows)}<div class="statement-row subtotal"><span>Total Aset Lancar</span><strong>${rupiah(report.currentAssets)}</strong></div></div><div class="statement-section"><h4>ASET TETAP</h4>${statementRows(report.fixedRows)}<div class="statement-row subtotal"><span>Total Aset Tetap</span><strong>${rupiah(report.fixedAssets)}</strong></div><div class="statement-row total net"><span>TOTAL ASET</span><strong>${rupiah(report.totalAssets)}</strong></div></div></div>
        <div><div class="statement-section"><h4>KEWAJIBAN</h4>${statementRows(report.liabilityRows)}<div class="statement-row subtotal"><span>Total Kewajiban</span><strong>${rupiah(report.liabilities)}</strong></div></div><div class="statement-section"><h4>EKUITAS</h4>${statementRows(report.equityRows)}<div class="statement-row detail"><span>Laba Periode Berjalan</span><strong>${rupiah(report.currentProfit)}</strong></div><div class="statement-row subtotal"><span>Total Ekuitas</span><strong>${rupiah(report.equity)}</strong></div><div class="statement-row total net"><span>TOTAL KEWAJIBAN DAN EKUITAS</span><strong>${rupiah(report.totalLiabilitiesEquity)}</strong></div></div></div>
      </div>
    </section>
    <section class="surface"><div class="panel-title"><div><h3>Kontrol Persediaan</h3><p>Bandingkan nilai buku dengan nilai stok fisik terkini.</p></div><span class="tag ${Math.abs(report.inventoryDifference) < 1 ? "empty" : "reserved"}">${Math.abs(report.inventoryDifference) < 1 ? "Sesuai" : "Perlu Cek"}</span></div><div class="activity-list">${activityRow(icon("report"), "Nilai buku persediaan", `Per ${end}`, rupiah(report.assetRows.find((row) => row.code === "1103")?.amount || 0))}${activityRow(icon("inventory"), "Nilai stok fisik", "Jumlah stok dikali HPP rata-rata", rupiah(report.physicalInventoryValue))}${activityRow(icon("warning"), "Selisih", "Gunakan hitung stok jika berbeda", rupiah(report.inventoryDifference))}</div></section>
  </div>`;
}

function renderTrialBalance() {
  const { end } = financeRange();
  const report = trialBalanceReport(end);
  const balanced = Math.abs(report.difference) < 1;
  return `<div class="page-stack">
    ${financeTabsHtml()}
    <div class="section-head report-head"><div><h2>Neraca Saldo</h2><p>${escapeHtml(state.accountingSettings.companyName)} | per ${end}</p></div>${financeReportActions()}</div>
    ${financeAsOfControls()}
    <div class="balance-check ${balanced ? "ok" : "warning"}">${icon(balanced ? "check" : "warning")}<span><strong>${balanced ? "Debet dan kredit seimbang" : `Selisih ${rupiah(report.difference)}`}</strong><small>${balanced ? `${report.rows.length} akun diperiksa sampai ${end}.` : "Periksa saldo awal dan jurnal sebelum laporan digunakan."}</small></span></div>
    <section class="surface statement-sheet trial-balance-sheet">
      <div class="statement-title"><strong>${escapeHtml(state.accountingSettings.companyName)}</strong><h3>NERACA SALDO</h3><span>PER ${reportDateLabel(end)}</span></div>
      <div class="table-scroll"><table class="data-table trial-balance-table"><thead><tr><th rowspan="2">COA</th><th rowspan="2">Nama Akun</th><th colspan="2">Saldo Akhir</th></tr><tr><th>Debet</th><th>Kredit</th></tr></thead><tbody>${report.rows.map((row) => `<tr><td><strong>${escapeHtml(row.reportCode)}</strong></td><td>${escapeHtml(row.name.toUpperCase())}</td><td>${trialBalanceNumber(row.debit)}</td><td>${trialBalanceNumber(row.credit)}</td></tr>`).join("")}<tr class="trial-balance-total"><td></td><td>JUMLAH</td><td>${trialBalanceNumber(report.totalDebit, true)}</td><td>${trialBalanceNumber(report.totalCredit, true)}</td></tr></tbody></table></div>
    </section>
  </div>`;
}

function renderJournalAndBalances() {
  const { start, end } = financeRange();
  const entries = journalEntriesForRange(start, end, true);
  const openingDifference = openingBalanceDifference();
  return `<div class="page-stack">
    ${financeTabsHtml()}
    <div class="section-head report-head"><div><h2>Jurnal dan Saldo Awal</h2><p>${entries.length} baris jurnal | ${start} sampai ${end}</p></div>${financeReportActions()}</div>
    ${financePeriodControls()}
    <div class="finance-action-bar"><button class="button secondary" data-action="opening-balance">${icon("report")}Saldo Awal</button><button class="button secondary" data-action="fixed-asset">${icon("plus")}Aset Tetap</button><button class="button secondary" data-action="accounting-accounts">${icon("admin")}Daftar Akun</button><button class="button primary" data-action="manual-journal">${icon("plus")}Jurnal Manual</button></div>
    <div class="two-column"><section class="surface"><div class="panel-title"><div><h3>Saldo Awal</h3><p>Per ${state.openingBalances.asOf}</p></div><span class="tag ${Math.abs(openingDifference) < 1 ? "empty" : "reserved"}">${Math.abs(openingDifference) < 1 ? "Seimbang" : "Selisih"}</span></div><div class="activity-list">${activityRow(icon("report"), "Aset bersih awal", "Kas, bank, persediaan, dan aset tetap", rupiah(Number(state.openingBalances.cash || 0) + Number(state.openingBalances.bank || 0) + Number(state.openingBalances.inventory || 0) + Number(state.openingBalances.fixedAssetCost || 0) - Number(state.openingBalances.accumulatedDepreciation || 0)))}${activityRow(icon("finance"), "Kewajiban dan modal", "Dasar ekuitas awal", rupiah(Number(state.openingBalances.liabilities || 0) + Number(state.openingBalances.initialCapital || 0)))}${activityRow(icon(Math.abs(openingDifference) < 1 ? "check" : "warning"), "Selisih saldo awal", "Harus mendekati nol", rupiah(openingDifference))}</div></section>
      <section class="surface"><div class="panel-title"><div><h3>Register Aset Tetap</h3><p>Penyusutan garis lurus per bulan.</p></div><span class="attention-count">${state.fixedAssets.length}</span></div><div class="activity-list">${state.fixedAssets.map((asset) => activityRow(icon("inventory"), asset.name, `${asset.category} | ${asset.usefulLifeMonths} bulan | ${asset.acquisitionDate}`, rupiah(asset.cost))).join("") || `<p class="muted">Belum ada aset terdaftar.</p>`}</div></section></div>
    <section class="surface"><div class="panel-title"><div><h3>Jurnal Umum</h3><p>Baris otomatis memiliki sumber transaksi.</p></div><span class="access-scope">${state.accountingAccounts.length} akun</span></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Tanggal</th><th>Referensi</th><th>Keterangan</th><th>Akun Debit</th><th>Akun Kredit</th><th>Nominal</th><th>Sumber</th><th>Aksi</th></tr></thead><tbody>${entries.map((entry) => `<tr><td>${entry.date}</td><td><strong>${escapeHtml(entry.reference || "-")}</strong></td><td>${escapeHtml(entry.description || "-")}</td><td>${entry.debitCode} ${escapeHtml(accountingAccount(entry.debitCode)?.name || "")}</td><td>${entry.creditCode} ${escapeHtml(accountingAccount(entry.creditCode)?.name || "")}</td><td><strong>${rupiah(entry.amount)}</strong></td><td><span class="tag ${entry.automatic === false ? "reserved" : "empty"}">${escapeHtml(entry.source)}</span></td><td>${entry.automatic === false && !entry.reversedById && !entry.reversalOf ? `<button class="button ghost compact" data-action="reverse-journal" data-id="${entry.id}">Balik Jurnal</button>` : entry.reversedById ? `<span class="tag empty">Sudah Dibalik</span>` : "-"}</td></tr>`).join("") || `<tr><td colspan="8" class="muted">Belum ada jurnal pada periode ini.</td></tr>`}</tbody></table></div></section>
  </div>`;
}

function renderFinance() {
  if (state.financeTab === "income") return renderProfitLoss();
  if (state.financeTab === "balance") return renderBalanceSheet();
  if (state.financeTab === "trial") return renderTrialBalance();
  if (state.financeTab === "journal") return renderJournalAndBalances();
  return renderFinanceSummary();
}

function renderFinanceSummary() {
  const metrics = financeMetrics();
  const todayTransactions = state.transactions.filter(
    (tx) =>
      (tx.businessDate || businessDate()) === businessDate() &&
      isActiveTransaction(tx),
  );
  const pending = todayTransactions.filter(
    (tx) => tx.reconciliationStatus !== "Sesuai",
  );
  const closing = latestClosing();
  const needsRevision = closingNeedsRevision();
  const readiness = closingReadiness();
  return `<div class="page-stack">
    ${financeTabsHtml()}
    <div class="section-head"><div><h2>Kontrol keuangan harian</h2><p>${businessDate()} · ${readiness.ready ? "siap ditutup" : readiness.blockers.join(" · ")}.</p></div><div class="inventory-toolbar"><button class="button secondary" data-action="finance-adjustment">${icon("tag")}Koreksi</button><button class="button secondary" data-action="add-expense">${icon("plus")}Catat Biaya</button><button class="button primary" data-action="finance-close" ${closing && !needsRevision ? "disabled" : ""}>${icon("check")}${closing ? (needsRevision ? `Terbitkan Revisi v${Number(closing.version || 1) + 1}` : `Ditutup v${closing.version || 1}`) : readiness.ready ? "Tutup Buku Hari Ini" : "Cek Kesiapan"}</button></div></div>
    <div class="stats-grid">
      ${statCard("Penjualan bruto", rupiah(metrics.grossSales), "report", `${metrics.transactionCount} transaksi digital`)}
      ${statCard(metrics.estimatedHppCount ? "Laba kotor campuran" : "Laba kotor", rupiah(metrics.grossProfit), "menuItem", metrics.estimatedHppCount ? `${metrics.estimatedHppCount} transaksi memakai HPP estimasi` : `Setelah HPP resep ${rupiah(metrics.hpp)}`)}
      ${statCard("Pajak terkandung", rupiah(metrics.tax), "receipt", `${state.tax.label} ${state.tax.rate}%`)}
      ${statCard("Laba operasional estimasi", rupiah(metrics.operatingProfit), "dashboard", "Pendapatan - HPP - biaya")}
    </div>
    <div class="two-column">
      <section class="surface"><div class="section-head compact-head"><div><h3>Rekonsiliasi Pembayaran</h3><p>${pending.length} transaksi belum dicocokkan.</p></div></div><div class="activity-list">
        ${activityRow(icon("receipt"), "QRIS BNI", `${todayTransactions.filter((tx) => tx.method.startsWith("QRIS") && tx.reconciliationStatus !== "Sesuai").length} belum sesuai`, rupiah(metrics.qris))}
        ${activityRow(icon("pay"), "Kartu debit", `${todayTransactions.filter((tx) => tx.method === "Debit" && tx.reconciliationStatus !== "Sesuai").length} belum sesuai`, rupiah(metrics.debit))}
      </div>${pending.length ? `<div class="table-scroll"><table class="data-table"><thead><tr><th>Pesanan</th><th>Metode</th><th>Total</th><th>Aksi</th></tr></thead><tbody>${pending.map((tx) => `<tr><td><strong>#${tx.id}</strong></td><td>${tx.method}</td><td>${rupiah(tx.total)}</td><td><button class="button ghost compact" data-action="reconcile-payment" data-id="${tx.id}">Tandai Sesuai</button></td></tr>`).join("")}</tbody></table></div>` : `<p class="helper-note">Semua transaksi sudah dicocokkan.</p>`}</section>
      <section class="surface"><h3>Posisi hari ini</h3><div class="activity-list">
        ${activityRow(icon("report"), "Pendapatan bersih pajak", `Bruto ${rupiah(metrics.grossSales)}`, rupiah(metrics.sales))}
        ${activityRow(icon("inventory"), "HPP estimasi", "Biaya bahan terpakai", `- ${rupiah(metrics.hpp)}`)}
        ${activityRow(icon("pay"), "Biaya operasional", "Di luar pembelian stok", `- ${rupiah(metrics.expenses)}`)}
        ${activityRow(icon("dashboard"), "Laba operasional", "Estimasi sebelum biaya lain/pajak", rupiah(metrics.operatingProfit))}
      </div></section>
    </div>
    <section class="surface"><div class="section-head compact-head"><div><h3>Biaya operasional</h3><p>Pembelian bahan tetap tercatat terpisah sebagai persediaan.</p></div></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Tanggal</th><th>Kategori</th><th>Vendor</th><th>Nomor Nota</th><th>Metode</th><th>Catatan</th><th>Jumlah</th></tr></thead><tbody>${
      state.expenses
        .filter((expense) => expense.date === businessDate())
        .slice()
        .reverse()
        .map(
          (expense) =>
            `<tr><td>${expense.date}</td><td>${expense.category}</td><td><strong>${escapeHtml(expense.vendor)}</strong></td><td>${escapeHtml(expense.invoice)}</td><td>${expense.method}</td><td>${escapeHtml(expense.note || "-")}</td><td><strong>${rupiah(expense.amount)}</strong></td></tr>`,
        )
        .join("") ||
      `<tr><td colspan="7" class="muted">Belum ada biaya operasional hari ini.</td></tr>`
    }</tbody></table></div></section>
    ${
      state.financeAdjustments.length
        ? `<section class="surface"><h3>Koreksi Keuangan</h3><div class="activity-list">${state.financeAdjustments
            .slice()
            .reverse()
            .map((row) =>
              activityRow(
                icon("tag"),
                `${row.target} · ${row.direction}`,
                `${row.date} · ${row.reference} · ${row.by} · ${row.reason}`,
                `${row.direction === "Tambah" ? "+" : "-"} ${rupiah(row.amount)}`,
              ),
            )
            .join("")}</div></section>`
        : ""
    }
    ${
      state.financeClosings.length
        ? `<section class="surface"><h3>Riwayat Tutup Buku</h3><div class="activity-list">${state.financeClosings
            .slice()
            .reverse()
            .map((row) =>
              activityRow(
                icon("check"),
                `${row.date} · v${row.version || 1}`,
                `${row.by} · ${row.createdAt} · ${row.note}`,
                rupiah(row.operatingProfit),
              ),
            )
            .join("")}</div></section>`
        : ""
    }
  </div>`;
}

function expenseModal() {
  showModal(
    `<div class="modal-head"><div><h2>Catat Biaya Operasional</h2><p>Untuk biaya selain pembelian stok.</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div><div class="modal-body"><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="field"><label>Tanggal</label><input id="expense-date" type="date" value="${filenameDate()}" /></div><div class="field"><label>Akun biaya</label><select id="expense-account">${activeAccounts(["selling-expense", "admin-expense", "other-expense"]).map((account) => `<option value="${account.code}" ${account.code === "6202" ? "selected" : ""}>${account.code} | ${escapeHtml(account.name)}</option>`).join("")}</select></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px"><div class="field"><label>Vendor / penerima</label><input id="expense-vendor" placeholder="Nama vendor atau penerima" /></div><div class="field"><label>Nomor nota</label><input id="expense-invoice" placeholder="Nomor bukti transaksi" /></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px"><div class="field"><label>Metode pembayaran</label><select id="expense-method"><option>Transfer</option><option>QRIS</option><option>Kartu Debit</option></select></div><div class="field"><label>Jumlah</label><input id="expense-amount" type="number" min="1" placeholder="Rp 0" /></div></div><div class="field" style="margin-top:12px"><label>Catatan</label><textarea id="expense-note" placeholder="Tujuan pengeluaran"></textarea></div></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="save-expense">Simpan Biaya</button></div>`,
  );
}

function financeAdjustmentModal() {
  showModal(
    `<div class="modal-head"><div><h2>Koreksi Keuangan</h2><p>Angka lama tetap tersimpan dalam riwayat.</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div><div class="modal-body"><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="field"><label>Tanggal bisnis</label><input id="adjustment-date" type="date" value="${businessDate()}" max="${businessDate()}" /></div><div class="field"><label>Referensi</label><input id="adjustment-reference" placeholder="Pesanan, nota, atau dokumen" /></div></div><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:12px"><div class="field"><label>Dikoreksi pada</label><select id="adjustment-target"><option>Pendapatan</option><option>Biaya</option></select></div><div class="field"><label>Arah koreksi</label><select id="adjustment-direction"><option>Tambah</option><option>Kurang</option></select></div><div class="field"><label>Nominal</label><input id="adjustment-amount" type="number" min="1" placeholder="Rp 0" /></div></div><div class="field" style="margin-top:12px"><label>Alasan koreksi (wajib)</label><textarea id="adjustment-reason" placeholder="Jelaskan dasar koreksi"></textarea></div><p class="helper-note">Tanggal yang sudah ditutup akan dibuatkan versi laporan baru.</p></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="save-finance-adjustment">Simpan Koreksi</button></div>`,
  );
}

function financeCloseModal() {
  const metrics = financeMetrics();
  const readiness = closingReadiness();
  const current = latestClosing();
  const version = Number(current?.version || 0) + 1;
  const checks = [
    {
      ok: !readiness.shiftOpen,
      label: readiness.shiftOpen
        ? "Shift outlet masih berjalan"
        : "Shift outlet sudah ditutup",
    },
    {
      ok: !readiness.openBills.length,
      label: readiness.openBills.length
        ? `${readiness.openBills.length} tagihan aktif belum selesai`
        : "Semua tagihan selesai",
    },
    {
      ok: !readiness.pendingTransactions.length,
      label: readiness.pendingTransactions.length
        ? `${readiness.pendingTransactions.length} pembayaran belum sesuai`
        : "Semua pembayaran sudah cocok",
    },
  ];
  showModal(
    `<div class="modal-head"><div><h2>${current ? `Terbitkan Revisi v${version}` : "Tutup Buku Harian"}</h2><p>Versi sebelumnya tetap tersimpan.</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div><div class="modal-body"><div class="payment-total"><small>Laba operasional estimasi</small><strong>${rupiah(metrics.operatingProfit)}</strong></div><div class="summary-row"><span>Penjualan bruto</span><strong>${rupiah(metrics.grossSales)}</strong></div><div class="summary-row"><span>Pajak terkandung</span><strong>- ${rupiah(metrics.tax)}</strong></div><div class="summary-row"><span>Pendapatan bersih</span><strong>${rupiah(metrics.sales)}</strong></div><div class="summary-row"><span>HPP estimasi</span><strong>${rupiah(metrics.hpp)}</strong></div><div class="summary-row"><span>Biaya operasional</span><strong>${rupiah(metrics.expenses)}</strong></div><div class="closing-checklist">${checks.map((item) => `<div class="check-row ${item.ok ? "done" : "pending"}">${icon(item.ok ? "check" : "warning")}<span><strong>${item.label}</strong></span></div>`).join("")}</div><div class="field" style="margin-top:12px"><label>Catatan penutupan (wajib)</label><textarea id="finance-close-note" placeholder="Catatan untuk Pemilik"></textarea></div></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="confirm-finance-close" ${readiness.ready ? "" : "disabled"}>${current ? "Terbitkan Revisi" : "Konfirmasi Tutup Buku"}</button></div>`,
  );
}

function accountOptions(selected = "") {
  return activeAccounts()
    .map(
      (account) =>
        `<option value="${account.code}" ${String(account.code) === String(selected) ? "selected" : ""}>${account.code} | ${escapeHtml(account.name)}</option>`,
    )
    .join("");
}

function openingBalanceModal() {
  const opening = state.openingBalances;
  showModal(
    `<div class="modal-head"><div><h2>Saldo Awal Akuntansi</h2><p>Masukkan posisi sebelum transaksi CafePOS mulai dibukukan.</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div><div class="modal-body"><div class="field"><label>Tanggal saldo awal</label><input id="opening-date" type="date" value="${opening.asOf}" /></div><div class="form-grid two" style="margin-top:12px"><div class="field"><label>Kas</label><input id="opening-cash" type="number" min="0" value="${Number(opening.cash || 0)}" /></div><div class="field"><label>Bank</label><input id="opening-bank" type="number" min="0" value="${Number(opening.bank || 0)}" /></div><div class="field"><label>Persediaan</label><input id="opening-inventory" type="number" min="0" value="${Number(opening.inventory || 0)}" /></div><div class="field"><label>Harga perolehan aset tetap</label><input id="opening-fixed-assets" type="number" min="0" value="${Number(opening.fixedAssetCost || 0)}" /></div><div class="field"><label>Akumulasi penyusutan</label><input id="opening-depreciation" type="number" min="0" value="${Number(opening.accumulatedDepreciation || 0)}" /></div><div class="field"><label>Kewajiban</label><input id="opening-liabilities" type="number" min="0" value="${Number(opening.liabilities || 0)}" /></div><div class="field"><label>Modal awal</label><input id="opening-capital" type="number" min="0" value="${Number(opening.initialCapital || 0)}" /></div></div><p class="helper-note">Sistem menerima saldo yang belum seimbang, lalu menampilkan selisih sebagai kontrol Finance.</p></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="save-opening-balance">Simpan Saldo Awal</button></div>`,
    true,
  );
}

function manualJournalModal() {
  showModal(
    `<div class="modal-head"><div><h2>Jurnal Manual</h2><p>Debit dan kredit harus menggunakan akun berbeda.</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div><div class="modal-body"><div class="form-grid two"><div class="field"><label>Tanggal</label><input id="journal-date" type="date" value="${businessDate()}" /></div><div class="field"><label>Referensi</label><input id="journal-reference" placeholder="Nomor bukti atau memo" /></div></div><div class="field" style="margin-top:12px"><label>Keterangan</label><input id="journal-description" placeholder="Tujuan pencatatan" /></div><div class="form-grid two" style="margin-top:12px"><div class="field"><label>Akun debit</label><select id="journal-debit">${accountOptions("1102")}</select></div><div class="field"><label>Akun kredit</label><select id="journal-credit">${accountOptions("4201")}</select></div></div><div class="field" style="margin-top:12px"><label>Nominal</label><input id="journal-amount" type="number" min="1" placeholder="Rp 0" /></div></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="save-manual-journal">Simpan Jurnal</button></div>`,
  );
}

function reverseJournalModal(journalId) {
  const journal = state.manualJournals.find(
    (entry) => String(entry.id) === String(journalId),
  );
  if (!journal || journal.reversedById || journal.reversalOf) {
    showToast("Jurnal tidak dapat dibalik", "error");
    return;
  }
  modalState = { type: "reverse-journal", journalId: journal.id };
  showModal(
    `<div class="modal-head"><div><h2>Balik Jurnal</h2><p>${escapeHtml(journal.reference)} | ${rupiah(journal.amount)}</p></div><button class="icon-button" data-action="close-modal" aria-label="Tutup">${icon("close")}</button></div><div class="modal-body"><div class="summary-row"><span>Debit baru</span><strong>${journal.creditCode} ${escapeHtml(accountingAccount(journal.creditCode)?.name || "")}</strong></div><div class="summary-row"><span>Kredit baru</span><strong>${journal.debitCode} ${escapeHtml(accountingAccount(journal.debitCode)?.name || "")}</strong></div><div class="field" style="margin-top:12px"><label>Alasan pembalikan</label><textarea id="reverse-journal-reason" placeholder="Jelaskan kesalahan atau dasar koreksi"></textarea></div><p class="helper-note">Jurnal asli tetap tersimpan untuk audit.</p></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button danger" data-action="confirm-reverse-journal">Konfirmasi Pembalikan</button></div>`,
  );
}

function fixedAssetModal() {
  showModal(
    `<div class="modal-head"><div><h2>Tambah Aset Tetap</h2><p>Penyusutan memakai metode garis lurus bulanan.</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div><div class="modal-body"><div class="form-grid two"><div class="field"><label>Nama aset</label><input id="asset-name" placeholder="Contoh: Mesin espresso" /></div><div class="field"><label>Kategori</label><select id="asset-category"><option>Inventaris</option><option>Bangunan</option></select></div><div class="field"><label>Tanggal perolehan</label><input id="asset-date" type="date" value="${businessDate()}" /></div><div class="field"><label>Nomor bukti</label><input id="asset-reference" placeholder="Nomor nota atau kontrak" /></div><div class="field"><label>Harga perolehan</label><input id="asset-cost" type="number" min="1" placeholder="Rp 0" /></div><div class="field"><label>Nilai residu</label><input id="asset-salvage" type="number" min="0" value="0" /></div><div class="field"><label>Masa manfaat</label><select id="asset-life"><option value="36">36 bulan</option><option value="48">48 bulan</option><option value="60" selected>60 bulan</option><option value="120">120 bulan</option><option value="240">240 bulan</option></select></div><div class="field"><label>Sumber pencatatan</label><select id="asset-opening"><option value="no">Pembelian periode berjalan</option><option value="yes">Sudah termasuk saldo awal</option></select></div></div><p class="helper-note">Aset periode berjalan mengurangi saldo Bank. Aset saldo awal tidak membuat jurnal pembelian baru.</p></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="save-fixed-asset">Simpan Aset</button></div>`,
    true,
  );
}

function accountingAccountsModal() {
  const settings = state.accountingSettings;
  showModal(
    `<div class="modal-head"><div><h2>Pengaturan Akuntansi</h2><p>Nama perusahaan, rekening, dan daftar akun dapat disesuaikan.</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div><div class="modal-body"><div class="form-grid two"><div class="field"><label>Nama perusahaan</label><input id="accounting-company" value="${escapeHtml(settings.companyName)}" /></div><div class="field"><label>Nama bank</label><input id="accounting-bank" value="${escapeHtml(settings.bankName)}" /></div><div class="field"><label>Nomor rekening</label><input id="accounting-bank-number" value="${escapeHtml(settings.bankAccountNumber || "")}" placeholder="Opsional" /></div></div><div class="subsection-head"><div><h3>Tambah akun</h3><p>Kode harus unik.</p></div></div><div class="form-grid three"><div class="field"><label>Kode</label><input id="new-account-code" inputmode="numeric" placeholder="Contoh: 6215" /></div><div class="field"><label>Nama akun</label><input id="new-account-name" placeholder="Nama yang tampil di laporan" /></div><div class="field"><label>Kelompok</label><select id="new-account-group">${Object.entries(ACCOUNT_GROUP_LABELS).map(([value, label]) => `<option value="${value}">${label}</option>`).join("")}</select></div></div><div class="table-scroll accounting-account-list"><table class="data-table"><thead><tr><th>Kode</th><th>Nama Akun</th><th>Kelompok</th></tr></thead><tbody>${state.accountingAccounts.map((account) => `<tr><td><strong>${account.code}</strong></td><td>${escapeHtml(account.name)}</td><td>${ACCOUNT_GROUP_LABELS[account.group] || account.group}</td></tr>`).join("")}</tbody></table></div></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="save-accounting-settings">Simpan Pengaturan</button></div>`,
    true,
  );
}

function dataToolsModal() {
  showModal(
    `<div class="modal-head"><div><h2>Cadangan Data Lokal</h2><p>Simpan atau pulihkan seluruh data CafePOS pada tablet ini.</p></div><button class="icon-button" data-action="close-modal" aria-label="Tutup">${icon("close")}</button></div><div class="modal-body"><div class="choice-grid data-tool-grid"><button class="choice-card" data-action="export-data-backup"><span>${icon("download")}</span><strong>Unduh Cadangan</strong><small>Ekspor data lengkap ke JSON</small></button><button class="choice-card" data-action="import-data-backup"><span>${icon("upload")}</span><strong>Impor Cadangan</strong><small>Pilih berkas JSON sebelumnya</small></button><button class="choice-card" data-action="restore-state-mirror"><span>${icon("save")}</span><strong>Pulihkan Otomatis</strong><small>Gunakan snapshot terakhir di tablet</small></button></div><p class="helper-note">Arsip PDF tetap berada di penyimpanan dokumen lokal dan tidak disertakan sebagai isi berkas JSON.</p></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button></div>`,
  );
}

function exportDataBackup() {
  const payload = {
    app: "CafePOS Tjap Kemiri",
    exportedAt: localTimestamp(),
    schemaVersion: state.schemaVersion,
    data: persistentStateSnapshot(),
  };
  downloadBlob(
    new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json;charset=utf-8",
    }),
    `Tjap_Kemiri_Cadangan_${filenameDate()}.json`,
  );
  audit("Cadangan data diunduh", filenameDate());
  persist();
  closeModal();
  showToast("Cadangan data berhasil dibuat");
}

function showDataRestorePreview(payload, sourceLabel) {
  if (
    payload?.app !== "CafePOS Tjap Kemiri" ||
    !payload.data ||
    typeof payload.data !== "object" ||
    !Array.isArray(payload.data.transactions) ||
    !Array.isArray(payload.data.ingredients)
  )
    throw new Error("Struktur cadangan tidak valid");
  if (Number(payload.schemaVersion || 0) > initialState.schemaVersion)
    throw new Error("Cadangan berasal dari versi aplikasi yang lebih baru");
  const data = payload.data;
  modalState = { type: "restore-data", payload, sourceLabel };
  showModal(
    `<div class="modal-head"><div><h2>Pulihkan Cadangan</h2><p>${escapeHtml(sourceLabel)}</p></div><button class="icon-button" data-action="close-modal" aria-label="Tutup">${icon("close")}</button></div><div class="modal-body"><div class="stats-grid mini-stats">${statCard("Transaksi", String(data.transactions?.length || 0), "receipt", "Akan mengganti data sekarang")}${statCard("Bahan", String(data.ingredients?.length || 0), "inventory", "Termasuk jumlah stok")}</div><div class="balance-check warning">${icon("warning")}<span><strong>Data saat ini akan diganti</strong><small>Unduh cadangan terbaru dahulu jika data sekarang masih diperlukan.</small></span></div></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button danger" data-action="confirm-data-restore">Pulihkan Data</button></div>`,
  );
}

function openDataBackupImport() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "application/json,.json";
  input.addEventListener("change", async () => {
    if (!input.files?.[0]) return;
    try {
      const payload = JSON.parse(await input.files[0].text());
      showDataRestorePreview(payload, input.files[0].name);
    } catch (error) {
      showToast(`Cadangan tidak dapat dibaca: ${error.message}`, "error");
    }
  });
  input.click();
}

function applyRestoredState(restoredData) {
  const ui = {
    portal: state.portal,
    view: state.view,
    category: state.category,
    search: "",
    billSearch: "",
    reportPeriod: state.reportPeriod,
    financeTab: state.financeTab,
    financePeriodStart: state.financePeriodStart,
    financePeriodEnd: state.financePeriodEnd,
    teamTab: state.teamTab,
    navExpanded: false,
    operatorId: state.operatorId,
  };
  state = { ...migrateState(restoredData), ...ui };
  audit("Cadangan data dipulihkan", `Skema ${state.schemaVersion}`);
  persist();
  closeModal();
  renderShell();
  showToast("Cadangan data berhasil dipulihkan");
}

function renderTasks() {
  const canCreateTask = canPerform("task-create");
  const visible = canCreateTask
    ? state.workTasks
    : state.workTasks.filter((task) => task.assigneeId === operator().id);
  const done = visible.filter((task) => task.status === "Selesai").length;
  return `<div class="page-stack">
    <div class="section-head"><div><h2>Tugas ${canCreateTask ? "seluruh outlet" : operator().name}</h2><p>${done} dari ${visible.length} tugas selesai.</p></div>${canCreateTask ? `<button class="button primary" data-action="add-task">${icon("plus")}Tambah Tugas</button>` : ""}</div>
    <div class="task-grid">${
      visible
        .map((task) => {
          const assignee = employees.find((e) => e.id === task.assigneeId);
          const overdue = taskIsOverdue(task);
          return `<article class="task-card ${task.status === "Selesai" ? "done" : ""} ${overdue ? "overdue" : ""}"><div class="task-card-top"><span class="tag ${overdue || task.priority === "Tinggi" ? "cleaning" : "reserved"}">${overdue ? "Terlambat" : task.priority}</span><span class="muted">${task.due}</span></div><h3>${escapeHtml(task.title)}</h3><p>${escapeHtml(task.note || "Tanpa catatan")}</p><div class="task-owner"><span class="avatar small">${initials(assignee?.name || "?")}</span><span>${assignee?.name || "Belum ditugaskan"}</span></div><button class="button ${task.status === "Selesai" ? "ghost" : "primary"}" data-action="toggle-task" data-id="${task.id}">${task.status === "Selesai" ? "Tandai Belum" : "Tandai Selesai"}</button></article>`;
        })
        .join("") ||
      `<div class="surface"><p class="muted">Belum ada tugas untuk Anda.</p></div>`
    }</div>
  </div>`;
}

function renderTeam() {
  const roleLevel = {
    Owner: 0,
    Finance: 1,
    "Head Barista": 2,
    "Barista Senior": 3,
    "Barista Junior": 4,
  };
  const modules = [
    ["dashboard", "Ringkasan"],
    ["sales-history", "Penjualan"],
    ["finance", "Keuangan"],
    ["reports", "Laporan"],
    ["inventory", "Stok"],
    ["menu-hpp", "Menu & HPP"],
    ["tasks", "Tugas"],
    ["team", "Tim"],
    ["attendance", "Absensi"],
    ["shift", "Shift"],
  ];
  return `<div class="page-stack">
    <div class="section-head"><div><h2>Tim dan Akses</h2><p>Jabatan dan kewenangan setiap anggota.</p></div><span class="tag present">Profil aktif: ${roleLabel(operator().role)}</span></div>
    <div class="segmented team-tabs"><button class="segment ${state.teamTab === "structure" ? "active" : ""}" data-action="team-tab" data-tab="structure">Struktur Tim</button><button class="segment ${state.teamTab === "permissions" ? "active" : ""}" data-action="team-tab" data-tab="permissions">Hak Akses</button></div>
    ${
      state.teamTab === "structure"
        ? `<div class="org-stack">${employees
            .map((employee) => {
              const detail = roleDetails[employee.role];
              return `<article class="role-card ${employee.id === operator().id ? "active" : ""}" style="--level:${roleLevel[employee.role]}"><div class="employee-avatar">${initials(employee.name)}</div><div class="role-main"><div class="role-title"><h3>${employee.name}</h3><span>${roleLabel(employee.role)}</span></div><p>${detail.scope}</p><div class="responsibility-list">${detail.duties.map((duty) => `<span>${icon("check")}${duty}</span>`).join("")}</div></div><div class="access-list"><small>AKSES UTAMA</small>${detail.access.map((item) => `<span>${item}</span>`).join("")}</div></article>`;
            })
            .join("")}</div>`
        : `<section class="surface"><div class="section-head compact-head"><div><h3>Matriks akses per jabatan</h3><p>Centang berarti modul tersedia untuk jabatan tersebut.</p></div></div><div class="table-scroll"><table class="data-table permission-table"><thead><tr><th>Jabatan</th>${modules.map(([, label]) => `<th>${label}</th>`).join("")}</tr></thead><tbody>${Object.keys(
            roleAccess,
          )
            .map(
              (role) =>
                `<tr><td><strong>${roleLabel(role)}</strong></td>${modules
                  .map(([view, label]) => {
                    const allowed = (roleAccess[role] || []).includes(view);
                    return `<td><span class="permission-mark ${allowed ? "yes" : "no"}" aria-label="${label}: ${allowed ? "diizinkan" : "tidak diizinkan"}" title="${label}: ${allowed ? "diizinkan" : "tidak diizinkan"}">${icon(allowed ? "check" : "close")}</span></td>`;
                  })
                  .join("")}</tr>`,
            )
            .join("")}</tbody></table></div></section>`
    }
  </div>`;
}

function taskModal() {
  showModal(
    `<div class="modal-head"><div><h2>Tambah Tugas Outlet</h2><p>Pemilik dan Kepala Barista dapat memantau tugas.</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div><div class="modal-body"><div class="field"><label>Judul tugas</label><input id="task-title" placeholder="Contoh: Cek stok susu" /></div><div class="field" style="margin-top:12px"><label>Ditugaskan kepada</label><select id="task-assignee">${employees
      .filter((e) => e.canServe)
      .map(
        (e) =>
          `<option value="${e.id}">${e.name} · ${roleLabel(e.role)}</option>`,
      )
      .join(
        "",
      )}</select></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px"><div class="field"><label>Prioritas</label><select id="task-priority"><option>Normal</option><option>Tinggi</option></select></div><div class="field"><label>Batas waktu</label><input id="task-due" type="time" value="17:00" /></div></div><div class="field" style="margin-top:12px"><label>Catatan</label><textarea id="task-note" placeholder="Instruksi singkat"></textarea></div></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="save-task">Simpan Tugas</button></div>`,
  );
}

function audit(action, detail = "", by = operator().name) {
  state.auditLog.push({ id: Date.now(), action, detail, by, time: nowTime() });
}

function filenameDate() {
  return businessDate();
}

const scriptLoads = new Map();

function loadScriptOnce(src) {
  if (scriptLoads.has(src)) return scriptLoads.get(src);
  const loading = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = () =>
      reject(new Error(`Gagal memuat ${src.split("/").pop()}`));
    document.head.appendChild(script);
  });
  scriptLoads.set(src, loading);
  return loading;
}

async function ensureExcelLibrary() {
  if (!window.ExcelJS) await loadScriptOnce("/app/vendor/exceljs.min.js");
}

async function ensurePdfLibraries() {
  if (!window.jspdf?.jsPDF)
    await loadScriptOnce("/app/vendor/jspdf.umd.min.js");
  if (!window.jspdf?.jsPDF?.API?.autoTable)
    await loadScriptOnce("/app/vendor/jspdf.plugin.autotable.min.js");
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

function styleWorkbookSheet(sheet, currencyColumns = []) {
  sheet.views = [{ state: "frozen", ySplit: 1 }];
  sheet.getRow(1).eachCell((cell) => {
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFA63A2B" },
    };
    cell.font = { bold: true, color: { argb: "FFF7F4EF" } };
    cell.alignment = { vertical: "middle" };
  });
  sheet.getRow(1).height = 24;
  sheet.autoFilter = {
    from: { row: 1, column: 1 },
    to: { row: 1, column: sheet.columnCount },
  };
  for (let columnNumber = 1; columnNumber <= sheet.columnCount; columnNumber += 1) {
    const column = sheet.getColumn(columnNumber);
    let width = 12;
    column.eachCell({ includeEmpty: true }, (cell) => {
      width = Math.min(
        34,
        Math.max(width, String(cell.value ?? "").length + 2),
      );
    });
    column.width = width;
  }
  currencyColumns.forEach((columnNumber) => {
    sheet.getColumn(columnNumber).numFmt = '"Rp" #,##0';
  });
}

function addDataSheet(workbook, name, headers, rows, currencyColumns = []) {
  const sheet = workbook.addWorksheet(name, {
    properties: { tabColor: { argb: "FFA63A2B" } },
  });
  sheet.addRow(headers);
  rows.forEach((row) => sheet.addRow(row));
  styleWorkbookSheet(sheet, currencyColumns);
  return sheet;
}

async function buildExportWorkbook() {
  await ensureExcelLibrary();
  if (!window.ExcelJS) throw new Error("Modul Excel belum tersedia");
  const workbook = new window.ExcelJS.Workbook();
  workbook.creator = "CafePOS Tjap Kemiri";
  workbook.created = new Date();
  const exportTransactions = activeTransactionsForPeriod();
  const sales = exportTransactions.reduce((sum, tx) => sum + tx.total, 0);
  const hpp = estimatedHppTotal(exportTransactions);
  const hppEstimated = estimatedHppCount(exportTransactions);
  const expenses = state.expenses
    .filter((row) => inPeriod(row.date))
    .reduce((sum, row) => sum + row.amount, 0);
  addDataSheet(
    workbook,
    "Ringkasan",
    ["Metrik", "Nilai", "Keterangan"],
    [
      [
        "Tanggal ekspor",
        filenameDate(),
        `Periode ${periodLabel()} · oleh ${operator().name}`,
      ],
      ["Penjualan bruto", sales, "Transaksi lunas"],
      [
        "Pajak terkandung",
        state.tax.included && state.tax.rate
          ? sales - sales / (1 + Number(state.tax.rate) / 100)
          : 0,
        state.tax.label,
      ],
      [
        hppEstimated ? "HPP campuran" : "HPP resep",
        hpp,
        hppEstimated
          ? `${hppEstimated} transaksi lama memakai estimasi 40%`
          : "Nilai resep saat transaksi",
      ],
      [
        "Laba kotor estimasi",
        sales -
          (state.tax.included && state.tax.rate
            ? sales - sales / (1 + Number(state.tax.rate) / 100)
            : 0) -
          hpp,
        "Pendapatan bersih pajak dikurangi HPP",
      ],
      ["Biaya operasional", expenses, "Tidak termasuk pembelian persediaan"],
      [
        "Tagihan aktif",
        state.bills.reduce((s, b) => s + b.total, 0),
        `${state.bills.length} tagihan`,
      ],
    ],
    [2],
  );
  addDataSheet(
    workbook,
    "Kontrol Operasional",
    ["Pengaturan", "Nilai", "Keterangan"],
    [
      [
        "Target penjualan harian",
        state.settings.dailySalesTarget,
        "Dapat diubah Pemilik",
      ],
      ["Peringatan tagihan aktif", state.settings.staleBillMinutes, "Menit"],
      [
        "Referensi pembayaran",
        state.settings.requirePaymentReference ? "Wajib" : "Opsional",
        "QRIS dan Debit",
      ],
    ],
    [2],
  );
  addDataSheet(
    workbook,
    "Transaksi",
    [
      "Nomor Pesanan",
      "Tanggal",
      "Waktu",
      "Operator",
      "Metode",
      "Referensi",
      "Total",
      "Pajak Terkandung",
      "HPP",
      "Status Rekonsiliasi",
    ],
    exportTransactions.map((tx) => [
      String(tx.id),
      tx.businessDate,
      tx.time,
      tx.operator,
      tx.method,
      tx.paymentReference || "",
      tx.total,
      tx.taxAmount || 0,
      transactionHpp(tx),
      tx.reconciliationStatus || "Belum",
    ]),
    [7, 8, 9],
  );
  addDataSheet(
    workbook,
    "Inventori",
    [
      "Nama Bahan",
      "Kategori",
      "Stok",
      "Satuan",
      "Batas Minimum",
      "Harga Rata-rata",
      "Nilai Persediaan",
    ],
    state.ingredients.map((row) => [
      row.name,
      row.category,
      row.qty,
      row.unit,
      row.minimum,
      Number(row.avgCost || 0),
      row.qty * Number(row.avgCost || 0),
    ]),
    [6, 7],
  );
  addDataSheet(
    workbook,
    "Pembelian",
    [
      "Nomor Nota",
      "Vendor",
      "Bahan",
      "Jumlah",
      "Satuan",
      "Harga Satuan",
      "Total Harga",
      "Operator",
      "Waktu",
      "Catatan",
    ],
    state.purchases.map((row) => [
      row.invoice,
      row.vendor,
      row.itemName,
      row.qty,
      row.unit,
      row.unitCost,
      row.totalPrice,
      row.by,
      row.createdAt,
      row.note,
    ]),
    [6, 7],
  );
  addDataSheet(
    workbook,
    "Stok Keluar",
    [
      "Tanggal",
      "Bahan",
      "Jumlah",
      "Satuan",
      "Harga Rata-rata",
      "Nilai Biaya",
      "Alasan",
      "Catatan",
      "Dicatat Oleh",
      "Waktu",
    ],
    state.stockWastages.map((row) => [
      row.date,
      row.itemName,
      row.qty,
      row.unit,
      row.unitCost,
      row.totalCost,
      row.reason,
      row.note,
      row.by,
      row.createdAt,
    ]),
    [5, 6],
  );
  addDataSheet(
    workbook,
    "Biaya Operasional",
    [
      "Tanggal",
      "Kategori",
      "Vendor/Penerima",
      "Nomor Nota",
      "Metode",
      "Jumlah",
      "Catatan",
      "Dicatat Oleh",
      "Waktu",
    ],
    state.expenses.map((row) => [
      row.date,
      row.category,
      row.vendor,
      row.invoice,
      row.method,
      row.amount,
      row.note,
      row.by,
      row.createdAt,
    ]),
    [6],
  );
  addDataSheet(
    workbook,
    "Absensi",
    ["Nama", "Jabatan", "Masuk", "Pulang", "Status"],
    employees.map((employee) => {
      const record = state.attendance[employee.id];
      return [
        employee.name,
        roleLabel(employee.role),
        record?.in || "",
        record?.out || "",
        record?.in && !record?.out
          ? "Hadir"
          : record?.out
            ? "Pulang"
            : "Belum masuk",
      ];
    }),
  );
  addDataSheet(
    workbook,
    "Tim dan Akses",
    ["Nama", "Jabatan", "Lingkup", "Akses Utama"],
    employees.map((employee) => [
      employee.name,
      roleLabel(employee.role),
      roleDetails[employee.role].scope,
      roleDetails[employee.role].access.join(", "),
    ]),
  );
  addDataSheet(
    workbook,
    "Menu HPP",
    [
      "Menu",
      "Kategori",
      "Status",
      "Harga Termasuk Pajak",
      "Tarif Pajak",
      "HPP Resep",
      "Margin Kotor",
    ],
    state.menuItems.map((item) => {
      const base = item.price / (1 + Number(state.tax.rate || 0) / 100);
      const hppValue = recipeHpp(item);
      return [
        item.name,
        item.category,
        item.active === false ? "Nonaktif" : "Aktif",
        item.price,
        Number(state.tax.rate || 0) / 100,
        hppValue,
        base - hppValue,
      ];
    }),
    [4, 6, 7],
  );
  const menuSheet = workbook.getWorksheet("Menu HPP");
  menuSheet.getColumn(5).numFmt = "0.0%";
  addDataSheet(
    workbook,
    "Tagihan Aktif",
    ["Nomor Pesanan", "Pelanggan", "Meja", "Tipe", "Dibuat", "Total"],
    state.bills.map((bill) => [
      String(bill.id),
      bill.customer,
      bill.table,
      orderTypeLabel(bill.type),
      bill.createdAt,
      bill.total,
    ]),
    [6],
  );
  addDataSheet(
    workbook,
    "Tugas",
    [
      "Tugas",
      "Penanggung Jawab",
      "Prioritas",
      "Status",
      "Batas Waktu",
      "Catatan",
    ],
    state.workTasks.map((task) => [
      task.title,
      employees.find((e) => e.id === task.assigneeId)?.name || "",
      task.priority,
      task.status,
      task.due,
      task.note,
    ]),
  );
  addDataSheet(
    workbook,
    "Shift Operasional",
    [
      "Dibuka Oleh",
      "Jam Buka",
      "Ditutup Oleh",
      "Jam Tutup",
      "QRIS BNI",
      "Kartu Debit",
      "Catatan Serah Terima",
    ],
    state.shiftHistory.map((row) => [
      row.openedBy,
      row.openedAt,
      row.closedBy,
      row.closedAt,
      row.qris,
      row.debit,
      row.note,
    ]),
    [5, 6],
  );
  addDataSheet(
    workbook,
    "Tutup Buku Keuangan",
    [
      "Tanggal",
      "Versi",
      "Penjualan Bruto",
      "Pajak",
      "Pendapatan Bersih",
      "HPP",
      "Biaya Operasional",
      "Laba Kotor",
      "Laba Operasional",
      "QRIS BNI",
      "Kartu Debit",
      "Ditutup Oleh",
      "Waktu",
      "Catatan",
    ],
    state.financeClosings.map((row) => [
      row.date,
      row.version || 1,
      row.grossSales || row.sales,
      row.tax || 0,
      row.sales,
      row.hpp,
      row.expenses,
      row.grossProfit,
      row.operatingProfit,
      row.qris,
      row.debit,
      row.by,
      row.createdAt,
      row.note,
    ]),
    [3, 4, 5, 6, 7, 8, 9, 10, 11],
  );
  addDataSheet(
    workbook,
    "Koreksi Keuangan",
    [
      "Tanggal",
      "Target",
      "Arah",
      "Nominal",
      "Referensi",
      "Alasan",
      "Dibuat Oleh",
      "Waktu",
    ],
    state.financeAdjustments.map((row) => [
      row.date,
      row.target,
      row.direction,
      row.amount,
      row.reference,
      row.reason,
      row.by,
      row.createdAt,
    ]),
    [4],
  );
  addDataSheet(
    workbook,
    "Pergerakan Stok",
    [
      "Tanggal",
      "Bahan",
      "Perubahan",
      "Sebelum",
      "Sesudah",
      "Referensi Pesanan",
      "Alasan",
      "Oleh",
      "Waktu",
    ],
    state.stockMovements.map((row) => [
      row.businessDate,
      row.ingredient,
      row.delta,
      row.before,
      row.after,
      row.orderId || "",
      row.reason,
      row.by,
      row.createdAt,
    ]),
  );
  addDataSheet(
    workbook,
    "Pengembalian Dana",
    [
      "Tanggal",
      "Nomor Pesanan",
      "Nominal",
      "Stok Dikembalikan",
      "Alasan",
      "Oleh",
      "Waktu",
    ],
    state.voidRefunds.map((row) => [
      row.businessDate,
      String(row.txId),
      row.amount,
      row.restock ? "Ya" : "Tidak",
      row.reason,
      row.by,
      row.createdAt,
    ]),
    [3],
  );
  addDataSheet(
    workbook,
    "Dokumen PDF",
    ["Nama File", "Jenis", "Ukuran", "Diunggah Oleh", "Waktu"],
    state.documents.map((row) => [
      row.name,
      row.kind,
      row.sizeLabel,
      row.by,
      row.createdAt,
    ]),
  );
  addDataSheet(
    workbook,
    "Riwayat Impor",
    ["Nama File", "Baris Diterima", "Diimpor Oleh", "Waktu"],
    state.importHistory.map((row) => [
      row.filename,
      row.rows,
      row.by,
      row.createdAt,
    ]),
  );
  addDataSheet(
    workbook,
    "Audit Log",
    ["Waktu", "Pengguna", "Aktivitas", "Detail"],
    state.auditLog.map((row) => [row.time, row.by, row.action, row.detail]),
  );
  return workbook;
}

const FINANCE_CURRENCY_FORMAT = '"Rp" #,##0;[Red]("Rp" #,##0);-';

function styleFinanceSheet(sheet, widths = [34, 20]) {
  sheet.views = [{ state: "frozen", ySplit: 4, showGridLines: false }];
  sheet.properties.defaultRowHeight = 19;
  widths.forEach((width, index) => {
    sheet.getColumn(index + 1).width = width;
  });
  sheet.eachRow((row) => {
    row.alignment = { vertical: "middle" };
  });
}

function financeSheetTitle(sheet, title, subtitle, lastColumn = "B") {
  sheet.mergeCells(`A1:${lastColumn}1`);
  sheet.getCell("A1").value = state.accountingSettings.companyName;
  sheet.getCell("A1").font = { bold: true, size: 14, color: { argb: "FFF7F4EF" } };
  sheet.getCell("A1").fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFA63A2B" },
  };
  sheet.getCell("A1").alignment = { horizontal: "center", vertical: "middle" };
  sheet.getRow(1).height = 28;
  sheet.mergeCells(`A2:${lastColumn}2`);
  sheet.getCell("A2").value = title;
  sheet.getCell("A2").font = { bold: true, size: 13 };
  sheet.getCell("A2").alignment = { horizontal: "center" };
  sheet.mergeCells(`A3:${lastColumn}3`);
  sheet.getCell("A3").value = subtitle;
  sheet.getCell("A3").font = { italic: true, color: { argb: "FF666666" } };
  sheet.getCell("A3").alignment = { horizontal: "center" };
}

function financeSectionRow(sheet, rowNumber, label) {
  const row = sheet.getRow(rowNumber);
  row.getCell(1).value = label;
  row.getCell(1).font = { bold: true, color: { argb: "FFF7F4EF" } };
  row.getCell(1).fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FF20201E" },
  };
  row.getCell(2).fill = row.getCell(1).fill;
}

function financeTotalRow(sheet, rowNumber, label, formula, result, strong = false) {
  const row = sheet.getRow(rowNumber);
  row.getCell(1).value = label;
  row.getCell(2).value = { formula, result };
  row.font = { bold: true };
  row.getCell(2).numFmt = FINANCE_CURRENCY_FORMAT;
  row.getCell(1).border = { top: { style: strong ? "double" : "thin", color: { argb: "FF20201E" } } };
  row.getCell(2).border = row.getCell(1).border;
  if (strong) {
    row.getCell(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF3E7E3" } };
    row.getCell(2).fill = row.getCell(1).fill;
  }
}

async function buildFinanceWorkbook() {
  await ensureExcelLibrary();
  if (!window.ExcelJS) throw new Error("Modul Excel belum tersedia");
  const { start, end } = financeRange();
  const income = profitLossReport(start, end);
  const balance = balanceSheetReport(end);
  const trialBalance = trialBalanceReport(end);
  const entries = journalEntriesForRange(start, end, true);
  const workbook = new window.ExcelJS.Workbook();
  workbook.creator = `CafePOS Tjap Kemiri | ${operator().name}`;
  workbook.created = new Date();
  workbook.modified = new Date();

  const summary = workbook.addWorksheet("Ringkasan", {
    properties: { tabColor: { argb: "FFA63A2B" } },
  });
  financeSheetTitle(summary, "PAKET LAPORAN KEUANGAN", `${start} sampai ${end}`, "C");
  styleFinanceSheet(summary, [30, 22, 42]);
  summary.addRow(["Metrik", "Nilai", "Keterangan"]);
  summary.getRow(4).font = { bold: true, color: { argb: "FFF7F4EF" } };
  summary.getRow(4).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF20201E" } };
  [
    ["Pendapatan", income.revenue, "Penjualan bersih setelah pajak terkandung"],
    ["Laba kotor", income.grossProfit, "Pendapatan dikurangi HPP"],
    ["Laba bersih", income.netProfit, "Setelah seluruh pendapatan dan beban"],
    ["Total aset", balance.totalAssets, `Per ${end}`],
    ["Selisih neraca", balance.difference, "Harus mendekati nol"],
  ].forEach((row) => summary.addRow(row));
  summary.getColumn(2).numFmt = FINANCE_CURRENCY_FORMAT;
  summary.getCell("B9").fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: Math.abs(balance.difference) < 1 ? "FFDDEBDD" : "FFFFE8D5" },
  };

  const incomeSheet = workbook.addWorksheet("Laba Rugi", {
    properties: { tabColor: { argb: "FFA63A2B" } },
  });
  financeSheetTitle(incomeSheet, "LAPORAN LABA RUGI", `${start} sampai ${end}`);
  styleFinanceSheet(incomeSheet);
  let rowNumber = 5;
  const addDetails = (title, rows) => {
    financeSectionRow(incomeSheet, rowNumber, title);
    rowNumber += 1;
    const first = rowNumber;
    rows.forEach((item) => {
      incomeSheet.getCell(`A${rowNumber}`).value = item.name;
      incomeSheet.getCell(`B${rowNumber}`).value = item.amount;
      incomeSheet.getCell(`B${rowNumber}`).numFmt = FINANCE_CURRENCY_FORMAT;
      rowNumber += 1;
    });
    return { first, last: rowNumber - 1 };
  };
  const revenueRange = addDetails("PENDAPATAN", income.revenueDetails);
  const revenueTotalRow = rowNumber;
  financeTotalRow(incomeSheet, rowNumber, "TOTAL PENDAPATAN", `SUM(B${revenueRange.first}:B${revenueRange.last})`, income.revenue);
  rowNumber += 2;
  const cogsRange = addDetails("HARGA POKOK PENJUALAN", income.cogsDetails);
  const cogsTotalRow = rowNumber;
  financeTotalRow(incomeSheet, rowNumber, "TOTAL HPP", `SUM(B${cogsRange.first}:B${cogsRange.last})`, income.cogs);
  rowNumber += 1;
  const grossProfitRow = rowNumber;
  financeTotalRow(incomeSheet, rowNumber, "LABA KOTOR", `B${revenueTotalRow}-B${cogsTotalRow}`, income.grossProfit, true);
  rowNumber += 2;
  const sellingRange = addDetails("BEBAN PENJUALAN", income.sellingDetails);
  const sellingTotalRow = rowNumber;
  financeTotalRow(incomeSheet, rowNumber, "TOTAL BEBAN PENJUALAN", `SUM(B${sellingRange.first}:B${sellingRange.last})`, income.sellingExpenses);
  rowNumber += 2;
  const adminRange = addDetails("BEBAN UMUM DAN ADMINISTRASI", income.adminDetails);
  const adminTotalRow = rowNumber;
  financeTotalRow(incomeSheet, rowNumber, "TOTAL BEBAN UMUM DAN ADMINISTRASI", `SUM(B${adminRange.first}:B${adminRange.last})`, income.adminExpenses);
  rowNumber += 1;
  const operatingProfitRow = rowNumber;
  financeTotalRow(incomeSheet, rowNumber, "LABA USAHA", `B${grossProfitRow}-B${sellingTotalRow}-B${adminTotalRow}`, income.operatingProfit, true);
  rowNumber += 2;
  const otherIncomeRange = addDetails("PENDAPATAN LAIN", income.otherIncomeDetails);
  const otherIncomeTotalRow = rowNumber;
  financeTotalRow(incomeSheet, rowNumber, "TOTAL PENDAPATAN LAIN", `SUM(B${otherIncomeRange.first}:B${otherIncomeRange.last})`, income.otherIncome);
  rowNumber += 2;
  const otherExpenseRange = addDetails("BEBAN LAIN", income.otherExpenseDetails);
  const otherExpenseTotalRow = rowNumber;
  financeTotalRow(incomeSheet, rowNumber, "TOTAL BEBAN LAIN", `SUM(B${otherExpenseRange.first}:B${otherExpenseRange.last})`, income.otherExpenses);
  rowNumber += 1;
  financeTotalRow(incomeSheet, rowNumber, "LABA BERSIH", `B${operatingProfitRow}+B${otherIncomeTotalRow}-B${otherExpenseTotalRow}`, income.netProfit, true);

  const balanceSheet = workbook.addWorksheet("Neraca", {
    properties: { tabColor: { argb: "FFA63A2B" } },
  });
  financeSheetTitle(balanceSheet, "LAPORAN NERACA", `Per ${end}`);
  styleFinanceSheet(balanceSheet);
  rowNumber = 5;
  const addBalanceDetails = (title, rows) => {
    financeSectionRow(balanceSheet, rowNumber, title);
    rowNumber += 1;
    const first = rowNumber;
    rows.forEach((item) => {
      balanceSheet.getCell(`A${rowNumber}`).value = item.name;
      balanceSheet.getCell(`B${rowNumber}`).value = item.amount;
      balanceSheet.getCell(`B${rowNumber}`).numFmt = FINANCE_CURRENCY_FORMAT;
      rowNumber += 1;
    });
    return { first, last: rowNumber - 1 };
  };
  const currentAssetsRange = addBalanceDetails("ASET LANCAR", balance.assetRows);
  const currentAssetsTotalRow = rowNumber;
  financeTotalRow(balanceSheet, rowNumber, "TOTAL ASET LANCAR", `SUM(B${currentAssetsRange.first}:B${currentAssetsRange.last})`, balance.currentAssets);
  rowNumber += 2;
  const fixedAssetsRange = addBalanceDetails("ASET TETAP", balance.fixedRows);
  const fixedAssetsTotalRow = rowNumber;
  financeTotalRow(balanceSheet, rowNumber, "TOTAL ASET TETAP", `SUM(B${fixedAssetsRange.first}:B${fixedAssetsRange.last})`, balance.fixedAssets);
  rowNumber += 1;
  const totalAssetsRow = rowNumber;
  financeTotalRow(balanceSheet, rowNumber, "TOTAL ASET", `B${currentAssetsTotalRow}+B${fixedAssetsTotalRow}`, balance.totalAssets, true);
  rowNumber += 2;
  const liabilityRange = addBalanceDetails("KEWAJIBAN", balance.liabilityRows);
  const liabilityTotalRow = rowNumber;
  financeTotalRow(balanceSheet, rowNumber, "TOTAL KEWAJIBAN", `SUM(B${liabilityRange.first}:B${liabilityRange.last})`, balance.liabilities);
  rowNumber += 2;
  const equityRange = addBalanceDetails("EKUITAS", balance.equityRows);
  balanceSheet.getCell(`A${rowNumber}`).value = "Laba Periode Berjalan";
  balanceSheet.getCell(`B${rowNumber}`).value = balance.currentProfit;
  balanceSheet.getCell(`B${rowNumber}`).numFmt = FINANCE_CURRENCY_FORMAT;
  const profitRow = rowNumber;
  rowNumber += 1;
  const equityTotalRow = rowNumber;
  financeTotalRow(balanceSheet, rowNumber, "TOTAL EKUITAS", `SUM(B${equityRange.first}:B${equityRange.last})+B${profitRow}`, balance.equity);
  rowNumber += 1;
  const totalLiabilityEquityRow = rowNumber;
  financeTotalRow(balanceSheet, rowNumber, "TOTAL KEWAJIBAN DAN EKUITAS", `B${liabilityTotalRow}+B${equityTotalRow}`, balance.totalLiabilitiesEquity, true);
  rowNumber += 2;
  financeTotalRow(balanceSheet, rowNumber, "SELISIH NERACA", `B${totalAssetsRow}-B${totalLiabilityEquityRow}`, balance.difference, true);

  const trialSheet = workbook.addWorksheet("Neraca Saldo", {
    properties: { tabColor: { argb: "FFA63A2B" } },
    pageSetup: {
      paperSize: 9,
      orientation: "portrait",
      fitToPage: true,
      fitToWidth: 1,
      fitToHeight: 0,
      margins: {
        left: 0.35,
        right: 0.35,
        top: 0.5,
        bottom: 0.5,
        header: 0.2,
        footer: 0.2,
      },
    },
  });
  financeSheetTitle(
    trialSheet,
    "NERACA SALDO",
    `PER ${reportDateLabel(end)}`,
    "D",
  );
  trialSheet.views = [{ state: "frozen", ySplit: 5, showGridLines: false }];
  trialSheet.mergeCells("A4:A5");
  trialSheet.mergeCells("B4:B5");
  trialSheet.mergeCells("C4:D4");
  trialSheet.getCell("A4").value = "COA";
  trialSheet.getCell("B4").value = "NAMA AKUN";
  trialSheet.getCell("C4").value = "SALDO AKHIR";
  trialSheet.getCell("C5").value = "DEBET";
  trialSheet.getCell("D5").value = "KREDIT";
  ["A4", "B4", "C4", "C5", "D5"].forEach((cellAddress) => {
    const cell = trialSheet.getCell(cellAddress);
    cell.font = { bold: true };
    cell.alignment = { horizontal: "center", vertical: "middle" };
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFF3E7E3" },
    };
  });
  trialSheet.getColumn(1).width = 16;
  trialSheet.getColumn(2).width = 43;
  trialSheet.getColumn(3).width = 20;
  trialSheet.getColumn(4).width = 20;
  let trialRow = 6;
  trialBalance.rows.forEach((account) => {
    trialSheet.getCell(`A${trialRow}`).value = account.reportCode;
    trialSheet.getCell(`B${trialRow}`).value = account.name.toUpperCase();
    trialSheet.getCell(`C${trialRow}`).value = account.debit || null;
    trialSheet.getCell(`D${trialRow}`).value = account.credit || null;
    trialSheet.getCell(`C${trialRow}`).numFmt = "#,##0";
    trialSheet.getCell(`D${trialRow}`).numFmt = "#,##0";
    trialRow += 1;
  });
  trialSheet.getCell(`B${trialRow}`).value = "JUMLAH";
  trialSheet.getCell(`C${trialRow}`).value = {
    formula: `SUM(C6:C${trialRow - 1})`,
    result: trialBalance.totalDebit,
  };
  trialSheet.getCell(`D${trialRow}`).value = {
    formula: `SUM(D6:D${trialRow - 1})`,
    result: trialBalance.totalCredit,
  };
  trialSheet.getRow(trialRow).font = { bold: true };
  trialSheet.getCell(`C${trialRow}`).numFmt = "#,##0";
  trialSheet.getCell(`D${trialRow}`).numFmt = "#,##0";
  for (let row = 4; row <= trialRow; row += 1) {
    for (let column = 1; column <= 4; column += 1) {
      trialSheet.getCell(row, column).border = {
        top: { style: "thin", color: { argb: "FF20201E" } },
        left: { style: "thin", color: { argb: "FF20201E" } },
        bottom: { style: "thin", color: { argb: "FF20201E" } },
        right: { style: "thin", color: { argb: "FF20201E" } },
      };
    }
  }
  addDataSheet(
    workbook,
    "Jurnal Umum",
    ["Tanggal", "Referensi", "Keterangan", "Akun Debit", "Akun Kredit", "Nominal", "Sumber", "Dibuat Oleh"],
    entries.map((entry) => [entry.date, entry.reference, entry.description, entry.debitCode, entry.creditCode, entry.amount, entry.source, entry.by]),
    [6],
  );
  addDataSheet(
    workbook,
    "Jurnal Manual",
    ["Tanggal", "Referensi", "Keterangan", "Akun Debit", "Akun Kredit", "Nominal"],
    state.manualJournals.map((entry) => [entry.date, entry.reference, entry.description, entry.debitCode, entry.creditCode, entry.amount]),
    [6],
  );
  const openingSheet = addDataSheet(
    workbook,
    "Saldo Awal",
    ["Komponen", "Nilai", "Tanggal", "Keterangan"],
    [
      ["Kas", state.openingBalances.cash, state.openingBalances.asOf, "Input Finance"],
      ["Bank", state.openingBalances.bank, state.openingBalances.asOf, "Input Finance"],
      ["Persediaan", state.openingBalances.inventory, state.openingBalances.asOf, "Input Finance"],
      ["Harga Perolehan Aset Tetap", state.openingBalances.fixedAssetCost, state.openingBalances.asOf, "Input Finance"],
      ["Akumulasi Penyusutan", state.openingBalances.accumulatedDepreciation, state.openingBalances.asOf, "Input Finance"],
      ["Kewajiban", state.openingBalances.liabilities, state.openingBalances.asOf, "Input Finance"],
      ["Modal Awal", state.openingBalances.initialCapital, state.openingBalances.asOf, "Input Finance"],
      ["Selisih", { formula: "SUM(B2:B5)-SUM(B6:B8)", result: openingBalanceDifference() }, state.openingBalances.asOf, "Harus mendekati nol"],
    ],
    [2],
  );
  for (let row = 2; row <= 8; row += 1)
    openingSheet.getCell(`B${row}`).font = { color: { argb: "FF0000FF" } };
  addDataSheet(
    workbook,
    "Aset Tetap",
    ["Nama Aset", "Kategori", "Tanggal Perolehan", "Nomor Bukti", "Harga Perolehan", "Nilai Residu", "Masa Manfaat (Bulan)", "Sumber"],
    state.fixedAssets.map((asset) => [asset.name, asset.category, asset.acquisitionDate, asset.reference, asset.cost, asset.salvageValue, asset.usefulLifeMonths, asset.isOpening ? "Saldo Awal" : "Pembelian Periode"]),
    [5, 6],
  );
  addDataSheet(
    workbook,
    "Daftar Akun",
    ["Kode", "Nama Akun", "Kelompok", "Status"],
    state.accountingAccounts.map((account) => [account.code, account.name, ACCOUNT_GROUP_LABELS[account.group] || account.group, account.active === false ? "Nonaktif" : "Aktif"]),
  );
  const checks = addDataSheet(
    workbook,
    "Pemeriksaan",
    ["Pemeriksaan", "Aktual", "Diharapkan", "Selisih", "Toleransi", "Status", "Perbaikan"],
    [
      ["Neraca seimbang", balance.totalAssets, balance.totalLiabilitiesEquity, { formula: "B2-C2", result: balance.difference }, 1, { formula: 'IF(ABS(D2)<=E2,"OK","PERIKSA")', result: Math.abs(balance.difference) <= 1 ? "OK" : "PERIKSA" }, "Periksa saldo awal dan jurnal"],
      ["Saldo awal seimbang", openingBalanceDifference(), 0, { formula: "B3-C3", result: openingBalanceDifference() }, 1, { formula: 'IF(ABS(D3)<=E3,"OK","PERIKSA")', result: Math.abs(openingBalanceDifference()) <= 1 ? "OK" : "PERIKSA" }, "Buka menu Saldo Awal"],
      ["Jurnal debit sama dengan kredit", entries.reduce((sum, entry) => sum + entry.amount, 0), entries.reduce((sum, entry) => sum + entry.amount, 0), { formula: "B4-C4", result: 0 }, 1, { formula: 'IF(ABS(D4)<=E4,"OK","PERIKSA")', result: "OK" }, "Periksa jurnal manual"],
      ["Neraca saldo seimbang", trialBalance.totalDebit, trialBalance.totalCredit, { formula: "B5-C5", result: trialBalance.difference }, 1, { formula: 'IF(ABS(D5)<=E5,"OK","PERIKSA")', result: Math.abs(trialBalance.difference) <= 1 ? "OK" : "PERIKSA" }, "Periksa COA dan jurnal"],
    ],
    [2, 3, 4, 5],
  );
  checks.getColumn(6).width = 14;
  checks.getColumn(7).width = 32;
  const checkStatuses = [
    Math.abs(balance.difference) <= 1,
    Math.abs(openingBalanceDifference()) <= 1,
    true,
    Math.abs(trialBalance.difference) <= 1,
  ];
  [2, 3, 4, 5].forEach((row) => {
    checks.getCell(`F${row}`).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: checkStatuses[row - 2] ? "FFDDEBDD" : "FFFFE8D5" },
    };
  });
  return workbook;
}

async function exportFinanceExcel() {
  try {
    const workbook = await buildFinanceWorkbook();
    const buffer = await workbook.xlsx.writeBuffer();
    const { start, end } = financeRange();
    downloadBlob(
      new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }),
      `Tjap_Kemiri_Keuangan_${start}_${end}.xlsx`,
    );
    audit("Ekspor Excel Keuangan", `${start} sampai ${end}`);
    persist();
    showToast("Laporan keuangan Excel berhasil dibuat");
  } catch (error) {
    showToast(`Gagal ekspor Excel: ${error.message}`, "error");
  }
}

function financePdfHeader(doc, title, subtitle) {
  doc.setFillColor(166, 58, 43);
  doc.rect(0, 0, 210, 24, "F");
  doc.setTextColor(247, 244, 239);
  doc.setFontSize(13);
  doc.setFont(undefined, "bold");
  doc.text(state.accountingSettings.companyName, 105, 10, { align: "center" });
  doc.setFontSize(10);
  doc.text(title, 105, 17, { align: "center" });
  doc.setTextColor(32, 32, 30);
  doc.setFont(undefined, "normal");
  doc.setFontSize(9);
  doc.text(subtitle, 105, 30, { align: "center" });
}

function trialBalancePdfHeader(doc, end) {
  doc.setTextColor(20, 20, 20);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text(state.accountingSettings.companyName.toUpperCase(), 105, 18, {
    align: "center",
  });
  doc.setFontSize(10);
  doc.text("NERACA SALDO", 105, 24, { align: "center" });
  doc.text(`PER ${reportDateLabel(end)}`, 105, 30, { align: "center" });
}

async function exportTrialBalancePdf() {
  await ensurePdfLibraries();
  if (!window.jspdf?.jsPDF) throw new Error("Modul PDF belum tersedia");
  const { end } = financeRange();
  const report = trialBalanceReport(end);
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
  doc.autoTable({
    startY: 39,
    margin: { top: 39, right: 14, bottom: 14, left: 14 },
    theme: "grid",
    showHead: "everyPage",
    head: [
      [
        { content: "COA", rowSpan: 2 },
        { content: "NAMA AKUN", rowSpan: 2 },
        { content: "SALDO AKHIR", colSpan: 2 },
      ],
      ["DEBET", "KREDIT"],
    ],
    body: report.rows.map((row) => [
      row.reportCode,
      row.name.toUpperCase(),
      trialBalanceNumber(row.debit),
      trialBalanceNumber(row.credit),
    ]),
    foot: [
      [
        "",
        "JUMLAH",
        trialBalanceNumber(report.totalDebit, true),
        trialBalanceNumber(report.totalCredit, true),
      ],
    ],
    styles: {
      font: "helvetica",
      fontSize: 7.4,
      textColor: [20, 20, 20],
      fillColor: [255, 255, 255],
      lineColor: [20, 20, 20],
      lineWidth: 0.18,
      cellPadding: 1.15,
      valign: "middle",
    },
    headStyles: {
      fillColor: [255, 255, 255],
      textColor: [20, 20, 20],
      fontStyle: "bold",
      halign: "center",
      lineColor: [20, 20, 20],
      lineWidth: 0.22,
    },
    footStyles: {
      fillColor: [255, 255, 255],
      textColor: [20, 20, 20],
      fontStyle: "bold",
      lineColor: [20, 20, 20],
      lineWidth: 0.3,
    },
    didParseCell(data) {
      if (data.section === "foot" && data.column.index >= 2)
        data.cell.styles.halign = "right";
    },
    columnStyles: {
      0: { cellWidth: 28 },
      1: { cellWidth: 88 },
      2: { cellWidth: 33, halign: "right" },
      3: { cellWidth: 33, halign: "right" },
    },
    didDrawPage(data) {
      trialBalancePdfHeader(doc, end);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7);
      doc.setTextColor(95, 95, 95);
      doc.text(
        `Halaman ${data.pageNumber}`,
        196,
        289,
        { align: "right" },
      );
    },
  });
  doc.save(`Tjap_Kemiri_Neraca_Saldo_${end}.pdf`);
  audit("Ekspor PDF Neraca Saldo", `Per ${end}`);
  persist();
  showToast("PDF Neraca Saldo berhasil dibuat");
}

async function exportFinancePdf() {
  try {
    if (state.financeTab === "trial") {
      await exportTrialBalancePdf();
      return;
    }
    await ensurePdfLibraries();
    if (!window.jspdf?.jsPDF) throw new Error("Modul PDF belum tersedia");
    const { start, end } = financeRange();
    const income = profitLossReport(start, end);
    const balance = balanceSheetReport(end);
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "mm", format: "a4" });
    financePdfHeader(doc, "LAPORAN NERACA", `Per ${end}`);
    const balanceRows = [
      ["ASET LANCAR", ""],
      ...balance.assetRows.map((row) => [row.name, rupiah(row.amount)]),
      ["Total Aset Lancar", rupiah(balance.currentAssets)],
      ["ASET TETAP", ""],
      ...balance.fixedRows.map((row) => [row.name, rupiah(row.amount)]),
      ["Total Aset Tetap", rupiah(balance.fixedAssets)],
      ["TOTAL ASET", rupiah(balance.totalAssets)],
      ["KEWAJIBAN", ""],
      ...balance.liabilityRows.map((row) => [row.name, rupiah(row.amount)]),
      ["Total Kewajiban", rupiah(balance.liabilities)],
      ["EKUITAS", ""],
      ...balance.equityRows.map((row) => [row.name, rupiah(row.amount)]),
      ["Laba Periode Berjalan", rupiah(balance.currentProfit)],
      ["Total Ekuitas", rupiah(balance.equity)],
      ["TOTAL KEWAJIBAN DAN EKUITAS", rupiah(balance.totalLiabilitiesEquity)],
      ["SELISIH NERACA", rupiah(balance.difference)],
    ];
    doc.autoTable({
      startY: 36,
      head: [["Keterangan", "Nilai"]],
      body: balanceRows,
      theme: "plain",
      styles: { fontSize: 8, cellPadding: 1.7 },
      headStyles: { fillColor: [32, 32, 30], textColor: [247, 244, 239], fontStyle: "bold" },
      columnStyles: { 1: { halign: "right", cellWidth: 48 } },
      didParseCell(data) {
        const label = String(data.row.raw?.[0] || "");
        const section = !data.row.raw?.[1] && label === label.toUpperCase();
        const total =
          label.startsWith("Total") ||
          label.startsWith("TOTAL") ||
          label.startsWith("SELISIH");
        if (data.section === "body" && (section || total)) {
          data.cell.styles.fontStyle = "bold";
          if (section || total) data.cell.styles.fillColor = [247, 244, 239];
        }
      },
    });
    doc.addPage();
    financePdfHeader(doc, "LAPORAN LABA RUGI", `${start} sampai ${end}`);
    const incomeRows = [
      ["PENDAPATAN", ""],
      ...income.revenueDetails.map((row) => [row.name, rupiah(row.amount)]),
      ["Total Pendapatan", rupiah(income.revenue)],
      ["HARGA POKOK PENJUALAN", ""],
      ...income.cogsDetails.map((row) => [row.name, rupiah(row.amount)]),
      ["LABA KOTOR", rupiah(income.grossProfit)],
      ["BEBAN PENJUALAN", ""],
      ...income.sellingDetails.map((row) => [row.name, rupiah(row.amount)]),
      ["Total Beban Penjualan", rupiah(income.sellingExpenses)],
      ["BEBAN UMUM DAN ADMINISTRASI", ""],
      ...income.adminDetails.map((row) => [row.name, rupiah(row.amount)]),
      ["Total Beban Umum dan Administrasi", rupiah(income.adminExpenses)],
      ["LABA USAHA", rupiah(income.operatingProfit)],
      ["PENDAPATAN LAIN", ""],
      ...income.otherIncomeDetails.map((row) => [row.name, rupiah(row.amount)]),
      ["BEBAN LAIN", ""],
      ...income.otherExpenseDetails.map((row) => [row.name, rupiah(row.amount)]),
      ["LABA BERSIH", rupiah(income.netProfit)],
    ];
    doc.autoTable({
      startY: 36,
      head: [["Keterangan", "Nilai"]],
      body: incomeRows,
      theme: "plain",
      styles: { fontSize: 7.4, cellPadding: 1.3 },
      headStyles: { fillColor: [32, 32, 30], textColor: [247, 244, 239], fontStyle: "bold" },
      columnStyles: { 1: { halign: "right", cellWidth: 48 } },
      didParseCell(data) {
        const label = String(data.row.raw?.[0] || "");
        const section = !data.row.raw?.[1] && label === label.toUpperCase();
        const total =
          label.startsWith("Total") ||
          label.startsWith("TOTAL") ||
          label.startsWith("LABA");
        if (data.section === "body" && (section || total)) {
          data.cell.styles.fontStyle = "bold";
          if (section || total) data.cell.styles.fillColor = [247, 244, 239];
        }
      },
    });
    const pages = doc.getNumberOfPages();
    for (let page = 1; page <= pages; page += 1) {
      doc.setPage(page);
      doc.setFontSize(7.5);
      doc.setTextColor(100);
      doc.text(`CafePOS Tjap Kemiri | Halaman ${page}/${pages}`, 14, 290);
      doc.text(`Dibuat ${localTimestamp()} oleh ${operator().name}`, 196, 290, { align: "right" });
    }
    doc.save(`Tjap_Kemiri_Keuangan_${start}_${end}.pdf`);
    audit("Ekspor PDF Keuangan", `${start} sampai ${end}`);
    persist();
    showToast("Laporan keuangan PDF berhasil dibuat");
  } catch (error) {
    showToast(`Gagal ekspor PDF: ${error.message}`, "error");
  }
}

function normalizeFinanceExcelDate(value) {
  if (value instanceof Date) return businessDate(value);
  if (typeof value === "number") {
    const date = new Date(Date.UTC(1899, 11, 30) + value * 86400000);
    return date.toISOString().slice(0, 10);
  }
  return String(value || "").slice(0, 10);
}

async function parseFinanceWorkbook(file) {
  await ensureExcelLibrary();
  const workbook = new window.ExcelJS.Workbook();
  await workbook.xlsx.load(await file.arrayBuffer());
  const sheet = workbook.getWorksheet("Jurnal Manual");
  if (!sheet) throw new Error('Sheet "Jurnal Manual" tidak ditemukan');
  const rows = [];
  const errors = [];
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    const values = row.values.slice(1);
    if (!values.some((value) => value != null && value !== "")) return;
    const [rawDate, rawReference, rawDescription, rawDebit, rawCredit, rawAmount] = values;
    const journal = {
      date: normalizeFinanceExcelDate(rawDate),
      reference: String(rawReference || "").trim(),
      description: String(rawDescription || "").trim(),
      debitCode: String(rawDebit || "").trim(),
      creditCode: String(rawCredit || "").trim(),
      amount: Number(rawAmount || 0),
    };
    const problems = [];
    if (!/^\d{4}-\d{2}-\d{2}$/.test(journal.date)) problems.push("tanggal");
    if (!journal.reference) problems.push("referensi");
    if (!journal.description) problems.push("keterangan");
    if (!accountingAccount(journal.debitCode)) problems.push("akun debit");
    if (!accountingAccount(journal.creditCode)) problems.push("akun kredit");
    if (journal.debitCode === journal.creditCode) problems.push("akun sama");
    if (!journal.amount || journal.amount <= 0) problems.push("nominal");
    if (problems.length) errors.push(`Baris ${rowNumber}: ${problems.join(", ")} tidak valid`);
    else rows.push(journal);
  });
  return { rows, errors };
}

function financeImportPreview(result, filename) {
  modalState = { type: "finance-import", ...result, filename };
  showModal(
    `<div class="modal-head"><div><h2>Pratinjau Impor Jurnal</h2><p>${escapeHtml(filename)}</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div><div class="modal-body"><div class="stats-grid mini-stats">${statCard("Siap diimpor", String(result.rows.length), "check", "Jurnal valid")}${statCard("Perlu diperbaiki", String(result.errors.length), "warning", "Tidak akan diproses")}</div>${result.rows.length ? `<div class="table-scroll"><table class="data-table"><thead><tr><th>Tanggal</th><th>Referensi</th><th>Debit</th><th>Kredit</th><th>Nominal</th></tr></thead><tbody>${result.rows.map((row) => `<tr><td>${row.date}</td><td>${escapeHtml(row.reference)}</td><td>${row.debitCode}</td><td>${row.creditCode}</td><td>${rupiah(row.amount)}</td></tr>`).join("")}</tbody></table></div>` : ""}${result.errors.length ? `<div class="import-errors"><strong>Baris ditolak</strong>${result.errors.map((error) => `<p>${escapeHtml(error)}</p>`).join("")}</div>` : ""}</div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="confirm-finance-import" ${result.rows.length ? "" : "disabled"}>Impor ${result.rows.length} Jurnal</button></div>`,
    true,
  );
}

function openFinanceExcelImport() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  input.addEventListener("change", async () => {
    if (!input.files?.[0]) return;
    try {
      financeImportPreview(await parseFinanceWorkbook(input.files[0]), input.files[0].name);
    } catch (error) {
      showToast(`Impor jurnal gagal: ${error.message}`, "error");
    }
  });
  input.click();
}

function openFinancePdfArchive() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "application/pdf,.pdf";
  input.addEventListener("change", async () => {
    if (!input.files?.[0]) return;
    try {
      await savePdfDocument(input.files[0]);
    } catch (error) {
      showToast(`Arsip PDF gagal: ${error.message}`, "error");
    }
  });
  input.click();
}

async function exportExcel() {
  try {
    const workbook = await buildExportWorkbook();
    const buffer = await workbook.xlsx.writeBuffer();
    downloadBlob(
      new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }),
      `Tjap_Kemiri_Laporan_${filenameDate()}.xlsx`,
    );
    audit("Ekspor Excel", "Laporan multi-sheet");
    persist();
    showToast("Laporan Excel berhasil dibuat");
  } catch (error) {
    showToast(`Gagal ekspor Excel: ${error.message}`, "error");
  }
}

async function exportSalesHistoryExcel() {
  try {
    await ensureExcelLibrary();
    if (!window.ExcelJS) throw new Error("Modul Excel belum tersedia");
    const transactions = visibleSalesTransactions();
    const sales = transactions.reduce(
      (sum, transaction) => sum + Number(transaction.total || 0),
      0,
    );
    const workbook = new window.ExcelJS.Workbook();
    workbook.creator = "CafePOS Tjap Kemiri";
    workbook.created = new Date();
    const summarySheet = addDataSheet(
      workbook,
      "Ringkasan",
      ["Metrik", "Nilai", "Keterangan"],
      [
        [
          "Lingkup",
          canViewAllSales() ? "Seluruh outlet" : operator().name,
          roleLabel(operator().role),
        ],
        ["Periode", periodLabel(), filenameDate()],
        ["Jumlah transaksi", transactions.length, "Transaksi lunas"],
        ["Total penjualan", sales, "Pembayaran QRIS dan Debit"],
        [
          "Rata-rata transaksi",
          transactions.length ? sales / transactions.length : 0,
          "Per transaksi",
        ],
      ],
    );
    summarySheet.getCell("B5").numFmt = '"Rp" #,##0';
    summarySheet.getCell("B6").numFmt = '"Rp" #,##0';
    addDataSheet(
      workbook,
      "Transaksi",
      [
        "Nomor Pesanan",
        "Tanggal",
        "Waktu",
        "Petugas",
        "Pelanggan",
        "Meja",
        "Metode",
        "Referensi",
        "Jumlah Item",
        "Total",
        "Status",
      ],
      transactions.map((transaction) => [
        String(transaction.id),
        transaction.businessDate || "",
        transaction.time || "",
        transaction.operator || "",
        transaction.customer || "",
        transaction.table || "",
        transaction.method || "",
        transaction.paymentReference || "",
        transactionItemCount(transaction),
        Number(transaction.total || 0),
        transaction.status || "Paid",
      ]),
      [10],
    );
    const buffer = await workbook.xlsx.writeBuffer();
    const scope = canViewAllSales()
      ? "Tim"
      : operator().name.replace(/\s+/g, "_");
    downloadBlob(
      new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }),
      `Tjap_Kemiri_Penjualan_${scope}_${filenameDate()}.xlsx`,
    );
    audit("Ekspor histori penjualan", `${scope} · Excel`);
    persist();
    showToast("Histori penjualan Excel berhasil dibuat");
  } catch (error) {
    showToast(`Gagal ekspor Excel: ${error.message}`, "error");
  }
}

async function downloadImportTemplate() {
  try {
    const response = await fetch(
      "/app/templates/Tjap_Kemiri_Template_Stok_Masuk.xlsx",
    );
    if (!response.ok) throw new Error("Template tidak ditemukan");
    downloadBlob(await response.blob(), "Tjap_Kemiri_Template_Stok_Masuk.xlsx");
    showToast("Template impor Excel berhasil diunduh");
  } catch (error) {
    showToast(`Gagal membuat template: ${error.message}`, "error");
  }
}

async function parseStockWorkbook(file) {
  await ensureExcelLibrary();
  if (file.size > 5 * 1024 * 1024)
    throw new Error("Ukuran Excel maksimum 5 MB");
  const workbook = new window.ExcelJS.Workbook();
  await workbook.xlsx.load(await file.arrayBuffer());
  const sheet = workbook.getWorksheet("Stok Masuk");
  if (!sheet) throw new Error('Sheet "Stok Masuk" tidak ditemukan');
  const rows = [];
  const errors = [];
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    if (rowNumber > 501) {
      if (!errors.includes("Maksimum 500 baris data per impor"))
        errors.push("Maksimum 500 baris data per impor");
      return;
    }
    const values = Array.from(
      { length: 7 },
      (_, index) => row.getCell(index + 1).value,
    );
    if (values.every((value) => value == null || String(value).trim() === ""))
      return;
    const [invoice, vendor, ingredientName, qtyRaw, unit, totalRaw, note] =
      values;
    const item = state.ingredients.find(
      (ingredient) =>
        ingredient.name.toLowerCase() ===
        String(ingredientName || "")
          .trim()
          .toLowerCase(),
    );
    const qty = Number(qtyRaw);
    const totalPrice = Number(totalRaw);
    const problems = [];
    if (!invoice) problems.push("nomor nota kosong");
    if (!vendor) problems.push("vendor kosong");
    if (!item) problems.push("bahan tidak dikenal");
    if (!qty || qty <= 0) problems.push("jumlah tidak valid");
    if (!totalPrice || totalPrice <= 0) problems.push("harga tidak valid");
    if (
      item &&
      String(unit || "")
        .trim()
        .toLowerCase() !== item.unit.toLowerCase()
    )
      problems.push(`satuan harus ${item.unit}`);
    if (
      item &&
      state.purchases.some(
        (purchase) =>
          purchase.invoice.toLowerCase() ===
            String(invoice || "")
              .trim()
              .toLowerCase() &&
          purchase.vendor.toLowerCase() ===
            String(vendor || "")
              .trim()
              .toLowerCase() &&
          purchase.itemId === item.id,
      )
    )
      problems.push("nota/vendor/bahan sudah pernah diimpor");
    if (problems.length)
      errors.push(`Baris ${rowNumber}: ${problems.join(", ")}`);
    else
      rows.push({
        invoice: String(invoice),
        vendor: String(vendor),
        itemId: item.id,
        itemName: item.name,
        qty,
        unit: item.unit,
        totalPrice,
        note: String(note || ""),
      });
  });
  return { rows, errors };
}

function showImportPreview(result, filename) {
  modalState = { type: "excel-import", ...result, filename };
  showModal(
    `<div class="modal-head"><div><h2>Pratinjau Impor Excel</h2><p>${escapeHtml(filename)}</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div><div class="modal-body"><div class="stats-grid mini-stats">${statCard("Siap diimpor", String(result.rows.length), "check", "Baris valid")}${statCard("Perlu diperbaiki", String(result.errors.length), "warning", "Tidak akan diproses")}</div>${result.rows.length ? `<div class="table-scroll"><table class="data-table"><thead><tr><th>Nota</th><th>Vendor</th><th>Bahan</th><th>Jumlah</th><th>Total</th></tr></thead><tbody>${result.rows.map((row) => `<tr><td>${escapeHtml(row.invoice)}</td><td>${escapeHtml(row.vendor)}</td><td>${row.itemName}</td><td>${row.qty} ${row.unit}</td><td>${rupiah(row.totalPrice)}</td></tr>`).join("")}</tbody></table></div>` : ""}${result.errors.length ? `<div class="import-errors"><strong>Baris ditolak</strong>${result.errors.map((error) => `<p>${escapeHtml(error)}</p>`).join("")}</div>` : ""}</div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="confirm-excel-import" ${result.rows.length ? "" : "disabled"}>Impor ${result.rows.length} Baris Valid</button></div>`,
    true,
  );
}

async function exportPdf() {
  try {
    await ensurePdfLibraries();
    if (!window.jspdf?.jsPDF) throw new Error("Modul PDF belum tersedia");
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "mm", format: "a4" });
    const exportTransactions = activeTransactionsForPeriod();
    const sales = exportTransactions.reduce((sum, tx) => sum + tx.total, 0);
    const reportTax =
      state.tax.included && state.tax.rate
        ? sales - sales / (1 + Number(state.tax.rate) / 100)
        : 0;
    const hpp = estimatedHppTotal(exportTransactions);
    const hppEstimated = estimatedHppCount(exportTransactions);
    const expenses = state.expenses
      .filter((row) => inPeriod(row.date))
      .reduce((sum, row) => sum + row.amount, 0);
    doc.setFillColor(166, 58, 43);
    doc.rect(0, 0, 210, 30, "F");
    doc.setTextColor(247, 244, 239);
    doc.setFontSize(18);
    doc.text("TJAP KEMIRI - LAPORAN OPERASIONAL", 14, 14);
    doc.setFontSize(9);
    doc.text(
      `Tanggal ${filenameDate()} | Diekspor oleh ${operator().name}`,
      14,
      22,
    );
    doc.setTextColor(32, 32, 30);
    doc.setFontSize(10);
    doc.text(`Periode: ${periodLabel()}`, 14, 36);
    doc.text(`Penjualan bruto: ${rupiah(sales)}`, 14, 42);
    doc.text(`Pajak terkandung: ${rupiah(reportTax)}`, 14, 48);
    doc.text(
      `${hppEstimated ? "HPP campuran" : "HPP resep"}: ${rupiah(hpp)}`,
      14,
      54,
    );
    doc.text(`Biaya operasional: ${rupiah(expenses)}`, 14, 60);
    doc.text(
      `Margin operasional estimasi: ${rupiah(sales - reportTax - hpp - expenses)}`,
      14,
      66,
    );
    doc.autoTable({
      startY: 72,
      head: [["Order", "Tanggal", "Waktu", "Operator", "Metode", "Total"]],
      body: exportTransactions.map((tx) => [
        String(tx.id),
        tx.businessDate,
        tx.time,
        tx.operator,
        tx.method,
        rupiah(tx.total),
      ]),
      styles: { fontSize: 8 },
      headStyles: { fillColor: [166, 58, 43], textColor: [247, 244, 239] },
      alternateRowStyles: { fillColor: [247, 244, 239] },
    });
    const nextY = (doc.lastAutoTable?.finalY || 75) + 10;
    doc.setFontSize(12);
    doc.text("Stok Menipis", 14, nextY);
    const lowRows = state.ingredients
      .filter((item) => item.minimum != null && item.qty <= item.minimum)
      .map((item) => [
        item.name,
        `${item.qty} ${item.unit}`,
        `${item.minimum} ${item.unit}`,
      ]);
    doc.autoTable({
      startY: nextY + 4,
      head: [["Bahan", "Stok", "Minimum"]],
      body: lowRows.length ? lowRows : [["Semua stok aman", "-", "-"]],
      styles: { fontSize: 8 },
      headStyles: { fillColor: [166, 58, 43] },
    });
    const pages = doc.getNumberOfPages();
    for (let page = 1; page <= pages; page += 1) {
      doc.setPage(page);
      doc.setFontSize(8);
      doc.setTextColor(110);
      doc.text(`CafePOS Tjap Kemiri | Halaman ${page}/${pages}`, 14, 290);
    }
    doc.save(`Tjap_Kemiri_Laporan_${filenameDate()}.pdf`);
    audit("Ekspor PDF", "Laporan operasional");
    persist();
    showToast("Laporan PDF berhasil dibuat");
  } catch (error) {
    showToast(`Gagal ekspor PDF: ${error.message}`, "error");
  }
}

async function exportSalesHistoryPdf() {
  try {
    await ensurePdfLibraries();
    if (!window.jspdf?.jsPDF) throw new Error("Modul PDF belum tersedia");
    const { jsPDF } = window.jspdf;
    const transactions = visibleSalesTransactions();
    const sales = transactions.reduce(
      (sum, transaction) => sum + Number(transaction.total || 0),
      0,
    );
    const doc = new jsPDF({ unit: "mm", format: "a4" });
    const scope = canViewAllSales()
      ? "Seluruh petugas"
      : `${operator().name} · ${roleLabel(operator().role)}`;
    doc.setFillColor(166, 58, 43);
    doc.rect(0, 0, 210, 30, "F");
    doc.setTextColor(247, 244, 239);
    doc.setFontSize(17);
    doc.text("TJAP KEMIRI - HISTORI PENJUALAN", 14, 14);
    doc.setFontSize(9);
    doc.text(`Lingkup: ${scope} | Periode: ${periodLabel()}`, 14, 22);
    doc.setTextColor(32, 32, 30);
    doc.setFontSize(10);
    doc.text(`Jumlah transaksi: ${transactions.length}`, 14, 39);
    doc.text(`Total penjualan: ${rupiah(sales)}`, 14, 46);
    doc.text(
      `Rata-rata transaksi: ${rupiah(transactions.length ? sales / transactions.length : 0)}`,
      14,
      53,
    );
    doc.autoTable({
      startY: 60,
      head: [
        ["Pesanan", "Tanggal", "Waktu", "Petugas", "Metode", "Item", "Total"],
      ],
      body: transactions.map((transaction) => [
        String(transaction.id),
        transaction.businessDate || "",
        transaction.time || "",
        transaction.operator || "",
        transaction.method || "",
        String(transactionItemCount(transaction)),
        rupiah(transaction.total),
      ]),
      styles: { fontSize: 8 },
      headStyles: { fillColor: [166, 58, 43], textColor: [247, 244, 239] },
      alternateRowStyles: { fillColor: [247, 244, 239] },
    });
    const pages = doc.getNumberOfPages();
    for (let page = 1; page <= pages; page += 1) {
      doc.setPage(page);
      doc.setFontSize(8);
      doc.setTextColor(110);
      doc.text(`CafePOS Tjap Kemiri | Halaman ${page}/${pages}`, 14, 290);
    }
    const filenameScope = canViewAllSales()
      ? "Tim"
      : operator().name.replace(/\s+/g, "_");
    doc.save(`Tjap_Kemiri_Penjualan_${filenameScope}_${filenameDate()}.pdf`);
    audit("Ekspor histori penjualan", `${filenameScope} · PDF`);
    persist();
    showToast("Histori penjualan PDF berhasil dibuat");
  } catch (error) {
    showToast(`Gagal ekspor PDF: ${error.message}`, "error");
  }
}

function openDocumentDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("tjap-kemiri-documents", 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains("files"))
        request.result.createObjectStore("files", { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function openAttendancePhotoDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("tjap-kemiri-attendance", 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains("photos"))
        request.result.createObjectStore("photos", { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveAttendancePhoto(employee, attendanceType, blob) {
  const id = `${businessDate()}-${employee.id}-${attendanceType}-${Date.now()}`;
  const file = new File(
    [blob],
    `Absensi_${employee.name}_${attendanceType}_${businessDate()}.jpg`,
    { type: "image/jpeg" },
  );
  const db = await openAttendancePhotoDatabase();
  await new Promise((resolve, reject) => {
    const tx = db.transaction("photos", "readwrite");
    tx.objectStore("photos").put({
      id,
      employeeId: employee.id,
      attendanceType,
      capturedAt: localTimestamp(),
      file,
    });
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
  db.close();
  return id;
}

async function readAttendancePhoto(id) {
  const db = await openAttendancePhotoDatabase();
  const record = await new Promise((resolve, reject) => {
    const request = db
      .transaction("photos", "readonly")
      .objectStore("photos")
      .get(String(id));
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
  db.close();
  return record;
}

async function savePdfDocument(file) {
  if (
    file.type !== "application/pdf" &&
    !file.name.toLowerCase().endsWith(".pdf")
  )
    throw new Error("File harus berformat PDF");
  if (file.size > 10 * 1024 * 1024)
    throw new Error("Ukuran PDF maksimum 10 MB");
  const id = Date.now();
  const db = await openDocumentDatabase();
  await new Promise((resolve, reject) => {
    const tx = db.transaction("files", "readwrite");
    tx.objectStore("files").put({ id, file });
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
  db.close();
  state.documents.push({
    id,
    name: file.name,
    kind: "PDF",
    sizeLabel: `${(file.size / 1024).toFixed(1)} KB`,
    by: operator().name,
    createdAt: nowTime(),
  });
  audit("Impor arsip PDF", file.name);
  persist();
  renderShell();
  showToast("PDF tersimpan di arsip lokal tablet");
}

async function downloadStoredDocument(id) {
  try {
    const db = await openDocumentDatabase();
    const record = await new Promise((resolve, reject) => {
      const request = db
        .transaction("files")
        .objectStore("files")
        .get(Number(id));
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    db.close();
    if (!record?.file) throw new Error("Dokumen tidak ditemukan");
    downloadBlob(record.file, record.file.name);
  } catch (error) {
    showToast(error.message, "error");
  }
}

function escapeHtml(value = "") {
  return String(value).replace(
    /[&<>'"]/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        char
      ],
  );
}

function showToast(message, type = "success") {
  const root = document.querySelector("#toast-root");
  root.innerHTML = `<div class="toast ${type}">${icon(type === "error" ? "warning" : "check")}<span>${escapeHtml(message)}</span></div>`;
  setTimeout(() => {
    root.innerHTML = "";
  }, 3200);
}

function showModal(content, wide = false, locked = false) {
  modalDismissLocked = locked;
  document.querySelector("#modal-root").innerHTML =
    `<div class="modal-backdrop" ${locked ? "" : `data-action="dismiss-modal"`}><div class="modal ${wide ? "wide" : ""}" data-modal-panel>${content}</div></div>`;
  const modalHead = document.querySelector("#modal-root .modal-head");
  if (modalHead && !modalHead.querySelector(".icon-button")) {
    const closeButton = document.createElement("button");
    closeButton.className = "icon-button";
    closeButton.dataset.action = "close-modal";
    closeButton.setAttribute("aria-label", "Tutup");
    closeButton.setAttribute("title", "Tutup");
    closeButton.innerHTML = icon("close");
    modalHead.appendChild(closeButton);
  }
  document
    .querySelectorAll("#modal-root .icon-button:not([aria-label])")
    .forEach((button) => button.setAttribute("aria-label", "Tutup"));
}

function stopAttendanceCamera() {
  attendanceCameraStream?.getTracks().forEach((track) => track.stop());
  attendanceCameraStream = null;
}

function clearAttendanceCapture() {
  attendanceCaptureBlob = null;
  if (attendancePreviewUrl) URL.revokeObjectURL(attendancePreviewUrl);
  attendancePreviewUrl = null;
}

function closeModal() {
  stopAttendanceCamera();
  clearAttendanceCapture();
  document.querySelector("#modal-root").innerHTML = "";
  modalState = null;
  modalDismissLocked = false;
}

function logoutAdminAccount() {
  if (authenticatedEmployee) {
    audit(
      "Akun pribadi keluar",
      roleLabel(authenticatedEmployee.role),
      authenticatedEmployee.name,
    );
    persist();
  }
  authenticatedEmployee = null;
  sessionStorage.removeItem(PERSONAL_AUTH_SESSION_KEY);
  state.operatorId = employees[0].id;
  state.view = "dashboard";
  state.navExpanded = false;
  closeModal();
  navigateToLogin("personal", true);
}

function accountSessionModal() {
  if (!authenticatedEmployee) {
    navigateToLogin("personal", true);
    return;
  }
  showModal(
    `<div class="modal-head"><div><h2>Akun ${escapeHtml(authenticatedEmployee.name)}</h2><p>${roleLabel(authenticatedEmployee.role)} · @${escapeHtml(authenticatedEmployee.username)}</p></div><button class="icon-button" data-action="close-modal" aria-label="Tutup" title="Tutup">${icon("close")}</button></div><div class="modal-body"><div class="signed-session-card"><span class="avatar">${initials(authenticatedEmployee.name)}</span><div><strong>${escapeHtml(authenticatedEmployee.name)}</strong><small>Akun pribadi aktif pada sesi ini.</small></div></div><p class="helper-note">Untuk masuk sebagai karyawan lain, keluar dari akun ini terlebih dahulu.</p></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button danger" data-action="logout-account">Keluar Akun</button></div>`,
  );
}

function terminalSessionModal() {
  if (!authenticatedTerminal) {
    navigateToLogin("terminal", true);
    return;
  }
  showModal(
    `<div class="modal-head"><div><h2>${escapeHtml(authenticatedTerminal.name)}</h2><p>Akun perangkat kasir</p></div><button class="icon-button" data-action="close-modal" aria-label="Tutup" title="Tutup">${icon("close")}</button></div><div class="modal-body"><div class="signed-session-card terminal-session-card"><span class="terminal-session-icon">${icon("pos")}</span><div><strong>${escapeHtml(authenticatedTerminal.name)}</strong><small>${escapeHtml(authenticatedTerminal.email)}</small></div></div><p class="helper-note">Melepas akun perangkat akan menutup akses POS pada tablet ini. Data transaksi tidak dihapus.</p></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button danger" data-action="confirm-terminal-logout">Lepaskan Akun Perangkat</button></div>`,
  );
}

function terminalLogoutConfirmModal() {
  if (!authenticatedTerminal) return;
  showModal(
    `<div class="modal-head"><div><h2>Ganti Akun Perangkat?</h2><p>${escapeHtml(authenticatedTerminal.name)}</p></div><button class="icon-button" data-action="close-modal" aria-label="Tutup" title="Tutup">${icon("close")}</button></div><div class="modal-body"><p class="helper-note">Tablet ini harus masuk kembali dengan email dan PIN perangkat. Data transaksi tetap tersimpan.</p></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button danger" data-action="confirm-terminal-logout">Lepaskan Akun</button></div>`,
  );
}

function logoutTerminalAccount() {
  if (authenticatedTerminal) {
    audit(
      "Akun tablet dilepas",
      authenticatedTerminal.email,
      authenticatedTerminal.name,
    );
    persist();
  }
  localStorage.removeItem(TERMINAL_AUTH_STORAGE_KEY);
  authenticatedTerminal = null;
  resetPosOperatorConfirmation();
  closeModal();
  navigateToLogin("terminal", true);
}

function chooseOperatorModal(required = false) {
  modalState = { type: "choose-operator", required };
  const title = required
    ? "Pilih Petugas Sebelum Melayani"
    : "Ganti Petugas Kasir";
  const description = required
    ? "Hanya karyawan yang sedang hadir dapat dipilih."
    : "Petugas terpilih tetap aktif sampai diganti.";
  const closeButton = `<button class="icon-button" data-action="${required ? "exit-pos-to-login" : "close-modal"}" aria-label="${required ? "Kembali ke login tablet" : "Tutup"}" title="${required ? "Kembali ke login tablet" : "Tutup"}">${icon("close")}</button>`;
  showModal(
    `<div class="modal-head"><div><h2>${title}</h2><p>${description}</p></div>${closeButton}</div>
    <div class="modal-body"><div class="choice-grid">${employees
      .filter((employee) => employee.canServe)
      .map((employee) => {
        const available = isEmployeePresent(employee.id);
        const detail = `${roleLabel(employee.role)} · ${attendanceAvailabilityLabel(employee.id)}`;
        return `<button class="choice-card ${available && state.operatorId === employee.id ? "active" : ""}" data-action="set-operator" data-id="${employee.id}" ${available ? "" : "disabled"}><strong>${employee.name}</strong><small>${detail}</small></button>`;
      })
      .join("")}</div></div>`,
    false,
    required,
  );
}

function noteModal(itemId) {
  const item = state.cart.find((product) => product.id === Number(itemId));
  const options = ["Kurang gula", "Tanpa gula", "Sedikit es", "Tanpa es"];
  modalState = {
    type: "note",
    itemId: Number(itemId),
    selected: new Set(item.modifiers || []),
  };
  showModal(
    `<div class="modal-head"><div><h2>Catatan Barista</h2><p>${item.name}</p></div><button class="icon-button" data-action="close-modal" aria-label="Tutup">${icon("close")}</button></div><div class="modal-body"><div class="choice-grid modifier-grid">${options.map((option) => `<button class="choice-card ${modalState.selected.has(option) ? "active" : ""}" data-action="toggle-modifier" data-value="${option}"><strong>${option}</strong></button>`).join("")}</div><div class="field" style="margin-top:12px"><label>Catatan tambahan (opsional)</label><textarea id="custom-note" placeholder="Instruksi lain untuk barista">${escapeHtml(item.customNote || "")}</textarea></div></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="save-note">Simpan Catatan</button></div>`,
  );
}

function discountModal(scope, id = null) {
  modalState = { type: "discount", scope, id, discountType: "percent" };
  showModal(`<div class="modal-head"><div><h2>Diskon ${scope === "item" ? "Item" : "Transaksi"}</h2><p>Pilih persentase atau nominal Rupiah.</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div>
    <div class="modal-body"><div class="segmented" style="margin-bottom:14px"><button class="segment active" data-action="discount-type" data-type="percent">%</button><button class="segment" data-action="discount-type" data-type="rupiah">Rp</button></div>
      <div class="field"><label>Nilai diskon</label><input id="discount-value" type="number" min="0" placeholder="Contoh: 10" /></div>
      <div class="field" style="margin-top:12px"><label>Keterangan wajib</label><textarea id="discount-reason" placeholder="Alasan pemberian diskon"></textarea></div></div>
    <div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="apply-discount">Terapkan Diskon</button></div>`);
}

function addonModal(itemId) {
  const item = state.cart.find((product) => product.id === Number(itemId));
  if (!item) return;
  modalState = {
    type: "addon",
    itemId: Number(itemId),
    selected: new Set((item.addons || []).map((addon) => addon.id)),
  };
  showModal(
    `<div class="modal-head"><div><h2>Tambahan Berbayar</h2><p>${item.name} · sentuh kembali untuk membatalkan.</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div><div class="modal-body"><div class="choice-grid addon-choice-grid">${paidAddons.map((addon) => `<button class="choice-card addon-choice ${modalState.selected.has(addon.id) ? "active" : ""}" data-action="toggle-addon" data-id="${addon.id}" aria-pressed="${modalState.selected.has(addon.id)}"><span><strong>${addon.name}</strong><small>+ ${rupiah(addon.price)} · ${addon.stockQty} ${addon.stockUnit} ${addon.stockIngredient}</small></span><span class="addon-choice-state">${modalState.selected.has(addon.id) ? `${icon("check")}Dipilih` : `${icon("plus")}Tambahkan`}</span></button>`).join("")}</div><p class="muted" style="font-size:11px;margin:14px 0 0">Hanya tambahan yang berstatus Dipilih yang memengaruhi total dan stok.</p></div><div class="modal-foot addon-modal-foot"><button class="button ghost" data-action="clear-addons" ${modalState.selected.size ? "" : "disabled"}>Hapus Semua</button><span class="modal-foot-spacer"></span><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="apply-addons">Simpan Pilihan</button></div>`,
  );
}

function paymentModal(billId = null) {
  if (billId) {
    const bill = state.bills.find((item) => item.id === Number(billId));
    if (bill && state.activeBillId !== bill.id) {
      state.cart = bill.items.map((item) => ({ ...item }));
      state.customer = bill.customer;
      state.table = bill.table || "";
      state.orderType = bill.type;
      state.orderDiscount = bill.orderDiscount || null;
      state.nextOrderNumber = bill.id;
    }
    if (bill) modalState = { billId: bill.id, method: "QRIS BNI" };
  } else modalState = { method: "QRIS BNI" };
  const total = totals().total;
  showModal(`<div class="modal-head"><div><h2>Pembayaran</h2><p>PESANAN #${state.nextOrderNumber}</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div>
    <div class="modal-body"><div class="payment-total"><small>Total tagihan</small><strong>${rupiah(total)}</strong></div>
      <div class="choice-grid"><button class="choice-card active" data-action="payment-method" data-method="QRIS BNI"><strong>QRIS BNI Fisik</strong><small>Kode QR di outlet · konfirmasi manual</small></button><button class="choice-card" data-action="payment-method" data-method="Debit"><strong>Kartu Debit</strong><small>Proses melalui mesin EDC</small></button></div>
      <div id="qris-fields" style="margin-top:15px"><div class="surface" style="box-shadow:none;background:var(--onyx-white);text-align:center"><strong>Minta pelanggan memindai QRIS Bank BNI fisik</strong><p class="muted" style="font-size:12px">Pastikan notifikasi dana diterima sebelum transaksi diselesaikan.</p><div class="field"><input id="qris-reference" placeholder="Nomor referensi${state.settings.requirePaymentReference ? " (wajib)" : " (opsional)"}" /></div></div></div>
      <div id="debit-fields" class="hidden" style="margin-top:15px"><div class="surface" style="box-shadow:none;background:var(--onyx-white)"><strong>Proses kartu pada mesin EDC</strong><p class="muted" style="font-size:12px">Pastikan transaksi EDC berhasil dan simpan slip jika diperlukan.</p><div class="field"><input id="debit-reference" placeholder="Nomor approval EDC${state.settings.requirePaymentReference ? " (wajib)" : " (opsional)"}" /></div></div></div>
    </div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="complete-payment">Konfirmasi Pembayaran</button></div>`);
}

function attendanceSelfieModal(employeeId) {
  const employee = employees.find((item) => item.id === Number(employeeId));
  if (
    !employee ||
    state.portal !== "admin" ||
    employee.id !== operator().id
  ) {
    showToast("Absensi hanya dapat dilakukan dari akun pribadi", "error");
    return;
  }
  stopAttendanceCamera();
  clearAttendanceCapture();
  const isClockOut = isEmployeePresent(employee.id);
  modalState = {
    type: "attendance-selfie",
    employeeId: employee.id,
    attendanceType: isClockOut ? "out" : "in",
  };
  showModal(
    `<div class="modal-head"><div><h2>Selfie Absen ${isClockOut ? "Pulang" : "Masuk"}</h2><p>${escapeHtml(employee.name)} · pastikan wajah terlihat jelas.</p></div><button class="icon-button" data-action="close-modal" aria-label="Tutup" title="Tutup">${icon("close")}</button></div>
    <div class="modal-body"><div class="attendance-camera-frame"><video id="attendance-camera-video" autoplay muted playsinline></video><img id="attendance-camera-preview" class="hidden" alt="Pratinjau selfie absensi" /><div id="attendance-camera-empty" class="attendance-camera-empty">${icon("camera")}<strong>Kamera belum aktif</strong><small>Izin kamera hanya digunakan saat mengambil selfie.</small></div></div><p id="attendance-camera-status" class="helper-note">Aktifkan kamera depan untuk melanjutkan.</p></div>
    <div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button secondary" id="attendance-camera-start" data-action="start-attendance-camera">${icon("camera")}Aktifkan Kamera</button><button class="button primary hidden" id="attendance-camera-capture" data-action="capture-attendance-selfie">Ambil Selfie</button><button class="button secondary hidden" id="attendance-camera-retake" data-action="retake-attendance-selfie">Ambil Ulang</button><button class="button primary hidden" id="attendance-camera-confirm" data-action="confirm-attendance-selfie">Konfirmasi Absen ${isClockOut ? "Pulang" : "Masuk"}</button></div>`,
    true,
  );
}

async function startAttendanceCamera() {
  if (modalState?.type !== "attendance-selfie") return;
  const status = document.querySelector("#attendance-camera-status");
  const startButton = document.querySelector("#attendance-camera-start");
  if (!navigator.mediaDevices?.getUserMedia) {
    status.textContent = "Kamera tidak tersedia pada perangkat atau browser ini.";
    showToast("Kamera tidak tersedia", "error");
    return;
  }
  startButton.disabled = true;
  status.textContent = "Meminta izin kamera...";
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "user",
        width: { ideal: 960 },
        height: { ideal: 720 },
      },
      audio: false,
    });
    if (modalState?.type !== "attendance-selfie") {
      stream.getTracks().forEach((track) => track.stop());
      return;
    }
    attendanceCameraStream = stream;
    const video = document.querySelector("#attendance-camera-video");
    video.srcObject = stream;
    await video.play();
    document.querySelector("#attendance-camera-empty").classList.add("hidden");
    startButton.classList.add("hidden");
    document
      .querySelector("#attendance-camera-capture")
      .classList.remove("hidden");
    status.textContent = "Posisikan wajah di tengah lalu ambil selfie.";
  } catch (error) {
    startButton.disabled = false;
    status.textContent =
      error.name === "NotAllowedError"
        ? "Izin kamera ditolak. Izinkan kamera dari pengaturan browser."
        : "Kamera gagal dibuka. Pastikan tidak sedang digunakan aplikasi lain.";
    showToast("Kamera gagal dibuka", "error");
  }
}

async function captureAttendanceSelfie() {
  const video = document.querySelector("#attendance-camera-video");
  if (!video?.videoWidth || !video.videoHeight) {
    showToast("Kamera belum siap", "error");
    return;
  }
  const width = Math.min(720, video.videoWidth);
  const height = Math.round((width * video.videoHeight) / video.videoWidth);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  context.translate(width, 0);
  context.scale(-1, 1);
  context.drawImage(video, 0, 0, width, height);
  attendanceCaptureBlob = await new Promise((resolve) =>
    canvas.toBlob(resolve, "image/jpeg", 0.84),
  );
  if (!attendanceCaptureBlob) {
    showToast("Selfie gagal diambil", "error");
    return;
  }
  stopAttendanceCamera();
  attendancePreviewUrl = URL.createObjectURL(attendanceCaptureBlob);
  const preview = document.querySelector("#attendance-camera-preview");
  preview.src = attendancePreviewUrl;
  preview.classList.remove("hidden");
  video.classList.add("hidden");
  document
    .querySelector("#attendance-camera-capture")
    .classList.add("hidden");
  document
    .querySelector("#attendance-camera-retake")
    .classList.remove("hidden");
  document
    .querySelector("#attendance-camera-confirm")
    .classList.remove("hidden");
  document.querySelector("#attendance-camera-status").textContent =
    "Periksa selfie sebelum mengonfirmasi absensi.";
}

async function retakeAttendanceSelfie() {
  clearAttendanceCapture();
  const video = document.querySelector("#attendance-camera-video");
  video.classList.remove("hidden");
  const preview = document.querySelector("#attendance-camera-preview");
  preview.removeAttribute("src");
  preview.classList.add("hidden");
  document
    .querySelector("#attendance-camera-retake")
    .classList.add("hidden");
  document
    .querySelector("#attendance-camera-confirm")
    .classList.add("hidden");
  const startButton = document.querySelector("#attendance-camera-start");
  startButton.disabled = false;
  startButton.classList.remove("hidden");
  document.querySelector("#attendance-camera-empty").classList.remove("hidden");
  document.querySelector("#attendance-camera-status").textContent =
    "Aktifkan kamera depan untuk mengambil ulang.";
}

async function confirmAttendanceSelfie() {
  if (modalState?.type !== "attendance-selfie" || !attendanceCaptureBlob) {
    showToast("Ambil selfie terlebih dahulu", "error");
    return;
  }
  const employee = employees.find(
    (item) => item.id === Number(modalState.employeeId),
  );
  if (
    !employee ||
    state.portal !== "admin" ||
    employee.id !== operator().id
  ) {
    closeModal();
    showToast("Sesi akun tidak sesuai", "error");
    return;
  }
  const isClockOut = modalState.attendanceType === "out";
  if (isClockOut !== isEmployeePresent(employee.id)) {
    closeModal();
    showToast("Status absensi telah berubah. Muat ulang lalu coba lagi.", "error");
    return;
  }
  const confirmButton = document.querySelector(
    "#attendance-camera-confirm",
  );
  confirmButton.disabled = true;
  confirmButton.textContent = "Menyimpan...";
  try {
    const photoId = await saveAttendancePhoto(
      employee,
      isClockOut ? "pulang" : "masuk",
      attendanceCaptureBlob,
    );
    const record = attendanceRecord(employee.id);
    if (isClockOut) {
      state.attendance[employee.id] = {
        ...record,
        out: nowTime(),
        selfieOutId: photoId,
        selfieOutAt: localTimestamp(),
      };
      if (confirmedPosOperatorId === employee.id)
        resetPosOperatorConfirmation();
    } else {
      state.attendance[employee.id] = {
        in: nowTime(),
        out: null,
        selfieInId: photoId,
        selfieInAt: localTimestamp(),
      };
    }
    audit(
      `Absensi ${isClockOut ? "pulang" : "masuk"}`,
      `${employee.name} · selfie tersimpan`,
    );
    persist();
    closeModal();
    renderShell();
    showToast(`Absen ${isClockOut ? "pulang" : "masuk"} berhasil`);
  } catch (error) {
    confirmButton.disabled = false;
    confirmButton.textContent = `Konfirmasi Absen ${isClockOut ? "Pulang" : "Masuk"}`;
    showToast(`Selfie gagal disimpan: ${error.message}`, "error");
  }
}

async function viewAttendancePhotoModal(photoId, employeeName) {
  try {
    const record = await readAttendancePhoto(photoId);
    if (!record?.file) throw new Error("Selfie tidak ditemukan");
    clearAttendanceCapture();
    attendancePreviewUrl = URL.createObjectURL(record.file);
    showModal(
      `<div class="modal-head"><div><h2>Selfie Absensi</h2><p>${escapeHtml(employeeName)} · ${escapeHtml(record.attendanceType)}</p></div><button class="icon-button" data-action="close-modal" aria-label="Tutup" title="Tutup">${icon("close")}</button></div><div class="modal-body"><img class="attendance-photo-evidence" src="${attendancePreviewUrl}" alt="Selfie absensi ${escapeHtml(employeeName)}" /><p class="helper-note">Diambil ${escapeHtml(record.capturedAt)}</p></div><div class="modal-foot"><button class="button primary" data-action="close-modal">Tutup</button></div>`,
      true,
    );
  } catch (error) {
    showToast(error.message, "error");
  }
}

function pinModal(employeeId, purpose, context = {}) {
  modalState = {
    type: "pin",
    employeeId: Number(employeeId),
    purpose,
    pin: "",
    ...context,
  };
  const employee = employees.find((item) => item.id === Number(employeeId));
  const returnsToSelection =
    context.required && purpose === "serve";
  const cancelAction = returnsToSelection ? "back-to-profile" : "close-modal";
  const cancelLabel = returnsToSelection
    ? `Kembali ke pilihan ${purpose === "serve" ? "petugas" : "profil"}`
    : "Tutup";
  showModal(
    `<div class="modal-head"><div><h2>PIN ${purpose === "personal-login" ? "Akun" : purpose === "serve" ? "Petugas" : "Supervisor"}</h2><p>${employee ? employee.name : "Masukkan PIN untuk melanjutkan"}</p></div><button class="icon-button" data-action="${cancelAction}" aria-label="${cancelLabel}" title="${cancelLabel}">${icon("close")}</button></div>
    <div class="modal-body"><div class="pin-dots">${Array.from({ length: 4 }, () => `<span class="pin-dot"></span>`).join("")}</div><div class="numpad">${[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "backspace"].map((key) => (key === "" ? `<span></span>` : `<button data-action="pin-key" data-key="${key}" aria-label="${key === "backspace" ? "Hapus angka" : `Angka ${key}`}">${key === "backspace" ? icon("backspace") : key}</button>`)).join("")}</div></div>`,
    false,
    Boolean(context.required),
  );
}

function openShiftModal() {
  if (!authenticatedTerminal) {
    navigateToLogin("terminal", true);
    return;
  }
  const presentEmployees = employees.filter(
    (employee) => employee.canServe && isEmployeePresent(employee.id),
  );
  if (!presentEmployees.length) {
    showToast("Belum ada karyawan yang absen masuk", "error");
    return;
  }
  showModal(`<div class="modal-head"><div><h2>Buka Shift Operasional</h2><p>Menandai outlet mulai melayani tanpa pencatatan modal awal.</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div><div class="modal-body">
    <div class="field"><label>Dibuka oleh</label><select id="shift-opener">${presentEmployees
      .map(
        (employee) =>
          `<option value="${employee.id}">${employee.name}</option>`,
      )
      .join("")}</select></div></div>
    <div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="confirm-open-shift">Buka Shift</button></div>`);
}

function reserveModal() {
  showModal(`<div class="modal-head"><div><h2>Reservasi Meja</h2><p>Nomor telepon dan jumlah tamu bersifat opsional.</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div><div class="modal-body">
    <div class="field"><label>Nama pelanggan</label><input id="reserve-name" placeholder="Nama pelanggan" /></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px"><div class="field"><label>Nomor meja</label><select id="reserve-table">${state.tables
      .filter((t) => t.status === "empty")
      .map((table) => `<option value="${table.id}">Meja ${table.id}</option>`)
      .join(
        "",
      )}</select></div><div class="field"><label>Waktu</label><input id="reserve-time" type="time" /></div></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px"><div class="field"><label>Nomor telepon (opsional)</label><input id="reserve-phone" inputmode="tel" placeholder="08..." /></div><div class="field"><label>Jumlah tamu (opsional)</label><input id="reserve-guests" type="number" min="1" placeholder="0" /></div></div></div>
    <div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="confirm-reserve">Simpan Reservasi</button></div>`);
}

function stockInModal() {
  showModal(`<div class="modal-head"><div><h2>Stok Masuk / Pembelian</h2><p>Data nota dan vendor menjadi dasar pembaruan HPP.</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div><div class="modal-body">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="field"><label>Nomor nota</label><input id="purchase-invoice" placeholder="Nomor nota/invoice" /></div><div class="field"><label>Nama vendor</label><input id="purchase-vendor" placeholder="Nama pemasok" /></div></div>
    <div class="field" style="margin-top:12px"><label>Bahan</label><select id="stock-item">${state.ingredients.map((item) => `<option value="${item.id}">${item.name} · ${item.unit}</option>`).join("")}</select></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px"><div class="field"><label>Stok yang dibeli</label><input id="stock-qty" type="number" min="0" placeholder="0" /></div><div class="field"><label>Total harga beli</label><input id="purchase-price" type="number" min="0" placeholder="Rp 0" /></div></div>
    <div class="field" style="margin-top:12px"><label>Catatan (opsional)</label><textarea id="stock-note" placeholder="Catatan penerimaan"></textarea></div></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="confirm-stock-in">Simpan Pembelian</button></div>`);
}

function stockWasteModal() {
  showModal(
    `<div class="modal-head"><div><h2>Catat Stok Keluar</h2><p>Untuk bahan rusak, tumpah, kedaluwarsa, atau pemakaian internal.</p></div><button class="icon-button" data-action="close-modal" aria-label="Tutup">${icon("close")}</button></div><div class="modal-body"><div class="field"><label>Bahan</label><select id="waste-item">${state.ingredients.map((item) => `<option value="${item.id}">${escapeHtml(item.name)} | ${item.qty} ${item.unit}</option>`).join("")}</select></div><div class="form-grid two" style="margin-top:12px"><div class="field"><label>Jumlah keluar</label><input id="waste-qty" type="number" min="0.001" step="0.001" placeholder="0" /></div><div class="field"><label>Alasan</label><select id="waste-reason"><option>Rusak atau tumpah</option><option>Kedaluwarsa</option><option>Pemakaian internal</option><option>Sampel produk</option><option>Lainnya</option></select></div></div><div class="field" style="margin-top:12px"><label>Catatan</label><textarea id="waste-note" placeholder="Jelaskan kejadian atau tujuan pemakaian"></textarea></div><p class="helper-note">Nilai biaya memakai harga rata-rata bahan. Jika belum tersedia, stok tetap berkurang tanpa nominal jurnal.</p></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button danger" data-action="confirm-stock-waste">Catat Stok Keluar</button></div>`,
  );
}

function taxSettingsModal() {
  showModal(
    `<div class="modal-head"><div><h2>Pengaturan Pajak</h2><p>Tarif dapat diubah setelah verifikasi daerah.</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div><div class="modal-body"><div class="field"><label>Label pajak</label><input id="tax-label" value="${escapeHtml(state.tax.label)}" /></div><div class="field" style="margin-top:12px"><label>Tarif (%)</label><input id="tax-rate" type="number" min="0" max="100" step="0.01" value="${state.tax.rate}" /></div><div class="surface" style="box-shadow:none;background:var(--onyx-white);margin-top:12px"><strong style="font-size:12px">Harga menu sudah termasuk pajak</strong><p class="muted" style="font-size:11px;margin:5px 0 0">Sistem memisahkan nilai pajak untuk laporan.</p></div></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="save-tax-settings">Simpan</button></div>`,
  );
}

function controlSettingsModal() {
  showModal(
    `<div class="modal-head"><div><h2>Target dan Kontrol</h2><p>Pengaturan berlaku pada tablet ini.</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div><div class="modal-body"><div class="field"><label>Target penjualan harian</label><input id="daily-sales-target" type="number" min="0" step="50000" value="${Number(state.settings.dailySalesTarget || 0)}" /></div><div class="field" style="margin-top:12px"><label>Peringatan tagihan aktif setelah</label><select id="stale-bill-minutes">${[
      [30, "30 menit"],
      [60, "1 jam"],
      [90, "1 jam 30 menit"],
      [120, "2 jam"],
      [180, "3 jam"],
    ]
      .map(
        ([minutes, label]) =>
          `<option value="${minutes}" ${Number(state.settings.staleBillMinutes) === minutes ? "selected" : ""}>${label}</option>`,
      )
      .join(
        "",
      )}</select></div><div class="field" style="margin-top:12px"><label>Nomor referensi pembayaran</label><select id="payment-reference-rule"><option value="optional" ${state.settings.requirePaymentReference ? "" : "selected"}>Opsional</option><option value="required" ${state.settings.requirePaymentReference ? "selected" : ""}>Wajib untuk QRIS dan Debit</option></select></div></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="save-control-settings">Simpan Pengaturan</button></div>`,
  );
}

function menuPriceModal(itemId) {
  const item = state.menuItems.find((menu) => menu.id === Number(itemId));
  if (!item) return;
  modalState = { type: "menu-price", itemId: item.id };
  showModal(
    `<div class="modal-head"><div><h2>Ubah Harga Menu</h2><p>${escapeHtml(item.name)} · harga sudah termasuk pajak.</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div><div class="modal-body"><div class="field"><label>Harga jual</label><input id="menu-price" type="number" min="0" step="500" value="${item.price}" /></div><div class="field" style="margin-top:12px"><label>Status menu</label><select id="menu-active"><option value="yes" ${item.active === false ? "" : "selected"}>Aktif</option><option value="no" ${item.active === false ? "selected" : ""}>Nonaktif</option></select></div><p class="helper-note">Perubahan tersimpan lokal dan langsung digunakan pada kasir, HPP, serta ekspor berikutnya.</p></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="save-menu-price">Simpan Harga</button></div>`,
  );
}

function stockCountModal() {
  showModal(
    `<div class="modal-head"><div><h2>Hitung Stok Fisik</h2><p>Perubahan menunggu konfirmasi Kepala Barista.</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div><div class="modal-body"><div class="field"><label>Bahan</label><select id="count-item">${state.ingredients.map((item) => `<option value="${item.id}">${item.name} · sistem ${item.qty} ${item.unit}</option>`).join("")}</select></div><div class="field" style="margin-top:12px"><label>Jumlah fisik aktual</label><input id="count-actual" type="number" min="0" placeholder="0" /></div><div class="field" style="margin-top:12px"><label>Catatan selisih</label><textarea id="count-reason" placeholder="Jelaskan bila jumlah berbeda"></textarea></div></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="save-stock-count">Simpan Hitungan</button></div>`,
  );
}

function minimumStockModal(itemId = null) {
  const item =
    state.ingredients.find((ingredient) => ingredient.id === Number(itemId)) ||
    state.ingredients[0];
  modalState = { type: "minimum-stock", itemId: item.id };
  showModal(
    `<div class="modal-head"><div><h2>Atur Batas Minimum</h2><p>Notifikasi muncul saat stok sama dengan atau di bawah batas ini.</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div><div class="modal-body"><div class="field"><label>Bahan</label><select id="minimum-item">${state.ingredients.map((ingredient) => `<option value="${ingredient.id}" ${ingredient.id === item.id ? "selected" : ""}>${ingredient.name} · ${ingredient.unit}</option>`).join("")}</select></div><div class="field" style="margin-top:12px"><label>Status peringatan</label><select id="minimum-enabled"><option value="yes" ${item.minimum != null ? "selected" : ""}>Aktif</option><option value="no" ${item.minimum == null ? "selected" : ""}>Nonaktif</option></select></div><div class="field" style="margin-top:12px"><label>Jumlah minimum (<span id="minimum-unit">${item.unit}</span>)</label><input id="minimum-qty" type="number" min="0" step="0.001" value="${item.minimum ?? 0}" /></div><p class="helper-note">Awali secara manual. Setelah data pemakaian cukup, sistem dapat memberi rekomendasi berdasarkan pemakaian harian × waktu tunggu vendor + stok pengaman.</p></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button primary" data-action="save-minimum">Simpan Batas Minimum</button></div>`,
  );
}

function completeOrder(method) {
  if (paymentCommitLocked) {
    showToast("Pembayaran sedang diproses", "error");
    return;
  }
  if (!requireConfirmedPosOperator()) return;
  const billId = modalState?.billId || null;
  if (!method || (!state.cart.length && !billId)) {
    showToast("Pesanan tidak memiliki item untuk dibayar", "error");
    return;
  }
  const sum = totals();
  const settledBill = billId
    ? state.bills.find((bill) => bill.id === Number(billId))
    : null;
  const orderId = state.nextOrderNumber;
  const referenceInput =
    method === "Debit"
      ? document.querySelector("#debit-reference")
      : document.querySelector("#qris-reference");
  const paymentReference = referenceInput?.value.trim() || "";
  if (state.settings.requirePaymentReference && !paymentReference) {
    showToast(
      `Nomor referensi ${method === "Debit" ? "EDC" : "QRIS"} wajib diisi`,
      "error",
    );
    referenceInput?.focus();
    return;
  }
  if (billId && state.activeBillId === billId) {
    const existingBill = state.bills.find((bill) => bill.id === billId);
    const stockResult = applyStockDelta(
      orderId,
      existingBill?.items || [],
      state.cart,
      "Pelunasan perubahan tagihan aktif",
    );
    if (!stockResult.ok) {
      showToast(
        `Stok tidak cukup: ${stockResult.shortages.join(", ")}`,
        "error",
      );
      return;
    }
  } else if (!billId) {
    const stockResult = applyStockDelta(
      orderId,
      [],
      state.cart,
      "Penjualan langsung",
    );
    if (!stockResult.ok) {
      showToast(
        `Stok tidak cukup: ${stockResult.shortages.join(", ")}`,
        "error",
      );
      return;
    }
  }
  if (state.transactions.some((transaction) => transaction.id === orderId)) {
    showToast("Pesanan ini sudah tercatat sebagai pembayaran", "error");
    return;
  }
  paymentCommitLocked = true;
  setTimeout(() => {
    paymentCommitLocked = false;
  }, 1200);
  const tx = {
    id: orderId,
    businessDate: businessDate(),
    shiftId: state.shift.id,
    status: "Paid",
    total: sum.total,
    method,
    operator: operator().name,
    operatorId: operator().id,
    terminalId: authenticatedTerminal.id,
    terminalName: authenticatedTerminal.name,
    time: nowTime(),
    createdAt: localTimestamp(),
    paidAt: localTimestamp(),
    reconciliationStatus: "Belum",
    paymentReference,
    customer: state.customer,
    table: state.table,
    discountTotal: sum.itemDiscount + sum.orderDiscount,
    taxAmount:
      state.tax.included && state.tax.rate
        ? sum.total - sum.total / (1 + Number(state.tax.rate) / 100)
        : 0,
    hpp: state.cart.reduce((totalHpp, item) => totalHpp + itemHpp(item), 0),
    hppSource: "recipe-snapshot",
    items: state.cart.map((item) => ({
      id: item.id,
      name: item.name,
      qty: item.qty,
      price: item.price,
      addons: item.addons || [],
      note: item.note || "",
      modifiers: item.modifiers || [],
      discount: item.discount || null,
    })),
  };
  state.transactions.push(tx);
  if (billId) state.bills = state.bills.filter((bill) => bill.id !== billId);
  releaseTable(settledBill?.table, billId);
  if (String(settledBill?.table || "") !== String(state.table || ""))
    releaseTable(state.table, billId);
  const highestOrder = Math.max(
    1000000,
    ...state.transactions.map((item) => item.id),
    ...state.bills.map((item) => item.id),
  );
  state.nextOrderNumber = highestOrder + 1;
  audit(
    "Pembayaran selesai",
    `PESANAN #${tx.id} · ${method}${tx.paymentReference ? ` · Referensi ${tx.paymentReference}` : ""}`,
  );
  state.cart = [];
  state.customer = "";
  state.table = "";
  state.orderDiscount = null;
  state.activeBillId = null;
  persist();
  renderShell();
  receiptModal(tx);
}

function receiptModal(tx) {
  modalState = { type: "receipt", txId: tx.id };
  showModal(
    `<div class="modal-head"><div><h2>Pembayaran Berhasil</h2><p>PESANAN #${tx.id}</p></div><button class="icon-button" data-action="close-modal" aria-label="Tutup">${icon("close")}</button></div><div class="modal-body"><div class="payment-total"><small>${tx.method}</small><strong>${rupiah(tx.total)}</strong></div><div class="summary-row"><span>Dilayani oleh</span><strong>${escapeHtml(tx.operator || "-")}</strong></div><div class="summary-row"><span>Pelanggan</span><strong>${escapeHtml(tx.customer || "-")}</strong></div><div class="summary-row"><span>Meja / antrean</span><strong>${escapeHtml(tx.table || "-")}</strong></div><p class="helper-note">Petugas tetap aktif untuk transaksi berikutnya sampai diganti.</p></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Selesai</button><button class="button primary" data-action="print-transaction" data-id="${tx.id}">${icon("receipt")}Cetak Struk</button></div>`,
  );
}

function refundModal(txId) {
  const tx = state.transactions.find((item) => item.id === Number(txId));
  if (!tx || !isActiveTransaction(tx)) {
    showToast("Dana transaksi tidak dapat dikembalikan", "error");
    return;
  }
  if (latestClosing(tx.businessDate)) {
    showToast("Periode sudah ditutup. Gunakan Koreksi Keuangan.", "error");
    return;
  }
  modalState = { type: "refund", txId: tx.id };
  showModal(
    `<div class="modal-head"><div><h2>Pengembalian Dana</h2><p>PESANAN #${tx.id} · ${rupiah(tx.total)}</p></div><button class="icon-button" data-action="close-modal" aria-label="Tutup">${icon("close")}</button></div><div class="modal-body"><div class="field"><label>Alasan pengembalian (wajib)</label><textarea id="refund-reason" placeholder="Jelaskan penyebab pengembalian"></textarea></div><div class="field" style="margin-top:12px"><label>Kembalikan bahan ke stok?</label><select id="refund-restock"><option value="no">Tidak, produk sudah dibuat</option><option value="yes">Ya, pesanan belum dibuat</option></select></div><p class="helper-note">Nilai transaksi dikeluarkan dari pendapatan hari ini.</p></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button danger" data-action="confirm-refund">Kembalikan Dana</button></div>`,
  );
}

function printThermal(record, type = "receipt") {
  if (!record) {
    showToast("Dokumen tidak ditemukan", "error");
    return;
  }
  const isTicket = type === "ticket";
  const items = (record.items || [])
    .map(
      (item) =>
        `<tr><td>${item.qty}x ${escapeHtml(item.name)}${item.note ? `<small>${escapeHtml(item.note)}</small>` : ""}${(item.addons || []).length ? `<small>${(item.addons || []).map((addon) => escapeHtml(addon.name)).join(", ")}</small>` : ""}</td><td>${isTicket ? "" : rupiah(itemTotal(item))}</td></tr>`,
    )
    .join("");
  const popup = window.open("", "_blank", "width=420,height=720");
  if (!popup) {
    showToast("Izinkan pop-up untuk mencetak", "error");
    return;
  }
  popup.document.write(
    `<!doctype html><html><head><title>${isTicket ? "Tiket" : "Struk"} #${record.id}</title><style>body{font-family:monospace;color:#000;width:72mm;margin:0 auto;padding:4mm;font-size:12px}h1,h2,p{text-align:center;margin:4px 0}h1{font-size:18px}h2{font-size:15px}table{width:100%;border-collapse:collapse;margin:10px 0}td{padding:5px 0;border-bottom:1px dashed #000;vertical-align:top}td:last-child{text-align:right}small{display:block;margin-top:2px}.meta{border-top:1px dashed #000;border-bottom:1px dashed #000;padding:7px 0;margin:8px 0}.total{font-size:16px;font-weight:bold;text-align:right}@page{size:80mm auto;margin:0}</style></head><body><h1>TJAP KEMIRI</h1><h2>${isTicket ? "TIKET PESANAN" : "STRUK PEMBAYARAN"}</h2><div class="meta">PESANAN #${record.id}<br>${record.businessDate || businessDate()} ${record.time || record.createdAt || ""}<br>${record.customer ? `Nama: ${escapeHtml(record.customer)}<br>` : ""}${record.table ? `Meja/Antrean: ${escapeHtml(record.table)}<br>` : ""}Operator: ${escapeHtml(record.operator || employees.find((e) => e.id === record.operatorId)?.name || operator().name)}</div><table>${items}</table>${isTicket ? "" : `<p class="total">TOTAL ${rupiah(record.total)}</p><p>${escapeHtml(record.method || "")}${record.paymentReference ? ` · Referensi ${escapeHtml(record.paymentReference)}` : ""}</p><p>Harga termasuk ${escapeHtml(state.tax.label)} ${state.tax.rate}%</p><p>Terima kasih</p>`}<script>window.onload=()=>{window.print();window.onafterprint=()=>window.close();}<\/script></body></html>`,
  );
  popup.document.close();
}

document.addEventListener("click", async (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) {
    if (state.navExpanded) {
      state.navExpanded = false;
      renderShell();
    }
    return;
  }
  const action = target.dataset.action;
  if (action === "dismiss-modal" && event.target === target) closeModal();
  if (action === "close-modal") closeModal();
  if (action === "back-to-profile") chooseOperatorModal(true);
  if (action === "exit-pos-to-login") {
    closeModal();
    navigateToLogin("terminal", true);
  }
  if (action === "login-mode") {
    loginMode = target.dataset.mode === "terminal" ? "terminal" : "personal";
    history.replaceState({}, "", `/login?mode=${loginMode}`);
    renderLoginPage();
  }
  if (action === "personal-login")
    pinModal(Number(target.dataset.id), "personal-login");
  if (action === "resume-personal-session") {
    if (!authenticatedEmployee) {
      renderLoginPage();
      return;
    }
    state.view = defaultViewForPortal();
    history.pushState({}, "", "/admin");
    routeApplication();
  }
  if (action === "terminal-login") {
    const email = document
      .querySelector("#terminal-email")
      ?.value.trim()
      .toLowerCase();
    const pin = document.querySelector("#terminal-pin")?.value.trim();
    const terminal = terminalAccounts.find(
      (account) =>
        account.active && account.email.toLowerCase() === email && account.pin === pin,
    );
    if (!terminal) {
      showToast("Email atau PIN perangkat tidak sesuai", "error");
      return;
    }
    localStorage.setItem(
      TERMINAL_AUTH_STORAGE_KEY,
      JSON.stringify({
        type: "terminal",
        terminalId: terminal.id,
        authenticatedAt: localTimestamp(),
      }),
    );
    authenticatedTerminal = terminal;
    audit("Akun tablet terhubung", terminal.email, terminal.name);
    persist();
    resetPosOperatorConfirmation();
    state.view = "pos";
    history.pushState({}, "", "/pos");
    routeApplication();
  }
  if (action === "resume-terminal-session") {
    if (!authenticatedTerminal) {
      renderLoginPage();
      return;
    }
    state.view = "pos";
    history.pushState({}, "", "/pos");
    routeApplication();
  }
  if (action === "terminal-logout") terminalLogoutConfirmModal();
  if (action === "nav") {
    const nextView = target.dataset.view;
    if (!canAccessView(nextView)) {
      showToast("Modul ini tidak tersedia untuk jabatan aktif", "error");
      return;
    }
    state.view = nextView;
    state.navExpanded = false;
    renderShell();
  }
  if (action === "toggle-more-nav") {
    state.navExpanded = !state.navExpanded;
    renderShell();
  }
  if (action === "team-tab") {
    state.teamTab = target.dataset.tab;
    renderShell();
  }
  if (action === "report-period") {
    state.reportPeriod = target.dataset.period;
    renderShell();
  }
  if (action === "data-tools" && canPerform("data-backup")) dataToolsModal();
  if (action === "export-data-backup" && canPerform("data-backup"))
    exportDataBackup();
  if (action === "import-data-backup" && canPerform("data-backup"))
    openDataBackupImport();
  if (action === "restore-state-mirror") {
    if (!canPerform("data-backup")) return;
    try {
      const snapshot = await readStateMirror();
      if (!snapshot?.data) {
        showToast("Belum ada snapshot otomatis di tablet", "error");
        return;
      }
      showDataRestorePreview(
        {
          app: "CafePOS Tjap Kemiri",
          exportedAt: snapshot.savedAt,
          schemaVersion: snapshot.schemaVersion,
          data: snapshot.data,
        },
        `Snapshot otomatis ${snapshot.savedAt}`,
      );
    } catch (error) {
      showToast(`Snapshot tidak dapat dibaca: ${error.message}`, "error");
    }
  }
  if (action === "confirm-data-restore") {
    if (!canPerform("data-backup") || modalState?.type !== "restore-data") return;
    applyRestoredState(modalState.payload.data);
  }
  if (action === "logout-account") logoutAdminAccount();
  if (action === "account-session") accountSessionModal();
  if (action === "terminal-session") terminalSessionModal();
  if (action === "confirm-terminal-logout") logoutTerminalAccount();
  if (action === "connection-status")
    showToast(
      navigator.onLine ? "Aplikasi terhubung" : "Aplikasi dalam mode offline",
      navigator.onLine ? "success" : "error",
    );
  if (action === "choose-operator") {
    if (!authenticatedTerminal) {
      navigateToLogin("terminal", true);
      return;
    }
    chooseOperatorModal();
  }
  if (action === "set-operator") {
    const employeeId = Number(target.dataset.id);
    const required = Boolean(modalState?.required);
    if (state.portal !== "pos" || !authenticatedTerminal) {
      navigateToLogin("terminal", true);
      return;
    }
    if (!isEmployeePresent(employeeId)) {
      const employee = employees.find((item) => item.id === employeeId);
      showToast(
        `${employee?.name || "Karyawan"} harus absen masuk terlebih dahulu`,
        "error",
      );
      return;
    }
    pinModal(employeeId, "serve", { required });
  }
  if (action === "category") {
    state.category = target.dataset.category;
    renderShell();
  }
  if (action === "order-type") {
    state.orderType = target.dataset.type;
    if (state.orderType !== "Dine-in") state.table = "";
    renderShell();
  }
  if (action === "add-item") {
    const item = state.menuItems.find(
      (product) => product.id === Number(target.dataset.id),
    );
    const existing = state.cart.find((product) => product.id === item.id);
    if (existing) existing.qty += 1;
    else state.cart.push({ ...item, qty: 1, note: "", addons: [] });
    persist();
    renderShell();
  }
  if (action === "qty") {
    const item = state.cart.find(
      (product) => product.id === Number(target.dataset.id),
    );
    if (item) item.qty += Number(target.dataset.delta);
    state.cart = state.cart.filter((product) => product.qty > 0);
    persist();
    renderShell();
  }
  if (action === "remove-item") {
    state.cart = state.cart.filter(
      (product) => product.id !== Number(target.dataset.id),
    );
    persist();
    renderShell();
  }
  if (action === "note-item") noteModal(Number(target.dataset.id));
  if (action === "toggle-modifier") {
    const value = target.dataset.value;
    if (modalState.selected.has(value)) modalState.selected.delete(value);
    else modalState.selected.add(value);
    target.classList.toggle("active", modalState.selected.has(value));
  }
  if (action === "save-note") {
    const item = state.cart.find((product) => product.id === modalState.itemId);
    const customNote = document.querySelector("#custom-note").value.trim();
    item.modifiers = [...modalState.selected];
    item.customNote = customNote;
    item.note = [...item.modifiers, customNote].filter(Boolean).join(" · ");
    persist();
    closeModal();
    renderShell();
    showToast("Catatan barista disimpan");
  }
  if (action === "discount-item")
    discountModal("item", Number(target.dataset.id));
  if (action === "addon-item") addonModal(Number(target.dataset.id));
  if (action === "remove-addon") {
    const item = state.cart.find(
      (product) => product.id === Number(target.dataset.id),
    );
    const addon = item?.addons?.find(
      (entry) => entry.id === target.dataset.addonId,
    );
    if (!item || !addon) return;
    item.addons = item.addons.filter((entry) => entry.id !== addon.id);
    persist();
    renderShell();
    showToast(`${addon.name} dihapus dari ${item.name}`);
  }
  if (action === "toggle-addon") {
    const addonId = target.dataset.id;
    if (modalState.selected.has(addonId)) modalState.selected.delete(addonId);
    else modalState.selected.add(addonId);
    const selected = modalState.selected.has(addonId);
    target.classList.toggle("active", selected);
    target.setAttribute("aria-pressed", String(selected));
    const stateLabel = target.querySelector(".addon-choice-state");
    if (stateLabel)
      stateLabel.innerHTML = selected
        ? `${icon("check")}Dipilih`
        : `${icon("plus")}Tambahkan`;
    const clearButton = document.querySelector('[data-action="clear-addons"]');
    if (clearButton) clearButton.disabled = modalState.selected.size === 0;
  }
  if (action === "clear-addons") {
    modalState.selected.clear();
    document.querySelectorAll(".addon-choice").forEach((button) => {
      button.classList.remove("active");
      button.setAttribute("aria-pressed", "false");
      const stateLabel = button.querySelector(".addon-choice-state");
      if (stateLabel) stateLabel.innerHTML = `${icon("plus")}Tambahkan`;
    });
    target.disabled = true;
  }
  if (action === "apply-addons") {
    const item = state.cart.find((product) => product.id === modalState.itemId);
    if (!item) {
      closeModal();
      return;
    }
    item.addons = paidAddons
      .filter((addon) => modalState.selected.has(addon.id))
      .map((addon) => ({ ...addon }));
    persist();
    closeModal();
    renderShell();
    showToast(
      item.addons.length
        ? "Pilihan tambahan berhasil disimpan"
        : "Semua tambahan berhasil dihapus",
    );
  }
  if (action === "discount-order") discountModal("order");
  if (action === "discount-type") {
    modalState.discountType = target.dataset.type;
    target.parentElement
      .querySelectorAll(".segment")
      .forEach((button) =>
        button.classList.toggle("active", button === target),
      );
  }
  if (action === "apply-discount") {
    const value = Number(document.querySelector("#discount-value").value);
    const reason = document.querySelector("#discount-reason").value.trim();
    if (!value || !reason) {
      showToast("Nilai dan keterangan diskon wajib diisi", "error");
      return;
    }
    if (modalState.discountType === "percent" && value > 100) {
      showToast("Diskon persentase maksimum 100%", "error");
      return;
    }
    const discount = {
      type: modalState.discountType,
      value,
      reason,
      by: operator().name,
    };
    if (modalState.scope === "item")
      state.cart.find((item) => item.id === modalState.id).discount = discount;
    else state.orderDiscount = discount;
    persist();
    closeModal();
    renderShell();
    showToast("Diskon berhasil diterapkan");
  }
  if (action === "new-order") {
    state.cart = [];
    state.customer = "";
    state.table = "";
    state.orderDiscount = null;
    state.activeBillId = null;
    state.view = "pos";
    const highestOrder = Math.max(
      1000000,
      ...state.transactions.map((item) => item.id),
      ...state.bills.map((item) => item.id),
    );
    state.nextOrderNumber = highestOrder + 1;
    renderShell();
  }
  if (action === "open-bill") {
    if (!requireConfirmedPosOperator()) return;
    if (!state.shift.isOpen) {
      showToast("Buka shift sebelum membuat pesanan", "error");
      return;
    }
    if (!state.customer.trim()) {
      showToast("Nama pelanggan wajib untuk menyimpan tagihan", "error");
      return;
    }
    if (state.orderType === "Dine-in" && !state.table.trim()) {
      showToast("Nomor meja wajib untuk makan di tempat", "error");
      return;
    }
    const existing = state.activeBillId
      ? state.bills.find((bill) => bill.id === state.activeBillId)
      : null;
    const id = existing?.id || state.nextOrderNumber;
    const stockResult = applyStockDelta(
      id,
      existing?.items || [],
      state.cart,
      existing ? "Perubahan tagihan aktif" : "Tagihan aktif baru",
    );
    if (!stockResult.ok) {
      showToast(
        `Stok tidak cukup: ${stockResult.shortages.join(", ")}`,
        "error",
      );
      return;
    }
    const sum = totals();
    const billData = {
      id,
      customer: state.customer.trim(),
      table: state.table,
      operatorId: state.operatorId,
      operator: operator().name,
      terminalId: authenticatedTerminal.id,
      terminalName: authenticatedTerminal.name,
      type: state.orderType,
      businessDate: existing?.businessDate || businessDate(),
      shiftId: existing?.shiftId || state.shift.id,
      createdAt: existing?.createdAt || nowTime(),
      createdAtIso: existing?.createdAtIso || localTimestamp(),
      updatedAt: localTimestamp(),
      total: sum.total,
      orderDiscount: state.orderDiscount,
      items: state.cart.map((item) => ({ ...item })),
    };
    if (existing?.table && String(existing.table) !== String(state.table || ""))
      releaseTable(existing.table, existing.id);
    if (existing)
      state.bills = state.bills.map((bill) =>
        bill.id === id ? billData : bill,
      );
    else state.bills.push(billData);
    occupyTable(state.table, state.customer.trim());
    const updated = Boolean(existing);
    state.nextOrderNumber = Math.max(state.nextOrderNumber, id + 1);
    state.cart = [];
    state.customer = "";
    state.table = "";
    state.orderDiscount = null;
    state.activeBillId = null;
    persist();
    renderShell();
    showToast(
      `Tagihan PESANAN #${id} ${updated ? "diperbarui" : "tersimpan"}. Tiket siap dicetak.`,
    );
  }
  if (action === "payment") {
    if (!requireConfirmedPosOperator()) return;
    if (!state.shift.isOpen) {
      showToast("Buka shift sebelum menerima pembayaran", "error");
      return;
    }
    paymentModal(state.activeBillId || null);
  }
  if (action === "payment-method") {
    modalState.method = target.dataset.method;
    target.parentElement
      .querySelectorAll(".choice-card")
      .forEach((button) =>
        button.classList.toggle("active", button === target),
      );
    document
      .querySelector("#qris-fields")
      .classList.toggle("hidden", modalState.method !== "QRIS BNI");
    document
      .querySelector("#debit-fields")
      .classList.toggle("hidden", modalState.method !== "Debit");
  }
  if (action === "complete-payment") {
    completeOrder(modalState.method);
  }
  if (action === "reopen-bill") {
    const bill = state.bills.find(
      (item) => item.id === Number(target.dataset.id),
    );
    if (!bill) return;
    state.cart = bill.items.map((item) => ({ ...item }));
    state.customer = bill.customer;
    state.table = bill.table || "";
    state.orderType = bill.type;
    state.orderDiscount = bill.orderDiscount || null;
    state.activeBillId = bill.id;
    state.nextOrderNumber = bill.id;
    state.view = "pos";
    renderShell();
    showToast("Tagihan dibuka untuk diperbarui");
  }
  if (action === "pay-bill") {
    if (!requireConfirmedPosOperator()) return;
    if (!state.shift.isOpen) {
      showToast("Buka shift sebelum menerima pembayaran", "error");
      return;
    }
    paymentModal(Number(target.dataset.id));
  }
  if (action === "print-bill")
    printThermal(
      state.bills.find((bill) => bill.id === Number(target.dataset.id)),
      "ticket",
    );
  if (action === "print-transaction")
    printThermal(
      state.transactions.find((tx) => tx.id === Number(target.dataset.id)),
      "receipt",
    );
  if (action === "refund-transaction") refundModal(Number(target.dataset.id));
  if (action === "use-table") {
    state.table = target.dataset.id;
    state.orderType = "Dine-in";
    state.view = "pos";
    renderShell();
  }
  if (action === "reserve-table") reserveModal();
  if (action === "confirm-reserve") {
    const name = document.querySelector("#reserve-name").value.trim(),
      tableId = document.querySelector("#reserve-table").value,
      time = document.querySelector("#reserve-time").value;
    const phone = document.querySelector("#reserve-phone").value.trim();
    const guests =
      Number(document.querySelector("#reserve-guests").value) || null;
    if (!name || !tableId || !time) {
      showToast("Nama, meja, dan waktu wajib diisi", "error");
      return;
    }
    const table = state.tables.find((item) => item.id === tableId);
    Object.assign(table, {
      status: "reserved",
      customer: name,
      since: time,
      phone,
      guests,
    });
    persist();
    closeModal();
    renderShell();
    showToast(`Meja ${tableId} berhasil direservasi`);
  }
  if (action === "attendance") {
    const employeeId = Number(target.dataset.id);
    if (state.portal !== "admin" || employeeId !== operator().id) {
      showToast("Absensi hanya dapat dilakukan dari akun pribadi", "error");
      return;
    }
    attendanceSelfieModal(employeeId);
  }
  if (action === "start-attendance-camera") await startAttendanceCamera();
  if (action === "capture-attendance-selfie")
    await captureAttendanceSelfie();
  if (action === "retake-attendance-selfie")
    await retakeAttendanceSelfie();
  if (action === "confirm-attendance-selfie")
    await confirmAttendanceSelfie();
  if (action === "view-attendance-selfie")
    await viewAttendancePhotoModal(
      target.dataset.photoId,
      target.dataset.name || "Karyawan",
    );
  if (action === "pin-key") {
    const key = target.dataset.key;
    if (key === "backspace") modalState.pin = modalState.pin.slice(0, -1);
    else if (modalState.pin.length < 4) modalState.pin += key;
    document
      .querySelectorAll(".pin-dot")
      .forEach((dot, index) =>
        dot.classList.toggle("filled", index < modalState.pin.length),
      );
    if (modalState.pin.length === 4) {
      const employee =
        employees.find((item) => item.id === modalState.employeeId) ||
        employees[0];
      if (modalState.pin !== employee.pin) {
        modalState.pin = "";
        document
          .querySelectorAll(".pin-dot")
          .forEach((dot) => dot.classList.remove("filled"));
        showToast("PIN tidak sesuai", "error");
        return;
      }
      if (modalState.purpose === "personal-login") {
        sessionStorage.setItem(
          PERSONAL_AUTH_SESSION_KEY,
          JSON.stringify({
            type: "employee",
            employeeId: employee.id,
            authenticatedAt: localTimestamp(),
          }),
        );
        authenticatedEmployee = employee;
        state.operatorId = employee.id;
        state.portal = "admin";
        state.view = defaultViewForPortal();
        audit("Akun pribadi masuk", roleLabel(employee.role), employee.name);
        persist();
        closeModal();
        history.pushState({}, "", "/admin");
        routeApplication();
        showToast(`${employee.name} masuk sebagai ${roleLabel(employee.role)}`);
      } else if (modalState.purpose === "serve") {
        if (!isEmployeePresent(employee.id)) {
          resetPosOperatorConfirmation();
          closeModal();
          chooseOperatorModal(true);
          showToast(
            `${employee.name} harus absen masuk terlebih dahulu`,
            "error",
          );
          return;
        }
        state.operatorId = employee.id;
        confirmPosOperator(employee.id);
        persist();
        closeModal();
        renderShell();
        showToast(`${employee.name} aktif sebagai petugas kasir`);
      } else if (modalState.purpose === "close-shift") closeShiftCountModal();
      else if (modalState.purpose === "approve-stock") {
        const draft = state.stockCounts.find(
          (item) => item.id === modalState.draftId,
        );
        if (draft) {
          const ingredient = state.ingredients.find(
            (item) => item.id === draft.itemId,
          );
          const before = ingredient.qty;
          ingredient.qty = draft.actual;
          state.stockMovements.push({
            id: `count-${Date.now()}`,
            ingredientId: ingredient.id,
            ingredient: ingredient.name,
            delta: draft.actual - before,
            before,
            after: draft.actual,
            reason: draft.reason || "Stock opname",
            businessDate: businessDate(),
            by: employee.name,
            createdAt: nowTime(),
          });
          state.stockCounts = state.stockCounts.filter(
            (item) => item.id !== draft.id,
          );
          persist();
          closeModal();
          renderShell();
          showToast(`${ingredient.name} disesuaikan dan tercatat di audit`);
        }
      }
    }
  }
  if (action === "open-shift") openShiftModal();
  if (action === "confirm-open-shift") {
    if (!authenticatedTerminal) {
      navigateToLogin("terminal", true);
      return;
    }
    const employee = employees.find(
      (item) =>
        item.id === Number(document.querySelector("#shift-opener").value),
    );
    if (!employee || !employee.canServe || !isEmployeePresent(employee.id)) {
      closeModal();
      showToast("Pembuka shift harus sudah absen masuk", "error");
      return;
    }
    state.shift = {
      id: `shift-${Date.now()}`,
      businessDate: businessDate(),
      isOpen: true,
      openedBy: employee.name,
      openedAt: nowTime(),
    };
    audit("Shift operasional dibuka", "Outlet mulai melayani", employee.name);
    persist();
    closeModal();
    renderShell();
    showToast("Shift operasional berhasil dibuka");
  }
  if (action === "close-shift") {
    if (state.bills.length) {
      showToast(
        `Selesaikan ${state.bills.length} tagihan aktif sebelum menutup shift`,
        "error",
      );
      return;
    }
    pinModal(3, "close-shift");
  }
  if (action === "confirm-close-shift") {
    const note = document.querySelector("#shift-handover-note").value.trim();
    if (!note) {
      showToast("Catatan serah terima wajib diisi", "error");
      return;
    }
    if (state.bills.length) {
      showToast(`Masih ada ${state.bills.length} tagihan aktif`, "error");
      return;
    }
    const shiftTransactions = state.transactions.filter(
      (tx) => tx.shiftId === state.shift.id && isActiveTransaction(tx),
    );
    const qris = shiftTransactions
      .filter((tx) => tx.method.startsWith("QRIS"))
      .reduce((sum, tx) => sum + tx.total, 0);
    const debit = shiftTransactions
      .filter((tx) => tx.method === "Debit")
      .reduce((sum, tx) => sum + tx.total, 0);
    state.shiftHistory.push({
      id: state.shift.id,
      businessDate: state.shift.businessDate,
      openedBy: state.shift.openedBy,
      openedAt: state.shift.openedAt,
      closedBy: operator().name,
      closedAt: nowTime(),
      qris,
      debit,
      note,
    });
    audit("Shift operasional ditutup", note);
    state.shift = {
      id: null,
      businessDate: businessDate(),
      isOpen: false,
      openedBy: "",
      openedAt: "",
    };
    resetPosOperatorConfirmation();
    persist();
    closeModal();
    renderShell();
    showToast("Shift operasional berhasil ditutup");
  }
  if (action === "stock-in") {
    if (!canPerform("stock-in")) {
      showToast("Anda tidak memiliki akses stok masuk", "error");
      return;
    }
    stockInModal();
  }
  if (action === "stock-waste") {
    if (!canPerform("stock-waste")) {
      showToast("Anda tidak memiliki akses mencatat stok keluar", "error");
      return;
    }
    stockWasteModal();
  }
  if (action === "confirm-stock-waste") {
    if (!canPerform("stock-waste")) return;
    const item = state.ingredients.find(
      (ingredient) =>
        ingredient.id === Number(document.querySelector("#waste-item").value),
    );
    const qty = Number(document.querySelector("#waste-qty").value);
    const reason = document.querySelector("#waste-reason").value;
    const note = document.querySelector("#waste-note").value.trim();
    if (!item || !qty || qty <= 0 || !note) {
      showToast("Bahan, jumlah, dan catatan wajib diisi", "error");
      return;
    }
    if (qty > Number(item.qty || 0)) {
      showToast(`Stok ${item.name} hanya ${item.qty} ${item.unit}`, "error");
      return;
    }
    const before = item.qty;
    const totalCost = qty * Number(item.avgCost || 0);
    item.qty -= qty;
    const wastage = {
      id: Date.now(),
      date: businessDate(),
      itemId: item.id,
      itemName: item.name,
      qty,
      unit: item.unit,
      unitCost: Number(item.avgCost || 0),
      totalCost,
      reason,
      note,
      by: operator().name,
      createdAt: nowTime(),
    };
    state.stockWastages.push(wastage);
    state.stockMovements.push({
      id: `wastage-${wastage.id}`,
      ingredientId: item.id,
      ingredient: item.name,
      delta: -qty,
      before,
      after: item.qty,
      reason: `${reason} | ${note}`,
      businessDate: businessDate(),
      by: operator().name,
      createdAt: nowTime(),
    });
    audit("Stok keluar dicatat", `${item.name} | ${qty} ${item.unit} | ${reason}`);
    persist();
    closeModal();
    renderShell();
    showToast(
      totalCost
        ? "Stok keluar berhasil dicatat"
        : "Stok keluar dicatat. Harga rata-rata bahan masih Rp0",
    );
  }
  if (action === "confirm-stock-in") {
    const item = state.ingredients.find(
      (ingredient) =>
        ingredient.id === Number(document.querySelector("#stock-item").value),
    );
    const qty = Number(document.querySelector("#stock-qty").value);
    const totalPrice = Number(document.querySelector("#purchase-price").value);
    const invoice = document.querySelector("#purchase-invoice").value.trim();
    const vendor = document.querySelector("#purchase-vendor").value.trim();
    const note = document.querySelector("#stock-note").value.trim();
    if (
      !invoice ||
      !vendor ||
      !qty ||
      qty <= 0 ||
      !totalPrice ||
      totalPrice <= 0
    ) {
      showToast("Nota, vendor, jumlah, dan harga beli wajib diisi", "error");
      return;
    }
    if (
      state.purchases.some(
        (purchase) =>
          purchase.invoice.toLowerCase() === invoice.toLowerCase() &&
          purchase.vendor.toLowerCase() === vendor.toLowerCase() &&
          purchase.itemId === item.id,
      )
    ) {
      showToast(
        "Nota, vendor, dan bahan yang sama sudah pernah dicatat",
        "error",
      );
      return;
    }
    const before = item.qty;
    const oldValue = item.qty * Number(item.avgCost || 0);
    const unitCost = totalPrice / qty;
    item.avgCost = (oldValue + totalPrice) / (item.qty + qty);
    item.qty += qty;
    state.purchases.push({
      id: Date.now(),
      date: businessDate(),
      invoice,
      vendor,
      itemId: item.id,
      itemName: item.name,
      qty,
      unit: item.unit,
      totalPrice,
      unitCost,
      note,
      by: operator().name,
      createdAt: nowTime(),
    });
    state.stockMovements.push({
      id: `purchase-${Date.now()}`,
      ingredientId: item.id,
      ingredient: item.name,
      delta: qty,
      before,
      after: item.qty,
      reason: `Stok masuk ${vendor} · ${invoice}`,
      businessDate: businessDate(),
      by: operator().name,
      createdAt: nowTime(),
    });
    persist();
    closeModal();
    renderShell();
    showToast(`${item.name} bertambah ${qty} ${item.unit}; HPP diperbarui`);
  }
  if (action === "stock-count") {
    if (!canPerform("stock-count")) {
      showToast("Anda tidak memiliki akses hitung stok", "error");
      return;
    }
    stockCountModal();
  }
  if (action === "minimum-stock") {
    if (!canPerform("minimum")) return;
    minimumStockModal();
  }
  if (action === "edit-minimum") {
    if (!canPerform("minimum")) return;
    minimumStockModal(Number(target.dataset.id));
  }
  if (action === "save-minimum") {
    if (!canPerform("minimum")) {
      showToast(
        "Hanya Pemilik atau Kepala Barista yang dapat mengubah batas minimum",
        "error",
      );
      return;
    }
    const item = state.ingredients.find(
      (ingredient) =>
        ingredient.id === Number(document.querySelector("#minimum-item").value),
    );
    const enabled = document.querySelector("#minimum-enabled").value === "yes";
    const value = Number(document.querySelector("#minimum-qty").value);
    if (!item || (enabled && (!Number.isFinite(value) || value < 0))) {
      showToast("Jumlah minimum tidak valid", "error");
      return;
    }
    const previous = item.minimum;
    item.minimum = enabled ? value : null;
    audit(
      "Batas minimum diperbarui",
      `${item.name} · ${previous ?? "nonaktif"} menjadi ${item.minimum ?? "nonaktif"} ${item.unit}`,
    );
    persist();
    closeModal();
    renderShell();
    showToast(`Batas minimum ${item.name} berhasil disimpan`);
  }
  if (action === "save-stock-count") {
    const item = state.ingredients.find(
      (ingredient) =>
        ingredient.id === Number(document.querySelector("#count-item").value),
    );
    const actual = Number(document.querySelector("#count-actual").value);
    const reason = document.querySelector("#count-reason").value.trim();
    if (!Number.isFinite(actual) || actual < 0) {
      showToast("Jumlah fisik tidak valid", "error");
      return;
    }
    if (actual !== item.qty && !reason) {
      showToast("Catatan wajib untuk stok yang berbeda", "error");
      return;
    }
    state.stockCounts.push({
      id: Date.now(),
      itemId: item.id,
      itemName: item.name,
      expected: item.qty,
      actual,
      unit: item.unit,
      reason,
      by: operator().name,
      createdAt: nowTime(),
    });
    persist();
    closeModal();
    renderShell();
    showToast("Hitungan stok menunggu konfirmasi");
  }
  if (action === "approve-stock-count") {
    if (!canPerform("stock-approve")) {
      showToast("Konfirmasi memerlukan Kepala Barista atau Pemilik", "error");
      return;
    }
    pinModal(operator().role === "Owner" ? operator().id : 3, "approve-stock", {
      draftId: Number(target.dataset.id),
    });
  }
  if (action === "tax-settings") {
    if (!canPerform("tax")) {
      showToast("Hanya Pemilik yang dapat mengubah pajak", "error");
      return;
    }
    taxSettingsModal();
  }
  if (action === "control-settings") {
    if (!canPerform("control-settings")) {
      showToast(
        "Hanya Pemilik yang dapat mengubah kontrol operasional",
        "error",
      );
      return;
    }
    controlSettingsModal();
  }
  if (action === "save-control-settings") {
    if (!canPerform("control-settings")) return;
    const dailySalesTarget = Number(
      document.querySelector("#daily-sales-target").value,
    );
    const staleBillMinutes = Number(
      document.querySelector("#stale-bill-minutes").value,
    );
    const requirePaymentReference =
      document.querySelector("#payment-reference-rule").value === "required";
    if (
      !Number.isFinite(dailySalesTarget) ||
      dailySalesTarget < 0 ||
      ![30, 60, 90, 120, 180].includes(staleBillMinutes)
    ) {
      showToast("Pengaturan kontrol tidak valid", "error");
      return;
    }
    state.settings = {
      ...state.settings,
      dailySalesTarget,
      staleBillMinutes,
      requirePaymentReference,
    };
    audit(
      "Kontrol operasional diperbarui",
      `Target ${rupiah(dailySalesTarget)} · tagihan ${staleBillMinutes} menit · referensi ${requirePaymentReference ? "wajib" : "opsional"}`,
    );
    persist();
    closeModal();
    renderShell();
    showToast("Target dan kontrol operasional diperbarui");
  }
  if (action === "edit-menu-price") {
    if (!canPerform("menu-edit")) return;
    menuPriceModal(Number(target.dataset.id));
  }
  if (action === "toggle-menu-availability") {
    if (!canPerform("menu-availability")) {
      showToast(
        "Anda tidak memiliki akses mengubah ketersediaan menu",
        "error",
      );
      return;
    }
    const item = state.menuItems.find(
      (menu) => menu.id === Number(target.dataset.id),
    );
    if (!item) return;
    item.active = item.active === false;
    audit(
      "Ketersediaan menu",
      `${item.name} · ${item.active ? "Aktif" : "Dijeda"}`,
    );
    persist();
    renderShell();
    showToast(
      `${item.name} ${item.active ? "kembali aktif" : "dijeda dari kasir"}`,
    );
  }
  if (action === "save-menu-price") {
    if (!canPerform("menu-edit")) return;
    const item = state.menuItems.find((menu) => menu.id === modalState?.itemId);
    const price = Number(document.querySelector("#menu-price").value);
    const active = document.querySelector("#menu-active").value === "yes";
    if (!item || !Number.isFinite(price) || price < 0) {
      showToast("Harga menu tidak valid", "error");
      return;
    }
    const oldPrice = item.price;
    item.price = price;
    item.active = active;
    audit(
      "Menu diperbarui",
      `${item.name} · ${rupiah(oldPrice)} menjadi ${rupiah(price)} · ${active ? "Aktif" : "Nonaktif"}`,
    );
    persist();
    closeModal();
    renderShell();
    showToast("Harga dan status menu diperbarui");
  }
  if (action === "save-tax-settings") {
    const label = document.querySelector("#tax-label").value.trim();
    const rate = Number(document.querySelector("#tax-rate").value);
    if (!canPerform("tax")) return;
    if (!label || !Number.isFinite(rate) || rate < 0 || rate > 100) {
      showToast("Label dan tarif pajak tidak valid", "error");
      return;
    }
    state.tax = {
      ...state.tax,
      label,
      rate,
      included: true,
      provisional: true,
    };
    persist();
    closeModal();
    renderShell();
    showToast("Pengaturan pajak termasuk diperbarui");
  }
  if (action === "add-task") {
    if (!canPerform("task-create")) return;
    taskModal();
  }
  if (action === "save-task") {
    const title = document.querySelector("#task-title").value.trim();
    const assigneeId = Number(document.querySelector("#task-assignee").value);
    const priority = document.querySelector("#task-priority").value;
    const due = document.querySelector("#task-due").value;
    const note = document.querySelector("#task-note").value.trim();
    if (!title || !assigneeId || !due) {
      showToast("Judul, penanggung jawab, dan waktu wajib diisi", "error");
      return;
    }
    state.workTasks.push({
      id: Date.now(),
      title,
      assigneeId,
      priority,
      status: "Belum",
      due,
      note,
    });
    audit(
      "Tugas dibuat",
      `${title} · ${employees.find((e) => e.id === assigneeId)?.name || ""}`,
    );
    persist();
    closeModal();
    renderShell();
    showToast("Tugas outlet berhasil dibuat");
  }
  if (action === "toggle-task") {
    const task = state.workTasks.find(
      (item) => item.id === Number(target.dataset.id),
    );
    if (!task) return;
    if (
      !["Owner", "Head Barista"].includes(operator().role) &&
      task.assigneeId !== operator().id
    ) {
      showToast("Anda hanya dapat memperbarui tugas sendiri", "error");
      return;
    }
    task.status = task.status === "Selesai" ? "Belum" : "Selesai";
    audit("Status tugas diperbarui", `${task.title} · ${task.status}`);
    persist();
    renderShell();
    showToast(`Tugas ditandai ${task.status.toLowerCase()}`);
  }
  if (action === "finance-tab") {
    state.financeTab = target.dataset.tab;
    renderShell();
  }
  if (action === "finance-period-preset") {
    const year = String(businessDate()).slice(0, 4);
    state.financePeriodStart =
      target.dataset.period === "year" ? `${year}-01-01` : firstDayOfMonth();
    state.financePeriodEnd = businessDate();
    renderShell();
  }
  if (action === "export-finance-excel") await exportFinanceExcel();
  if (action === "export-finance-pdf") await exportFinancePdf();
  if (action === "finance-import-excel") openFinanceExcelImport();
  if (action === "finance-import-pdf") openFinancePdfArchive();
  if (action === "confirm-finance-import") {
    if (!canPerform("finance") || modalState?.type !== "finance-import") return;
    let imported = 0;
    modalState.rows.forEach((row, index) => {
      const duplicate = state.manualJournals.some(
        (journal) =>
          journal.date === row.date &&
          journal.reference === row.reference &&
          journal.debitCode === row.debitCode &&
          journal.creditCode === row.creditCode &&
          Number(journal.amount) === Number(row.amount),
      );
      if (duplicate) return;
      state.manualJournals.push({
        ...row,
        id: `journal-import-${Date.now()}-${index}`,
        automatic: false,
        by: operator().name,
        createdAt: nowTime(),
        createdAtIso: localTimestamp(),
      });
      imported += 1;
    });
    audit(
      "Impor jurnal Finance",
      `${modalState.filename} | ${imported} jurnal baru`,
    );
    persist();
    closeModal();
    renderShell();
    showToast(`${imported} jurnal baru berhasil diimpor`);
  }
  if (action === "opening-balance") openingBalanceModal();
  if (action === "manual-journal") manualJournalModal();
  if (action === "reverse-journal") reverseJournalModal(target.dataset.id);
  if (action === "fixed-asset") fixedAssetModal();
  if (action === "accounting-accounts") accountingAccountsModal();
  if (action === "save-opening-balance") {
    if (!canPerform("finance")) return;
    const asOf = document.querySelector("#opening-date").value;
    if (!asOf) {
      showToast("Tanggal saldo awal wajib diisi", "error");
      return;
    }
    const numericValue = (selector) =>
      Math.max(0, Number(document.querySelector(selector).value || 0));
    state.openingBalances = {
      asOf,
      cash: numericValue("#opening-cash"),
      bank: numericValue("#opening-bank"),
      inventory: numericValue("#opening-inventory"),
      fixedAssetCost: numericValue("#opening-fixed-assets"),
      accumulatedDepreciation: numericValue("#opening-depreciation"),
      liabilities: numericValue("#opening-liabilities"),
      initialCapital: numericValue("#opening-capital"),
    };
    audit(
      "Saldo awal akuntansi diperbarui",
      `Selisih ${rupiah(openingBalanceDifference())}`,
    );
    persist();
    closeModal();
    renderShell();
    showToast(
      Math.abs(openingBalanceDifference()) < 1
        ? "Saldo awal tersimpan dan seimbang"
        : "Saldo awal tersimpan dengan selisih kontrol",
    );
  }
  if (action === "save-manual-journal") {
    if (!canPerform("finance")) return;
    const date = document.querySelector("#journal-date").value;
    const reference = document.querySelector("#journal-reference").value.trim();
    const description = document
      .querySelector("#journal-description")
      .value.trim();
    const debitCode = document.querySelector("#journal-debit").value;
    const creditCode = document.querySelector("#journal-credit").value;
    const amount = Number(document.querySelector("#journal-amount").value);
    if (!date || !reference || !description || !amount || amount <= 0) {
      showToast("Tanggal, referensi, keterangan, dan nominal wajib diisi", "error");
      return;
    }
    if (debitCode === creditCode) {
      showToast("Akun debit dan kredit harus berbeda", "error");
      return;
    }
    state.manualJournals.push({
      id: Date.now(),
      date,
      reference,
      description,
      debitCode,
      creditCode,
      amount,
      automatic: false,
      by: operator().name,
      createdAt: nowTime(),
      createdAtIso: localTimestamp(),
    });
    audit("Jurnal manual dibuat", `${reference} | ${rupiah(amount)}`);
    persist();
    closeModal();
    renderShell();
    showToast("Jurnal manual tersimpan");
  }
  if (action === "confirm-reverse-journal") {
    if (!canPerform("finance") || modalState?.type !== "reverse-journal") return;
    const journal = state.manualJournals.find(
      (entry) => String(entry.id) === String(modalState.journalId),
    );
    const reason = document
      .querySelector("#reverse-journal-reason")
      .value.trim();
    if (!journal || journal.reversedById || journal.reversalOf) {
      showToast("Jurnal tidak dapat dibalik", "error");
      return;
    }
    if (!reason) {
      showToast("Alasan pembalikan wajib diisi", "error");
      return;
    }
    const reversalId = Date.now();
    state.manualJournals.push({
      id: reversalId,
      date: businessDate(),
      reference: `REV-${journal.reference}`,
      description: `Pembalik: ${journal.description} | ${reason}`,
      debitCode: journal.creditCode,
      creditCode: journal.debitCode,
      amount: journal.amount,
      automatic: false,
      reversalOf: journal.id,
      by: operator().name,
      createdAt: nowTime(),
      createdAtIso: localTimestamp(),
    });
    journal.reversedById = reversalId;
    journal.reversedAt = localTimestamp();
    journal.reversalReason = reason;
    audit("Jurnal manual dibalik", `${journal.reference} | ${reason}`);
    persist();
    closeModal();
    renderShell();
    showToast("Jurnal pembalik berhasil dibuat");
  }
  if (action === "save-fixed-asset") {
    if (!canPerform("finance")) return;
    const name = document.querySelector("#asset-name").value.trim();
    const category = document.querySelector("#asset-category").value;
    const acquisitionDate = document.querySelector("#asset-date").value;
    const reference = document.querySelector("#asset-reference").value.trim();
    const cost = Number(document.querySelector("#asset-cost").value);
    const salvageValue = Number(document.querySelector("#asset-salvage").value || 0);
    const usefulLifeMonths = Number(document.querySelector("#asset-life").value);
    const isOpening = document.querySelector("#asset-opening").value === "yes";
    if (!name || !acquisitionDate || !reference || !cost || cost <= 0) {
      showToast("Nama, tanggal, bukti, dan harga perolehan wajib diisi", "error");
      return;
    }
    if (salvageValue >= cost) {
      showToast("Nilai residu harus lebih kecil dari harga perolehan", "error");
      return;
    }
    state.fixedAssets.push({
      id: Date.now(),
      name,
      category,
      acquisitionDate,
      reference,
      cost,
      salvageValue,
      usefulLifeMonths,
      isOpening,
      active: true,
      by: operator().name,
      createdAt: nowTime(),
    });
    audit("Aset tetap ditambahkan", `${name} | ${rupiah(cost)}`);
    persist();
    closeModal();
    renderShell();
    showToast("Aset tetap berhasil ditambahkan");
  }
  if (action === "save-accounting-settings") {
    if (!canPerform("finance")) return;
    const companyName = document.querySelector("#accounting-company").value.trim();
    const bankName = document.querySelector("#accounting-bank").value.trim();
    const bankAccountNumber = document
      .querySelector("#accounting-bank-number")
      .value.trim();
    const newCode = document.querySelector("#new-account-code").value.trim();
    const newName = document.querySelector("#new-account-name").value.trim();
    const newGroup = document.querySelector("#new-account-group").value;
    if (!companyName || !bankName) {
      showToast("Nama perusahaan dan bank wajib diisi", "error");
      return;
    }
    if ((newCode || newName) && (!newCode || !newName)) {
      showToast("Kode dan nama akun baru harus diisi lengkap", "error");
      return;
    }
    if (newCode && state.accountingAccounts.some((account) => account.code === newCode)) {
      showToast("Kode akun sudah digunakan", "error");
      return;
    }
    state.accountingSettings = {
      ...state.accountingSettings,
      companyName,
      bankName,
      bankAccountNumber,
    };
    if (newCode)
      state.accountingAccounts.push({
        code: newCode,
        name: newName,
        group: newGroup,
        active: true,
      });
    audit(
      "Pengaturan akuntansi diperbarui",
      newCode ? `Akun ${newCode} ditambahkan` : "Identitas laporan diperbarui",
    );
    persist();
    closeModal();
    renderShell();
    showToast("Pengaturan akuntansi tersimpan");
  }
  if (action === "add-expense") {
    if (!canPerform("finance")) {
      showToast(
        "Hanya Pemilik atau Keuangan yang dapat mencatat biaya",
        "error",
      );
      return;
    }
    expenseModal();
  }
  if (action === "save-expense") {
    if (!canPerform("finance")) return;
    const date = document.querySelector("#expense-date").value;
    const accountCode = document.querySelector("#expense-account").value;
    const category = accountingAccount(accountCode)?.name || "Biaya Lainnya";
    const vendor = document.querySelector("#expense-vendor").value.trim();
    const invoice = document.querySelector("#expense-invoice").value.trim();
    const method = document.querySelector("#expense-method").value;
    const amount = Number(document.querySelector("#expense-amount").value);
    const note = document.querySelector("#expense-note").value.trim();
    if (!date || !vendor || !invoice || !amount || amount <= 0 || !note) {
      showToast(
        "Tanggal, vendor, nota, jumlah, dan catatan wajib diisi",
        "error",
      );
      return;
    }
    if (latestClosing(date)) {
      showToast("Tanggal sudah ditutup. Gunakan Koreksi Keuangan.", "error");
      return;
    }
    state.expenses.push({
      id: Date.now(),
      date,
      category,
      accountCode,
      vendor,
      invoice,
      method,
      amount,
      note,
      by: operator().name,
      createdAt: nowTime(),
      createdAtIso: localTimestamp(),
    });
    audit(
      "Biaya operasional dicatat",
      `${category} · ${vendor} · ${rupiah(amount)}`,
    );
    persist();
    closeModal();
    renderShell();
    showToast("Biaya operasional berhasil dicatat");
  }
  if (action === "finance-adjustment") {
    if (!canPerform("finance-adjustment")) return;
    financeAdjustmentModal();
  }
  if (action === "save-finance-adjustment") {
    if (!canPerform("finance-adjustment")) return;
    const date = document.querySelector("#adjustment-date").value;
    const reference = document
      .querySelector("#adjustment-reference")
      .value.trim();
    const targetType = document.querySelector("#adjustment-target").value;
    const direction = document.querySelector("#adjustment-direction").value;
    const amount = Number(document.querySelector("#adjustment-amount").value);
    const reason = document.querySelector("#adjustment-reason").value.trim();
    if (!date || !reference || !amount || amount <= 0 || !reason) {
      showToast("Tanggal, referensi, nominal, dan alasan wajib diisi", "error");
      return;
    }
    state.financeAdjustments.push({
      id: Date.now(),
      date,
      reference,
      target: targetType,
      direction,
      amount,
      reason,
      by: operator().name,
      createdAt: nowTime(),
      createdAtIso: localTimestamp(),
    });
    audit(
      "Koreksi keuangan",
      `${targetType} ${direction} ${rupiah(amount)} · ${reference}`,
    );
    persist();
    closeModal();
    renderShell();
    showToast(
      latestClosing(date)
        ? "Koreksi tersimpan; terbitkan revisi laporan"
        : "Koreksi keuangan tersimpan",
    );
  }
  if (action === "finance-close") financeCloseModal();
  if (action === "confirm-finance-close") {
    if (!canPerform("finance-close")) return;
    const readiness = closingReadiness();
    if (!readiness.ready) {
      showToast(
        `Belum dapat ditutup: ${readiness.blockers.join(", ")}`,
        "error",
      );
      return;
    }
    const note = document.querySelector("#finance-close-note").value.trim();
    if (!note) {
      showToast("Catatan penutupan wajib diisi", "error");
      return;
    }
    const previous = latestClosing();
    const version = Number(previous?.version || 0) + 1;
    const metrics = financeMetrics();
    state.financeClosings.push({
      id: Date.now(),
      date: businessDate(),
      version,
      previousClosingId: previous?.id || null,
      ...metrics,
      note,
      by: operator().name,
      createdAt: nowTime(),
      closedAtIso: localTimestamp(),
    });
    audit(
      previous ? "Revisi tutup buku" : "Tutup buku harian",
      `${businessDate()} · v${version} · laba operasional ${rupiah(metrics.operatingProfit)}`,
    );
    persist();
    closeModal();
    renderShell();
    showToast(
      previous
        ? `Revisi laporan v${version} diterbitkan`
        : "Tutup buku harian berhasil disimpan",
    );
  }
  if (action === "export-excel") exportExcel();
  if (action === "export-pdf") exportPdf();
  if (action === "export-sales-excel") exportSalesHistoryExcel();
  if (action === "export-sales-pdf") exportSalesHistoryPdf();
  if (action === "download-template") downloadImportTemplate();
  if (action === "trigger-excel-import")
    document.querySelector("#excel-import-file")?.click();
  if (action === "trigger-pdf-import")
    document.querySelector("#pdf-import-file")?.click();
  if (action === "download-document") downloadStoredDocument(target.dataset.id);
  if (action === "reconcile-payment") {
    if (!canPerform("reconcile")) {
      showToast(
        "Hanya Pemilik atau Keuangan yang dapat melakukan rekonsiliasi",
        "error",
      );
      return;
    }
    const tx = state.transactions.find(
      (item) => item.id === Number(target.dataset.id),
    );
    if (!tx) return;
    if (latestClosing(tx.businessDate)) {
      showToast("Periode transaksi sudah ditutup", "error");
      return;
    }
    tx.reconciliationStatus = "Sesuai";
    tx.reconciledBy = operator().name;
    tx.reconciledAt = nowTime();
    audit("Pembayaran direkonsiliasi", `PESANAN #${tx.id} · ${tx.method}`);
    persist();
    renderShell();
    showToast(`PESANAN #${tx.id} ditandai sesuai`);
  }
  if (action === "confirm-refund") {
    if (!canPerform("refund")) return;
    const tx = state.transactions.find((item) => item.id === modalState.txId);
    const reason = document.querySelector("#refund-reason").value.trim();
    const restock = document.querySelector("#refund-restock").value === "yes";
    if (!tx || !reason) {
      showToast("Alasan pengembalian wajib diisi", "error");
      return;
    }
    if (latestClosing(tx.businessDate)) {
      showToast(
        "Periode transaksi sudah ditutup. Gunakan Koreksi Keuangan.",
        "error",
      );
      return;
    }
    if (restock)
      applyStockDelta(tx.id, tx.items, [], "Pengembalian dana dan stok");
    tx.status = "Refunded";
    tx.refundedAt = localTimestamp();
    tx.refundedBy = operator().name;
    state.voidRefunds.push({
      id: Date.now(),
      txId: tx.id,
      amount: tx.total,
      reason,
      restock,
      by: operator().name,
      businessDate: tx.businessDate || businessDate(),
      createdAt: nowTime(),
    });
    audit(
      "Pengembalian dana",
      `PESANAN #${tx.id} · ${rupiah(tx.total)} · ${reason}`,
    );
    persist();
    closeModal();
    renderShell();
    showToast(`Dana PESANAN #${tx.id} berhasil dikembalikan`);
  }
  if (action === "confirm-excel-import") {
    const rows = modalState?.rows || [];
    rows.forEach((row, index) => {
      const item = state.ingredients.find(
        (ingredient) => ingredient.id === row.itemId,
      );
      if (!item) return;
      const before = item.qty;
      const oldValue = item.qty * Number(item.avgCost || 0);
      const unitCost = row.totalPrice / row.qty;
      item.avgCost = (oldValue + row.totalPrice) / (item.qty + row.qty);
      item.qty += row.qty;
      state.purchases.push({
        ...row,
        id: Date.now() + index,
        date: businessDate(),
        unitCost,
        by: operator().name,
        createdAt: nowTime(),
        source: "Import Excel",
      });
      state.stockMovements.push({
        id: `import-${Date.now()}-${index}`,
        ingredientId: item.id,
        ingredient: item.name,
        delta: row.qty,
        before,
        after: item.qty,
        reason: `Impor Excel · ${row.vendor} · ${row.invoice}`,
        businessDate: businessDate(),
        by: operator().name,
        createdAt: nowTime(),
      });
    });
    state.importHistory.push({
      id: Date.now(),
      filename: modalState.filename,
      rows: rows.length,
      by: operator().name,
      createdAt: nowTime(),
    });
    audit(
      "Impor Excel",
      `${modalState.filename} · ${rows.length} baris stok masuk`,
    );
    persist();
    closeModal();
    renderShell();
    showToast(`${rows.length} baris stok masuk berhasil diimpor`);
  }
});

document.addEventListener("change", async (event) => {
  if (event.target.id === "finance-period-start") {
    state.financePeriodStart = event.target.value || firstDayOfMonth();
    if (state.financePeriodStart > state.financePeriodEnd)
      state.financePeriodEnd = state.financePeriodStart;
    renderShell();
  }
  if (event.target.id === "finance-period-end") {
    state.financePeriodEnd = event.target.value || businessDate();
    if (state.financePeriodEnd < state.financePeriodStart)
      state.financePeriodStart = state.financePeriodEnd;
    renderShell();
  }
  if (event.target.id === "minimum-item") {
    const item = state.ingredients.find(
      (ingredient) => ingredient.id === Number(event.target.value),
    );
    if (item) {
      modalState.itemId = item.id;
      document.querySelector("#minimum-qty").value = item.minimum ?? 0;
      document.querySelector("#minimum-enabled").value =
        item.minimum == null ? "no" : "yes";
      document.querySelector("#minimum-unit").textContent = item.unit;
    }
  }
  if (event.target.id === "minimum-enabled")
    document.querySelector("#minimum-qty").disabled =
      event.target.value === "no";
  if (event.target.id === "excel-import-file" && event.target.files?.[0]) {
    try {
      showImportPreview(
        await parseStockWorkbook(event.target.files[0]),
        event.target.files[0].name,
      );
    } catch (error) {
      showToast(`Impor Excel gagal: ${error.message}`, "error");
    }
    event.target.value = "";
  }
  if (event.target.id === "pdf-import-file" && event.target.files?.[0]) {
    try {
      await savePdfDocument(event.target.files[0]);
    } catch (error) {
      showToast(`Impor PDF gagal: ${error.message}`, "error");
    }
    event.target.value = "";
  }
});

function closeShiftCountModal() {
  modalState = { type: "close-count" };
  const shiftTransactions = state.transactions.filter(
    (tx) => tx.shiftId === state.shift.id && isActiveTransaction(tx),
  );
  const qris = shiftTransactions
    .filter((tx) => tx.method.startsWith("QRIS"))
    .reduce((sum, tx) => sum + tx.total, 0);
  const debit = shiftTransactions
    .filter((tx) => tx.method === "Debit")
    .reduce((sum, tx) => sum + tx.total, 0);
  showModal(
    `<div class="modal-head"><div><h2>Tutup Shift Operasional</h2><p>Shift boleh ditutup oleh orang yang berbeda dari pembuka.</p></div><button class="icon-button" data-action="close-modal">${icon("close")}</button></div><div class="modal-body"><div class="payment-total"><small>Total pembayaran digital</small><strong>${rupiah(qris + debit)}</strong></div><div class="summary-row"><span>QRIS BNI</span><strong>${rupiah(qris)}</strong></div><div class="summary-row"><span>Kartu debit</span><strong>${rupiah(debit)}</strong></div><div class="field" style="margin-top:12px"><label>Catatan serah terima (wajib)</label><textarea id="shift-handover-note" placeholder="Kondisi outlet, stok, atau pekerjaan lanjutan"></textarea></div></div><div class="modal-foot"><button class="button ghost" data-action="close-modal">Batal</button><button class="button danger" data-action="confirm-close-shift">Tutup Shift</button></div>`,
  );
}

document.addEventListener("input", (event) => {
  if (event.target.id === "customer-input") {
    state.customer = event.target.value;
    schedulePersist();
  }
  if (event.target.id === "table-input") {
    state.table = event.target.value;
    schedulePersist();
  }
  if (event.target.id === "search-input") {
    state.search = event.target.value;
    const filtered = state.menuItems.filter(
      (item) =>
        item.active !== false &&
        (state.category === "Semua" || item.category === state.category) &&
        item.name.toLowerCase().includes(state.search.toLowerCase()),
    );
    const grid = document.querySelector(".menu-grid");
    if (grid) grid.innerHTML = menuCardsHtml(filtered);
  }
  if (event.target.id === "bill-search-input") {
    state.billSearch = event.target.value;
    const query = state.billSearch.trim().toLowerCase();
    const cards = state.bills.filter(
      (bill) =>
        !query ||
        bill.customer.toLowerCase().includes(query) ||
        String(bill.table || "").includes(query) ||
        String(bill.id).includes(query),
    );
    const grid = document.querySelector(".grid-cards");
    if (grid) grid.innerHTML = billCardsHtml(cards, "Tagihan tidak ditemukan.");
  }
});

window.addEventListener("online", () => {
  state.lastSync = "Tersimpan lokal";
  if (state.portal === "login") renderLoginPage();
  else renderShell();
  showToast("Koneksi kembali. Data tetap tersimpan lokal.");
});
window.addEventListener("offline", () => {
  if (state.portal === "login") renderLoginPage();
  else renderShell();
  showToast("Mode offline aktif. Transaksi disimpan di tablet.", "error");
});
window.addEventListener("storage", (event) => {
  if (event.key === TERMINAL_AUTH_STORAGE_KEY) {
    authenticatedTerminal = terminalSessionAccount();
    if (location.pathname.startsWith("/pos") && !authenticatedTerminal) {
      resetPosOperatorConfirmation();
      navigateToLogin("terminal", true);
    } else if (location.pathname.startsWith("/login")) {
      renderLoginPage();
    }
    return;
  }
  if (event.key !== STORAGE_KEY || !event.newValue) return;
  try {
    const external = migrateState(JSON.parse(event.newValue));
    if (Number(external.dataRevision || 0) <= Number(state.dataRevision || 0))
      return;
    const ui = {
      portal: state.portal,
      view: state.view,
      category: state.category,
      search: state.search,
      billSearch: state.billSearch,
      reportPeriod: state.reportPeriod,
      financeTab: state.financeTab,
      financePeriodStart: state.financePeriodStart,
      financePeriodEnd: state.financePeriodEnd,
      teamTab: state.teamTab,
      navExpanded: state.navExpanded,
      operatorId: state.operatorId,
    };
    state = { ...external, ...ui };
    if (state.portal === "login") renderLoginPage();
    else renderShell();
    if (state.portal === "pos" && !posOperatorIsConfirmed()) {
      resetPosOperatorConfirmation();
      chooseOperatorModal(true);
    }
    showToast("Perubahan dari tab lain dimuat");
  } catch {
    /* Abaikan data lintas tab yang tidak valid. */
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (
    document.querySelector("#modal-root .modal") &&
    !modalDismissLocked
  ) {
    closeModal();
    return;
  }
  if (state.navExpanded) {
    state.navExpanded = false;
    renderShell();
  }
});
window.addEventListener("popstate", () => {
  state.navExpanded = false;
  closeModal();
  routeApplication();
});

if ("serviceWorker" in navigator)
  navigator.serviceWorker.register("/app/sw.js").catch(() => {});
routeApplication();

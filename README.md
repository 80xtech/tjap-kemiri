# CafePOS Tjap Kemiri

Prototipe lokal untuk POS tablet Android lanskap dan portal manajemen berbasis jabatan.

## Menjalankan aplikasi

```powershell
npm.cmd run dev
```

Buka:

- Layar pembuka: `http://localhost:4173/`
- Halaman masuk: `http://localhost:4173/login`
- POS tablet: `http://localhost:4173/pos`
- Portal akun pribadi: `http://localhost:4173/admin`

Jalankan `npm.cmd install` satu kali setelah menyalin proyek. Data contoh disimpan pada `localStorage` browser agar alur tetap dapat digunakan saat luring.

## Cakupan implementasi saat ini

- Pesanan bayar langsung dan tagihan aktif
- Tagihan aktif dapat dibuka dan diperbarui tanpa membuat nomor pesanan ganda
- QRIS Bank BNI fisik dan kartu debit melalui EDC
- Perlindungan klik pembayaran ganda serta pemeriksaan nomor transaksi unik
- Diskon item/transaksi dengan alasan wajib
- Kisi status meja dan reservasi sederhana; meja langsung kosong setelah pembayaran
- Enam akun pribadi dengan dashboard dan akses sesuai jabatan
- Akun perangkat `kasir1@tjapkemiri.com` khusus tablet kasir dan tidak dihitung sebagai karyawan
- Penjagaan rute memisahkan sesi akun pribadi dari sesi perangkat kasir
- Absensi masuk/pulang dengan selfie hanya melalui akun pribadi
- Karyawan yang belum hadir atau sudah pulang tidak dapat dipilih sebagai petugas kasir
- Shift operasional outlet tanpa pencatatan modal awal
- Ringkasan Pemilik
- Pusat tindakan untuk pembayaran, shift, tagihan lama, stok menipis, dan tugas terlambat
- Pemilik dapat mengatur target penjualan, batas tagihan lama, dan aturan referensi pembayaran
- Grafik penjualan per jam memakai transaksi nyata, bukan data dekoratif
- Pusat kerja berbasis jabatan untuk Pemilik, Keuangan, Kepala Barista, Barista Senior, dan Barista Junior
- Histori penjualan per akun; Pemilik, Keuangan, dan Kepala Barista melihat seluruh transaksi, sedangkan Barista melihat transaksi sendiri
- Ekspor histori penjualan sesuai lingkup akses ke Excel dan PDF
- Tugas outlet, hak akses per jabatan, dan audit aktivitas
- Modul Keuangan: rekonsiliasi QRIS/debit, biaya operasional per akun, pemisahan pajak, koreksi, pengembalian dana, dan tutup buku berversi
- Laporan Laba Rugi dan Neraca dengan rentang tanggal fleksibel serta pemeriksaan keseimbangan otomatis
- Neraca Saldo per tanggal dengan COA, saldo debet dan kredit, kontrol keseimbangan, serta PDF hitam putih mengikuti format Finance Tjap Kemiri
- Saldo awal, jurnal manual dan otomatis, daftar akun fleksibel, register aset tetap, serta penyusutan garis lurus bulanan
- Ekspor paket Finance ke Excel dengan rumus dan lembar pemeriksaan, ekspor PDF dua laporan, impor ulang jurnal manual, dan arsip PDF lokal
- Paket Excel Finance memuat lembar Neraca Saldo dengan rumus jumlah debet dan kredit
- Jurnal manual dikoreksi melalui jurnal pembalik agar riwayat audit tetap utuh
- Sidebar manajemen ringkas dengan maksimal empat menu utama dan panel Lainnya
- Library Excel/PDF dimuat hanya saat digunakan agar startup POS lebih ringan
- Ekspor laporan Excel multi-sheet dan PDF
- Impor stok masuk dari Excel dengan validasi/pratinjau serta arsip bukti PDF lokal
- Pembelian/stok masuk dengan nomor nota, vendor, jumlah, harga beli, dan pembaruan biaya rata-rata
- Stok keluar untuk bahan rusak, tumpah, kedaluwarsa, pemakaian internal, dan sampel produk beserta dampak biaya
- Pengaturan batas minimum per bahan oleh Pemilik atau Kepala Barista dengan riwayat audit
- Hitung stok fisik dengan konfirmasi Kepala Barista
- Gramasi menu dipetakan ke stok dan otomatis membuat pergerakan bahan saat transaksi
- Tambahan Coffee dan Foam berbayar dengan dampak stok
- Kepala Barista dan Barista Senior dapat mengatur ketersediaan menu tanpa mengakses margin keuangan
- Shift tidak dapat ditutup selama masih ada tagihan aktif
- Analisis Menu dan HPP dari resep serta harga rata-rata bahan
- Harga termasuk pajak dan tarif pajak dapat diubah tanpa menyunting kode
- Tanggal bisnis memakai zona waktu Asia/Jakarta dan laporan dapat difilter hari ini, 7 hari, 30 hari, atau semua
- Cetak tiket pesanan dan struk hitam putih untuk printer termal melalui dialog cetak browser
- Sinkronisasi perubahan data antartab pada browser yang sama
- Snapshot data otomatis di IndexedDB serta ekspor dan impor cadangan JSON penuh
- Setiap dialog memiliki tombol tutup, tindakan Batal, atau keduanya; tombol Escape menutup dialog yang tidak dikunci
- PWA/service worker untuk fondasi offline
- Skema MySQL 8 pada `database/schema.sql`

## Catatan arsitektur

Versi localhost sengaja tidak memerlukan server MySQL lokal. Data aplikasi berada di `localStorage`, sedangkan arsip PDF dan selfie absensi berada di IndexedDB. `database/schema.sql` tetap menjadi target persistence saat backend Hostinger diaktifkan.

PIN pengujian lokal untuk seluruh akun dan akun perangkat adalah `1234`. PIN ini harus diganti dengan hash dan pengaturan ulang PIN ketika backend diaktifkan.

Formula raw material foam, tarif pajak daerah final, pemetaan bahan `SYRUP BLACKCURRANT`, domain, dan pemilihan driver printer masih perlu dikonfirmasi. Bahan tambahan dari PDF yang belum memiliki stok aktual ditandai sebagai data awal di inventori.

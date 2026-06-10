// 1. Fungsi Utama dengan Callback
function prosesUmur(umur, callback) {
    let hasil = "";
    if (umur < 30) {
        hasil = "Masih Muda 😎";
    } else {
        hasil = "Lumayan Muda 🙂";
    }
    // Jalankan fungsi callback
    callback(hasil);
}

// 2. Fungsi Callback untuk update ke UI HTML
function tampilkanDiLayar(teksHasil) {
    document.getElementById("hasil").innerText = teksHasil;
}

// 3. Event Listener saat tombol diklik
document.getElementById("btnCek").addEventListener("click", function() {
    const inputUmur = document.getElementById("umurInput").value;
    
    // Validasi jika inputan kosong
    if (inputUmur === "") {
        document.getElementById("hasil").innerText = "Isi umurnya dulu ya! Errr.. 🫥";
        return;
    }

    // Eksekusi fungsi utama dan masukan fungsi callback-nya
    prosesUmur(parseInt(inputUmur), tampilkanDiLayar);
});
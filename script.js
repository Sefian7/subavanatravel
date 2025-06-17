// Menampilkan pesan di konsol
console.log("Selamat datang di Subavana Travel!");

// Smooth scroll dan notifikasi
document.addEventListener("DOMContentLoaded", function () {
  const tombol = document.querySelector(".cta-button");

  tombol.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Scroll ke bagian paket... siap jelajahi!");
    const bagianPaket = document.querySelector("#paket");
    bagianPaket.scrollIntoView({ behavior: "smooth" });
  });

  // Validasi form kontak
  const formKontak = document.querySelector("#formKontak");
  if (formKontak) {
    formKontak.addEventListener("submit", function (e) {
      e.preventDefault();
      const nama = document.querySelector("#nama").value.trim();
      const pesan = document.querySelector("#pesan").value.trim();

      if (nama === "" || pesan === "") {
        alert("Harap isi semua data dengan lengkap!");
      } else {
        alert("Terima kasih telah menghubungi kami, " + nama + "!");
        formKontak.reset();
      }
    });
  }
});


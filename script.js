// Set tanggal anniversary
const anniversaryDate = new Date("2024-12-01T00:00:00").getTime();

// Update countdown setiap detik
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = anniversaryDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        days + " hari " + hours + " jam " + minutes + " menit " + seconds + " detik ";

    // Ketika waktu habis
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Selamat Hari Anniversary!";
    }
}, 1000);

// Foto yang akan ditampilkan
const photos = [
    'photo1.jpg',
    'photo2.jpg',
    'photo4.jpg',
    'photo5.jpg',
    'photo6.jpg',
    'photo7.jpg'
];

// Menampilkan foto saat tombol hati diklik
document.getElementById('heartButton').addEventListener('click', function() {
    const gallery = document.getElementById('photoGallery');
    const extraText = document.getElementById('extraText');
    gallery.innerHTML = ''; // Kosongkan galeri sebelum menampilkan foto

    let index = 0; // Indeks foto awal

    // Fungsi untuk menampilkan foto setiap 2 detik
    setInterval(function() {
        gallery.innerHTML = ''; // Kosongkan foto sebelumnya
        const img = document.createElement('img');
        img.src = photos[index]; // Ambil foto berdasarkan indeks saat ini
        img.alt = 'Anniversary Photo';
        gallery.appendChild(img);
        
        index = (index + 1) % photos.length; // Berpindah ke foto berikutnya, kembali ke awal jika mencapai akhir
    }, 2000); // Interval 2 detik

    // Menampilkan teks tambahan
    extraText.textContent = "Hari ini adalah hari yang istimewa, hari di mana kita merayakan dua tahun perjalanan kita bersama. Dua tahun mungkin terasa singkat bagi sebagian orang, tetapi bagi kita, setiap detiknya adalah anugerah yang begitu berharga. Selama dua tahun ini, kita telah berbagi tawa, kebahagiaan, tantangan, dan bahkan air mata yang memperkuat ikatan kita.

Perjalanan ini bukan hanya tentang kebersamaan, tetapi juga tentang pertumbuhan. Bersamamu, aku belajar untuk menjadi lebih baik, untuk memahami arti cinta yang tulus, dan untuk menghadapi hidup dengan keyakinan bahwa aku tidak sendirian. Kamu bukan hanya pasangan, tetapi juga sahabat, pendukung, dan tempat di mana aku selalu merasa nyaman.

Terima kasih untuk semua yang telah kamu berikan, untuk cinta yang tak pernah putus, dan untuk setiap momen kecil yang membuat hidup ini lebih bermakna. Aku tak sabar menantikan semua yang akan kita lalui di masa depan, semua mimpi yang akan kita wujudkan, dan semua kenangan baru yang akan kita ciptakan bersama.

Selamat ulang tahun yang kedua untuk perjalanan cinta kita. Semoga kita selalu diberkahi kebahagiaan, kesabaran, dan kekuatan untuk terus berjalan berdampingan, apa pun yang terjadi. Aku mencintaimu, sekarang dan selamanya.";
    extraText.style.opacity = 1;
});

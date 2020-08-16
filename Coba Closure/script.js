function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, Selamat ${waktu}. Semoga harimu menyenangkan!`);
  };
}

let selamatPagi = ucapkanSalam("Pagi");
let selamatSiang = ucapkanSalam("Siang");
let selamatMalam = ucapkanSalam("Malam");

console.dir(selamatMalam);

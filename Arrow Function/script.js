// Konsep this pada Arrow Function
const Mahasiswa = function () {
  this.nama = "Fajar";
  this.umur = 23;
  this.sayHello = function () {
    console.log(`Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`);
  };

  setInterval(() => {
    console.log(this.umur++);
  }, 500);
};

const fajar = new Mahasiswa();

// Konsep this pada Constructor Function
const Mahasiswa = function () {
  (this.nama = "Fajar"), (this.umur = 23);
  this.sayHello = function () {
    console.log(`Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`);
  };
};

const fajar = new Mahasiswa();

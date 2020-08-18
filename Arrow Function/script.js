// Arrow Function Mapping to Object
let mahasiswa = ["Muhammad Fajar", "Irwan Ardiansyah", "Supriadi Manalu"];
let jumlahHuruf = mahasiswa.map((nama) => ({
  nama: nama,
  jmlHuruf: nama.length,
}));
console.log(jumlahHuruf);

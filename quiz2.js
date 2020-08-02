// soal 1
function filterBooksPromise(colorful, amountOfPage) {
  return new Promise(function (resolve, reject) {
    var books = [
      { name: "Shinchan", totalPage: 50, isColorful: true },
      { name: "Kalkulus", totalPage: 250, isColorful: false },
      { name: "Doraemon", totalPage: 40, isColorful: true },
      { name: "Algoritma", totalPage: 300, isColorful: false },
    ];
    if (amountOfPage > 0) {
      resolve(
        books.filter(
          (x) => x.totalPage >= amountOfPage && x.isColorful == colorful
        )
      );
    } else {
      var reason = new Error("Maaf parameter salah");
      reject(reason);
    }
  });
}
console.log("Belum Selesai");

// soal 2
class BangunDatar {
  constructor(nama) {
    function luas() {
      return "";
    }
    function keliling() {
      return "";
    }
  }
}

class Lingkaran extends BangunDatar {
  constructor(nama) {
    super(nama);
  }
  get keliling() {
    return this.keliling;
  }
  set keliling(keliling) {
    this.keliling = keliling;
  }
  get luas() {
    return this.luas;
  }
  set luas(luas) {
    this.luas = luas;
  }
}

class Persegi extends BangunDatar {
  constructor(nama) {
    super(nama);
  }
  get keliling() {
    return this.keliling;
  }
  set keliling(keliling) {
    this.keliling = keliling;
  }
  get luas() {
    return this.luas;
  }
  set luas(luas) {
    this.luas = luas;
  }
}

// soal 3
let pesertaLomba = [
  ["Budi", "Pria", "172cm"],
  ["Susi", "Wanita", "162cm"],
  ["Lala", "Wanita", "155cm"],
  ["Agung", "Pria", "175cm"],
];

function objekPeserta(index) {
  let objectPesertaLomba = {
    nama: pesertaLomba[index][0],
    jenisKelamin: pesertaLomba[index][1],
    tinggiBadan: pesertaLomba[index][2],
  };
  console.log(objectPesertaLomba);
}
objekPeserta(0);
objekPeserta(1);
objekPeserta(2);
objekPeserta(3);

// soal 4
// rumus volume balok : p * l * t
// rumus volume kubus : p * l * t (sama) atau s * s * s
let rumusVolume = (...restPar) => {
  return restPar.reduce((satu, dua) => {
    return satu * dua;
  });
};
console.log(`Hasil volumenya adalah ${rumusVolume(5, 5, 5)}`);

// soal 5
let warna = ["biru", "merah", "kuning", "hijau"];
let dataBukuTambahan = {
  penulis: "John Doe",
  tahunTerbit: 2020,
};
let buku = {
  nama: "Pemrograman Dasar",
  jumlahHalaman: 172,
  warnaSampul: ["hitam"],
};
let warnaDua = [...warna, ...buku.warnaSampul];
console.log(warnaDua);
let bukuDua = { ...dataBukuTambahan, ...buku };
console.log(bukuDua);

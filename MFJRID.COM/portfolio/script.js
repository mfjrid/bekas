$.ajax({
  url: "json/portfolio.json",
  success: (results) => {
    let cards = "";
    reversedResults = results.reverse();
    reversedResults.forEach((el) => {
      tombol = "Kunjungi Halaman";
      if (el.tipe == "App Design" || el.tipe == "Web Design") {
        tombol = "Perbesar Gambar";
      }
      cards += `<div class="col-sm-6 my-4 kotak-card">
                <div class="card">
                <img src="${el.image_url}" class="card-img-top" alt="${el.judul}" />
                <div class="card-body">
                    <h4 class="card-title">${el.judul}</h4>
                    <p class="card-text text-muted">
                    ${el.tanggal}
                    </p>
                    <a href="#" class="tombol utama">Lihat Detail</a>
                    <a href="${el.link_url}" class="tombol kedua">${tombol}</a>
                </div>
                </div>
            </div>`;
    });
    $(".portfolio-container").html(cards);
  },
  error: (e) => {
    console.log(e.responseText);
  },
});

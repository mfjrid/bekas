$.ajax({
  url: "json/portfolio.json",
  success: (results) => {
    let cards = "";
    reversedResults = results.reverse();
    reversedResults.forEach((el) => {
      tombol = "Kunjungi Halaman";
      if (el.tipe == "App Design" || el.tipe == "Web Design") {
        tombol = "Lihat Detail";
      }
      cards += `<div class="col-md-4 my-4 kotak-card">
                <div class="card">
                <a href="#${el.unique}" data-toggle="modal">
                <img src="${el.image_url}" class="card-img-top" alt="${el.judul}" />
                </a>
                <div class="card-body">
                    <h4 class="card-title">${el.judul}</h4>
                    <p class="card-text text-muted">
                    ${el.tanggal}
                    </p>
                    <a href="#${el.unique}" data-toggle="modal" class="tombol utama">${tombol}</a>
                </div>
                </div>
              </div>

              <div class="modal fade" id="${el.unique}">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <h1>${el.judul}</h1>
                </div>
              </div>
              </div>
            `;
    });
    $(".portfolio-container").html(cards);
  },
  error: (e) => {
    console.log(e.responseText);
  },
});

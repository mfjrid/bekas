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
                    <a href="#${el.unique}" data-toggle="modal" class="tombol kedua">Lihat Detail</a>
                    <a href="#${el.unique}" data-toggle="modal" class="tombol utama">${tombol}</a>
                </div>
                </div>
              </div>

              <div class="modal fade" id="${el.unique}">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title font-weight-bold">${el.judul}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                  <div class="container p-3">
                    <div class="row">
                      <div class="col-md-12">
                      <img src="${el.image_url}" alt="${el.judul}" />
                      </div>
                    </div>
                  </div>
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

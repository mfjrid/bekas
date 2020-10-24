$.ajax({
  url: "json/portfolio.json",
  success: (results) => {
    let cards = "";
    reversedResults = results.reverse();
    reversedResults.forEach((el) => {
      tombol = "Kunjungi Halaman";
      if (el.tipe == "App Design" || el.tipe == "Web Design") {
        tombol = "Perbesar Gambar";
      } else if (el.tipe == "Full Web Design") {
        tombol = "Lihat Gambar Asli";
      }

      perbesar = `${el.image_url}`;
      if (el.tipe == "Full Web Design") {
        perbesar = `${el.full_image_url}`;
      }
      cards += `<div class="col-md-4 my-4 kotak-card">
                <div class="card">
                <!-- <a href="#${el.unique}" data-toggle="modal"> -->
                <img src="${el.image_url}" class="card-img-top" alt="${el.judul}" />
                <!-- </a> -->
                <div class="card-body">
                    <h4 class="card-title">${el.judul}</h4>
                    <p class="card-text text-muted">
                    ${el.tanggal}
                    </p>
                    <a href="#${el.link_detail}" data-toggle="modal" class="tombol kedua">Lihat Detail</a>
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
                      <img src="${perbesar}" alt="${el.judul}" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>

              <div class="modal fade" id="${el.link_detail}">
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
                      <div class="col-md-5 my-auto">
                        <img src="${el.image_url}" alt="${el.judul}" />
                      </div>
                      <div class="col-md-7">
                        <!-- <div class="row">
                          <div class="col-md-12">
                          <h4 class="font-weight-bold p-3">${el.judul}</h4>
                          </div>
                        </div> -->
                        <div class="row">
                          <div class="col-md-12">
                          <table class="table table-hover ">
                          <tbody>
                            <tr>
                              <th scope="row">Judul Design</th>
                              <td>${el.judul}</td>
                            </tr>
                            <tr>
                              <th scope="row">Detail</th>
                              <td>${el.detail}</td>
                            </tr>
                            <tr>
                              <th scope="row">Tanggal Dibuat</th>
                              <td>${el.tanggal}</td>
                            </tr>
                            <tr>
                              <th scope="row">Jenis</th>
                              <td>${el.tipe}</td>
                            </tr>
                            <tr>
                              <th scope="row">Software</th>
                              <td>${el.software}</td>
                            </tr>
                            <tr>
                              <th scope="row">Ide Design</th>
                              <td>${el.ide_design}</td>
                            </tr>
                          </tbody>
                        </table>
                          </div>
                        </div>
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

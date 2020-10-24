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
      cards += `<div class="col-md-3 my-4 kotak-card">
                <div class="card">
                <img src="${el.image_url}" class="card-img-top" alt="${el.judul}" onmouseover="hoverImage()" />
                <div class="card-body">
                    <h4 class="card-title">${el.judul}</h4>
                    <p class="card-text text-muted">
                    ${el.tanggal}
                    </p>
                    <a href="${el.link_url}" class="tombol utama">${tombol}</a>
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

function hoverImage() {
  var imageIni = document.querySelectorAll(".card-img-top");
  console.log(imageIni);
  let myArray = [...imageIni];
  console.log(myArray);
  myArray.style.visibility = "hidden";
}

feather.replace();

function munculText() {
  var x = document.getElementById("hover-icon");
  x.style.visibility = "visible";
  x.style.opacity = "1";
  x.style.transition = "0.5s";
}

function hilangText() {
  var x = document.getElementById("hover-icon");
  x.style.visibility = "hidden";
  x.style.opacity = "0";
  x.style.transition = "0.5s";
}

$(".count").each(function () {
  $(this)
    .prop("Counter", -1)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 3000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});

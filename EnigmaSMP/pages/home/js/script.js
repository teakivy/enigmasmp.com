var slideIndex = 1;
var slidesChanged = false;
// showSlides(1);
console.log("Hello JS File");

function pageLoad() {
  showSlides((slideIndex = Math.floor(Math.random() * 7) + 1));

  setInterval(function () {
    carouselRotation();
  }, 3000);
}

function carouselRotation() {
  if (slidesChanged == false) {
    showSlides((slideIndex += 1));
  }
}

function plusSlides(n) {
  showSlides((slideIndex += n));
  slidesChanged = true;
}

function currentSlide(n) {
  showSlides((slideIndex = n));
  slidesChanged = true;
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var heroresize = function () {
  var aspect = 1800 / 858,
    maxheight = 650,
    minheight = 200,
    width = $(".carousel").width();
  if (width < minheight * aspect) {
    $(".carousel img").css("right", (minheight * aspect - width) / 2 + "px");
  } else {
    $(".carousel img").css("right", "0px");
  }

  if (width > maxheight * aspect) {
    $(".carousel img").css("top", (maxheight - width / aspect) / 2 + "px");
  } else {
    $(".carousel img").css("top", "0px");
  }
};
$(function () {
  heroresize();
  // remove if you don't need dynamic resizing
  $(".carousel").on("resize", heroresize);
});

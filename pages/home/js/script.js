var slideIndex = 1;
var slidesChanged = false;

var sevenCounter = 0;

// showSlides(1);
console.log("Hello JS File");

function pageLoad() {
  showSlides((slideIndex = Math.floor(Math.random() * 7) + 1));

  document.getElementById("page-unloaded").style.display = "none";
  document.getElementById("page-content").style.display = "block";
  document.getElementById("page-footer").style.display = "block";

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
  6;
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

Mousetrap.bind("right", function (e) {
  // your function here...
  plusSlides(1);
});

Mousetrap.bind("left", function (e) {
  // your function here...
  plusSlides(-1);
});
Mousetrap.bind("space", function (e) {
  // your function here...
  plusSlides(0);
});

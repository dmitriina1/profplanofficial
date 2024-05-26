var modal = document.getElementById('myModal');
var img = document.getElementById('Img1');
var modalImg = document.getElementById("ImgCont");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
}

var modal1 = document.getElementById('myModal');
var img1 = document.getElementById('Img2');
var modalImg1 = document.getElementById("ImgCont");
var captionText1 = document.getElementById("caption");
img1.onclick = function () {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText1.innerHTML = this.alt;
}
var span1 = document.getElementsByClassName("close")[0];
span1.onclick = function () {
  modal.style.display = "none";
}

var modal2 = document.getElementById('myMod');
var img2 = document.getElementById('Img3');
var modalImg2 = document.getElementById("ImgCon");
var captionText2 = document.getElementById("capt");
img2.onclick = function () {
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}
var span2 = document.getElementsByClassName("clos")[0];
span2.onclick = function () {
  modal2.style.display = "none";
}

window.onkeydown = function( event ) {
  if ( event.keyCode == 27 ) {
    span.onclick();
    span1.onclick();
    span2.onclick();
  }
};




var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
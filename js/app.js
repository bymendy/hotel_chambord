var carousel = document.querySelector('.carousel');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

// initial index
var index = 0;

// function Pour la Rotation en automatique
function rotate() {
  var slides = carousel.querySelectorAll('li');
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;
  if (index > slides.length) {
    index = 1;
  }
  slides[index-1].style.display = "block";
  setTimeout(rotate, 5000);
}

// prev and next button click events
prevBtn.addEventListener('click', function() {
  clearTimeout(rotate);
  var slides = carousel.querySelectorAll('li');
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (index === 1) {
    index = slides.length;
  } else {
    index--;
  }
  slides[index-1].style.display = "block";
  setTimeout(rotate);
});
nextBtn.addEventListener('click', function() {
  clearTimeout(rotate);
  var slides = carousel.querySelectorAll('li');
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (index === slides.length) {
    index = 1;
  } else {
    index++;
  }
  slides[index-1].style.display = "block";
  setTimeout(rotate, 5000);
});

// start function rotation de mon carrousel
rotate();

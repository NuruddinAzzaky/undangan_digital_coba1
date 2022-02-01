var countDate= new Date('Mar 1, 2022 10:00:00').getTime();
function newYear() {
  var sekarang= new Date().getTime();
      selisih=countDate-sekarang;

      var second=1000;
      var minutes=second*60;
      var hours=minutes*60;
      var day=hours*24;

      var d=Math.floor(selisih/(day));
      var h=Math.floor((selisih%(day))/(hours));
      var m=Math.floor((selisih%(hours))/(minutes));
      var s=Math.floor((selisih%(minutes))/(second));

      document.getElementById('day').innerText=d;
      document.getElementById('hours').innerText=h;
      document.getElementById('minutes').innerText=m;
      document.getElementById('second').innerText=s;  
}
setInterval(function () {
  newYear();
  
},1000)

/*slideshow*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
  
}
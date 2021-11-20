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
catArray=[
    "Есть мнение, что кошки и дрессировка понятия несовместимые. Ничего подобного, мой кот выдрессировал меня за пару дней",
    "Чужая душа – потемки, ну а кошачья – тем более. ",
    "Коты – это ценнейший ресурс. Они уют вырабатывают. ",
    "Хочу быть кошкой! Толстеешь — все радуются, жрешь — все радуются, спишь — все радуются. ",
    "Я изучил многих философов и многих кошек. Мудрость кошек неизмеримо выше. ",
    "Человек культурен настолько, насколько он способен понять кошку. ",
    "Детство — это когда твой кот старше тебя. "
]
catIndex = 0;
console.log(catArray[0]);

function showQuotes(){
    p = document.getElementById("cat-say");
    let i=Math.floor(Math.random()*7);
    console.log(i);
    p.innerHTML= catArray[i];
  }
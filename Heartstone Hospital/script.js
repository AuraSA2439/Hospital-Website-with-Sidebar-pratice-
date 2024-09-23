// berfungsi sebagai rule pada button-button yang ada dalam sidemenu
$(".menu > ul > li").click(function (e){
  // menghilangkan state aktif ("active" class) dengan mengklik pada state yang sudah aktif
  $(this).siblings().removeClass("active");
  // mengubah state ke aktif jika di klik (sekali)
  $(this).toggleClass("active");
  // jika ada submenu, maka akan langsung dibuka
  $(this).find("ul").slideToggle();
  // menutup sidemenu lain jika ada satu sidemenu yang baru terbuka
  $(this).siblings().find("ul").slideUp();
  // menghilangkan state aktif pada semua item submenu
  $(this).siblings().find("ul").find("li").removeClass("active");
})

// fungsi untuk interaktif button sidemenu
$(".popup-btn").click(function (){
  $(".sidemenu").toggleClass("active");
})


// inisialisasi index slide
let slideIndex = 1;
showSlides(slideIndex);

// interaktif thumbnail number
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// untuk fungsi rotasi/slide image
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
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
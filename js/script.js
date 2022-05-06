const bar=document.querySelector(".bar");
const navbar=document.querySelector(".navbar");
const close=document.querySelector("#close");
const searchicon=document.querySelector("#searchicon");
const search=document.querySelector(".search");
const box=document.querySelectorAll(".box");
bar.addEventListener('click',() => { 
    bar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
 close.addEventListener('click',()=>{
   close.classList.remove('fa-times');
   document.querySelector(".search").style.display="none";

});
searchicon.addEventListener('click',()=>{
  document.querySelector(".search").style.display="flex";
  close.classList.add('fa-times');
});
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".containe-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints:{
    0:{
      slidesPerView:1,
    },
    640:{
      slidesPerView:2,
    },  
     768:{
      slidesPerView:2,
    },  
    1024:{
     slidesPerView:3,
   },
  },
});



document.querySelectorAll(".box .fa-heart").forEach(item =>{
  item.addEventListener('click',()=>{
     item.style.color="#FF7878";
  })
})


// ANIMATION START
new WOW().init();
// ANIMATION END

// LOADER WEB START

// function loader(){
//   document.querySelector('.loader-container').classList.add('fade-out');
// }

// function fadeOut(){
//   setInterval(loader, 3500);
// }

// window.onload = fadeOut;

// LOADER WEB END

// BACK TOP START
$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop()){
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();
    }
  });
  $("#back-top").click(function(){
    $('html, body').animate({
      scrollTop: 0
    }, 1);
  });
});

// autoplay: {
//   delay: 5200,
//   disableOnInteraction: false,
// },

var swiper = new Swiper(".glide__slides", {
  spaceBetween: 30,
  centeredSlides: true,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

// DESTINATION START
var $$ = document.querySelector.bind(document);
var $$$ = document.querySelectorAll.bind(document);

var tabs = $$$(".tab-list button");
var tabContents = $$$('.desti-contents > .desti-content');
var  tabImages = $$$('.desti-images > .desti-image');

tabs.forEach((tab, index)=>{
  var tabContent = tabContents[index]
  var tabImage = tabImages[index]

  tab.onclick = function(){
    $$('.tab-list > button.active').classList.remove('active');
    $$('.desti-contents > .desti-content.active').classList.remove('active');
    $$('.desti-images > .desti-image.active').classList.remove('active');

    this.classList.add('active');
    tabContent.classList.add('active');
    tabImage.classList.add('active');
  }
});
// DESTINATION END
const $$$$ = document.querySelector.bind(document);
const $$$$$ = document.querySelectorAll.bind(document);

const techs = $$$$$('.control-slider button');
const techContents = $$$$$('.technology-body');

 techs.forEach((tech, index)=> {
  const techContent = techContents[index]

  tech.onclick = function() {
    $$$$('.control-slider > button.active').classList.remove('active');
    $$$$('.technology-body.active').classList.remove('active');

    this.classList.add('active');
    techContent.classList.add('active');
  }
 });


let navigations = document.getElementById("navigation");
let showMenu = document.getElementById("menu-bar");
let hideMenu = document.getElementById("close-bar");

showMenu.onclick = function() {
  navigations.style.display = "block";
}
hideMenu.onclick = function() {
  navigations.style.display = "none";
}



































// Ch???n Ctrl+U
document.onkeydown = function(e) {
  if (e.ctrlKey && 
      (e.keyCode === 67 || 
       e.keyCode === 86 || 
       e.keyCode === 85 || 
       e.keyCode === 117)) {
      alert('N??y anh b???n!\nAnh mu???n xem code th?? h??y cmt d?????i b??nh lu???n c???a b??i vi???t c???a t??i nh??. C???m ??n ???? xem');
      return false;
  } else {
      return true;
  }
};
// Ch???n chu???t ph???i
// document.addEventListener('contextmenu', event => event.preventDefault());
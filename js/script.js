//a tag 이벤트 방지
const tagA = document.querySelectorAll('a[href="#"]');
for (let i=0; i < tagA.length; i++) {
    tagA[i].onclick = (e) => {
        e.preventDefault();
    }
}

//  모바일 메뉴 구현
let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.gnb');
let mainMenu = document.querySelectorAll('.main_menu>a');
let mainMenus = document.querySelectorAll('.main_menu');

toggle.onclick = function(){
  menu.classList.toggle('on');
}

for (let i=0; i < mainMenu.length; i++){
  mainMenu[i].onclick = () => {
    mainMenus[i].classList.toggle('on');
  }
}

window.onresize = function(){
  if(window.innerWidth >= 678) {
    menu.classList.remove('on');
    for (let i=0; i < mainMenu.length; i++){
        mainMenu[i].classList.remove('on');
        mainMenus[i].classList.remove('on');
       }
  }}

// 슬라이더 플러그인  
$(function(){
      var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });

    // 검색 클릭
    $('.top_sub li a').eq(0).click(function(){
    $('.search').toggleClass('on');
  })
});
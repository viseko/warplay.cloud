// ** ИМПОРТ МОДУЛЕЙ;
import {isWebp} from "./modules/functions.js"; // - Коллекция фунций
import {adaptiveMove} from "./modules/adaptive-move.js"; // - Адаптивный перенос
// import {loadYandexMap} from "./modules/yandex-map.js"; // - Яндекс карты

// ** ЗАПУСК ОСНОВНЫХ ФУНКЦИЙ
isWebp();
adaptiveMove(); // - адаптивный перенос элементов

// ** СОСТОЯНИЯ СТРАНИЦЫ
let isMenuOpened = false;

// ** МОБИЛЬНОЕ МЕНЮ
// const menuBtn = document.querySelector("#js-menu-btn");
// const menuCloseBtn = document.querySelector("#js-menu-close");

// function closeMenu() {
//   document.documentElement.classList.remove("_menu-open");
//   menuBtn.focus();
//   isMenuOpened = false;
// }

// function openMenu() {
//   document.documentElement.classList.add("_menu-open");
//   menuCloseBtn.focus();
//   isMenuOpened = true;
// }

// menuBtn.addEventListener("click", openMenu);
// menuCloseBtn.addEventListener("click", closeMenu);

// ** ОВЕРЛЕЙ
// const overlay = document.querySelector("#js-page-overlay");
// overlay.onclick = () => {
//   if (isMenuOpened) closeMenu();
// };

// ** ОСТАЛЬНЫЕ СКРИПТЫ
// Промо-слайдер
if (Swiper) {
  new Swiper(".js-promo-slider", {
    effect: "fade",
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 5000
    }
  })
}

// Фиксация хедера при прокрутке
document.addEventListener("scroll", () => {
  const header = document.querySelector(".js-page-header");
  const firstSection = document.querySelector(".js-first-section");

  const firstSectionHeight = firstSection.offsetHeight;

  if (window.scrollY > firstSectionHeight) {
    header.classList.add("page-header--fixed");
  } else {
    header.classList.remove("page-header--fixed");
  }
})

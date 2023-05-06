const iconMenu = document.querySelector(".icon_menu");
const overflow = document.querySelector(".overflow");
const menuMobile = document.querySelector(".menu_mobile");
const btnCloseMenu = document.querySelector(".btn_close_menu");

iconMenu.addEventListener("click", () => {
  overflow.classList.toggle("active");
  menuMobile.classList.toggle("active");
});

btnCloseMenu.addEventListener("click", () => {
  overflow.classList.remove("active");
  menuMobile.classList.remove("active");
});

// slider
$(".owl-carousel").owlCarousel({
  loop: true,
  Infinity: true,
  margin: 20,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 4,
      nav: true,
      loop: false,
    },
  },
});

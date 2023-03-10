function myFunction(x) {
  x.classList.toggle("change");
}
var swiper = new Swiper(".GalaxyWatch", {
  loop: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
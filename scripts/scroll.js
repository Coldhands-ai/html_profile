const scroll = document.querySelector(".achievements-scroll");

scroll.addEventListener("wheel", (e) => {
  e.preventDefault();
  scroll.scrollLeft += e.deltaY;
});

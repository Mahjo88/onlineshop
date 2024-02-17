/* Start NavBar */
let openIcon = document.getElementById("open");
let nav = document.querySelector("nav");
let opations = document.querySelectorAll(".header .container ul li a");

/* Event 1 */
openIcon.addEventListener("click", () => {
  openIcon.classList.toggle("fa-times");
  nav.classList.toggle("show");
});

/* Event 2 */
opations.forEach((opation) => {
  opation.addEventListener("click", () => {
     opations.forEach((opation) => {
       opation.classList.remove("selected");
     });
     opation.classList.add("selected");
     
     openIcon.classList.toggle("fa-times");
  nav.classList.toggle("show");
  });
});
/* End NavBar */

/* Start Header */
let header = document.querySelector(".header");

window.onscroll = function () {
  if(scrollY >= 300) {
    header.classList.add("show");
  }
  else {
    header.classList.remove("show");
  }
}
/* End Header */

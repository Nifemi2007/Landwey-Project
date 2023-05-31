"use strict";

// const anchor = document.querySelectorAll("a");
// const tag = document.querySelector(".tag");
// const overlay = document.querySelector(".overlay");
// const cancelbtn = document.querySelector("i");x
const section = document.querySelector("section");
const img = document.querySelector(".img1");
const text = document.querySelector(".text");
const icon = document.querySelector(".icon");

// const openTag = function () {
//   tag.classList.toggle("hidden");
//   overlay.classList.toggle("hidden");
// };

// const closeTag = function () {
//   tag.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// for (let i = 0; i < anchor.length; i++) {
//   anchor[i].addEventListener("click", openTag);
// }

// overlay.addEventListener("click", closeTag);

// cancelbtn.addEventListener("click", closeTag);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape") {
//     closeTag();
//   }
// });

// section.addEventListener("mouseover", function () {  });

window.onload = function () {
  section.style.opacity = 1;
  // img.style.transition = "transform 1s";
  // img.style.transform = "rotate(0deg)";
  // text.style.transition = "transform 1s";
  // text.style.transform = "rotate(0deg)";
};

document.addEventListener("scroll", function () {
  icon.style.gap = "50px";
  icon.style.transform = "scale(1)";
});
// sect.addEventListener("onload", function () {});

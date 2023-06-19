"use strict";

const section = document.querySelector("section");
const img = document.querySelector(".img1");
const text = document.querySelector(".text");
const icon = document.querySelector(".icon");
const btn = document.querySelector('.btn')
const button = document.querySelector('.image') 

window.onload = function () {
  section.style.opacity = 1;
};

document.addEventListener("scroll", function () {
  icon.style.gap = "50px";
  icon.style.transform = "scale(1)";
});

function scroll () {
  
    imgContainer.style.scrollBehavior = "smooth";
    imgContainer.scrollLeft += 600;
}

const more = document.querySelector(".more");
const imgContainer = document.querySelector(".img-Residence");
console.log(imgContainer);
more.addEventListener("click", scroll);

btn.addEventListener('click', function() {
  button.style.scrollLeft += 800
} )
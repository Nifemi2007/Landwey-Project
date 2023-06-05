'use strict'

const more = document.querySelector('.more')
const imgContainer = document.querySelector('.img-Residence')
console.log(imgContainer)
more.addEventListener('click', function () {
    imgContainer.style.scrollBehavior = 'smooth'
    imgContainer.scrollLeft += 600

})
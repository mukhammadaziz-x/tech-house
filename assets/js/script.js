// Script for Product Detail image switch
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

if (smallimg[0]) {
    smallimg[0].onclick = function() {
        MainImg.src = smallimg[0].src;
    }
}
if (smallimg[1]) {
    smallimg[1].onclick = function() {
        MainImg.src = smallimg[1].src;
    }
}
if (smallimg[2]) {
    smallimg[2].onclick = function() {
        MainImg.src = smallimg[2].src;
    }
}
if (smallimg[3]) {
    smallimg[3].onclick = function() {
        MainImg.src = smallimg[3].src;
    }
}

// Simple navbar responsive toggle (if needed in future)
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
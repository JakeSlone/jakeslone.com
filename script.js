// Navbar
const toggler = document.querySelector('.menu__toggler');
const menu = document.querySelector('.menu');

toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
    menu.classList.toggle('active');
});

$(document).ready(function() {
    $("#navHome").click(function() {
        $("html, body").animate({
            scrollTop: $("#home").offset().top
        }, 2000);
    });
});

$(document).ready(function () {
    $("#navProjects").click(function () {
        $("html, body").animate({
            scrollTop: $("#projects").offset().top
        }, 2000);
    });
});

$(document).ready(function () {
    $("#navContact").click(function () {
        $("html, body").animate({
            scrollTop: $("#contact").offset().top
        }, 2000);
    });
});
// Down Arrow 1
$(document).ready(function () {
    $("#scrollDown1").click(function () {
        $('html, body').animate({
            scrollTop: $("#down1").offset().top
        }, 2000);
    });
});
// About Image
let bioImg = document.getElementById('bioImg');
let img = 0;
let imgList = [
    "./img/code1.jpg",
    "./img/code2.png",
    "./img/code3.jpg"
]
setInterval(function() {
    img += 1;
    if (img > imgList.length - 1) {
        img = 0;
    }
    bioImg.style.backgroundImage = "url('" + imgList[img] + "')";
},3000);
// Down Arrow 2
$(document).ready(function () {
    $("#scrollDown2").click(function () {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 2000);
    });
});
// Down Arrow 3
$(document).ready(function () {
    $("#scrollDown3").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 2000);
    });
});
// Up Arrow
$(document).ready(function () {
    $("#scrollUp").click(function () {
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 2000);
    });
});
// Project gifs
function ecommerceHover() {
    $("#ecommerce").attr('src', 'img/drip.gif');
}

function offHover() {
    $("#menuImg").attr('src', 'images/about.png');
}


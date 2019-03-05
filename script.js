// Navbar
const toggler = document.querySelector('.menu__toggler');
const menu = document.querySelector('.menu');

toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
    menu.classList.toggle('active');
});
// Down Arrow 1
$('scrollDown1').click(function() {
    var offset = 20;

    $('html, body').animate({
        scrollTop: $('#down1').offset().top + offset
    }, 1000);
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
    if (img > bioImg.length - 1) {
        img = 0;
    }
    bioImg.style.backgroundImage = "url('" + [img] + "')";
},1000);


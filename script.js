// Navbar
const toggler = document.querySelector('.menu__toggler');
const menu = document.querySelector('.menu');

toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
    menu.classList.toggle('active');
});
// Down Arrow
$('scrollDown1').click(function() {
    var offset = 20;

    $('html, body').animate({
        scrollTop: $('#down1').offset().top + offset
    }, 1000);
});

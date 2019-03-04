// Navbar
const toggler = document.querySelector('.menu__toggler');
const menu = document.querySelector('.menu');

toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
    menu.classList.toggle('active');
});
// Down Arrow
$('scrollDown').click(function() {
    var offset = 20;

    $('html, body').animate({
        scrollTop: $('#down').offset().top + offset
    }, 1000);
});
$(document).ready(function() {

    $(".button-collapse").sideNav({
        menuWidth: 240,
        edge: 'left',
        closeOnClick: true
    });
    var height = $('.table-of-contents').offset().top + $('nav').height();
    $('.table-of-contents').offset().top = height;
    $('.scrollspy').scrollSpy();
});

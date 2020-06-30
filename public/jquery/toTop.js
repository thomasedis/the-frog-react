$(document).ready(function () {
    $('.footer-end__toTop').click(function (e) { 
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0}, 600);
    });
    $('.header__logo-imgBorder').click(function (e) { 
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0}, 600);
    });

});
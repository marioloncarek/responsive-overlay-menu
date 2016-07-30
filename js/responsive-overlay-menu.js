(function ($) {

    $(".menu-btn a").click(function () {
        event.preventDefault();
        $(".overlay").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });

    $('.overlay').on('click', function () {
        $(".overlay").fadeToggle(200);
        $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close');
    });

    $('.menu a').on('click', function () {
        event.preventDefault();
        $(".overlay").fadeToggle(200);
        $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close');
    });

}(jQuery));

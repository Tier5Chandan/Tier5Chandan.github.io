(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
})(jQuery);


$("#programFilter .nav-item .nav-link").click((e) => {
    console.log(e.target.id);
    if (e.target.id!=="all_class") {
        $("#class-all table td").css("background","");
        $("." + e.target.id).css("background", "var(--primary)");
        $("."+ e.target.id).css("color","#fff");
    }
    if (e.target.id=="all_class") {
        $("#class-all table td").css("background", "");
        $("#class-all table td").css("color","#343a40");
    }
});


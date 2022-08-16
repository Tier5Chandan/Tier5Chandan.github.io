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
            document.getElementById("navContainer").style.position = "fixed";
            $('.back-to-top').fadeIn('slow');
        } else {0
            $('.back-to-top').fadeOut('slow');
            document.getElementById("navContainer").style.position = "relative";
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
})(jQuery);


$("#programFilter .nav-item .nav-link").click((e) => {
    if (e.target.id !== "all_class") {
        $("#class-all td a").removeClass("active");
        $("#class-all table td").css("background", "");
        $("#class-all table td").css("transform", "");
        $("." + e.target.id).css("background", "var(--primary)");
        $("." + e.target.id + " a").addClass("active");
        $("." + e.target.id).css("transform", "scale(1.1)");
    }
    if (e.target.id == "all_class") {
        $("#class-all td a").removeClass("active");
        $("#class-all table td").css("background", "");
        $("#class-all table td").css("color", "#343a40");
        $("#class-all table td").css("transform", "");
    }
});


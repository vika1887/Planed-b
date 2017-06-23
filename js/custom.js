

(function ($) {

    /* bootstrap menu hover */
    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        });


    $(window).scroll(function(){
        var t_scroll = $(window).scrollTop();
        var t_sticky = $('#navbar');

        if (t_scroll >= 100) t_sticky.addClass('navbar-transparent');
        else t_sticky.removeClass('navbar-transparent');
    });


    $(document).ready(function() {
        $('#navbar').onePageNav();
    });


})(jQuery);

$(function() {

    $("#js-register-form").validate({

        rules: {
            form_name: {
                required: true
            },
            form_email: {
                required: true,
                email: true
            },
            form_textarea: "required"
        },
        messages: {
            form_name: {
                required: "Name Required field"
            },
            form_email: {
                required: "Field E-mail required for filling",
                email: "Please enter a valid e-mail"
            }

        },
        focusCleanup: true,
        focusInvalid: false,
        invalidHandler: function(event, validator) {
            $(".js-form-message").text("Please correct all errors.");
        },
        onkeyup: function(element) {
            $(".js-form-message").text("");
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "form_name") error.insertAfter($("input[name=form_name]"));
            if (element.attr("name") == "form_email") error.insertAfter($("input[name=form_email]"));
            if (element.attr("name") == "form_textarea") error.insertAfter($("textarea[name=form_textarea]"));

        },
        errorClass: "form-input_error, form-textarea_error",
        validClass: "form-input_success, form-textarea_success"
    });

});


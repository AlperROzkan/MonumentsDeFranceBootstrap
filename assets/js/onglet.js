$( document ).ready(function() {

    $('.slider_one_big_picture').EasySlides({
        'autoplay': true,
        'stepbystep': false,
        'show': 5,
        'loop': false
    })
    $('.slider_one_big_2').EasySlides({
        'autoplay': false,
        'stepbystep': true,
        'show': 5,
        'loop': false
    })
    $('.slider_circle_10').EasySlides({
        'autoplay': true,
        'show': 13
    })
    $('.slider_four_in_line').EasySlides({
        'autoplay': true,
        'show': 9
    })
    $('.slider_clock').EasySlides({
        'autoplay': true,
        'stepbystep': false,
        'show': 15
    });

    $( "#profile-tab" ).trigger( "click" );
    setTimeout(()=> {
        $( "#home-tab" ).trigger( "click" );
    }, 150);

});


$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
        selectedClass = $(this).attr("data-rel");
        $("#gallery").fadeTo(100, 0.1);
        $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
        setTimeout(function() {
            $("."+selectedClass).fadeIn().addClass('animation');
            $("#gallery").fadeTo(300, 1);
        }, 300);
    });
});

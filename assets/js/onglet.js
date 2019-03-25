$( document ).ready(function() {

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

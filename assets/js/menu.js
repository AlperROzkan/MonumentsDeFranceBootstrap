

$(function(){
    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        if(winTop >= 30){
            $(".bg-light").addClass( "menuVolant" )

        } else {
            $(".bg-light").removeClass( "menuVolant" )
        }




    });


});
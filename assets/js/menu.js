

$(function(){
    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        if(winTop >= 30){
            $(".bg-light").addClass( "menuVolant" )
            console.log("test");

        } else {
            $(".bg-light").removeClass( "menuVolant" )
            console.log("tset");

        }




    });


});
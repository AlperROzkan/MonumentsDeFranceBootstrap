$( document ).ready(function() {

    $( "#profile-tab" ).trigger( "click" );
    setTimeout(()=> {
        $( "#home-tab" ).trigger( "click" );
    }, 150);
});
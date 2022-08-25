/*=================================================================
                       Services
 ==================================================================*/     
//import .js.WOW  

$( function() {
// Animate on scroll
new WOW().init();
}); 

    // alert("i am insan");
/*===================================================================
                     work
======================================================================*/

$(function() {
    $("#work").magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{   enabled:true
    }
});
});


/*===================================================================
                     team
======================================================================*/

$(function() {
    $("#team-members").owlCarousel({
        items:3,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause :true
    });
  });


 /*=======================================================================
                  Testimonials
=========================================================================*/


$(function() {

    $("#customers-testimonials").owlCarousel({
        autoplay:true,
        smartSpeed:700,
        loop:true,
        items:1,
        autoplayHoverPause:true
    });
  });


 /*=======================================================================
                  stats
=========================================================================*/


$(function(){
    $('.counter') .counterUp({
       
        delay: 10,
        time: 2000
    });
});


 /*=======================================================================
                  clients
=========================================================================*/

$(function() {

    $("#clients-list").owl-carousel({
        autoplay:true,
        smartSpeed:700,
        loop:true,
        items:3,
        autoplayHoverPause:true
    });
  });


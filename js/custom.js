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

$(function(){
    $("#team-members").owlCarousel({
        item:3,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause :true,
    });
  });

 /*=======================================================================
                  Testimonials
=========================================================================*/

$(function(){
    $("#customers-testimonials").owlCarousel({
        item:1,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause :true
    });
  });



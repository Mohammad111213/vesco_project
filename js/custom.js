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
// anonmous functions
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

    $("#clients-list").owlCarousel({
        autoplay:true,
        smartSpeed:300,
        loop:true,
        items:6,
        autoplayHoverPause:true
    });
  });

   /*=======================================================================
                  navigation
=========================================================================*/

  $(function(){

     $(window).scroll(function(){
 
        if($(this).scrollTop()  <  50 )   {
            //hide nav
            $("nav").removeclass("vesco-top-nav");
            $("#back-to-top").fadeout();

        }
        else {
            //show nav
            $("nav").addclass("vesco-top-nav");
            $("#back-to-top").fadein();
       } 
  });
});
 /*=======================================================================
                  smooth-scroll
=========================================================================*/
$(function(){

$("a.smooth-scroll").click(function(event){
    event.preventDefualt();
    var section =$(this).attr("href");
    $('html,body').animate({
      scrollTop: $(section).offset().top - 64
   },1250, "easeInOutExpo");

});
});
var num1=2; var num2=3; var sum=num1=num2;console.log(sum);

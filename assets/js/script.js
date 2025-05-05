(function($) {
	'use strict';
	
	$('.banner_slide').owlCarousel({
		loop:true,
		nav:true,
		animateOut: 'slideOutLeft',
		animateIn: 'slideInLeft',
		slideSpeed : 300,
		autoplay:true,
		autoplayTimeout:5000,
		items : 1,
		smartSpeed:450
	});
		
		
		
	$('.client-slider').owlCarousel({
		loop:true,
		nav:true,	
		slideSpeed : 300,
		autoplay:true,
		autoplayTimeout:5000,
		items : 6,
		smartSpeed:450
	});
		
		
		
		
		
	/*PRELOADER JS*/
$(window).on('load', function() { 
	$('.status').fadeOut();
	$('.preloader').delay(350).fadeOut('slow'); 
}); 
/*END PRELOADER JS*/  
	
	$('#galler_pg .blocks-gallery-grid > li a').attr('data-fancybox', 'gallery');
	
	
	
	
	

var mouseX = 0;
var mouseY = 0;
var popupCounter = 0;

document.addEventListener("mousemove", function(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
  //document.getElementById("coordinates").innerHTML = "<br />X: " + e.clientX + "px<br />Y: " + e.clientY + "px";
});

$(document).mouseleave(function () {
  if (mouseY < 100) {
    if (popupCounter < 1) {
      $('.exitpop').trigger('click', function(){
          $('.popup-two').addClass('active');
          $('body').addClass('o-hidden');

      });
    }
    popupCounter ++;
  }
});

$(document).ready(function() {
    switchDiv();

    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");

    $('[href="#"]').attr("href", "javascript:;");

    // $('.menu-Bar,.expand').click(function() {
    //     $(this).toggleClass('open');
    //     $('.menuWrap').toggleClass('open');
    //     $('body').toggleClass('ovr-hiddn');
    //     $('.expandable').toggleClass('open');
        
    // });

       $('.discbtn').on('click', function() {
           $(this).toggleClass('active');
           $('.disclaimer p').slideToggle();
       });

    $('[data-targetit]').on('click', function(e) {
      $(this).addClass('current');
      $(this).siblings().removeClass('current');
      var target = $(this).data('targetit');
      $('.' + target).siblings('[class^="box-"]').hide();
      $('.' + target).fadeIn();
    });

    $('.colasebar li span').click(function(){
        $(this).parent('li').find('span').addClass('open');
        $(this).parent('li').addClass('active');
        $(this).parent('li').siblings().find('span').removeClass('open');
        $(this).parent('li').siblings().removeClass('active');
        $(this).parent('li').find('.expandable').slideDown();
        $(this).parent('li').siblings().find('.expandable').slideUp();
    });

    $('.loginUp').click(function(){
        $('#popuprequest').fadeIn();
        $('.overlay').fadeIn();
    });

    $('.popbtn').click(function(){
        $('#popuppack').fadeIn();
        $('.overlay').fadeIn();
    });

     $('.closeico,.overlay').click(function(){
        $('#popuprequest').fadeOut();
        $('.overlay').fadeOut();
    });

    $('.closeico1,.overlay').click(function(){
        $('#popuppack').fadeOut();
        $('.overlay').fadeOut();
    });

$('.popup-one .popup-btn1').click(function(){
    $('.fancybox-container').remove();
    $('body').removeClass('fancybox-active compensate-for-scrollbar');
});

$('.discountyes').click(function(){
    $('.fancybox-container').remove();
    $('body').removeClass('fancybox-active compensate-for-scrollbar');
});

$('.discountno').click(function(){
    $('.fancybox-container').remove();
    $('body').removeClass('fancybox-active compensate-for-scrollbar');
});

    (function($){
      $(window).on("load",function(){
        $("ul.pkgDtl").mCustomScrollbar();
      });
    })(jQuery);


$('.pkgwrp .pack-ordernow').on('click', function() {
    $('.popup-layout1').fadeIn();
    var packtitle = $(this).closest('.col-md-4').find(".pkgprice h2").html();
    var packprice = $(this).closest('.col-md-4').find(".pkgprice h4").html();
    var thisrel = $(this).attr('rel');
    $('#popupform input#popuppackage').val(thisrel);
    $(".popup-header h3").append(packtitle);
    $(".popup-header p").append("In Just <span>" + packprice + "</span>");
});


$('.loginUp').on('click', function() {
        var leadsource = $(this).attr('rel');
        if (leadsource == 'Website Design') {
            $('.popup-layout4 .text-right').before('<input type="hidden" name="leadsource" value="Website Design">');
        }
        $('.popup-layout4').fadeIn();
        $(".popup-header h3").text("Get Digital Solutions");
        $(".popup-header p").text("That Guarantee Results");
    });

$('.popup-close').on('click', function() {
    $('.popup-layout1').fadeOut();
    $(".popup-header h3").html("");
    $(".popup-header p").html("");
});

$('.popup-close').on('click', function() {
    $('.popup-layout').fadeOut();
    $(".popup-header h3").html("");
    $(".popup-header p").html("");
});

$('.popup-one .popup-btn1').click(function(){
    $('.fancybox-container').hide();
    $('body').removeClass('fancybox-active');
});

    // $('.mainBanner').slick({
    //     slidesToShow:1,
    //     infinite:true,
    //     slidesToScrol1: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000, 
    //     speed:1000,
    //     arrows:false,
    //     easing:'linear',
    //     pauseOnHover:true,
    //     swipeToSlide:true,
    //     fade: true,
    // });



    



     $('[data-targetit]').on('click', function(e) {
      $(this).addClass('current');
      $(this).siblings().removeClass('current');
      var target = $(this).data('targetit');
      $('.' + target).siblings('[class^="box-"]').hide();
      $('.' + target).fadeIn();
    });

    // $('.expand').click(function(){
    //     target_num = $(this).attr('id').split('-')[1];
    //     content_id = '#expandable-'.concat(target_num);
    //     $(content_id).slideToggle('fast');
    // });

    
  
});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $(".fixed").addClass("sticky");
    } else {
        $(".fixed").removeClass("sticky");
    }

    
});


     

$(window).on('load', function() {
    var currentUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $('ul.menu li a').each(function() {
        var hrefVal = $(this).attr('href');
        if (hrefVal == currentUrl) {
            $(this).removeClass('active');
            $(this).closest('li').addClass('active')
            $('ul.menu li.first').removeClass('active');
        }
    });

});

    (function($){
      $(window).on("load",function(){
        $("ul.pkgserv").mCustomScrollbar();
      });
    })(jQuery);


  var width = $(window).width();

//Popup on leave  
function leaveFromTop(e){
 // if(width >= 768){
    if( mouseY > 0 ) {// less than 60px is close enough to the top

    if ($.cookie('orform') == null)
      {
           //$(".popUpBtn").trigger('click');

        $('.cookietbtn').trigger('click', function(){
          $('.popup-one').addClass('active');
          $('body').addClass('o-hidden');
          // $('.overlay-bg').fadeIn(500);
          // $('.close-btn').on('click', function(){
          //   $('.popupform-main').removeClass('active');
          //         $('body').removeClass('o-hidden');
          //   $('.overlay-bg').fadeOut(500);
          // });
          // $('.overlay-bg').click(function() {
          //   $('popupform-main').removeClass('active');
          //         $('body').removeClass('o-hidden');
          //   $('.overlay-bg').fadeOut(500);
        
          //  });
      });
        
          cokie();
      }
    }
   // }
 }
 //create cookie on form submission
function cokie(){
    $.cookie("orform", 1,{
      expires : 1
      });
    var cookieValue = $.cookie("orform");
}
  setTimeout(function() {
    leaveFromTop();
  
},9000);
//Popup on leave end 



/* RESPONSIVE JS */
if ($(window).width() < 824) {


}


function switchDiv() {
    var $window = $(window).outerWidth();
    if ($window <= 768) {
        $('.topAppendTxt').each(function() {
            var getdtd = $(this).find('.cloneDiv').clone(true);
            $(this).find('.cloneDiv').remove();
            $(this).append(getdtd);
        });
    };
}
	
	
	
	
	
	
	
	
		
})(jQuery);
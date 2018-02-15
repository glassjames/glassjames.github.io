$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['home', 'about', 'work', 'resume', 'contact'],
    menu: '#menu',
    scrollBar:true,
    css3: true,
		autoScrolling: true,
    afterRender: function(){
      $('.owl-carousel').owlCarousel({
        /*stagePadding: 75,*/
        center: true,
        loop: true,
        nav: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            480:{
                items:1
            },
            1000:{
                items:5
            }
        }
      })
	  }
  });
  $(".hvr-pop").hover(function(){
        var num = Math.floor(Math.random() * 4);
        switch(num) {
          case 0:
            var color = "#33C55A";
          break;
          case 1:
            var color = "#1476E3";
          break;
          case 2:
            var color = "#DD155D";
          break;
          case 3:
            var color = "#F4D46C";
          break;
        }
        $(this).css("color", color);
        }, function(){
        $(this).css("color", "#FFFFFF");
  });
  $("#about-link").hover(function(){
        $(this).css("color", "#FFFFFF");
        }, function(){
        $(this).css("color", "#33C55A");
  });
  $("#work-link").hover(function(){
        $(this).css("color", "#FFFFFF");
        }, function(){
        $(this).css("color", "#1476E3");
  });
  $("#resume-link").hover(function(){
        $(this).css("color", "#FFFFFF");
        }, function(){
        $(this).css("color", "#DD155D");
  });
  $("#contact-link").hover(function(){
        $(this).css("color", "#FFFFFF");
        }, function(){
        $(this).css("color", "#F4D46C");
  });
  $.fn.fullpage.reBuild();
  $( window ).on( "orientationchange", function( event ) {
    if (window.matchMedia("(orientation: portrait)").matches) {
      //alert("Device is in portrait mode")
      $.fn.fullpage.setAutoScrolling(true);
    }
    if (window.matchMedia("(orientation: landscape)").matches) {
      //alert("Device is in landscape mode")
      $.fn.fullpage.setAutoScrolling(false);
    }
  });
  $('input:checkbox').removeAttr('checked');
});


function toggleProjects() {
  if ($('.check').is(':checked')) {
    $('.item').css('background-color','#1476E3');
  }
  else {
    $('.item').css('background-color','#FFFFFF');
  }
}

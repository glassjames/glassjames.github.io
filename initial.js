$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['home', 'about', 'work', 'resume', 'contact'],
    menu: '#menu',
    scrollBar:true,
    css3: true,
		slidesNavigation: true,
		slidesToSections: true,
		responsiveWidth: 900,
		responsiveSlides: true,
		responsiveSlidesKey: 'YWx2YXJvdHJpZ28uY29tX3RoVWNtVnpjRzl1YzJsMlpWTnNhV1JsY3c9PUVZdg==',
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
			console.log("slideLoad--" + "anchorLink: " + anchorLink + " index: " + index + " slideAnchor: " + slideAnchor + " slideIndex: " + slideIndex);

		},
		onSlideLeave: function(anchorLink, index, slideIndex, direction){
			console.log("----------------");
			console.log("onSlideLeave--" + "anchorLink: " + anchorLink + " index: " + index + " slideIndex: " + slideIndex + " direction: " + direction);
		},
    afterRender: function(){
      $('.owl-carousel').owlCarousel({
        stagePadding: 75,
        loop:true,
        margin: 0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
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
});

function toggleProjects() {
  if ($('.check').is(':checked')) {
    $('.item').css('background-color','#FFFFFF');
  }
  else {
    $('.item').css('background-color','#1476E3');
  }
}

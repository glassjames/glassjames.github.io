$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['home', 'about', 'work', 'resume', 'contact']
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

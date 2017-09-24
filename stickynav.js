window.onload = function()
{
  var navbar = document.getElementById("navbar");
  var issticky = navbar.offsetTop;

  window.onscroll = function() {
    if (window.scrollY >= issticky) {
      navbar.classList.add("stickynav")
    }
    else {
      navbar.classList.remove("stickynav");
    }
  }
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var banner = document.getElementById("my_banner");

// Get the offset position of the navbar
var sticky = banner.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    banner.classList.add("sticky");
  } else {
    banner.classList.remove("sticky");
  }
}
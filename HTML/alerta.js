document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");

    overlay.style.display = "block";

    setTimeout(function() {
      popup.style.left = "0";
    }, 1000); 

    setTimeout(function() {
      popup.style.left = "-100%"; 
      overlay.style.display = "flex";
    }, 3000); 
  });
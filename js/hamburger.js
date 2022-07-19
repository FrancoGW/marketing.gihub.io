  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });
  document.getElementById("hamburger").addEventListener("click", menu);


  nav = document.getElementById("nav");
  
  icono = document.getElementById("hamburger");
  
  cabecera = document.getElementById("cabecera");
  
  
  function menu() {
    if (icono.classList.contains('opened')) {
      nav.style.left = "-100%";
      document.getElementById("hamburger").classList.remove("opened");
    } else {
      nav.style.left = "0px";
      // cabecera.style.background = "transparent";
      document.getElementById("hamburger").classList.add("opened");
    }
  }
  

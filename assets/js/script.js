var btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    var div = document.querySelector("#container");
    
  if(menuMobile.style.display === "none") {
        menuBar.style.display = "block";
    } else {
      menuBar.style.display = "none";
  }
    
});
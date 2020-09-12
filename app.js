function responsiveNav() {
  console.log("function call")
  var x = document.getElementsByClassName("main-tabs");
  if (x.className === "main-tabs") {
    console.log("add responsive")
    x.className += " responsive";
    x.style.display = "block";
  } else {
    x.className = "main-tabs";
    x.style.display = "none";
  }
}
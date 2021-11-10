document.getElementById("M").onmouseover = function() {mouseOver()};
document.getElementById("M").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("M").innerHTML = "{Michael Berliant}";
}

function mouseOut() {
  document.getElementById("M").innerHTML = "Michael Berliant";
}

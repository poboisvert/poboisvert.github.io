import focusManager from '../utils/focusManager.js';

var btn = document.querySelectorAll(".primary");
var modals = document.querySelectorAll(".modal");
var X = document.getElementsByClassName("button-round close");
var menu = document.getElementById("menu");

for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    var link = e.target.closest("a") || e.target;
    var href = link.getAttribute("href");

    if (href) {
      e.preventDefault();
      window.open(href, "_blank");
    }
  };
}

for (var i = 0; i < X.length; i++) {
  X[i].onclick = function () {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  };
}

document.addEventListener('DOMContentLoaded', function() {
  focusManager.initializeSkipLinks();
});

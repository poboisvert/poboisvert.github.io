// Select all elements with the "primary" class (typically modal-open buttons)
var btn = document.querySelectorAll(".primary");

// Select all modal elements
var modals = document.querySelectorAll(".modal");

// Select all modal close buttons by class name
var X = document.getElementsByClassName("button-round close");

// Select the navigation menu (not directly used below)
var menu = document.getElementById("menu");

// Attach click event handler to each primary button to open links in new tab
for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    // Find the closest anchor (<a>) element to get the href of the button/link
    var link = e.target.closest("a") || e.target;
    var href = link.getAttribute("href");

    // Open link in new tab
    if (href) {
      e.preventDefault();
      window.open(href, "_blank");
    }
  };
}

// Attach click event handler to each close button (the "X") to close all modals
for (var i = 0; i < X.length; i++) {
  X[i].onclick = function () {
    // Loop through all modals and hide them
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  };
}

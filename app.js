function toggleMenu() {
  // Select the menu
  let menu = document.getElementById("menu");

  // If the element has the 'hide' class, remove it, otherwise add it
  if (menu.className === "hide") {
    menu.className = "";
  } else {
    menu.className = "hide";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Select the burger icon
  let burger = document.querySelector(".burger");

  // Listen for Enter or Space keydown on the burger icon
  burger.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMenu();
    }
  });
});

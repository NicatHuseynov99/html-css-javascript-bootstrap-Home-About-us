function clickmenu() {
  var menu = document.getElementById("categories-menu");
  var icon = document.getElementById("icon-menu");
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  } else {
    menu.classList.add("active");
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  }
}
function clickmenu2() {
  var menu = document.getElementById("categories-menu2");
  var icon = document.getElementById("icon-menu2");
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  } else {
    menu.classList.add("active");
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  }
}
function openSidebar() {
  var openSidebar = document.getElementById("sidebar");
  openSidebar.classList.add("active");
}
function closeSidebar() {
  var openSidebar = document.getElementById("sidebar");
  openSidebar.classList.remove("active");
}
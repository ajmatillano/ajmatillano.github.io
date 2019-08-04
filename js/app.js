var iconmenu = document.getElementById("icon-menu");
var iconmenuLink = document.getElementById("icon-menu-link");
var sidemenu = document.getElementById("sidemenu");
var sideMenuDisplayed = 0;

iconmenu.addEventListener("mouseover", menuAnimExpand);
iconmenu.addEventListener("mouseout", menuAnimReverse);

iconmenuLink.addEventListener("click", menuToggle);

function menuToggle() {
  if (sideMenuDisplayed == 0) {
    sidemenu.classList.add("showMenu");
    sidemenu.classList.remove("hideMenu");
    menuAnim();
  } else {
    sidemenu.classList.remove("showMenu");
    sidemenu.classList.add("hideMenu");
    menuAnim();
  }
};

function menuAnimReverse(){
   if (sideMenuDisplayed == 0) {
      iconmenu.classList.add("menuAnimReverse");
      iconmenu.classList.remove("menuAnimExpand");
  }
}
function menuAnimExpand(){
    if (sideMenuDisplayed == 0) {
      iconmenu.classList.add("menuAnimExpand");
      iconmenu.classList.remove("menuAnimReverse");
    }
}
function menuAnim(){
  if (sideMenuDisplayed == 0) {
    iconmenu.classList.add("menuAnim");
    iconmenu.classList.remove("menuAnimExpand");
    iconmenu.classList.remove("menuAnimReverse");
    sideMenuDisplayed = 1;
    console.log(sideMenuDisplayed);
  } else {
    sidemenu.classList.remove("showMenu");
    sidemenu.classList.add("hideMenu");
    iconmenu.classList.remove("menuAnim");
    iconmenu.classList.remove("menuAnimExpand");
    iconmenu.classList.add("menuAnimReverse");
    sideMenuDisplayed = 0;
    console.log(sideMenuDisplayed);
  }
}

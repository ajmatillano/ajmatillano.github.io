var iconmenu = document.getElementById("icon-menu");
var iconmenuLink = document.getElementById("icon-menu-link");
var sidemenu = document.getElementById("sidemenu");
var displayValue = document.getElementById("sidemenu").style.display;
var sideMenuDisplayed = 0;

iconmenuLink.addEventListener("click", menuToggle);

function menuToggle() {
    sidemenu.style.opacity = "1";
};

//iconmenu.addEventListener("click", menuAnimReverse);
iconmenu.addEventListener("mouseover", menuAnimExpand);
iconmenu.addEventListener("mouseout", menuAnimReverse);

sidemenu.addEventListener("webkitTransitionEnd", menuAnim);
sidemenu.addEventListener("TransitionEnd", menuAnim);
sidemenu.addEventListener("oTransitionEnd", menuAnim);
sidemenu.addEventListener("transitionend", menuAnim);

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
  } else {
    iconmenu.classList.remove("menuAnim");
    iconmenu.classList.remove("menuAnimExpand");
    iconmenu.classList.add("menuAnimReverse");
    sideMenuDisplayed = 0;
  }
}

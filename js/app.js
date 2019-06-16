var iconmenu = document.getElementById("icon-menu");
var sidemenu = document.getElementById("sidemenu");
var displayValue = document.getElementById("sidemenu").style.display;
var sideMenuDisplayed = 0;

console.log(sideMenuDisplayed, "begin");

var menuToggle = function menuToggle() {
    sidemenu.style.opacity = "1";
};

//iconmenu.addEventListener("click", menuAnimReverse);
iconmenu.addEventListener("mouseover", menuAnimExpand);
iconmenu.addEventListener("mouseout", menuAnimReverse);
sidemenu.addEventListener("webkitTransitionEnd", menuAnim);
sidemenu.addEventListener("TransitionEnd", menuAnim);

function menuAnimReverse(){
   if (sideMenuDisplayed == 0) {
      iconmenu.classList.add("menuAnimReverse");
      iconmenu.classList.remove("menuAnimExpand");
      console.log(sideMenuDisplayed, "mouseout");
  }
}
function menuAnimExpand(){
    if (sideMenuDisplayed == 0) {
      iconmenu.classList.add("menuAnimExpand");
      iconmenu.classList.remove("menuAnimReverse");
      console.log(sideMenuDisplayed, "mouseover");
    }
}
function menuAnim(){
  if (sideMenuDisplayed == 0) {
    iconmenu.classList.add("menuAnim");
    iconmenu.classList.remove("menuAnimExpand");
    iconmenu.classList.remove("menuAnimReverse");
    sideMenuDisplayed = 1;
    console.log(sideMenuDisplayed, "transition end");
  } else {
    iconmenu.classList.remove("menuAnim");
    iconmenu.classList.remove("menuAnimExpand");
    iconmenu.classList.add("menuAnimReverse");
    sideMenuDisplayed = 0;
    console.log(sideMenuDisplayed, "transition end");
  }
}

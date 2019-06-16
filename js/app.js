var iconmenu = document.getElementById("icon-menu");
var sidemenu = document.getElementById("sidemenu");
var displayValue = document.getElementById("sidemenu").style.display;

var menuToggle = function menuToggle() {
    if (displayValue == "none") {
      sidemenu.style.display = "block";
      sidemenu.style.transition = "all .5s";
    //  iconmenu.classList.toggle("menuAnim");
    }
};

iconmenu.addEventListener("click", menuAnimReverse);
iconmenu.addEventListener("mouseover", menuAnimExpand);
iconmenu.addEventListener("mouseout", menuAnimReverse);
//sidemenu.addEventListener("webkitTransitionEnd", menuAnim);

function menuAnimReverse(){
      iconmenu.classList.add("menuAnimReverse");
      iconmenu.classList.remove("menuAnimExpand");
}
function menuAnimExpand(){
      iconmenu.classList.add("menuAnimExpand");
      iconmenu.classList.remove("menuAnimReverse");
}
// function menuAnim(){
//       iconmenu.classList.toggle("menuAnim");
//       iconmenu.classList.remove("menuAnimExpand");
//       iconmenu.classList.toggle("menuAnimReverse");
// }

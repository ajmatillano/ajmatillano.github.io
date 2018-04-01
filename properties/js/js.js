document.getElementById('dropdown-nav').addEventListener("click", showHideDropdown);
document.getElementById('navbar-menu').addEventListener("click", convertMenu);

var dropdownContainer = document.getElementById('dropdown-nav');
var navBarMenu = document.getElementById('navbar-menu');
var navBarContainer = document.getElementById('navbar-nav');
var dropdownList = document.getElementById('dropdownContent');

function showHideDropdown() {
    if (dropdownList.className === "dropdown-content") {
        dropdownList.className += " show";
    } else {
      dropdownList.className = "dropdown-content";
    }
}
function convertMenu() {

    if (navBarContainer.className === "navbar-nav") {
        dropdownContainer.className += " menu-mobile";
        dropdownList.className += " menu-mobile";
        navBarContainer.className += " menu-mobile";
    } else {
      dropdownContainer.className = "dropdown";
      dropdownList.className = "dropdown-content";
      navBarContainer.className = "navbar-nav";
    }
}
function validateForm(form) {
  var totalInput = form.getElementsByTagName('input');
  var totalTextArea = form.getElementsByTagName('textarea');

  for (var i = 0; i < totalInput.length || i < totaTextArea.length; i++) {
      if(totalInput[i].hasAttribute("required") || totalTextArea[i].hasAttribute("required")){
          if(totalInput[i].value == "" || totalTextArea[i].value == ""){
              alert("Please fill all required fields");
              return false;
          }
      }
  }
  return true;
}

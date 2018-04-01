function makeNavActive(navMenu) {
  if (document.getElementById("navbarNav1").className == "collapse navbar-collapse") {
    document.getElementById("menu2").className = "nav-item active";
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

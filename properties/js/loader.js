window.onload = function() {
  document.getElementById("loader").style.display = "none";
  var x = document.getElementById("loader");
  if (x.className === "loader-container loader2") {
    document.getElementById("slider3").style.display = "block";
  }
  else {
    document.getElementById("slider-photos").style.visibility = "visible";
    document.getElementById("slider-photos").style.opacity = "1";
    document.getElementById("slider-photos2").style.visibility = "visible";
    document.getElementById("slider-photos2").style.opacity = "1";
  }
};
var rects = document.getElementsByTagName("rect");
rects[0].animate([
{ "opacity": 0.2, "height": 4, "y": 8 },
{ "opacity": 1, "height": 20, "y": 0 },
{ "opacity": 0.2, "height": 4, "y":8 }],
{
  duration: 600,
  fill: "both",
  iterations: Infinity
});

rects[1].animate([
{ "opacity": 0.2, "height": 4, "y": 8 },
{ "opacity": 1, "height": 20, "y": 0 },
{ "opacity": 0.2, "height": 4, "y":8 }],
{
  delay: 150,
  duration: 600,
  fill: "both",
  iterations: Infinity
});

rects[2].animate([
{ "opacity": 0.2, "height": 4, "y": 8 },
{ "opacity": 1, "height": 20, "y": 0 },
{ "opacity": 0.2, "height": 4, "y":8 }],
{
  delay: 150,
  duration: 600,
  fill: "both",
  iterations: Infinity
});

var css = document.querySelector("h3");
var colorOne = document.querySelector('.colorOne');
var colorTwo = document.querySelector('.colorTwo');
var body = document.getElementById("gradient");
var button = document.querySelector("button");

css.textContent = body.style.background + ";";

function setGradient(){
  body.style.background = "linear-gradient(to right, " + colorOne.value + ", " + colorTwo.value + ")";

  css.textContent = body.style.background + ";";
}
//Add random button to generate random inputs value
function randomGenerate(){
  return Math.round( Math.random() * 255, -1);
}

function randomColor(){
  body.style.background = "linear-gradient(to right, rgb("
                          + randomGenerate()
                          + ","
                          + randomGenerate()
                          + ","
                          + randomGenerate()
                          + "), rgb("
                          + randomGenerate()
                          + ","
                          + randomGenerate()
                          + ","
                          + randomGenerate()
                          + "))";

  css.textContent = body.style.background + ";";
}

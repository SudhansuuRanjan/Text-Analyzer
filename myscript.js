
  //characters
    function countChar(){
  var text = document.getElementById("my-text").value;
  var numChar = text.length;
  document.getElementById("showChar").innerHTML=numChar;
}


  //words
    function countWords(){
  var text = document.getElementById("my-text").value;
  var numWords = 0;
  for (var i = 0; i < text.length; i++) {
    var currentCharacter = text[i];
    if (currentCharacter == " ") {
       numWords += 1;
    }
  }
  numWords+=1;
  document.getElementById("show").innerHTML=numWords;
}

//sentence
function countSent(){
var text = document.getElementById("my-text").value;
var numSent = 0;
for (var i = 0; i < text.length; i++) {
var currentCharacter = text[i];
if (currentCharacter == ".") {
   numSent += 1;
}
}
document.getElementById("showSent").innerHTML=numSent;

}

(function(){

var word = "racecar";
var sWord = word.split("");
var rWord = sWord.reverse();

rWord = rWord.join("");


if (rWord === word) {
  console.log("True");
}

else {
  console.log("False");
}



    })();

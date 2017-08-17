(function(){

var word = "Flavor";
var letter = "a"

if (word.includes(letter)) {
  var count = word.split(letter).length - 1;

  console.log("Yeah, the letter " + letter + " exists " + count + " times in my word");
}
else {
  console.log("Nope, that letter doesn't exist in my word.");
}

  })();

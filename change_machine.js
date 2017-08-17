(function(){

var amount = 3;
var change = [0, 0, 0, 0]

for (i = 0; i < amount; i++) {
  if (amount >= 20) {
    change[0] = change[0] + 1
    amount = amount - 20

  }
  if (amount >= 10) {
    change[1] = change[1] + 1
    amount = amount - 10

  }
  if (amount >= 5) {
    change[2] = change[2] + 1
    amount = amount - 5

  }
    if (amount >= 1) {
    change[3] = change[3] + 1
    amount = amount - 1
  }

}

change[3] = change[3] + 1;

console.log(change);
console.log("Your change is " + change[0] + " twenties," + change[1] + " tens," + change[2] + " fives, and " + change[3] + " ones." )



  })();

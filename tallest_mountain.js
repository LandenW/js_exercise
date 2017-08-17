(function(){

var mountains = [10000, 2000, 500, 1000, 1099]

mountains.sort(function(a, b){return b - a});

var answer =  mountains[0];

console.log(answer);


})();

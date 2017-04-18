console.log("chaining.js loaded");

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
integers = integers.sort(function(a,b){return b-a}).filter(function(a,b){return a < 19}).map(function(a,b){return 1.5*a-1}).reduce(function(a,b){return a + b});
console.log(integers);
var now = require("performance-now");
var testIA = require('./unit_test.js');

test = new testIA();
var pawn_type = 2;
var start = now();
var result = test.findPlay(pawn_type);
var end = now();

console.log(result);
console.log("AI execute time : " + (end - start).toFixed(3));

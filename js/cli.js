var pingPong = require('./pingpong.js').pingPong;

// var goal = prompt('Enter a number:');
var goal = 50;
var result = pingPong(goal);
result.forEach(function(element) {
  console.log(element);
});

var pingPong = require('./pingpong.js').pingPong;
var prompt = require('prompt');
prompt.start();

prompt.get('goal', function(err, result) {
  var result = pingPong(result.goal);
  var output = [];

  result.forEach(function(element) {
    output.push(element);
  });
  console.log(output.join(' '));
});

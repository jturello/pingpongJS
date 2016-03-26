var pingPong = require('./../js/pingpong.js').pingPong;

$(document).ready(function(){
  $('#pingpong').submit(function(event){
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element){
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

// Backend logic
var action = function(operation, number1, number2) {
  var calcResult;

  if (operation == 0) {
    calcResult = add(number1, number2);
  } else if (operation == 1) {
    calcResult = subtract(number1, number2);
  } else if (operation == 2) {
    calcResult = multiply(number1, number2);
  } else if (operation == 3) {
    calcResult = divide(number1, number2);
  };

  return calcResult;
};

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// Frontend logic
$(document).ready(function() {
  var operation;
  $('input:radio[name=operation]').click(function(){
    operation = parseInt($('input:radio[name=operation]:checked').val());
  });
  $("#calcForm").submit(function(event){
    event.preventDefault();
    var number1 = parseFloat($("#firstNumber").val());
    var number2 = parseFloat($("#secondNumber").val());

    var result = action(operation, number1, number2).toFixed(2);

    $("#output").text(result);

    $("#result").show();
  });
});

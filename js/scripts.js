	var add = function(number1, number2){
		return number1 + number2;
	};

	var subtract = function(number1, number2){
		return number1 - number2;
	};

	var multiply = function(number1, number2){
		return number1 * number2;
	};

	var divide = function(number1, number2){
		return number1 / number2;
	};

	var BMIcalculator = function(number1, number2){
	  return (number1) / (number2 * number2);
	};

	var fahrenheitToCelsius = function(number1){
	  return (number1 - 32) * (5/9);
	}

	var celsiusToFahrenheit = function (number1) {
	  return ((number1) * (9 / 5)) + 32 ;
	};

	var gallonsToLiters = function (number1) {
	  return number1 / 0.26417205235815 ;
	} ;

	var litersToGallons = function (number1) {
	  return number1 * 0.26417205235815 ;
	} ;

	var poundToKg = function(number1) {
	  return number1 * 2.20462;
	};

	var kgToPound = function(number1) {
	  return number1 / 2.20462;
	};

$(document).ready(function() {
	// Start Project User Interface 1 ---------------
	$("form#add").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);
		$("#output1").text(result);
	});

	$("form#subtract").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#subtract1").val());
		var number2 = parseInt($("#subtract2").val());
		var result = subtract(number1, number2);
		$("#output1").text(result);
	});
	// End Project User Interface 1 ---------------
	// Start Project User Interface 2 ---------------
	$("form#calculator2").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    }
    $("#output2").text(result);
  });
	// End Project User Interface 2 ---------------
});

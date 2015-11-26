/**
* question.js
* Simple object to manage questions
* @author Pello Altadill - http://pello.io
*/


var Question = function (min, max) {
	var question = '';
	var answer = '';
	var topTable = max;
	var bottomTable = min;


	var random = function (min, max) {
		return Math.round(Math.random()*(max-min)) + min;
	};

	this.generate = function () {
		var operand1 = random(bottomTable, topTable);
		var operand2 = random(1,10);

		question = operand1 + ' x ' + operand2;
		answer = operand1 * operand2;

		return question; 
	};

	this.getQuestion = function () {
		return question;
	};

	this.getAnswer = function () {
		return answer;
	};
	
	this.show = function () {
		return question + ' = ' + answer;
	};

};


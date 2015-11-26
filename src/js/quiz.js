/**
* quiz.js
* Simple object to manage a quiz 
* @author Pello Altadill - http://pello.io
*/


var Quiz = function (total, min, max) {
	var answer = '';
	var topTable = max;
	var bottomTable = min;
	var currentQuestion;
	var index = 0;
	var totalQuestions = total;
	var correct = 0;

//	var questions = generate();
	
	var generate = function () {
		q = [];
		for (var i = 0; i < totalQuestions;i++) {
			q.push(new Question(bottomTable,topTable));
			q[i].generate();
		}
		index = -1;
		return q;
	};


	var questions = generate();

	/**
	*
	*/
	this.nextQuestion = function () {
		if ((index + 1) == questions.length) {
			return false; 
		} else {
			index++;
			return true;
		}
	};

	/**
	* 
	* return currentFunction
	*/
	this.currentQuestion = function () {
		return questions[index];
	};
        
	this.answer = function (which, answer) {
		if (questions[which].getAnswer() == answer) {
			correct++;
			return true;
		} else {
			return false;
		}
	};

	this.isEnded = function () {
		return ((index+1) == totalQuestions);
	};
        
	this.answerCurrent = function (answer) {
		return this.answer(index, answer);
	};

	this.getCorrect = function () {
		return correct;
	};

	this.getQuestions = function () {
		return questions;
	};
};


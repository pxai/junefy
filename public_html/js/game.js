/**
* game.js
* Simple object to manage the Game
* @author Pello Altadill - http://pello.io
*/


var Game = function (total, min, max) {
        var totalQuestions = total;
	var topTable = max;
	var bottomTable = min;
        var quiz;

//	var questions = generate();
	
	this.start = function () {
               quiz = new Quiz(totalQuestions, max, min);
	};
        
        this.getQuiz = function () {
            return quiz;
        };

        this.isEnded = function () {
            return quiz.isEnded();
        }
};


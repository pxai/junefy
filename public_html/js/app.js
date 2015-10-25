/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var game = new Game(10,2,2);

$('#fire').click(function (event) {
   $('#anwser').focus();
   game.start();
   goNext(2000);
});


$('#btnAnswer').click(function (event) {
   if (game.isEnded()) {
    showOutcome();
   } else {
    if (game.getQuiz().answerCurrent($('#answer').val())) {
        $('#challenge').append(' = ' + $('#answer').val());
        $('#challengeResult').html('<span class="correct glyphicon glyphicon-ok">OK</span>');
        goNext(1000);
    } else {
        $('#challenge').append(' =/= ' + $('#answer').val());
        $('#challengeResult').html('<span class="fail glyphicon glyphicon-remove">FAIL</span>');
        goNext(2000);
    }

   }
});

function goNext (time) {
   $('#correctAnswers').text(game.getQuiz().getCorrect());
   $('#answer').val('');
    console.log('You ready...?');
   $('#challengeExplain').text('Get ready');
    setTimeout(nextQuestion,time);
}

function nextQuestion () {
   $('#challenge').text('');
   $('#challengeResult').text('');
   $('#challengeExplain').html('&nbsp;');
   game.getQuiz().nextQuestion();
   $('#challenge').text(game.getQuiz().currentQuestion().getQuestion());
}

function showOutcome() {
   console.log('Game is over.' + game.getQuiz().getCorrect()); 
}
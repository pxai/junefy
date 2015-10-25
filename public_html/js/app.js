/* 

 * pello altadill
 */

var game = new Game(10,2,3,'June');

$('#fire').click(function (event) {
   $('#anwser').focus();
   $('#challenge').text('');
   game.start();
   goNext(2000);
});


$('#playAgain').click(function (event) {
   $('#myModal').modal('hide') ;
   $('#challenge').text('');
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
   var correct = game.getQuiz().getCorrect();
   $('#myModal').modal('show') ;
   var prizes = ['','remove','remove','remove','remove','remove','remove','baby-formula','star','apple','ice-lolly'];
   $('#results').html(''); 
   $('#myModalLabel').html('Results for ' + game.getPlayer()); 
   
   switch (correct) {
       case 10:
               $('#results').html('Perfect '+game.getPlayer()+'! You won a <span class="glyphicon glyphicon-'+prizes[correct]+'"></span>') 
               break;
       case 9:
       case 8:
               $('#results').html('Well done '+ game.getPlayer()+'! '+correct+' correct You won a <span class="glyphicon glyphicon-'+prizes[correct]+'"></span>') 
               break;
       case 7:
       case 6:
       case 5:
                $('#results').html('Mmmm not bad '+ game.getPlayer()+' '+correct+' correct. You won a <span class="glyphicon glyphicon-'+prizes[correct]+'"></span>') 
               break;
           default:
               $('#results').html(correct + ' correct  ' + game.getPlayer()+' you didn\'t win anything <span class="glyphicon glyphicon-'+prizes[correct]+'"></span>') 
               break;
    }
}
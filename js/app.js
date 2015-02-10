$(document).ready(function(){
	//welcome screen
  $(".startButton").on("click", function(){
	  $(".welcome").hide();
	  $(".quizTemplate").fadeIn(2500);
	  $(".fadeBackground").fadeIn();
  });
  //set current question
  var currentQuestion = 1;
  //html question
  var addQuestion = function(){
    $('.question').html(list[currentQuestion].question);
  };
  addQuestion();
  //append answers
   var addAnswers = function(){
      for (i=0; i<=3; i++){
  $('.answers').append('<i class="fa fa-circle-o"></i><div class="liDiv"><li>' + list[currentQuestion].answer[i] + '</li></div><br>'); 
       }
    };  
  addAnswers();
  //append right answer
  // var addCorrectAnswer = function (){
  //   $('.answers').append('<i class="fa fa-circle-o"></i><div class="liDiv"><li>' + list[currentQuestion].answer + '</li></div><br>');
  // };
  // addCorrectAnswer();
  
  //change question on click
  $('.submit').on('click', function(){
    // increase question by 1
    var nextQuestion = currentQuestion++;
    //change question text
   addQuestion();
    //remove previous answers
    $('.answers').empty();
    //add new, wrong answers
    addAnswers();
    //add new right answer
  //   addCorrectAnswer();
  });



});//document ready








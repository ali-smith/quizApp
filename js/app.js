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
  $('.answersUL').append('<li class="answersLI"><i class="fa fa-circle-o"></i>' + list[currentQuestion].answers[i] + '</li><br>'); 
       }
    };  
  addAnswers();

  //select answer
  $('i').on('click', function(){
  	if ($(this).hasClass('fa fa-circle-o')){
  		$(this).removeClass().addClass('fa fa-circle');
  	} else {
  		$(this).removeClass('fa fa-circle').addClass('fa fa-circle-o');
  	}
    	
  });	

  //change question on click
  $('.submit').on('click', function(){
    // increase question by 1
    var nextQuestion = currentQuestion++;
    //change question text
   addQuestion();
    //remove previous answers
    $('.answersUL').empty();
    //add new answers
    addAnswers();
 
  });




});//document ready








$(document).ready(function(){
  
  var userAnswers = [];

	//welcome screen
  $('.startButton').on('click', function(){
	  $('.welcome').hide();
	  $('.quizTemplate').fadeIn(2500);
	  $('.fadeBackground, .quizBackground').fadeIn();
  });
  //set current question
  var currentQuestion = 1;
  //html question
  var addQuestion = function(){
    $('.question').html(list[currentQuestion].question);
    $('.counterBar').html('<h1>countdown: ' + list[currentQuestion].questionNumber + '</h1>');
  };
  addQuestion();
  //append answers
  var addAnswers = function(){
      for (i=0; i<=3; i++){
      $('.answersUL').append('<li class="answersLI"><i class="fa fa-circle-o"></i><span class="userSelection">' + list[currentQuestion].answers[i] + '</span></li><br>'); 
       }
    };  
  addAnswers();
  
  //select answer
  	$('.answersUL').on('click', 'i', function(){
  	if ($('i').hasClass('fa fa-circle-o')){
  		$('i').removeClass().addClass('fa fa-circle');
  		$('i').not(this).removeClass().addClass('fa fa-circle-o');
  		}
  	});	
  
  // find text in answer then put in userAnswers
	var pushUserSelection = function(){
		var userAnswer = $('.answersUL > .answersLI > .fa-circle + .userSelection').text();
		userAnswers.push(userAnswer);
		console.log(userAnswers);
	}


  //change question on click
  	$('.next').on('click', function(){
  	pushUserSelection();
    // increase question by 1
    var nextQuestion = currentQuestion++;
    //change question text
    addQuestion();
    //remove previous answers
    $('.answersUL').empty();
    //add new answers
    addAnswers();

    //take answers[i] from that list item and put in new array userAnswers[]
     
  
  });


});//document ready








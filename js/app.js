$(document).ready(function(){
  
  var userAnswers = [];
  var nextQuestion;
 
 
 // button to go directly to results page
    $('.hide').on('click', function(){
      $('.welcomeWrapper').hide();
      $('.quizBackground').hide();
      $('.quizResultsBackground').show();
    });

	//welcome screen
  $('.startButton').on('click', function(){
	  $('.welcome').fadeOut(1500);
	  $('.quizTemplate').fadeIn(2000);
	  $('.fadeBackground, .quizBackground').fadeIn(2000);
  });

  //set current question
  var currentQuestion = 0;
  //html question
  var addQuestion = function(){
    $('.question').html(list[currentQuestion].question).fadeIn(1200);
    $('.counterBar').html('<h1>countdown: ' + list[currentQuestion].questionNumber + '</h1>');  
  };
  addQuestion();

  //append answers
  var addAnswers = function(){
      for (i=0; i<=3; i++){
      $('.answersUL').append('<li class="answersLI"><i class="fa fa-circle-o"></i><span class="userSelection">' + list[currentQuestion].answers[i] + '</span></li><br>').fadeIn(1200); 
       }
    };  
  addAnswers();
  
  //select answer
  	$('.answersUL').on('click', 'i', function(){
  	if ($('i:not(.fa-star, .fa-star-o, .fa-thumbs-down)').hasClass('fa fa-circle-o')){
  		$('i:not(.fa-star, .fa-star-o, .fa-thumbs-down)').removeClass().addClass('fa fa-circle');
  		$('i:not(.fa-star, .fa-star-o, .fa-thumbs-down)').not(this).removeClass().addClass('fa fa-circle-o');
      }
  	});	

  // find text in answer then push to userAnswers array
	var pushUserSelection = function(){
		var userAnswer = $('.answersUL > .answersLI > .fa-circle + .userSelection').text();
		userAnswers.push(userAnswer);
		console.log(userAnswers);
    // compareAnswers();
	}



    

  //change question on click
  	$('.next').on('click', function(){
  	quizOver();
    //if answer is checked do this
    if ($('i').hasClass('fa-circle')){
    //add to array
    pushUserSelection(); 
    //increase question by 1
    var nextQuestion = currentQuestion++;
    //change question text
    addQuestion();
    //remove previous answers
    $('.answersUL').empty();
    //add new answers
    addAnswers();

    //if no answer checked, do this
    }else{
      alert('must pick one!');
      }
  });

  //if the quiz is over do this
  var quizOver = function(){
    if (userAnswers.length == 10){
      $('.quizBackground').hide();
      $('.quizResultsBackground').fadeIn(2500);
      
      }
  }      
 //compare userAnswers array with correct answers array
 
  // var compareAnswers = function(){
  //     for (i=0; i=10; i++){
  //     if (userAnswers[i] === list[currentQuestion].correctAnswer){
  //       // console.log('yup');
  //       $('.accordionDiv').append('<article class="accordionArticle">
  //   <h2 class="accordionHeader"><i class="fa fa-star"></i>' + list[currentQuestion].question + '</h2>
  //   <p class="accordionAnswer">' + list[currentQuestion].explanation + '</p>
  //   </article>');
  //     }else{
  //       $('.accordionDiv').append('<article class="accordionArticle">
  //   <h2 class="accordionHeader"><i class="fa thumbs-down"></i>' + list[currentQuestion].question + '</h2>
  //   <p class="accordionAnswer">' + list[currentQuestion].explanation + '</p>
  //   </article>');
       
  //     }
  //   }
  // }
  
   
    //SOLUTION:
    //http://stackoverflow.com/questions/7837456/comparing-two-arrays-in-javascript


});//document ready



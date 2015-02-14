$(document).ready(function(){
  
  var userAnswers = [];
  var nextQuestion;


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
    $('.counterCircle').html('<h2>' + list[currentQuestion].questionNumber + '</h2>');  
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


  //alert window: must choose an answer
  var pickOneAlert = function(){
    $('.pickOneBackground').fadeIn(400);
    $('.quizBackground').fadeTo("slow", 0.1);
  } 
  
  $('.pickOneBackground').on('click',function(){
    $(this).fadeOut("slow");
    $('.quizBackground').fadeTo("slow", 1.0);
  })   


  // find text in answer then push to userAnswers array
	var pushUserSelection = function(){
		var userAnswer = $('.answersUL > .answersLI > .fa-circle + .userSelection').text();
		userAnswers.push(userAnswer);
		console.log(userAnswers);
    compareAnswers();
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
        pickOneAlert();
      }
  });

  //if the quiz is over do this
  var quizOver = function(){
    if (userAnswers.length == 9){
      $('.quizBackground').hide();
      $('.quizResultsBackground').fadeIn(2500);
      
      }
  }    

  //accordion -- hides/shows answer explanation
$('.accordionArticle').on('click', function(){
  // $(this).find('.accordionHeader').slideToggle('slow');
  $(this).find('.accordionAnswer').slideToggle('slow');

});

 // compare userAnswers array with correct answers array
  var compareAnswers = function(){
      for (i=0; i<=10; i++){
      if (userAnswers[i] === list[i].correctAnswer){
        console.log('yup');
        $('.accordionDiv').append('<article class="accordionArticle"><h2 class="accordionHeader"><i class="fa fa-star"></i>' + list[i].question + '</h2><p class="accordionAnswer">' + list[i].explanation + '</p></article>');
      }else{
        $('.accordionDiv').append('<article class="accordionArticle"><h2 class="accordionHeader"><i class="fa thumbs-down"></i>' + list[i].question + '</h2><p class="accordionAnswer">' + list[i].explanation + '</p></article>');

      }
    }
  }
  });//document ready
   
 // button to go directly to results window
    $('.results').on('click', function(){
      $('.welcomeWrapper').hide();
      $('.quizBackground').hide();
      $('.quizResultsBackground').show();
    });

 // button to go directly to pickOne window
    $('.pickOne').on('click', function(){
      $('.welcomeWrapper').hide();
      $('.quizBackground').fadeTo("slow", 0.1);
      $('.fadeBackground').show();
      $('.quizResultsBackground').hide();
      $('.pickOneBackground').show();
    });





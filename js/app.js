//it should test to make sure there is an answered selected, then test for the userAnswers.length, and respond accordingly 

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
  }; 
  
  $('.pickOneBackground').on('click',function(){
    $(this).fadeOut("slow");
    $('.quizBackground').fadeTo("slow", 1.0);
  });   


  // find text in answer then push to userAnswers array
  var pushUserSelection = function(){
    var userAnswer = $('.answersUL > .answersLI > .fa-circle + .userSelection').text();
    userAnswers.push(userAnswer);
    // console.log(userAnswers);
    
  };
    
   //shows first accordionArticle on page load
  var showAccordionAnswerOne = function(){
    $('.accordionDiv').find('.accordionHeaderInactive:first').removeClass('accordionHeaderInactive').addClass('accordionHeaderActive');
    $('.accordionDiv').find('.accordionAnswer:first').show();
    
  }

    //if the quiz is over do this
  var quizOver = function(){
      $('.quizBackground').hide();
      $('.quizResultsBackground').fadeIn(2500);
      $('.fadeBackground').fadeOut(2500);
    }; 



// compare userAnswers array with correct answers array
  var compareAnswers = function(){
      for (i=0; i<=9; i++){
        // console.log('list', list[i].correctAnswer, 'userAnswers: ',userAnswers[i]);
        if (userAnswers[i] == list[i].correctAnswer){
          // console.log('yes');
          $('.fa-ul').prepend('<li><i class="fa-li fa fa-star fa-lg"></i></li>');
         $('.accordionDiv').append('<article class="accordionArticle"><h2 class="accordionHeaderInactive"><i class="fa fa-star"></i>' + list[i].question + '</h2><p class="accordionAnswer">' + list[i].explanation +'</p></article>'); 

      }else{
        // console.log('no');
        $('.fa-ul').append('<li><i class="fa-li fa fa-star-o fa-lg"></i></li>');
        $('.accordionDiv').append('<article class="accordionArticle"><h2 class="accordionHeaderInactive"><i class="fa fa-thumbs-down"></i>' + list[i].question +'</h2><p class="accordionAnswer">' + list[i].explanation +'</p></article>');
      }
    }
  }


    //change question on click
    $('.next').on('click', function(){
     if (userAnswers.length == 9) {
       pushUserSelection();
       quizOver();
       compareAnswers();
       showAccordionAnswerOne();
    //if answer is checked do this
    } else {
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
  };
});   



  //accordion -- hides/shows answer explanation    
   $('.accordionDiv').on('click', '.accordionHeaderInactive',function(){
      
     //change NOT THIS headers to inactive and hide
      $('.accordionDiv > .accordionArticle > h2').removeClass('accordionHeaderActive').addClass('accordionHeaderInactive');
      $('.accordionDiv > .accordionArticle > .accordionHeaderInactive').slideDown('slow');
      $('.accordionDiv > .accordionArticle > .accordionHeaderInactive').next('.accordionAnswer').slideUp(900);
    
    //change this header to active and show
      $(this).next('.accordionAnswer').delay(90).slideDown(1200);
      $(this).removeClass('accordionHeaderInactive').addClass('accordionHeaderActive'); 
});

  //accordion -- darkens color on hover
$('.accordionArticle').on('hover',function(){
  $(this).fadeTo('fast', 1);
});

 
  
   
   
   
 // hidden button to go directly to results window
    $('.results').on('click', function(){
      showAccordionAnswerOne();
      $('.welcomeWrapper').hide();
      $('.quizBackground').hide();
      $('.quizResultsBackground').show();
      
    });

 // hidden button to go directly to pickOne window
    $('.pickOne').on('click', function(){
      $('.welcomeWrapper').hide();
      $('.quizBackground').fadeTo("slow", 0.1);
      $('.fadeBackground').show();
      $('.quizResultsBackground').hide();
      $('.pickOneBackground').show();  
    });



});//document ready


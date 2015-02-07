$(document).ready(function(){
	

	//start quiz
$(".startButton").on("click", function(){
	$(".welcome").hide();
	$(".quizTemplate").fadeIn(2500);
	$(".fadeBackground").fadeIn();
	renderQuestion();
	
});

	function QuizSection(question, answers, correctAnswer, feedback){
		this.question = question;
		this.answers = answers;
		this.correctAnswer = correctAnswer;
		this.feedback = feedback;
	}

	qs1 = new QuizSection ("'Nebula' is the Latin word for: ",["vague","dust","wormhole","cloud"],"cloud", "")
		
	qs2 = new QuizSection	("What is a nebula?",["a collection of dust and gas particles gathered from the universe","smog spillover from L.A.","a group of prisms caused by galactic condensation","a ball of fire burning at varying temperatures"],"a collection of dust and gas particles gathered from the universe","")
		
	qs3 = new QuizSection	("A nebula is formed by:",["the shedding of a planet's outer layers","the gravitational collapse of gas","supernova explosions","all of the above"],"all of the above","")
		
	qs4 = new QuizSection	("Types of nebulae include reflection, planetary, emission and",["transcendent","imaginary","absorption","magnetic"],"absorption","")
		
	qs5 = new QuizSection	("What makes a reflection nebula glow?",["hot embers floating around inside the cloud","the light from nearby stars","a mysterious gooey substance","spontaneous electrical impulses"],"the light from nearby stars", "")
		
	qs6 = new QuizSection	("A nebula is a breeding ground for:",["young stars","galaxies","aliens","black holes"],"young stars","")
		
	qs7 = new QuizSection	("What kind of nebula is home to a red giant?",["planetary","dark","supernova","beanstalk"],"planetary","")
		
	qs8 = new QuizSection	("Spectroscopy is the study of:",["the inner world of dust and specks found in a nebula","the specters that live inside emission nebulae","the spectrum through which a nebula's light passes","gravity's impact on matter at varying densities"],"the spectrum through which a nebula's light passes","")
		
	qs9 = new QuizSection	("Once a star forms in a nebula,",["the surrounding matter forms into orbiting planets","its solar wind quickly pushes away the rest of the dust and gas","it grows exponentially as its gravitational pull engulfs the surrounding matter","it gets its own reality show"],"its solar wind quickly pushes away the rest of the dust and gas","")
		
	qs10 = new QuizSection	("The first astronomer to mention a group of 'nebulous' stars in 150 A.D. was:",["Ptolemy","Galileo","Nostradamus","Spock"],"Ptolemy","")
	

	var quizsections = [qs1, qs2, qs3, qs4, qs5, qs6, qs7, qs8, qs9, qs10];

function renderQuestion(){
	var question = QuizSection[0]
	var answers = QuizSection[1]
	$(".question").append(question);
	$(".answers").append(answers);
	quizsections.shift();

} 














});//document ready
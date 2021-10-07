/*querySelector to control HTML elements in JS*/
var initial = document.querySelector("#initial");
var startQuizBtn = document.querySelector("#start-btn");
var questionEl = document.querySelector("#question-element");
var answerEl = document.querySelector("#answer-element");
var timeRemaining = document.querySelector("#time-rem");
var correctWrong = document.querySelector("#correct-wrong");
var mainContainer = document.querySelector("#main-container");
var submitEl = document.querySelector("#submit-element");

var presentQIndex = 0;
var timeLeft = 85;

/*--------------------------
Start quiz button is pressed 
--------------------------*/
var beginQuiz = function () {
  //hide welcome screen
  initial.classList.add("hidden");
  //create div for quiz and display first question
  var quizDiv = document.createElement("div");
  quizDiv.textContent = questions[0].question;
  quizDiv.classList.add("title");
  quizDiv.id = "quiz";
  questionEl.appendChild(quizDiv);
  //create div for answer buttons
  var buttonDiv = document.createElement("div");
  buttonDiv.classList.add("answer-btn");
  buttonDiv.id = "button-div";
  answerEl.appendChild(buttonDiv);
  //create first question button
  var answerBtn1 = document.createElement("button");
  answerBtn1.textContent = questions[0].answers[0].text;
  answerBtn1.className = "btn";
  answerBtn1.id = "btn-1";
  buttonDiv.appendChild(answerBtn1);
  //create second question button
  var answerBtn2 = document.createElement("button");
  answerBtn2.textContent = questions[0].answers[1].text;
  answerBtn2.className = "btn";
  answerBtn2.id = "btn-2";
  buttonDiv.appendChild(answerBtn2);
  //create third question button
  var answerBtn3 = document.createElement("button");
  answerBtn3.textContent = questions[0].answers[2].text;
  answerBtn3.className = "btn";
  answerBtn3.id = "btn-3";
  buttonDiv.appendChild(answerBtn3);
  //create fourth question button
  var answerBtn4 = document.createElement("button");
  answerBtn4.textContent = questions[0].answers[3].text;
  answerBtn4.className = "btn";
  answerBtn4.id = "btn-4";
  buttonDiv.appendChild(answerBtn4);
  //used to check answers loaded with start button
  correctAnswer1();

  //call next question function
  nextQuestions();

  /*-----------------
Start and end timer
------------------*/
  var timer = setInterval(function () {
    //prevent timer from continuing into negatives
    if (timeLeft <= 0 || answerCounter === questions.length) {
      clearInterval(timer);
      timeLeft = 0;
      endQuiz();
    }

    //remove one second from timeLeft every second
    timeRemaining.innerHTML = timeLeft;
    timeLeft -= 1;
  }, 1000);
};

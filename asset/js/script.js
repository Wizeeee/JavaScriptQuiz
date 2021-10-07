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

var nextQuestions = function () {
  //event listener for answer buttons
  answerEl.addEventListener("click", function () {
    //iterates through hard coded questions/answers and displays them in order
    for (let i = presentQIndex + 1; i < questions.length; i++) {
      var quiz = document.querySelector("#quiz");
      quiz.textContent = questions[i].question;
      var btn1 = document.querySelector("#btn-1");
      btn1.textContent = questions[i].answers[0].text;
      var btn2 = document.querySelector("#btn-2");
      btn2.textContent = questions[i].answers[1].text;
      var btn3 = document.querySelector("#btn-3");
      btn3.textContent = questions[i].answers[2].text;
      var btn4 = document.querySelector("#btn-4");
      btn4.textContent = questions[i].answers[3].text;
      //used to check answers loaded in for loop in nextquestion()
      correctAnswer2();
      presentQIndex++;

      return;
    }
  });
};

/*--------------------------------------------------------------------------
Compares user answer to hard coded answer and returns correct/incorrect etc.
--------------------------------------------------------------------------*/
var correctAnswer1 = function () {
  var answer1 = questions[0].answers[0].correct;
  var btn1 = document.querySelector("#btn-1");
  btn1.onclick = function () {
    let clickedBtn1 = true;
    if (clickedBtn1 === true && answer1 === true) {
      //if answer correct run displayCorrect()
      displayCorrect();
      answerCounter++;
    } else {
      //else run displayIncorrect()
      displayIncorrect();
      timeLeft -= 10;
      answerCounter++;
    }
  };
  //if second choice is picked
  var answer2 = questions[0].answers[1].correct;
  var btn2 = document.querySelector("#btn-2");
  btn2.onclick = function () {
    let clickedBtn2 = true;
    if (clickedBtn2 === true && answer2 === true) {
      //if answer correct run displayCorrect()
      displayCorrect();
      answerCounter++;
    } else {
      //else run displayIncorrect()
      displayIncorrect();
      timeLeft -= 10;
      answerCounter++;
    }
  };
  //if thirs choice is picked
  var answer3 = questions[0].answers[2].correct;
  var btn3 = document.querySelector("#btn-3");
  btn3.onclick = function () {
    let clickedBtn3 = true;
    if (clickedBtn3 === true && answer3 === true) {
      //if answer correct run displayCorrect()
      displayCorrect();
      answerCounter++;
    } else {
      //else run displayIncorrect()
      displayIncorrect();
      timeLeft -= 10;
      answerCounter++;
    }
  };
  //if fourth choice is picked
  var answer4 = questions[0].answers[3].correct;
  var btn4 = document.querySelector("#btn-4");
  btn4.onclick = function () {
    let clickedBtn4 = true;
    if (clickedBtn4 === true && answer4 === true) {
      //if answer correct run displayCorrect()
      displayCorrect();
      answerCounter++;
    } else {
      //else run displayIncorrect()
      displayIncorrect();
      timeLeft -= 10;
      answerCounter++;
    }
  };
};

//answerCounter will end question loop went number = to questions.length
let answerCounter = 0;
//if first choice is picked
var correctAnswer2 = function () {
  var answer1 = questions[presentQIndex + 1].answers[0].correct;
  var btn1 = document.querySelector("#btn-1");
  btn1.onclick = function () {
    let clickedBtn1 = true;
    if (clickedBtn1 === true && answer1 === true) {
      //if answer correct run displayCorrect()
      displayCorrect();
      answerCounter++;
    } else {
      //else run displayIncorrect()
      displayIncorrect();
      timeLeft -= 10;
      answerCounter++;
    }
  };
  //if second choice is picked
  var answer2 = questions[presentQIndex + 1].answers[1].correct;
  var btn2 = document.querySelector("#btn-2");
  btn2.onclick = function () {
    let clickedBtn2 = true;
    if (clickedBtn2 === true && answer2 === true) {
      //if answer correct run displayCorrect()
      displayCorrect();
      answerCounter++;
    } else {
      //else run displayIncorrect()
      displayIncorrect();
      timeLeft -= 10;
      answerCounter++;
    }
  };
  //if thirs choice is picked
  var answer3 = questions[presentQIndex + 1].answers[2].correct;
  var btn3 = document.querySelector("#btn-3");
  btn3.onclick = function () {
    let clickedBtn3 = true;
    if (clickedBtn3 === true && answer3 === true) {
      //if answer correct run displayCorrect()
      displayCorrect();
      answerCounter++;
    } else {
      //else run displayIncorrect()
      displayIncorrect();
      timeLeft -= 10;
      answerCounter++;
    }
  };
  //if fourth choice is picked
  var answer4 = questions[presentQIndex + 1].answers[3].correct;
  var btn4 = document.querySelector("#btn-4");
  btn4.onclick = function () {
    let clickedBtn4 = true;
    if (clickedBtn4 === true && answer4 === true) {
      //if answer correct run displayCorrect()
      displayCorrect();
      answerCounter++;
    } else {
      //else run displayIncorrect()
      displayIncorrect();
      timeLeft -= 10;
      answerCounter++;
    }
  };
};

/*--------------------------------------
Display Correct/Incorrect on .75s timeout
---------------------------------------*/
var displayCorrect = function () {
  var correctText = document.createElement("h2");
  correctText.id = "correct";
  correctText.className = "correct-wrong";
  correctText.textContent = "Correct!";
  correctWrong.appendChild(correctText);
  setTimeout(function () {
    correctText.classList.add("hidden");
  }, 500);
};
var displayIncorrect = function () {
  var incorrectText = document.createElement("h2");
  incorrectText.id = "incorrect";
  incorrectText.className = "correct-wrong";
  incorrectText.textContent = "Wrong!";
  correctWrong.appendChild(incorrectText);
  setTimeout(function () {
    incorrectText.classList.add("hidden");
  }, 500);
};

const quizData = [
    {
        question: "How old is Devin?",
        a: "10",
        b: "17",
        c: "26",
        d: "21",
        correct: "d"
    }, {
        question: "What is the most used programing language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },{
        question: "Who is the President of US?",
        a: "Michael Jackson",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b"
    },{
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a"
    }, {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
        correct: "b"
    }
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const questionContainer = document.getElementById("question-container");
let currentQuiz = 0;
let score = 0;

loadQuiz();
for (let i = 0; i < quizData.length; i++) {
    loadQuestions(i);
}
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.
    question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

   return answer;
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You scored a ${(score/quizData.length)*100} on the quiz.</h2>
             <button onclick="location.reload()">Reload</button>`;
        }
    }

  
})

const createQuizBtn = document.getElementById("create-quiz");

createQuizBtn.addEventListener("click", () => {
  
  const question = prompt("Enter the new question:");
  const a = prompt("Enter option A:");
  const b = prompt("Enter option B:");
  const c = prompt("Enter option C:");
  const d = prompt("Enter option D:");
  const correct = prompt("Enter the correct answer (a, b, c, or d):");

  
  quizData.push({
    question: question,
    a: a,
    b: b,
    c: c,
    d: d,
    correct: correct,
  });
});
const editQuizBtn = document.getElementById("edit-quiz");

editQuizBtn.addEventListener("click", () => {
  
  const questionNumber = parseInt(prompt("Enter the question number you want to edit:"));

  if (questionNumber && questionNumber > 0 && questionNumber <= quizData.length) {
    const currentQuizData = quizData[questionNumber - 1];
    
   
    const updatedQuestion = prompt("Enter the updated question:", currentQuizData.question);
    const updatedA = prompt("Enter answer A:", currentQuizData.a);
    const updatedB = prompt("Enter answer B:", currentQuizData.b);
    const updatedC = prompt("Enter answer C:", currentQuizData.c);
    const updatedD = prompt("Enter answer D:", currentQuizData.d);
    

    quizData[questionNumber - 1] = {
      question: updatedQuestion,
      a: updatedA,
      b: updatedB,
      c: updatedC,
      d: updatedD,
      correct: currentQuizData.correct
    };
    
   
    loadQuiz();
  } else {
    alert("Invalid question number!");
  }
});
function loadQuestions(currentQuiz) {
    const currentQuizData = quizData[currentQuiz];
    const questionText = document.createElement("p");
    questionText.innerText = (currentQuiz + 1) + ". " + currentQuizData.question;
    questionContainer.appendChild(questionText);
}
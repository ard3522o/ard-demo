 const questions = [
    {
        question: "Kya Abhay accha aadmi hai?",
        answers: [
                   
                           { text: "Haa", correct: true},
                           { text: "Bilkul Haa", correct: true},
                           { text: "Both A and B", correct: true},
                           { text: "he prabhu he hariram krishna", correct: true},
        ]
    },
    {
        question: "Which is smallest continent in the world?",
        answers: [
                   
                           { text: "asia", correct: false},
                           { text: "africa", correct: false},
                           { text: "europe", correct: false},
                           { text: "australia", correct: true},
        ]
    },
    {
        question: "Which is the largest mountain in the world?",
        answers: [
                   
                           { text: "Fiji", correct: false},
                           { text: "Mount Everest", correct: true},
                           { text: "Kanchunjungha", correct: false},
                           { text: "Arias", correct: false},
        ]
    },
 ];
 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");
 let currentQuestionIndex = 0;
 let score = 0;
 function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML = "Next";
    showQuestion();
 }
 function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
button.addEventListener("click", selectAnswer);
    });
}
    function resetState(){
        nextButton.style.display = "none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }
 function selectAnswer(e){
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct === "true";
if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
}else{
    selectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
});
nextButton.style.display = "block";
 }
 function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
 }
 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
 }
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});










 startQuiz();
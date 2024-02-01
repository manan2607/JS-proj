const quizdata=[
    {
        question:'What is ur age',
        a:'10',
        b:'17',
        c:'26',
        d:'110',
        correct:'d'
    },
    {
        question:'What is worst programming language?',
        a:'C',
        b:'C++',
        c:'Java',
        d:'JS',
        correct:'c'
    }
];

const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');
const ans = document.querySelectorAll('.ans');
const quiz = document.getElementById('quiz');


let currentQ = 0;
let score = 0
loadQuiz();


function loadQuiz(){
    deselect();
    const currentQuiz =  quizdata[currentQ];
    question.innerText = currentQuiz.question;
    a_text.innerText = currentQuiz.a;
    b_text.innerText = currentQuiz.b;
    c_text.innerText = currentQuiz.c;
    d_text.innerText = currentQuiz.d;

}

function getSelected(){

    let answer = undefined;


    ans.forEach((an)=>{
        if(an.checked){
            answer=an.id;
        }
    }); 
    return answer;
}

function deselect(){
    ans.forEach((ansel)=>{
        ansel.checked=false;
    })
}

submit.addEventListener('click',()=>{
    const ans = getSelected();

    if (ans){
        if(ans === quizdata[currentQ].correct){
            score++;
        }
        currentQ++;
        if(currentQ < quizdata.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML=`<h2>Your score is ${score}/2</h2>`
        }
    }
});

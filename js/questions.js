let rightAnswers = 0;
let wrongAnswers = 0;

document.querySelector('.questionsPage__results--rights').innerHTML = rightAnswers;
document.querySelector('.questionsPage__results--wrongs').innerHTML = wrongAnswers;

let questions = [
    {
        number: 1,
        name: "Question 1",
        question: "What's 34 + 44?",
        answers: [23, 53, 54, 43, 78],
        correctAnswer: 78,
        selected: true
    },
    {
        number: 2,
        name: "Question 2",
        question: "What's 2 + 2?",
        answers: [4, 5, 6, 7, 8],
        correctAnswer: 4,
        selected: false
    }
];

function addQuestions() {
    return questions.forEach((question, index) => {
        // Create each question dynamically
        let question_div = document.createElement('div');
        question_div.classList.add('questions__question');
        question.selected && question_div.classList.add('selectedQ');

        let question_header_div = document.createElement('div');
        question_header_div.classList.add('questions__question--header');

        let question_number_p = document.createElement('p');
        question_number_p.classList.add('questions__question--number');
        question_number_p.innerText = question.name;

        let question_rightA_p = document.createElement('p');
        question_rightA_p.classList.add('questions__question--rightA');

        let check_mark_i = document.createElement('i');
        check_mark_i.classList.add('fas');
        check_mark_i.classList.add('fa-check');

        let question_wrongA_p = document.createElement('p');
        question_wrongA_p.classList.add('questions__question--wrongA');

        let times_mark_i = document.createElement('i');
        times_mark_i.classList.add('fas');
        times_mark_i.classList.add('fa-times');

        let question_question_p = document.createElement('p');
        question_question_p.classList.add('questions__question--question');
        question_question_p.innerText = question.question;

        let question_answers_div = document.createElement('div');
        question_answers_div.classList.add('questions__question--answers');

        let answer1_btn = document.createElement('button');
        answer1_btn.classList.add(`q${question.number}a1`);
        answer1_btn.innerText = question.answers[0];

        let answer2_btn = document.createElement('button');
        answer2_btn.classList.add(`q${question.number}a2`);
        answer2_btn.innerText = questions[0].answers[1];

        let answer3_btn = document.createElement('button');
        answer3_btn.classList.add(`q${question.number}a3`);
        answer3_btn.innerText = question.answers[2];

        let answer4_btn = document.createElement('button');
        answer4_btn.classList.add(`q${question.number}a4`);
        answer4_btn.innerText = question.answers[3];

        let answer5_btn = document.createElement('button');
        answer5_btn.classList.add(`q${question.number}a5`);
        answer5_btn.innerText = question.answers[4];

        const questionsWrapper = document.querySelector('.questions');
        questionsWrapper.appendChild(question_div);
        question_div.appendChild(question_header_div);
        question_header_div.appendChild(question_number_p);
        question_header_div.appendChild(question_rightA_p);
        question_rightA_p.appendChild(check_mark_i);
        question_header_div.appendChild(question_wrongA_p);
        question_wrongA_p.appendChild(times_mark_i);
        question_div.appendChild(question_question_p);
        question_div.appendChild(question_answers_div);
        question_answers_div.appendChild(answer1_btn);
        question_answers_div.appendChild(answer2_btn);
        question_answers_div.appendChild(answer3_btn);
        question_answers_div.appendChild(answer4_btn);
        question_answers_div.appendChild(answer5_btn);

        function updateQuestions(){
            questionsWrapper.innerHTML = "";
            addQuestions();
        }

        function nextQuestion() {
            question.selected = false;
            if (index < questions.length - 1) {
                questions[index + 1].selected = true;
            }
        }

        function updateCounter(typeOfAnswer) {
            if (typeOfAnswer == 'rightAnswers') {
                rightAnswers++;
                document.querySelector('.questionsPage__results--rights').innerHTML = rightAnswers;
            }
            if (typeOfAnswer == 'wrongAnswers') {
                wrongAnswers++;
                document.querySelector('.questionsPage__results--wrongs').innerHTML = wrongAnswers;
            }
        }

        function checkAnswer(button) {
            if (button.innerText == question.correctAnswer) {
                updateCounter('rightAnswers');
                nextQuestion();
                updateQuestions();
            } else {
                updateCounter('wrongAnswers');
                nextQuestion();
                updateQuestions();
            }
        }

        // The logic behind answers
        if (question.selected) {
            answer1_btn.addEventListener('click', () => { checkAnswer(answer1_btn) });
            answer2_btn.addEventListener('click', () => { checkAnswer(answer2_btn) });
            answer3_btn.addEventListener('click', () => { checkAnswer(answer3_btn) });
            answer4_btn.addEventListener('click', () => { checkAnswer(answer4_btn) });
            answer5_btn.addEventListener('click', () => { checkAnswer(answer5_btn) });
        }
    });
}
addQuestions();





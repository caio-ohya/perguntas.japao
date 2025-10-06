const questions = [
    {
        question: "Qual é a capital do Japão?",
        options: ["Tóquio", "Quioto", "Osaka", "Hokkaido"],
        correctAnswer: "Tóquio"
    },
    {
        question: "Qual é a moeda oficial do Japão?",
        options: ["Yuan", "Dólar", "Iene", "Won"],
        correctAnswer: "Iene"
    },
    {
        question: "O Monte Fuji está localizado em qual cidade?",
        options: ["Tóquio", "Kyoto", "Fuji", "Hakone"],
        correctAnswer: "Fuji"
    },
    {
        question: "Qual é o nome do famoso parque de diversões em Osaka?",
        options: ["Disneyland", "Universal Studios Japan", "Legoland", "Epcot"],
        correctAnswer: "Universal Studios Japan"
    },
    {
        question: "Em que ano o Japão sediou as Olimpíadas?",
        options: ["2020", "2016", "2008", "1992"],
        correctAnswer: "2020"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const options = document.querySelectorAll('.option');
    
    options.forEach((option, index) => {
        option.textContent = question.options[index];
    });

    document.getElementById('result').textContent = ''; // Limpar o resultado da pergunta anterior
}

function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (answer === correctAnswer) {
        score++;
        document.getElementById('result').textContent = "Resposta correta!";
    } else {
        document.getElementById('result').textContent = `Resposta errada! A resposta correta é ${correctAnswer}.`;
    }

    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById('next-button').style.display = 'none';
    } else {
        document.getElementById('quiz-container').innerHTML = `<h2>Fim do Jogo! Você acertou ${score} de ${questions.length} perguntas.</h2>`;
        document.getElementById('next-button').style.display = 'none';
    }
}

loadQuestion();

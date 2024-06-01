const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-screen');
const startScreen = document.getElementById('start-screen');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const replyElement = document.getElementById('reply');



let shuffledQuestions, currentQuestionIndex;
let score = 0;

startButton.addEventListener('click', startGame);

function startGame() {
    startScreen.classList.add('hide');
    questionContainer.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    replyElement.textContent = '';
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    const correctAnswer = shuffledQuestions[currentQuestionIndex].answers.find(answer => answer.correct).text;

    if (correct) {
        score++;
        replyElement.textContent = `Correct! The answer is: ${correctAnswer}`;
        document.getElementById("score").innerHTML = "Score: " + score;
    } else {
        replyElement.textContent = `Incorrect! The correct answer is: ${correctAnswer}`;
        document.getElementById("score").innerHTML = "Score: 0";
        score=0;
    }

    // Disable buttons after answering
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
    });

    // Move to next question after a short delay
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex >= shuffledQuestions.length) {
            currentQuestionIndex = 0;
            shuffledQuestions = questions.sort(() => Math.random() - 0.5);
        }
        setNextQuestion();
    }, 2000); // 2 seconds delay
}

const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Paris', correct: true },
            { text: 'London', correct: false },
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false }
        ]
    },
    {
        question: 'Who is the CEO of Tesla?',
        answers: [
            { text: 'Jeff Bezos', correct: false },
            { text: 'Elon Musk', correct: true },
            { text: 'Bill Gates', correct: false },
            { text: 'Warren Buffet', correct: false }
        ]
    },
    {
        question: 'What is the smallest prime number?',
        answers: [
            { text: '0', correct: false },
            { text: '1', correct: false },
            { text: '2', correct: true },
            { text: '3', correct: false }
        ]
    },
    {

    question: 'What is the capital of South Korea?',
    answers: [
        { text: 'Busan', correct: false },
        { text: 'Seoul', correct: true },
        { text: 'Incheon', correct: false },
        { text: 'Daegu', correct: false }
    ]
},

{
    question: 'Who was the first female Prime Minister of the United Kingdom?',
    answers: [
        { text: 'Margaret Thatcher', correct: true },
        { text: 'Theresa May', correct: false },
        { text: 'Angela Merkel', correct: false },
        { text: 'Jacinda Ardern', correct: false }
    ]
},
{
    question: 'What is the largest desert in the world?',
    answers: [
        { text: 'Gobi Desert', correct: false },
        { text: 'Sahara Desert', correct: true },
        { text: 'Arabian Desert', correct: false },
        { text: 'Antarctic Desert', correct: false }
    ]
},
{
    question: 'Who wrote "The Great Gatsby"?',
    answers: [
        { text: 'F. Scott Fitzgerald', correct: true },
        { text: 'Ernest Hemingway', correct: false },
        { text: 'Mark Twain', correct: false },
        { text: 'J.D. Salinger', correct: false }
    ]
},
{
    question: 'What is the chemical symbol for potassium?',
    answers: [
        { text: 'K', correct: true },
        { text: 'Po', correct: false },
        { text: 'Pt', correct: false },
        { text: 'Pu', correct: false }
    ]
},
{
    question: 'Who is the author of "War and Peace"?',
    answers: [
        { text: 'Leo Tolstoy', correct: true },
        { text: 'Fyodor Dostoevsky', correct: false },
        { text: 'Anton Chekhov', correct: false },
        { text: 'Nikolai Gogol', correct: false }
    ]
},
{
    question: 'Which country is known as the Land of the Rising Sun?',
    answers: [
        { text: 'China', correct: false },
        { text: 'Japan', correct: true },
        { text: 'South Korea', correct: false },
        { text: 'Vietnam', correct: false }
    ]
},
{
    question: 'Who painted "The Persistence of Memory"?',
    answers: [
        { text: 'Vincent van Gogh', correct: false },
        { text: 'Pablo Picasso', correct: false },
        { text: 'Salvador Dalí', correct: true },
        { text: 'Claude Monet', correct: false }
    ]
},
{
    question: 'What is the largest organ in the human body?',
    answers: [
        { text: 'Liver', correct: false },
        { text: 'Skin', correct: true },
        { text: 'Lungs', correct: false },
        { text: 'Brain', correct: false }
    ]
},
{
    question: 'Who composed the opera "The Marriage of Figaro"?',
    answers: [
        { text: 'Wolfgang Amadeus Mozart', correct: true },
        { text: 'Ludwig van Beethoven', correct: false },
        { text: 'Johann Sebastian Bach', correct: false },
        { text: 'Richard Wagner', correct: false }
    ]
},
{
    question: 'What is the capital of Brazil?',
    answers: [
        { text: 'Rio de Janeiro', correct: false },
        { text: 'Brasília', correct: true },
        { text: 'São Paulo', correct: false },
        { text: 'Salvador', correct: false }
    ]
},
{
    question: 'Who discovered penicillin?',
    answers: [
        { text: 'Alexander Fleming', correct: true },
        { text: 'Marie Curie', correct: false },
        { text: 'Jonas Salk', correct: false },
        { text: 'Louis Pasteur', correct: false }
    ]
},
{
    question: 'What is the chemical symbol for silver?',
    answers: [
        { text: 'Si', correct: false },
        { text: 'Ag', correct: true },
        { text: 'Au', correct: false },
        { text: 'Sr', correct: false }
    ]
},
{
    question: 'Who is known as the "Father of Modern Philosophy"?',
    answers: [
        { text: 'Aristotle', correct: false },
        { text: 'Rene Descartes', correct: true },
        { text: 'Plato', correct: false },
        { text: 'Socrates', correct: false }
    ]
},
{
    question: 'What is the chemical symbol for lead?',
    answers: [
        { text: 'Le', correct: false },
        { text: 'Pb', correct: true },
        { text: 'Ld', correct: false },
        { text: 'Pl', correct: false }
    ]
},
{
    question: 'Who composed the "Moonlight Sonata"?',
    answers: [
        { text: 'Wolfgang Amadeus Mozart', correct: false },
        { text: 'Ludwig van Beethoven', correct: true },
        { text: 'Johann Sebastian Bach', correct: false },
        { text: 'Franz Schubert', correct: false }
    ]
},
{
    question: 'What is the currency of Switzerland?',
    answers: [
        { text: 'Euro', correct: false },
        { text: 'Swiss Franc', correct: true },
        { text: 'Pound Sterling', correct: false },
        { text: 'Dollar', correct: false }
    ]
},
{
    question: 'Who wrote "The Catcher in the Rye"?',
    answers: [
        { text: 'J.D. Salinger', correct: true },
        { text: 'F. Scott Fitzgerald', correct: false },
        { text: 'Ernest Hemingway', correct: false },
        { text: 'Mark Twain', correct: false }
    ]
},
{
    question: 'What is the chemical symbol for mercury?',
    answers: [
        { text: 'Hg', correct: true },
        { text: 'Me', correct: false },
        { text: 'Mr', correct: false },
        { text: 'Mg', correct: false }
    ]
},
{
    question: 'Who was the first person to fly solo across the Atlantic Ocean?',
    answers: [
        { text: 'Charles Lindbergh', correct: true },
        { text: 'Amelia Earhart', correct: false },
        { text: 'Orville Wright', correct: false },
        { text: 'Wilbur Wright', correct: false }
    ]
},
{
    question: 'What is the main ingredient in guacamole?',
    answers: [
        { text: 'Tomato', correct: false },
        { text: 'Avocado', correct: true },
        { text: 'Onion', correct: false },
        { text: 'Lemon', correct: false }
    ]
},
{
    question: 'Who painted "The Last Supper"?',
    answers: [
        { text: 'Raphael', correct: false },
        { text: 'Michelangelo', correct: false },
        { text: 'Leonardo da Vinci', correct: true },
        { text: 'Donatello', correct: false }
    ]
},
{
    question: 'What is the longest river in the world?',
    answers: [
        { text: 'Nile', correct: false },
        { text: 'Amazon', correct: true },
        { text: 'Yangtze', correct: false },
        { text: 'Mississippi', correct: false }
    ]
},
{
    question: 'Who was the first American woman in space?',
    answers: [
        { text: 'Sally Ride', correct: true },
        { text: 'Valentina Tereshkova', correct: false },
        { text: 'Judith Resnik', correct: false },
        { text: 'Mae Jemison', correct: false }
    ]
},

{
    question: 'What is the capital city of Australia?',
    answers: [
        { text: 'Sydney', correct: false },
        { text: 'Melbourne', correct: false },
        { text: 'Canberra', correct: true },
        { text: 'Brisbane', correct: false }
    ]
},
{
    question: 'Who wrote "Brave New World"?',
    answers: [
        { text: 'George Orwell', correct: false },
        { text: 'Aldous Huxley', correct: true },
        { text: 'Ray Bradbury', correct: false },
        { text: 'H.G. Wells', correct: false }
    ]
},
{
    question: 'Which element has the highest melting point?',
    answers: [
        { text: 'Iron', correct: false },
        { text: 'Tungsten', correct: true },
        { text: 'Platinum', correct: false },
        { text: 'Carbon', correct: false }
    ]
},
{
    question: 'What is the largest organ in the human body?',
    answers: [
        { text: 'Heart', correct: false },
        { text: 'Liver', correct: false },
        { text: 'Skin', correct: true },
        { text: 'Lungs', correct: false }
    ]
},

{
    question: 'Which planet has the most moons?',
    answers: [
        { text: 'Earth', correct: false },
        { text: 'Mars', correct: false },
        { text: 'Jupiter', correct: true },
        { text: 'Saturn', correct: false }
    ]
},
{
    question: 'What is the smallest unit of life?',
    answers: [
        { text: 'Atom', correct: false },
        { text: 'Cell', correct: true },
        { text: 'Molecule', correct: false },
        { text: 'Organ', correct: false }
    ]
},
{
    question: 'Who is the author of "The Divine Comedy"?',
    answers: [
        { text: 'Homer', correct: false },
        { text: 'Virgil', correct: false },
        { text: 'Dante Alighieri', correct: true },
        { text: 'Geoffrey Chaucer', correct: false }
    ]
},
{
    question: 'Which country has the most natural lakes?',
    answers: [
        { text: 'United States', correct: false },
        { text: 'Canada', correct: true },
        { text: 'Russia', correct: false },
        { text: 'Finland', correct: false }
    ]
},
{
    question: 'What is the main ingredient in the Japanese drink sake?',
    answers: [
        { text: 'Barley', correct: false },
        { text: 'Rice', correct: true },
        { text: 'Corn', correct: false },
        { text: 'Wheat', correct: false }
    ]
},
{
    question: 'What is the highest mountain in Africa?',
    answers: [
        { text: 'Mount Kenya', correct: false },
        { text: 'Mount Kilimanjaro', correct: true },
        { text: 'Mount Elgon', correct: false },
        { text: 'Mount Meru', correct: false }
    ]
},
{
    question: 'Which scientist is known for the laws of motion?',
    answers: [
        { text: 'Albert Einstein', correct: false },
        { text: 'Isaac Newton', correct: true },
        { text: 'Galileo Galilei', correct: false },
        { text: 'Niels Bohr', correct: false }
    ]
},
{
    question: 'What is the capital of Iceland?',
    answers: [
        { text: 'Oslo', correct: false },
        { text: 'Helsinki', correct: false },
        { text: 'Reykjavik', correct: true },
        { text: 'Stockholm', correct: false }
    ]
},
{
    question: 'Who is known as the "Father of Geometry"?',
    answers: [
        { text: 'Pythagoras', correct: false },
        { text: 'Archimedes', correct: false },
        { text: 'Euclid', correct: true },
        { text: 'Aristotle', correct: false }
    ]
},
{
    question: 'What is the primary language spoken in Switzerland?',
    answers: [
        { text: 'French', correct: false },
        { text: 'Italian', correct: false },
        { text: 'Romansh', correct: false },
        { text: 'German', correct: true }
    ]
},
{
    question: 'What element does "O" represent on the periodic table?',
    answers: [
        { text: 'Osmium', correct: false },
        { text: 'Oxygen', correct: true },
        { text: 'Oganesson', correct: false },
        { text: 'Osmium', correct: false }
    ]
},
{
    question: 'Who was the first President of the United States?',
    answers: [
        { text: 'Thomas Jefferson', correct: false },
        { text: 'Abraham Lincoln', correct: false },
        { text: 'George Washington', correct: true },
        { text: 'John Adams', correct: false }
    ]
},
{
    question: 'What is the largest mammal in the world?',
    answers: [
        { text: 'Elephant', correct: false },
        { text: 'Blue Whale', correct: true },
        { text: 'Giraffe', correct: false },
        { text: 'Hippopotamus', correct: false }
    ]
},

{
    question: 'Who developed the theory of evolution by natural selection?',
    answers: [
        { text: 'Gregor Mendel', correct: false },
        { text: 'Jean-Baptiste Lamarck', correct: false },
        { text: 'Charles Darwin', correct: true },
        { text: 'Alfred Russel Wallace', correct: false }
    ]
},

    {
        question: 'What is the chemical symbol for water?',
        answers: [
            { text: 'WO', correct: false },
            { text: 'H2O', correct: true },
            { text: 'HO2', correct: false },
            { text: 'H2O2', correct: false }
        ]
    },
    {
        question: 'Which planet in our solar system is known as the Red Planet?',
        answers: [
            { text: 'Mars', correct: true },
            { text: 'Venus', correct: false },
            { text: 'Jupiter', correct: false },
            { text: 'Saturn', correct: false }
        ]
    },
    {
        question: 'What gas do plants absorb from the atmosphere?',
        answers: [
            { text: 'Oxygen', correct: false },
            { text: 'Nitrogen', correct: false },
            { text: 'Carbon Dioxide', correct: true },
            { text: 'Hydrogen', correct: false }
        ]
    },
    {
        question: 'What is the powerhouse of the cell?',
        answers: [
            { text: 'Nucleus', correct: false },
            { text: 'Ribosome', correct: false },
            { text: 'Mitochondrion', correct: true },
            { text: 'Golgi apparatus', correct: false }
        ]
    },
    {
        question: 'What is the most abundant gas in the atmosphere?',
        answers: [
            { text: 'Oxygen', correct: false },
            { text: 'Hydrogen', correct: false },
            { text: 'Nitrogen', correct: true },
            { text: 'Carbon Dioxide', correct: false }
        ]
    },

    {
        question: 'What part of the cell contains the genetic material?',
        answers: [
            { text: 'Nucleus', correct: true },
            { text: 'Cytoplasm', correct: false },
            { text: 'Cell membrane', correct: false },
            { text: 'Mitochondrion', correct: false }
        ]
    },
    {
        question: 'What force keeps us on the ground?',
        answers: [
            { text: 'Magnetism', correct: false },
            { text: 'Gravity', correct: true },
            { text: 'Friction', correct: false },
            { text: 'Tension', correct: false }
        ]
    },
    {
        question: 'Which planet is known for having a prominent ring system?',
        answers: [
            { text: 'Jupiter', correct: false },
            { text: 'Uranus', correct: false },
            { text: 'Saturn', correct: true },
            { text: 'Neptune', correct: false }
        ]
    },
    {
        question: 'What is the basic unit of life?',
        answers: [
            { text: 'Atom', correct: false },
            { text: 'Molecule', correct: false },
            { text: 'Cell', correct: true },
            { text: 'Organ', correct: false }
        ]
    },
    {
        question: 'What is the most common element in the human body?',
        answers: [
            { text: 'Oxygen', correct: true },
            { text: 'Carbon', correct: false },
            { text: 'Hydrogen', correct: false },
            { text: 'Nitrogen', correct: false }
        ]
    },
    {
        question: 'What is the chemical formula for salt?',
        answers: [
            { text: 'NaCl', correct: true },
            { text: 'KCl', correct: false },
            { text: 'CaCl2', correct: false },
            { text: 'MgCl2', correct: false }
        ]
    },
    {
        question: 'What type of celestial object is the sun?',
        answers: [
            { text: 'Planet', correct: false },
            { text: 'Star', correct: true },
            { text: 'Comet', correct: false },
            { text: 'Asteroid', correct: false }
        ]
    },
    {
        question: 'What is the center of an atom called?',
        answers: [
            { text: 'Proton', correct: false },
            { text: 'Neutron', correct: false },
            { text: 'Nucleus', correct: true },
            { text: 'Electron', correct: false }
        ]
    },
    {
        question: 'Which planet is closest to the sun?',
        answers: [
            { text: 'Venus', correct: false },
            { text: 'Mars', correct: false },
            { text: 'Mercury', correct: true },
            { text: 'Earth', correct: false }
        ]
    },
    {
        question: 'What is the chemical symbol for gold?',
        answers: [
            { text: 'Gd', correct: false },
            { text: 'Ag', correct: false },
            { text: 'Au', correct: true },
            { text: 'Pb', correct: false }
        ]
    },
    {
        question: 'What is the primary gas found in the air we breathe?',
        answers: [
            { text: 'Oxygen', correct: false },
            { text: 'Hydrogen', correct: false },
            { text: 'Nitrogen', correct: true },
            { text: 'Carbon Dioxide', correct: false }
        ]
    },

    {
        question: 'What type of bond involves the sharing of electron pairs between atoms?',
        answers: [
            { text: 'Ionic bond', correct: false },
            { text: 'Covalent bond', correct: true },
            { text: 'Hydrogen bond', correct: false },
            { text: 'Metallic bond', correct: false }
        ]
    },
    {
        question: 'What planet is known as the "Blue Planet"?',
        answers: [
            { text: 'Earth', correct: true },
            { text: 'Neptune', correct: false },
            { text: 'Uranus', correct: false },
            { text: 'Saturn', correct: false }
        ]
    },
    {
        question: 'What is the process by which plants make their food using sunlight?',
        answers: [
            { text: 'Respiration', correct: false },
            { text: 'Digestion', correct: false },
            { text: 'Photosynthesis', correct: true },
            { text: 'Transpiration', correct: false }
        ]
    },
    {
        question: 'Which part of the plant conducts photosynthesis?',
        answers: [
            { text: 'Roots', correct: false },
            { text: 'Stem', correct: false },
            { text: 'Leaves', correct: true },
            { text: 'Flowers', correct: false }
        ]
    },
    {
        question: 'What is the smallest particle of an element?',
        answers: [
            { text: 'Molecule', correct: false },
            { text: 'Atom', correct: true },
            { text: 'Proton', correct: false },
            { text: 'Electron', correct: false }
        ]
    },
    
  
    {
        question: 'Which planet is known for its Great Red Spot?',
        answers: [
            { text: 'Mars', correct: false },
            { text: 'Jupiter', correct: true },
            { text: 'Saturn', correct: false },
            { text: 'Neptune', correct: false }
        ]
    },
    {
        question: 'What is the most abundant element in the Earth’s crust?',
        answers: [
            { text: 'Oxygen', correct: true },
            { text: 'Silicon', correct: false },
            { text: 'Aluminum', correct: false },
            { text: 'Iron', correct: false }
        ]
    },
    {
        question: 'What is the chemical symbol for potassium?',
        answers: [
            { text: 'P', correct: false },
            { text: 'K', correct: true },
            { text: 'Pt', correct: false },
            { text: 'Pb', correct: false }
        ]
    },
    {
        question: 'Which organelle is known as the control center of the cell?',
        answers: [
            { text: 'Mitochondrion', correct: false },
            { text: 'Nucleus', correct: true },
            { text: 'Ribosome', correct: false },
            { text: 'Golgi apparatus', correct: false }
        ]
    },
    {
        question: 'What is the study of fungi called?',
        answers: [
            { text: 'Botany', correct: false },
            { text: 'Zoology', correct: false },
            { text: 'Mycology', correct: true },
            { text: 'Geology', correct: false }
        ]
    },
   
    {
        question: 'Which planet is known as the "Morning Star" or "Evening Star"?',
        answers: [
            { text: 'Mars', correct: false },
            { text: 'Venus', correct: true },
            { text: 'Mercury', correct: false },
            { text: 'Jupiter', correct: false }
        ]
    },
    
    {
        question: 'What is the hardest natural substance on Earth?',
        answers: [
            { text: 'Gold', correct: false },
            { text: 'Iron', correct: false },
            { text: 'Diamond', correct: true },
            { text: 'Quartz', correct: false }
        ]
    },
    {
        question: 'Which gas is essential for human respiration?',
        answers: [
            { text: 'Oxygen', correct: true },
            { text: 'Hydrogen', correct: false },
            { text: 'Nitrogen', correct: false },
            { text: 'Carbon Dioxide', correct: false }
        ]
    },
    {
        question: 'What is the main component of the sun?',
        answers: [
            { text: 'Oxygen', correct: false },
            { text: 'Helium', correct: false },
            { text: 'Hydrogen', correct: true },
            { text: 'Carbon', correct: false }
        ]
    },

    {
        question: 'What is the study of the universe beyond Earth’s atmosphere called?',
        answers: [
            { text: 'Geology', correct: false },
            { text: 'Meteorology', correct: false },
            { text: 'Astronomy', correct: true },
            { text: 'Oceanography', correct: false }
        ]
    },
    
   
  
    {
        question: 'What is the chemical symbol for gold?',
        answers: [
            { text: 'Gd', correct: false },
            { text: 'Ag', correct: false },
            { text: 'Au', correct: true },
            { text: 'Pb', correct: false }
        ]
    },
    {
        question: 'What is the process by which a liquid turns into a gas?',
        answers: [
            { text: 'Condensation', correct: false },
            { text: 'Evaporation', correct: true },
            { text: 'Sublimation', correct: false },
            { text: 'Deposition', correct: false }
        ]
    },
    {
        question: 'What is the chemical symbol for the element with atomic number 1?',
        answers: [
            { text: 'O', correct: false },
            { text: 'H', correct: true },
            { text: 'He', correct: false },
            { text: 'Li', correct: false }
        ]
    },
   
        {
            question: 'What is the name of the tallest grass on earth?',
            answers: [
                { text: 'Wheat', correct: false },
                { text: 'Bamboo', correct: true },
                { text: 'Sugarcane', correct: false },
                { text: 'Corn', correct: false }
            ]
        },

        {
            question: 'What is the hardest natural substance on Earth?',
            answers: [
                { text: 'Gold', correct: false },
                { text: 'Iron', correct: false },
                { text: 'Diamond', correct: true },
                { text: 'Quartz', correct: false }
            ]
        },
        {
            question: 'What is the study of mushrooms called?',
            answers: [
                { text: 'Botany', correct: false },
                { text: 'Zoology', correct: false },
                { text: 'Mycology', correct: true },
                { text: 'Geology', correct: false }
            ]
        },
        {
            question: 'Can an airplane go in reverse?',
            answers: [
                { text: 'Yes', correct: true },
                { text: 'No', correct: false }
            ]
        },
        {
            question: 'Does sound travel faster in the air or in water?',
            answers: [
                { text: 'Air', correct: false },
                { text: 'Water', correct: true }
            ]
        },
        {
            question: 'Which oath of ethics taken by doctors is named after an Ancient Greek physician?',
            answers: [
                { text: 'The Socratic Oath', correct: false },
                { text: 'The Hippocratic Oath', correct: true },
                { text: 'The Galenic Oath', correct: false },
                { text: 'The Asclepian Oath', correct: false }
            ]
        },
        {
            question: 'Which freezes faster, hot water or cold water?',
            answers: [
                { text: 'Hot water', correct: true },
                { text: 'Cold water', correct: false },
                { text: 'They freeze at the same time', correct: false },
                { text: 'It depends on the container', correct: false }
            ]
        },
        {
            question: 'On what continent will you not find bees?',
            answers: [
                { text: 'Africa', correct: false },
                { text: 'Antarctica', correct: true },
                { text: 'Australia', correct: false },
                { text: 'Asia', correct: false }
            ]
        },
        {
            question: 'What is the only rock that floats?',
            answers: [
                { text: 'Granite', correct: false },
                { text: 'Pumice', correct: true },
                { text: 'Basalt', correct: false },
                { text: 'Limestone', correct: false }
            ]
        },
        {
            question: 'True or False? Chameleons change colors only to blend into their environment.',
            answers: [
                { text: 'True', correct: false },
                { text: 'False', correct: true }
            ]
        },
        {
            question: 'Can lightning strike the same place twice?',
            answers: [
                { text: 'Yes', correct: true },
                { text: 'No', correct: false }
            ]
        },
        {
            question: 'True or false? Shark cartilage can cure cancer.',
            answers: [
                { text: 'True', correct: false },
                { text: 'False', correct: true }
            ]
        },
        {
            question: 'How long is the memory of a goldfish?',
            answers: [
                { text: '3 seconds', correct: false },
                { text: '3 minutes', correct: false },
                { text: '3 days', correct: true },
                { text: '3 months', correct: false }
            ]
        },
        {
            question: 'What mountain peak is farthest from the center of the Earth?',
            answers: [
                { text: 'Mount Everest', correct: false },
                { text: 'K2', correct: false },
                { text: 'Chimborazo', correct: true },
                { text: 'Kilimanjaro', correct: false }
            ]
        },
        {
            question: 'How many bones do sharks have in their bodies?',
            answers: [
                { text: '0', correct: true },
                { text: '206', correct: false },
                { text: '108', correct: false },
                { text: '56', correct: false }
            ]
        },
        {
            question: 'Can gold be created from other elements?',
            answers: [
                { text: 'Yes', correct: true },
                { text: 'No', correct: false }
            ]
        },
        {
            question: 'What is the heaviest organ in the human body?',
            answers: [
                { text: 'Brain', correct: false },
                { text: 'Heart', correct: false },
                { text: 'Liver', correct: true },
                { text: 'Skin', correct: false }
            ]
        },
        {
            question: 'How does fat leave your body when you lose weight?',
            answers: [
                { text: 'Sweat only', correct: false },
                { text: 'Urine only', correct: false },
                { text: 'Sweat, urine, and breath', correct: true },
                { text: 'It converts to muscle', correct: false }
            ]
        },
        {
            question: 'From which body part does the majority of your body heat escape?',
            answers: [
                { text: 'Head', correct: false },
                { text: 'Hands', correct: false },
                { text: 'Feet', correct: false },
                { text: 'Evenly throughout the body', correct: true }
            ]
        },
        {
            question: 'How many senses do humans have?',
            answers: [
                { text: '5', correct: false },
                { text: '9 or more', correct: true },
                { text: '6', correct: false },
                { text: '4', correct: false }
            ]
        },
        {
            question: 'Which blood type is the rarest in humans?',
            answers: [
                { text: 'O negative', correct: false },
                { text: 'AB negative', correct: true },
                { text: 'B negative', correct: false },
                { text: 'A negative', correct: false }
            ]
        },
        {
            question: 'What is the largest desert in the world?',
            answers: [
                { text: 'Sahara', correct: false },
                { text: 'Antarctica', correct: true }
            ]
        },
        {
            question: 'True or False? Lasers work by focusing on sound waves.',
            answers: [
                { text: 'True', correct: false },
                { text: 'False', correct: true }
            ]
        },
        {
            question: 'What does DNA stand for?',
            answers: [
                { text: 'Deoxyribonucleic acid', correct: true },
                { text: 'Dyribonucleic acid', correct: false }
            ]
        },
        {
            question: 'Do diamonds last forever?',
            answers: [
                { text: 'Yes', correct: false },
                { text: 'No', correct: true }
            ]
        },
        {
            question: 'What is a material that will not carry an electrical charge called?',
            answers: [
                { text: 'Conductor', correct: false },
                { text: 'Insulator', correct: true }
            ]
        },
        {
            question: 'Will there be an impact on your height if you go to space?',
            answers: [
                { text: 'Yes', correct: true },
                { text: 'No', correct: false }
            ]
        },
        {
            question: 'At what temperature are Celsius and Fahrenheit equal?',
            answers: [
                { text: '-40', correct: true },
                { text: '0', correct: false }
            ]
        },
        {
            question: 'Roughly how long does it take for the sun’s light to reach Earth: 8 minutes, 8 hours or 8 days?',
            answers: [
                { text: '8 minutes', correct: true },
                { text: '8 hours', correct: false },
                { text: '8 days', correct: false }
            ]
        },
        {
            question: 'How do airplanes stay in the air?',
            answers: [
                { text: 'Due to the shape of their wings', correct: true },
                { text: 'By the force of the engines', correct: false }
            ]
        },
        {
            question: 'What is chalk made of?',
            answers: [
                { text: 'Limestone', correct: true },
                { text: 'Gypsum', correct: false }
            ]
        },
        {
            question: "What is the capital city of Mongolia?",
            answers: [
                { text: "Ulaanbaatar", correct: true },
                { text: "Astana", correct: false },
                { text: "Beijing", correct: false },
                { text: "Seoul", correct: false }
            ]
        },
        {
            question: "What is the rarest blood type among humans?",
            answers: [
                { text: "O-negative", correct: false },
                { text: "AB-negative", correct: true },
                { text: "B-negative", correct: false },
                { text: "A-negative", correct: false }
            ]
        },
        {
            question: "How many wives did King Henry VIII have?",
            answers: [
                { text: "Four", correct: false },
                { text: "Five", correct: false },
                { text: "Six", correct: true },
                { text: "Seven", correct: false }
            ]
        },
        {
            question: "In which year did Serena Williams win her first Grand Slam singles title?",
            answers: [
                { text: "1997 (French Open)", correct: false },
                { text: "1999 (US Open)", correct: true },
                { text: "2001 (Wimbledon)", correct: false },
                { text: "2003 (Australian Open)", correct: false }
            ]
        },
        {
            question: "In what year and in which city were the first modern Olympic Games held?",
            answers: [
                { text: "1892 in Paris, France", correct: false },
                { text: "1896 in Athens, Greece", correct: true },
                { text: "1900 in London, UK", correct: false },
                { text: "1904 in St. Louis, USA", correct: false }
            ]
        },
        {
            question: "What is the specific term used to describe a type of sandstorm characterized by strong winds carrying a wall of dust and sand, reducing visibility and causing hazardous conditions?",
            answers: [
                { text: "Dust devil", correct: false },
                { text: "Blizzard", correct: false },
                { text: "Haboob", correct: true },
                { text: "Typhoon", correct: false }
            ]
        },
        {
            question: "Benjamin Franklin was a key figure in the drafting of the United States Constitution. Which state did he represent during the Constitutional Convention in 1787?",
            answers: [
                { text: "Virginia", correct: false },
                { text: "Pennsylvania", correct: true },
                { text: "New York", correct: false },
                { text: "Massachusetts", correct: false }
            ]
        },
        {
            question: "Before founding Facebook, Mark Zuckerberg created a website that allowed users to compare the attractiveness of two people side by side. What was the name of this website?",
            answers: [
                { text: "Facecompare", correct: false },
                { text: "FaceMatch", correct: false },
                { text: "Facemash", correct: true },
                { text: "FaceRate", correct: false }
            ]
        },
        {
            question: "In the early 20th century, a soft drink named “Bib-Label Lithiated Lemon-Lime Soda” was known for containing lithium. Which company later acquired this beverage and transformed it into a popular lemon-lime soft drink we know today?",
            answers: [
                { text: "PepsiCo", correct: false },
                { text: "Coca-Cola Company", correct: true },
                { text: "Dr Pepper Snapple Group", correct: false },
                { text: "The Coca-Cola Bottling Company", correct: false }
            ]
        },
        {
            question: "What is the capital city of Bhutan?",
            answers: [
                { text: "Kathmandu", correct: false },
                { text: "Thimphu", correct: true },
                { text: "Dhaka", correct: false },
                { text: "Colombo", correct: false }
            ]
        },
        {
            question: "In mathematics, what is the name for a number that is not a prime number and has more than two factors?",
            answers: [
                { text: "Composite number", correct: true },
                { text: "Odd number", correct: false },
                { text: "Square number", correct: false },
                { text: "Natural number", correct: false }
            ]
        },
        {
            question: "Who is the Greek god of war and son of Zeus and Hera?",
            answers: [
                { text: "Athena", correct: false },
                { text: "Ares", correct: true },
                { text: "Apollo", correct: false },
                { text: "Hermes", correct: false }
            ]
        },
        {
            question: "What is the scientific term for the “little brain” at the base of the brain that coordinates movement and balance?",
            answers: [
                { text: "Hypothalamus", correct: false },
                { text: "Pituitary gland", correct: false },
                { text: "Cerebellum", correct: true },
                { text: "Medulla oblongata", correct: false }
            ]
        },
        {
            question: "What is the chemical symbol for the element mercury?",
            answers: [
                { text: "H", correct: false },
                { text: "Me", correct: false },
                { text: "Mg", correct: false },
                { text: "Hg", correct: true }
            ]
        },
        {
            question: "What is the name of the largest moon of Jupiter?",
            answers: [
                { text: "Callisto", correct: false },
                { text: "Europa", correct: false },
                { text: "Ganymede", correct: true },
                { text: "Io", correct: false }
            ]
        },
        {
            question: "What is the term for a group of flamingos?",
            answers: [
                { text: "Flock", correct: false },
                { text: "Herd", correct: false },
                { text: "Flamboyance", correct: true },
                { text: "Pod", correct: false }
            ]
        },
        {
            question: "What is the only planet that rotates on its side?",
            answers: [
                { text: "Earth", correct: false },
                { text: "Mars", correct: false },
                { text: "Uranus", correct: true },
                { text: "Neptune", correct: false }
            ]
        },
        {
            question: "What is the world record for the longest hiccupping spree?",
            answers: [
                { text: "68 years", correct: true },
                { text: "50 years", correct: false },
                { text: "82 years", correct: false }
            ]
        },
        {
            question: "What is the official animal of Scotland?",
            answers: [
                { text: "Haggis", correct: false },
                { text: "Scottish Terrier", correct: false },
                { text: "Unicorn", correct: true },
                { text: "Highland Cow", correct: false }
            ]
        },
        {
            question: "What animal is known to laugh and has been proven to have a sense of humor?",
            answers: [
                { text: "Dogs", correct: false },
                { text: "Cats", correct: false },
                { text: "Rats", correct: true },
                { text: "Monkeys", correct: false }
            ]
        },
        {
            question: "What fruit is known as the “king of fruits” and is banned in many hotels and public transportation in Southeast Asia due to its strong smell?",
            answers: [
                { text: "Mango", correct: false },
                { text: "Pineapple", correct: false },
                { text: "Durian", correct: true },
                { text: "Jackfruit", correct: false }
            ]
        },
        {
            question: "What is the fear of clowns called?",
            answers: [
                { text: "Acrophobia", correct: false },
                { text: "Arachnophobia", correct: false },
                { text: "Coulrophobia", correct: true },
                { text: "Agoraphobia", correct: false }
            ]
        },
        {
            question: "What animal’s milk is pink?",
            answers: [
                { text: "Cow", correct: false },
                { text: "Goat", correct: false },
                { text: "Hippopotamus", correct: true },
                { text: "Pig", correct: false }
            ]
        },
        {
            question: "What is the northernmost capital city in the world?",
            answers: [
                { text: "Oslo, Norway", correct: false },
                { text: "Helsinki, Finland", correct: false },
                { text: "Reykjavik, Iceland", correct: true },
                { text: "Stockholm, Sweden", correct: false }
            ]
        },
        {
            question: "In what year did the Great Fire of London occur?",
            answers: [
                { text: "1660", correct: false },
                { text: "1664", correct: false },
                { text: "1666", correct: true },
                { text: "1670", correct: false }
            ]
        },
        {
            question: "What year was the very first model of the iPhone released?",
            answers: [
                { text: "2005", correct: false },
                { text: "2006", correct: false },
                { text: "2007", correct: true },
                { text: "2008", correct: false }
            ]
        },
        {
            question: "What’s the shortcut for the “copy” function on most computers?",
            answers: [
                { text: "Ctrl + X", correct: false },
                { text: "Ctrl + C", correct: true },
                { text: "Ctrl + V", correct: false },
                { text: "Ctrl + Z", correct: false }
            ]
        },
        {
            question: "What is often seen as the smallest unit of memory?",
            answers: [
                { text: "Kilobyte", correct: true },
                { text: "Megabyte", correct: false },
                { text: "Gigabyte", correct: false },
                { text: "Terabyte", correct: false }
            ]
        },
        {
            question: "Is Java a type of OS?",
            answers: [
                { text: "Yes", correct: false },
                { text: "No", correct: true }
            ]
        },
        {
            question: "Who is often called the father of the computer?",
            answers: [
                { text: "Steve Jobs", correct: false },
                { text: "Bill Gates", correct: false },
                { text: "Charles Babbage", correct: true },
                { text: "Alan Turing", correct: false }
            ]
        },
        {
            question: "What does 'HTTP' stand for?",
            answers: [
                { text: "HyperText Transfer Protocol", correct: true },
                { text: "HyperTransfer Text Protocol", correct: false },
                { text: "Highway Transfer Protocol", correct: false },
                { text: "HyperText Transmission Protocol", correct: false }
            ]
        },
        {
            question: "What is the name of the man who launched eBay back in 1995?",
            answers: [
                { text: "Mark Zuckerberg", correct: false },
                { text: "Pierre Omidyar", correct: true },
                { text: "Jeff Bezos", correct: false },
                { text: "Elon Musk", correct: false }
            ]
        },
        {
            question: "Which email service is owned by Microsoft?",
            answers: [
                { text: "Gmail", correct: false },
                { text: "Yahoo Mail", correct: false },
                { text: "Outlook", correct: true },
                { text: "AOL Mail", correct: false }
            ]
        },
        {
            question: "Google Chrome, Safari, Firefox, and Explorer are different types of what?",
            answers: [
                { text: "Search engines", correct: false },
                { text: "Operating systems", correct: false },
                { text: "Web browsers", correct: true },
                { text: "Social media platforms", correct: false }
            ]
        },
        {
            question: "What was Twitter’s original name?",
            answers: [
                { text: "Twitt", correct: false },
                { text: "Tweeter", correct: false },
                { text: "Twttr", correct: true },
                { text: "Tweetie", correct: false }
            ]
        },
        {
            question: "Which programming language is often used for developing Android applications?",
            answers: [
                { text: "Python", correct: false },
                { text: "C++", correct: false },
                { text: "Java", correct: true },
                { text: "Swift", correct: false }
            ]
        },
        {
            question: "What is the name of the open-source operating system created by Linus Torvalds?",
            answers: [
                { text: "Ubuntu", correct: false },
                { text: "Fedora", correct: false },
                { text: "Linux", correct: true },
                { text: "Unix", correct: false }
            ]
        },
        {
            question: "In the context of email, what does 'CC' stand for?",
            answers: [
                { text: "Carbon Copy", correct: true },
                { text: "Computer Copy", correct: false },
                { text: "Correct Copy", correct: false },
                { text: "Circulated Copy", correct: false }
            ]
        },
        {
            question: "In computing, what does 'CPU' stand for?",
            answers: [
                { text: "Computer Power Unit", correct: false },
                { text: "Central Processing Unit", correct: true },
                { text: "Computer Processing Unit", correct: false },
                { text: "Central Power Unit", correct: false }
            ]
        },
        {
            question: "Which company developed the first commercially available computer mouse?",
            answers: [
                { text: "Apple", correct: false },
                { text: "IBM", correct: false },
                { text: "Microsoft", correct: false },
                { text: "Xerox", correct: true }
            ]
        },
        {
            question: "Who is often credited with creating the world’s first car?",
            answers: [
                { text: "Henry Ford", correct: false },
                { text: "Karl Benz", correct: true },
                { text: "Gottlieb Daimler", correct: false },
                { text: "Wilhelm Maybach", correct: false }
            ]
        },
        {
            question: "Which animal can be seen on the Porsche logo?",
            answers: [
                { text: "Bull", correct: false },
                { text: "Lion", correct: false },
                { text: "Horse", correct: true },
                { text: "Eagle", correct: false }
            ]
        },
        {
            question: "Which companies are part of the Big Three?",
            answers: [
                { text: "Ford, GM, Toyota", correct: false },
                { text: "Toyota, Honda, Nissan", correct: false },
                { text: "General Motors, Fiat Chrysler Automobiles, and Ford Motor Company", correct: true },
                { text: "Tesla, Volkswagen, BMW", correct: false }
            ]
        },
        {
            question: "Which company owns Bugatti, Lamborghini, Audi, Porsche, and Ducati?",
            answers: [
                { text: "Toyota", correct: false },
                { text: "General Motors", correct: false },
                { text: "Volkswagen", correct: true },
                { text: "Fiat Chrysler Automobiles", correct: false }
            ]
        },
        {
            question: "Which auto brand was the first to offer seat belts?",
            answers: [
                { text: "Ford", correct: false },
                { text: "General Motors", correct: false },
                { text: "Chrysler", correct: false },
                { text: "Nash Motors", correct: true }
            ]
        },
        {
            question: "What does BMW stand for (in English)?",
            answers: [
                { text: "British Motor Works", correct: false },
                { text: "Bavarian Motor Works", correct: true },
                { text: "Berlin Motor Works", correct: false },
                { text: "Benz Motor Works", correct: false }
            ]
        },
        {
            question: "What or who is the Ford Mustang named after?",
            answers: [
                { text: "A horse breed", correct: false },
                { text: "A fictional character", correct: false },
                { text: "A fighter plane from WWII", correct: true },
                { text: "A famous cowboy", correct: false }
            ]
        },
        {
            question: "How many parts (screws and bolts included) does the average car have?",
            answers: [
                { text: "5,000", correct: false },
                { text: "15,000", correct: false },
                { text: "25,000", correct: false },
                { text: "30,000", correct: true }
            ]
        },
        {
            question: "Which car is often called the first muscle car?",
            answers: [
                { text: "Dodge Charger", correct: false },
                { text: "Chevrolet Camaro", correct: false },
                { text: "Ford Mustang", correct: false },
                { text: "Pontiac GTO", correct: true }
            ]
        },
        {
            question: "In what year was the Corvette introduced?",
            answers: [
                { text: "1948", correct: false },
                { text: "1950", correct: false },
                { text: "1953", correct: true },
                { text: "1955", correct: false }
            ]
        },
        {
            question: "Which organ has four chambers?",
            answers: [
                { text: "The liver", correct: false },
                { text: "The heart", correct: true },
                { text: "The lungs", correct: false },
                { text: "The brain", correct: false }
            ]
        },
        {
            question: "In which body part can you find the femur?",
            answers: [
                { text: "Arm", correct: false },
                { text: "Leg", correct: true },
                { text: "Chest", correct: false },
                { text: "Back", correct: false }
            ]
        },
        {
            question: "What is your body’s largest organ?",
            answers: [
                { text: "The liver", correct: false },
                { text: "The heart", correct: false },
                { text: "The skin", correct: true },
                { text: "The brain", correct: false }
            ]
        },
        {
            question: "What kind of cells are found in the brain?",
            answers: [
                { text: "Red blood cells", correct: false },
                { text: "White blood cells", correct: false },
                { text: "Neurons", correct: true },
                { text: "Platelets", correct: false }
            ]
        },
        {
            question: "Which bone are babies born without?",
            answers: [
                { text: "Skull", correct: false },
                { text: "Ribs", correct: false },
                { text: "Knee cap", correct: true },
                { text: "Spine", correct: false }
            ]
        },
        {
            question: "About how many taste buds does the average human tongue have?",
            answers: [
                { text: "5,000", correct: false },
                { text: "7,500", correct: false },
                { text: "10,000", correct: true },
                { text: "15,000", correct: false }
            ]
        },
        {
            question: "What percentage of our bodies is made up of water?",
            answers: [
                { text: "50-55%", correct: false },
                { text: "60-65%", correct: true },
                { text: "70-75%", correct: false },
                { text: "80-85%", correct: false }
            ]
        },
        {
            question: "Which element is said to keep bones strong?",
            answers: [
                { text: "Iron", correct: false },
                { text: "Magnesium", correct: false },
                { text: "Calcium", correct: true },
                { text: "Potassium", correct: false }
            ]
        },
        {
            question: "What does the acronym AIDS stand for?",
            answers: [
                { text: "Autoimmune Infection and Disease Syndrome", correct: false },
                { text: "Acquired Immune Deficiency Syndrome", correct: true },
                { text: "Allergic Inflammation and Disorder Syndrome", correct: false },
                { text: "Advanced Influenza Detection Syndrome", correct: false }
            ]
        },
        {
            question: "How many times does the heartbeat per day?",
            answers: [
                { text: "About 50,000", correct: false },
                { text: "About 75,000", correct: false },
                { text: "About 100,000", correct: true },
                { text: "About 125,000", correct: false }
            ]
        },
        {
            question: "By what name were the Egyptian kings/rulers known?",
            answers: [
                { text: "Pharaohs", correct: true },
                { text: "Emperors", correct: false },
                { text: "Sultans", correct: false },
                { text: "Kings", correct: false }
            ]
        },
        {
            question: "How many Pyramids of Giza were made?",
            answers: [
                { text: "One", correct: false },
                { text: "Two", correct: false },
                { text: "Three", correct: true },
                { text: "Four", correct: false }
            ]
        },
        {
            question: "With which queen was Julius Caesar involved?",
            answers: [
                { text: "Cleopatra", correct: true },
                { text: "Elizabeth I", correct: false },
                { text: "Queen Victoria", correct: false },
                { text: "Mary, Queen of Scots", correct: false }
            ]
        },
        {
            question: "Where did the Franks settle after defeating the Romans?",
            answers: [
                { text: "Greece", correct: false },
                { text: "Italy", correct: false },
                { text: "Gaul", correct: true },
                { text: "Spain", correct: false }
            ]
        },
        {
            question: "How long did the Middle Ages last?",
            answers: [
                { text: "500 years", correct: false },
                { text: "1000 years", correct: true },
                { text: "1500 years", correct: false },
                { text: "2000 years", correct: false }
            ]
        },
        {
            question: "Which religion dominated the Middle Ages?",
            answers: [
                { text: "Christianity", correct: true },
                { text: "Islam", correct: false },
                { text: "Judaism", correct: false },
                { text: "Buddhism", correct: false }
            ]
        },
        {
            question: "In which year did World War I begin?",
            answers: [
                { text: "1905", correct: false },
                { text: "1914", correct: true },
                { text: "1920", correct: false },
                { text: "1939", correct: false }
            ]
        },
        {
            question: "In which country was Adolf Hitler born?",
            answers: [
                { text: "Germany", correct: false },
                { text: "Austria", correct: true },
                { text: "Poland", correct: false },
                { text: "Russia", correct: false }
            ]
        },
        {
            question: "In which city was John F. Kennedy assassinated?",
            answers: [
                { text: "Washington D.C.", correct: false },
                { text: "New York City", correct: false },
                { text: "Los Angeles", correct: false },
                { text: "Dallas", correct: true }
            ]
        },
        {
            question: "On Sunday 18th June 1815, which famous battle took place?",
            answers: [
                { text: "Battle of Hastings", correct: false },
                { text: "Battle of Agincourt", correct: false },
                { text: "Battle of Waterloo", correct: true },
                { text: "Battle of Trafalgar", correct: false }
            ]
        },
        {
            question: "What event marked the beginning of World War I?",
            answers: [
                { text: "The sinking of the Lusitania", correct: false },
                { text: "The assassination of Archduke Franz Ferdinand", correct: true },
                { text: "The signing of the Treaty of Versailles", correct: false },
                { text: "The invasion of Poland", correct: false }
            ]
        },
        {
            question: "Who was the leader of the Soviet Union during World War II?",
            answers: [
                { text: "Vladimir Putin", correct: false },
                { text: "Leon Trotsky", correct: false },
                { text: "Joseph Stalin", correct: true },
                { text: "Mikhail Gorbachev", correct: false }
            ]
        },
        {
            question: "What ancient wonder was located in the city of Alexandria in Egypt?",
            answers: [
                { text: "The Colossus of Rhodes", correct: false },
                { text: "The Hanging Gardens of Babylon", correct: false },
                { text: "The Lighthouse of Alexandria", correct: true },
                { text: "The Mausoleum at Halicarnassus", correct: false }
            ]
        },
        {
            question: "Who was the famous nurse known for her work during the Crimean War and is considered the founder of modern nursing?",
            answers: [
                { text: "Florence Nightingale", correct: true },
                { text: "Clara Barton", correct: false },
                { text: "Mary Seacole", correct: false },
                { text: "Dorothea Dix", correct: false }
            ]
        },
        {
            question: "What was the name of the ship that brought the Pilgrims to America in 1620?",
            answers: [
                { text: "The Mayflower", correct: true },
                { text: "The Santa Maria", correct: false },
                { text: "The Nina", correct: false },
                { text: "The Susan Constant", correct: false }
            ]
        },
        {
            question: "What is the name of the home of the Greek Gods?",
            answers: [
                { text: "Asgard", correct: false },
                { text: "Valhalla", correct: false },
                { text: "Mount Olympus", correct: true },
                { text: "Elysium", correct: false }
            ]
        },
        {
            question: "Which warrior’s weakness was their heel?",
            answers: [
                { text: "Hector", correct: false },
                { text: "Perseus", correct: false },
                { text: "Achilles", correct: true },
                { text: "Theseus", correct: false }
            ]
        },
        {
            question: "Who was the messenger of the gods?",
            answers: [
                { text: "Zeus", correct: false },
                { text: "Apollo", correct: false },
                { text: "Hermes", correct: true },
                { text: "Athena", correct: false }
            ]
        },
        {
            question: "What’s the name of the paradise warriors go to after death?",
            answers: [
                { text: "Asgard", correct: false },
                { text: "Elysium", correct: true },
                { text: "Mount Olympus", correct: false },
                { text: "Valhalla", correct: false }
            ]
        },
        {
            question: "Thor was the son of which God?",
            answers: [
                { text: "Odin", correct: true },
                { text: "Loki", correct: false },
                { text: "Baldr", correct: false },
                { text: "Freyr", correct: false }
            ]
        },
        {
            question: "Romulus and Remus were raised by what animal?",
            answers: [
                { text: "A lion", correct: false },
                { text: "A bear", correct: false },
                { text: "A she-wolf", correct: true },
                { text: "A fox", correct: false }
            ]
        },
        {
            question: "The Roman God of War inspired the name of which planet?",
            answers: [
                { text: "Mercury", correct: false },
                { text: "Mars", correct: true },
                { text: "Venus", correct: false },
                { text: "Jupiter", correct: false }
            ]
        },
        {
            question: "What was the name of the Egyptian God of the Sun?",
            answers: [
                { text: "Osiris", correct: false },
                { text: "Anubis", correct: false },
                { text: "Horus", correct: false },
                { text: "Ra", correct: true }
            ]
        },
        {
            question: "Anubis, the God of Death, had the head of a…",
            answers: [
                { text: "Lion", correct: false },
                { text: "Jackal", correct: true },
                { text: "Hawk", correct: false },
                { text: "Serpent", correct: false }
            ]
        },
        {
            question: "Set throws Osiris into which river, after tricking him into a coffin?",
            answers: [
                { text: "The Nile", correct: true },
                { text: "The Tigris", correct: false },
                { text: "The Euphrates", correct: false },
                { text: "The Jordan", correct: false }
            ]
        },
        {
            question: "What is the legal term for a voluntary written statement made under oath?",
            answers: [
                { text: "Affidavit", correct: true },
                { text: "Deposition", correct: false },
                { text: "Summons", correct: false },
                { text: "Testimony", correct: false }
            ]
        },
        {
            question: "What is the name of the classification of crime which is less serious than a felony?",
            answers: [
                { text: "Felony", correct: false },
                { text: "Misdemeanor", correct: true },
                { text: "Tort", correct: false },
                { text: "Infraction", correct: false }
            ]
        },
        {
            question: "A verdict is a…",
            answers: [
                { text: "Decision or judgment", correct: true },
                { text: "Sentence", correct: false },
                { text: "Indictment", correct: false },
                { text: "Hearing", correct: false }
            ]
        },
        {
            question: "What is evidence in court, where a person tells everything they saw or know?",
            answers: [
                { text: "Affidavit", correct: false },
                { text: "Deposition", correct: false },
                { text: "Testimony", correct: true },
                { text: "Summons", correct: false }
            ]
        },
        {
            question: "Who is the group of people sworn to make a decision/deliver a verdict in court?",
            answers: [
                { text: "Judge", correct: false },
                { text: "Jury", correct: true },
                { text: "Witness", correct: false },
                { text: "Defendant", correct: false }
            ]
        },
        {
            question: "What was the verdict in the O.J. Simpson murder trial?",
            answers: [
                { text: "Guilty", correct: false },
                { text: "Not guilty", correct: true },
                { text: "Mistrial", correct: false },
                { text: "Dismissed", correct: false }
            ]
        },
        {
            question: "How many homicides did Ted Bundy admit to?",
            answers: [
                { text: "20", correct: false },
                { text: "30", correct: true },
                { text: "40", correct: false },
                { text: "50", correct: false }
            ]
        },
        {
            question: "Ted Kaczynski was a former graduate of which university?",
            answers: [
                { text: "Yale University", correct: false },
                { text: "Princeton University", correct: false },
                { text: "Harvard University", correct: true },
                { text: "Stanford University", correct: false }
            ]
        },
        {
            question: "Gregory Lee Johnson was convicted in Texas for what in 1989?",
            answers: [
                { text: "Bank robbery", correct: false },
                { text: "Drug trafficking", correct: false },
                { text: "Murder", correct: false },
                { text: "Burning the flag", correct: true }
            ]
        },
        {
            question: "Butch Cassidy was famous for doing what?",
            answers: [
                { text: "Train robbery", correct: false },
                { text: "Counterfeiting", correct: false },
                { text: "Hijacking", correct: false },
                { text: "Stealing", correct: true }
            ]
        },
        {
            question: "In a courtroom, who is responsible for representing the government in criminal cases?",
            answers: [
                { text: "Defense attorney", correct: false },
                { text: "Prosecutor", correct: true },
                { text: "Judge", correct: false },
                { text: "Bailiff", correct: false }
            ]
        },
        {
            question: "What is the term for the agreement between the prosecution and the accused where the accused pleads guilty in exchange for a lesser sentence?",
            answers: [
                { text: "Plea bargain", correct: true },
                { text: "Probation", correct: false },
                { text: "Alibi", correct: false },
                { text: "Mistrial", correct: false }
            ]
        },
        {
            question: "What criminal organization, led by Al Capone, was notorious during the Prohibition era in the United States?",
            answers: [
                { text: "The Mafia", correct: false },
                { text: "The Triads", correct: false },
                { text: "The Yakuza", correct: false },
                { text: "The Chicago Outfit", correct: true }
            ]
        },
        {
            question: "In 1888, which unidentified serial killer terrorized the Whitechapel district of London and was never apprehended?",
            answers: [
                { text: "Ted Bundy", correct: false },
                { text: "Jeffrey Dahmer", correct: false },
                { text: "Jack the Ripper", correct: true },
                { text: "John Wayne Gacy", correct: false }
            ]
        },
        {
            question: "What is the legal term for the intentional false communication that harms a person’s reputation, often spoken or written?",
            answers: [
                { text: "Perjury", correct: false },
                { text: "Slander", correct: true },
                { text: "Libel", correct: false },
                { text: "Defamation", correct: false }
            ]
        },
        {
            question: "How long is the gestation period of an African elephant?",
            answers: [
                { text: "18 months", correct: false },
                { text: "20 months", correct: false },
                { text: "22 months", correct: true },
                { text: "24 months", correct: false }
            ]
        },
        {
            question: "What’s the scientific name of a wolf?",
            answers: [
                { text: "Canis lupus", correct: true },
                { text: "Canis familiaris", correct: false },
                { text: "Canis aureus", correct: false },
                { text: "Canis latrans", correct: false }
            ]
        },
        {
            question: "What is a female donkey called?",
            answers: [
                { text: "Mare", correct: false },
                { text: "Cow", correct: false },
                { text: "Jenny", correct: true },
                { text: "Sow", correct: false }
            ]
        },
        {
            question: "Which mammal has no vocal cords?",
            answers: [
                { text: "Elephant", correct: false },
                { text: "Giraffe", correct: true },
                { text: "Lion", correct: false },
                { text: "Tiger", correct: false }
            ]
        },
        {
            question: "What’s the fastest land animal in the world?",
            answers: [
                { text: "Lion", correct: false },
                { text: "Cheetah", correct: true },
                { text: "Gazelle", correct: false },
                { text: "Leopard", correct: false }
            ]
        },
        {
            question: "How many eyes does a bee have?",
            answers: [
                { text: "Two", correct: false },
                { text: "Three", correct: false },
                { text: "Four", correct: false },
                { text: "Five", correct: true }
            ]
        },
        {
            question: "Which animal symbolizes good luck in Europe?",
            answers: [
                { text: "Ladybug", correct: true },
                { text: "Butterfly", correct: false },
                { text: "Spider", correct: false },
                { text: "Dragonfly", correct: false }
            ]
        },
        {
            question: "What name is used to refer to a group of frogs?",
            answers: [
                { text: "Pack", correct: false },
                { text: "Herd", correct: false },
                { text: "Army", correct: true },
                { text: "Flock", correct: false }
            ]
        },
        {
            question: "How many hearts does an octopus have?",
            answers: [
                { text: "One", correct: false },
                { text: "Two", correct: false },
                { text: "Three", correct: true },
                { text: "Four", correct: false }
            ]
        },
        {
            question: "Do sponges have hearts?",
            answers: [
                { text: "Yes", correct: false },
                { text: "No", correct: true }
            ]
        },
        {
            question: "What is the world’s largest living reptile?",
            answers: [
                { text: "Saltwater Crocodile", correct: true },
                { text: "Green Anaconda", correct: false },
                { text: "Leatherback Sea Turtle", correct: false },
                { text: "Komodo Dragon", correct: false }
            ]
        },
        {
            question: "What is the largest species of bear?",
            answers: [
                { text: "Polar Bear", correct: true },
                { text: "Brown Bear", correct: false },
                { text: "Grizzly Bear", correct: false },
                { text: "Black Bear", correct: false }
            ]
        },
        {
            question: "What is the only marsupial native to North America?",
            answers: [
                { text: "Kangaroo", correct: false },
                { text: "Wallaby", correct: false },
                { text: "Wombat", correct: false },
                { text: "Opossum", correct: true }
            ]
        },
        {
            question: "Which marine animal is known for its ability to change color and camouflage itself in its surroundings?",
            answers: [
                { text: "Octopus", correct: true },
                { text: "Squid", correct: false },
                { text: "Cuttlefish", correct: false },
                { text: "Sea Horse", correct: false }
            ]
        },
        {
            question: "Which large sea mammal is known for its song-like vocalizations?",
            answers: [
                { text: "Dolphin", correct: false },
                { text: "Whale", correct: true },
                { text: "Seal", correct: false },
                { text: "Manatee", correct: false }
            ]
        },
        {
            question: "How many balls are on a pool table at the start of a game?",
            answers: [
                { text: "16", correct: true },
                { text: "12", correct: false },
                { text: "20", correct: false },
                { text: "14", correct: false }
            ]
        },
        {
            question: "Who invented peanut butter?",
            answers: [
                { text: "George Washington Carver", correct: false },
                { text: "Marcellus Gilmore Edson", correct: true },
                { text: "John Harvey Kellogg", correct: false },
                { text: "Joseph Lambert", correct: false }
            ]
        },
        {
            question: "The films The King's Speech and The English Patient feature which English actor?",
            answers: [
                { text: "Tom Hardy", correct: false },
                { text: "Colin Firth", correct: true },
                { text: "Hugh Grant", correct: false },
                { text: "Daniel Day-Lewis", correct: false }
            ]
        },
        {
            question: "In which comedy film does Aretha Franklin star as a proprietress of a soul food joint?",
            answers: [
                { text: "Trading Places", correct: false },
                { text: "Coming to America", correct: false },
                { text: "The Blues Brothers", correct: true },
                { text: "48 Hrs.", correct: false }
            ]
        },
        {
            question: "In St. Louis, Missouri, it’s illegal for a firefighter to rescue who?",
            answers: [
                { text: "Children", correct: false },
                { text: "Animals", correct: false },
                { text: "Undressed women (even if they are wearing a nightgown)", correct: true },
                { text: "Elderly people", correct: false }
            ]
        },
        {
            question: "Chartreuse is a colour between yellow and what?",
            answers: [
                { text: "Red", correct: false },
                { text: "Blue", correct: false },
                { text: "Green", correct: true },
                { text: "Purple", correct: false }
            ]
        },
        {
            question: "Nephelococcygia is the practice of doing what?",
            answers: [
                { text: "Cloud gazing", correct: true },
                { text: "Rock climbing", correct: false },
                { text: "Skydiving", correct: false },
                { text: "Stargazing", correct: false }
            ]
        },
        {
            question: "If you planted the seeds of Quercus robur, what would grow?",
            answers: [
                { text: "Flowers", correct: false },
                { text: "Vegetables", correct: false },
                { text: "Trees", correct: true },
                { text: "Grass", correct: false }
            ]
        },
        {
            question: "Who penned the words, 'Hubble, bubble toil and trouble, fire burn and cauldron bubble'?",
            answers: [
                { text: "William Shakespeare", correct: true },
                { text: "Charles Dickens", correct: false },
                { text: "Jane Austen", correct: false },
                { text: "Emily Bronte", correct: false }
            ]
        },
        {
            question: "In the context of educational courses, what abbreviation is commonly used for classes aimed at adult learners?",
            answers: [
                { text: "GED (General Educational Development)", correct: false },
                { text: "CEU (Continuing Education Unit)", correct: true },
                { text: "SAT (Scholastic Assessment Test)", correct: false },
                { text: "ACT (American College Testing)", correct: false }
            ]
        },
        {
            question: "How do sea otters keep from drifting apart while they sleep?",
            answers: [
                { text: "They anchor themselves to the seabed", correct: false },
                { text: "They hold onto seaweed", correct: false },
                { text: "They hold hands", correct: true },
                { text: "They tie themselves together with kelp", correct: false }
            ]
        },
        {
            question: "What animal is known by the nickname “sea cow?",
            answers: [
                { text: "Seal", correct: false },
                { text: "Walrus", correct: false },
                { text: "Manatee", correct: true },
                { text: "Dugong", correct: false }
            ]
        },
        {
            question: "What kind of turtle can’t retract into its shell?",
            answers: [
                { text: "Snapping turtle", correct: true },
                { text: "Red-eared slider", correct: false },
                { text: "Box turtle", correct: false },
                { text: "Painted turtle", correct: false }
            ]
        },
        {
            question: "What kind of animal is a Komodo dragon?",
            answers: [
                { text: "Lizard", correct: true },
                { text: "Snake", correct: false },
                { text: "Crocodile", correct: false },
                { text: "Monitor", correct: false }
            ]
        },
        {
            question: "What U.S. state’s constitution is the longest in the world?",
            answers: [
                { text: "Texas", correct: false },
                { text: "California", correct: false },
                { text: "Alabama", correct: true },
                { text: "New York", correct: false }
            ]
        },
        {
            question: "What was the first patented service uniform in the United States?",
            answers: [
                { text: "UPS (United Parcel Service)", correct: false },
                { text: "McDonald's", correct: false },
                { text: "Playboy Bunny", correct: true },
                { text: "Starbucks", correct: false }
            ]
        },
        {
            question: "What two cities represent letters in the phonetic alphabet?",
            answers: [
                { text: "London and Paris", correct: false },
                { text: "Rome and Madrid", correct: false },
                { text: "Lima and Quebec", correct: true },
                { text: "Sydney and Tokyo", correct: false }
            ]
        },
        {
            question: "What were clocks missing before 1577?",
            answers: [
                { text: "Hands", correct: false },
                { text: "Numbers", correct: false },
                { text: "Chimes", correct: false },
                { text: "Minute hands", correct: true }
            ]
        },
        {
            question: "What is the number one seller at Walmart?",
            answers: [
                { text: "Televisions", correct: false },
                { text: "Toys", correct: false },
                { text: "Bananas", correct: true },
                { text: "Clothing", correct: false }
            ]
        },
        {
            question: "What was the third country to get the atomic bomb?",
            answers: [
                { text: "Russia", correct: false },
                { text: "France", correct: false },
                { text: "Britain", correct: true },
                { text: "China", correct: false }
            ]
        },
        {
            question: "His wife was Roxana. His horse was Bacephalus. He was ________.",
            answers: [
                { text: "Genghis Khan", correct: false },
                { text: "Attila the Hun", correct: false },
                { text: "Cyrus the Great", correct: false },
                { text: "Alexander the Great", correct: true }
            ]
        },
        {
            question: "What Was The 9th Century Tax Levied To Fight The Vikings?",
            answers: [
                { text: "Danegeld", correct: true },
                { text: "Viking Tax", correct: false },
                { text: "Scandinavian Toll", correct: false },
                { text: "Norse Tribute", correct: false }
            ]
        },
        {
            question: "In 1969 Richard Cawston Made A Documentary For The BBC About Which Famous Family?",
            answers: [
                { text: "The Tudors", correct: false },
                { text: "The Kennedys", correct: false },
                { text: "The Royal Family", correct: true },
                { text: "The Rockefellers", correct: false }
            ]
        },
        {
            question: "What did Temujin change his name to?",
            answers: [
                { text: "Attila the Hun", correct: false },
                { text: "Genghis Khan", correct: true },
                { text: "Kublai Khan", correct: false },
                { text: "Mongke Khan", correct: false }
            ]
        },
        {
            question: "Of What Tribe Was Boadicea The Head?",
            answers: [
                { text: "Celt", correct: false },
                { text: "Gaul", correct: false },
                { text: "Iceni", correct: true },
                { text: "Pict", correct: false }
            ]
        },
        {
            question: "In Which City Was John F Kennedy Assassinated?",
            answers: [
                { text: "New York City", correct: false },
                { text: "Washington D.C.", correct: false },
                { text: "Los Angeles", correct: false },
                { text: "Dallas", correct: true }
            ]
        },
        {
            question: "Of which ship was Miles Standish captain?",
            answers: [
                { text: "The Mayflower", correct: true },
                { text: "The Santa Maria", correct: false },
                { text: "The Nina", correct: false },
                { text: "The Susan Constant", correct: false }
            ]
        },
        
    {
        question: "Which US state in 1907 was the last to declare Christmas a legal holiday?",
        answers: [
            { text: "Texas", correct: false },
            { text: "California", correct: false },
            { text: "Oklahoma", correct: true },
            { text: "New York", correct: false }
        ]
    },
    {
        question: "In a game of netball how many players on a team are allowed To score?",
        answers: [
            { text: "One", correct: false },
            { text: "Two", correct: true },
            { text: "Three", correct: false },
            { text: "Four", correct: false }
        ]
    },
    {
        question: "In Which Sport Was Desmond Douglas Britain's Leading Competitor?",
        answers: [
            { text: "Tennis", correct: false },
            { text: "Cricket", correct: false },
            { text: "Table Tennis", correct: true },
            { text: "Soccer", correct: false }
        ]
    },
    {
        question: "In A Decathlon What Is The First Event?",
        answers: [
            { text: "High Jump", correct: false },
            { text: "Long Jump", correct: false },
            { text: "100 Metres", correct: true },
            { text: "Shot Put", correct: false }
        ]
    },
    {
        question: "Which Sporting Event Was BBC2's First Ever Colour Transmission In 1967?",
        answers: [
            { text: "FIFA World Cup", correct: false },
            { text: "Olympic Games", correct: false },
            { text: "Wimbledon", correct: true },
            { text: "Super Bowl", correct: false }
        ]
    },
    {
        question: "What is the 'perfect score' in a game of Ten Pin Bowling?",
        answers: [
            { text: "200", correct: false },
            { text: "250", correct: false },
            { text: "300", correct: true },
            { text: "350", correct: false }
        ]
    },
    {
        question: "With which sport would you have associated Jocky Wilson?",
        answers: [
            { text: "Golf", correct: false },
            { text: "Soccer", correct: false },
            { text: "Darts", correct: true },
            { text: "Tennis", correct: false }
        ]
    },
    {
        question: "With what did cricketer Mansoor Ali Khan Pataudi frequently play within his hands?",
        answers: [
            { text: "A coin", correct: false },
            { text: "A ball", correct: false },
            { text: "A glass eye", correct: true },
            { text: "A bat", correct: false }
        ]
    },
    {
        question: "What 3 Letter Word It The Name Given To A Replayed Point In Tennis?",
        answers: [
            { text: "Ace", correct: false },
            { text: "Deuce", correct: false },
            { text: "Let", correct: true },
            { text: "Out", correct: false }
        ]
    },
    {
        question: "Which Heavyweight Boxer Was Known As The Real Deal?",
        answers: [
            { text: "Mike Tyson", correct: false },
            { text: "Evander Holyfield", correct: true },
            { text: "Lennox Lewis", correct: false },
            { text: "Muhammad Ali", correct: false }
        ]
    },
    {
        question: "In 1998 Who Became The Youngest Footballer To Score A Hat Trick In The English Premiership?",
        answers: [
            { text: "David Beckham", correct: false },
            { text: "Wayne Rooney", correct: false },
            { text: "Michael Owen", correct: true },
            { text: "Cristiano Ronaldo", correct: false }
        ]
    },
    {
        question: "Which Boys Name Is Also The Name Of The Object Ball In Bowls?",
        answers: [
            { text: "Tom", correct: false },
            { text: "Bill", correct: false },
            { text: "Jack", correct: true },
            { text: "Harry", correct: false }
        ]
    },
    {
        question: "What football team was formerly known as the Frankford Yellow Jackets?",
        answers: [
            { text: "Dallas Cowboys", correct: false },
            { text: "New York Giants", correct: false },
            { text: "Philadelphia Eagles", correct: true },
            { text: "Chicago Bears", correct: false }
        ]
    },
    {
        question: "TRUE OR FALSE - An eggplant is a vegetable.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "What is the unit of currency in Laos?",
        answers: [
            { text: "Dong", correct: false },
            { text: "Riel", correct: false },
            { text: "Kip", correct: true },
            { text: "Baht", correct: false }
        ]
    },
    {
        question: "What alcoholic drink is mainly made from juniper berries?",
        answers: [
            { text: "Rum", correct: false },
            { text: "Vodka", correct: false },
            { text: "Gin", correct: true },
            { text: "Whiskey", correct: false }
        ]
    },
    {
        question: "Which Italian automobile manufacturer gained majority control of U.S. automobile manufacturer Chrysler in 2011?",
        answers: [
            { text: "Ferrari", correct: false },
            { text: "Alfa Romeo", correct: false },
            { text: "Fiat", correct: true },
            { text: "Lamborghini", correct: false }
        ]
    },
    {
        question: "What is the last letter of the Greek alphabet?",
        answers: [
            { text: "Alpha", correct: false },
            { text: "Beta", correct: false },
            { text: "Omega", correct: true },
            { text: "Delta", correct: false }
        ]
    },
    {
        question: "In the state of Georgia, it’s illegal to eat what with a fork?",
        answers: [
            { text: "Pasta", correct: false },
            { text: "Biscuits", correct: false },
            { text: "Fried chicken", correct: true },
            { text: "Salad", correct: false }
        ]
    },
    {
        question: "Which Tasmanian marsupial is known for its temper?",
        answers: [
            { text: "Kangaroo", correct: false },
            { text: "Wallaby", correct: false },
            { text: "Koala", correct: false },
            { text: "Tasmanian devil", correct: true }
        ]
    },
    {
        question: "Iceland diverted roads to avoid disturbing communities of what?",
        answers: [
            { text: "Trolls", correct: false },
            { text: "Elves", correct: true },
            { text: "Dwarfs", correct: false },
            { text: "Giants", correct: false }
        ]
    },
    {
        question: "What can be broken but is never held?",
        answers: [
            { text: "Promises", correct: true },
            { text: "Glasses", correct: false },
            { text: "Hearts", correct: false },
            { text: "Habits", correct: false }
        ]
    },
    {
        question: "What does come down but never goes up?",
        answers: [
            { text: "Rain", correct: true },
            { text: "Sun", correct: false },
            { text: "Moon", correct: false },
            { text: "Stars", correct: false }
        ]
    },
    {
        question: "What is measured in 'Mickeys'?",
        answers: [
            { text: "Mouse ears", correct: false },
            { text: "Computer mouse movement", correct: true },
            { text: "Microphones", correct: false },
            { text: "Microorganisms", correct: false }
        ]
    },
    {
        question: "What was Marilyn Monroe’s natural hair color?",
        answers: [
            { text: "Blonde", correct: false },
            { text: "Brown", correct: false },
            { text: "Red", correct: true },
            { text: "Black", correct: false }
        ]
    },
    {
        question: "Who sang about being an 'eggman' and a 'walrus'?",
        answers: [
            { text: "Elvis Presley", correct: false },
            { text: "The Beatles", correct: true },
            { text: "The Rolling Stones", correct: false },
            { text: "The Beach Boys", correct: false }
        ]
    },
    {
        question: "Which Tasmanian marsupial is known for its temper?",
        answers: [
            { text: "Kangaroo", correct: false },
            { text: "Wallaby", correct: false },
            { text: "Koala", correct: false },
            { text: "Tasmanian Devil", correct: true }
        ]
    },
    {
        question: "Where on the human body is the zygomatic bone found?",
        answers: [
            { text: "Skull", correct: false },
            { text: "Spine", correct: false },
            { text: "Leg", correct: false },
            { text: "Facial cheek", correct: true }
        ]
    },
    {
        question: "It was illegal for women to wear what in 19th century Florence?",
        answers: [
            { text: "Hats", correct: false },
            { text: "Gloves", correct: false },
            { text: "Buttons", correct: true },
            { text: "Scarves", correct: false }
        ]
    },
    {
        question: "What is the capital of Scotland?",
        answers: [
            {"text": "Edinburgh", "correct": true},
            {"text": "Glasgow", "correct": false},
            {"text": "Aberdeen", "correct": false},
            {"text": "Inverness", "correct": false}
        ]
    },
    {
        question: "TRUE or FALSE - Nova Scotia is on the east coast of Canada.",
        answers: [
            {"text": "True", "correct": true},
            {"text": "False", "correct": false}
        ]
    },
    {
        question: "Which country was NOT part of the Soviet Union?",
        answers: [
            {"text": "Ukraine", "correct": false},
            {"text": "Belarus", "correct": false},
            {"text": "Romania", "correct": true},
            {"text": "Estonia", "correct": false}
        ]
    },
    {
        question: "Which small country is located between the borders of France and Spain?",
        answers: [
            {"text": "San Marino", "correct": false},
            {"text": "Liechtenstein", "correct": false},
            {"text": "Andorra", "correct": true},
            {"text": "Monaco", "correct": false}
        ]
    },
    {
        question: "Where would you find the 'Spanish Steps'?",
        answers: [
            {"text": "Madrid, Spain", "correct": false},
            {"text": "Barcelona, Spain", "correct": false},
            {"text": "Rome, Italy", "correct": true},
            {"text": "Florence, Italy", "correct": false}
        ]
    },
    {
        question: "In which city, is the Big Nickel located in Canada?",
        answers: [
            {"text": "Toronto, Ontario", "correct": false},
            {"text": "Vancouver, British Columbia", "correct": false},
            {"text": "Sudbury, Ontario", "correct": true},
            {"text": "Montreal, Quebec", "correct": false}
        ]
    },
    {
        question: "Which of these island countries is located in the Caribbean?",
        answers: [
            {"text": "Fiji", "correct": false},
            {"text": "Maldives", "correct": false},
            {"text": "Barbados", "correct": true},
            {"text": "Seychelles", "correct": false}
        ]
    },
    {
        question: "What year is on the flag of the US state Wisconsin?",
        answers: [
            {"text": "1845", "correct": false},
            {"text": "1847", "correct": false},
            {"text": "1848", "correct": true},
            {"text": "1850", "correct": false}
        ]
    },
    {
        question: "How many countries border Kyrgyzstan?",
        answers: [
            {"text": "3", "correct": false},
            {"text": "4", "correct": true},
            {"text": "5", "correct": false},
            {"text": "6", "correct": false}
        ]
    },
    {
        "question": "What is the area of Vatican City?",
        "answers": [
            {"text": "0.12 km^2", "correct": false},
            {"text": "0.25 km^2", "correct": false},
            {"text": "0.33 km^2", "correct": false},
            {"text": "0.44 km^2", "correct": true}
        ]
    },
    {
        "question": "In the harbour of which city was the Greenpeace flagship Rainbow Warrior sunk in 1985?",
        "answers": [
            {"text": "Sydney", "correct": false},
            {"text": "Amsterdam", "correct": false},
            {"text": "London", "correct": false},
            {"text": "Auckland", "correct": true}
        ]
    },
    {
        "question": "Which country was split into two zones by the Yalta agreement?",
        "answers": [
            {"text": "Poland", "correct": false},
            {"text": "Germany", "correct": true},
            {"text": "Austria", "correct": false},
            {"text": "Hungary", "correct": false}
        ]
    },
    {
        "question": "Who Commanded The Confederate Armies During The American Civil War?",
        "answers": [
            {"text": "Robert E.Lee", "correct": true},
            {"text": "Ulysses S. Grant", "correct": false},
            {"text": "Stonewall Jackson", "correct": false},
            {"text": "Jefferson Davis", "correct": false}
        ]
    },
    {
        "question": "In 1962, for what reason did Britain and France sign an agreement to build together?",
        "answers": [
            {"text": "Concorde", "correct": true},
            {"text": "Channel Tunnel", "correct": false},
            {"text": "Eurostar", "correct": false},
            {"text": "Nuclear submarines", "correct": false}
        ]
    },
    {
        "question": "During Which King's Reign Did The Great Fire Of London Occur?",
        "answers": [
            {"text": "Henry VIII", "correct": false},
            {"text": "Charles I", "correct": false},
            {"text": "Charles II", "correct": true},
            {"text": "James II", "correct": false}
        ]
    },
    {
        "question": "Where in England was William Shakespeare born?",
        "answers": [
            {"text": "London", "correct": false},
            {"text": "Oxford", "correct": false},
            {"text": "Stratford-Upon-Avon", "correct": true},
            {"text": "Cambridge", "correct": false}
        ]
    },
    {
        "question": "Who Was The 1st Wife of Henry VIII?",
        "answers": [
            {"text": "Catherine Of Aragon", "correct": true},
            {"text": "Anne Boleyn", "correct": false},
            {"text": "Jane Seymour", "correct": false},
            {"text": "Anne of Cleves", "correct": false}
        ]
    },
    {
        "question": "In what year did the UK's lease on Hong Kong expire?",
        "answers": [
            {"text": "1995", "correct": false},
            {"text": "1997", "correct": true},
            {"text": "1999", "correct": false},
            {"text": "2001", "correct": false}
        ]
    },
    {
        "question": "Famed as a member of the Rat Pack, who died on Christmas day 1995?",
        "answers": [
            {"text": "Dean Martin", "correct": true},
            {"text": "Frank Sinatra", "correct": false},
            {"text": "Sammy Davis Jr.", "correct": false},
            {"text": "Peter Lawford", "correct": false}
        ]
    },
    {
        "question": "If you were born on Christmas Day, what would your star sign be?",
        "answers": [
            {"text": "Sagittarius", "correct": false},
            {"text": "Capricorn", "correct": true},
            {"text": "Aquarius", "correct": false},
            {"text": "Pisces", "correct": false}
        ]
    },
    {
        "question": "Which Chinese dynasty lasted from 1368 to 1644?",
        "answers": [
            {"text": "Qing", "correct": false},
            {"text": "Han", "correct": false},
            {"text": "Ming", "correct": true},
            {"text": "Tang", "correct": false}
        ]
    },
    {
        "question": "What was the third country to get the atomic bomb?",
        "answers": [
            {"text": "United States", "correct": false},
            {"text": "Soviet Union", "correct": false},
            {"text": "United Kingdom", "correct": true},
            {"text": "France", "correct": false}
        ]
    },
    {
        "question": "His wife was Roxana. His horse was Bacephalus. He was ________.",
        "answers": [
            {"text": "Alexander the Great", "correct": true},
            {"text": "Julius Caesar", "correct": false},
            {"text": "Genghis Khan", "correct": false},
            {"text": "Napoleon Bonaparte", "correct": false}
        ]
    },
    {
        "question": "What Was The 9th Century Tax Levied To Fight The Vikings?",
        "answers": [
            {"text": "Danegeld", "correct": true},
            {"text": "Tribute", "correct": false},
            {"text": "Plunder", "correct": false},
            {"text": "Pillage", "correct": false}
        ]
    },
    {
        "question": "In America, what became the 49th state to enter the union in 1959?",
        "answers": [
            {"text": "Hawaii", "correct": true},
            {"text": "Alaska", "correct": false},
            {"text": "California", "correct": false},
            {"text": "Arizona", "correct": false}
        ]
    },
    {
        "question": "In Which Year Did The Falklands Conflict Begin?",
        "answers": [
            {"text": "1979", "correct": false},
            {"text": "1980", "correct": false},
            {"text": "1981", "correct": false},
            {"text": "1982", "correct": true}
        ]
    },
    {
        "question": "In what country did the 'Sepoy Mutiny' occur?",
        "answers": [
            {"text": "India", "correct": true},
            {"text": "China", "correct": false},
            {"text": "Pakistan", "correct": false},
            {"text": "Bangladesh", "correct": false}
        ]
    },
    {
        "question": "Which King Was Overthrown As A Result Of The French Revolution?",
        "answers": [
            {"text": "Louis XVI", "correct": true},
            {"text": "Louis XIV", "correct": false},
            {"text": "Napoleon Bonaparte", "correct": false},
            {"text": "Charles X", "correct": false}
        ]
    },
    {
        "question": "In Which Year Was The Boeing 747 Put Into Regular Service?",
        "answers": [
            {"text": "1968", "correct": false},
            {"text": "1969", "correct": false},
            {"text": "1970", "correct": true},
            {"text": "1971", "correct": false}
        ]
    },
    {
        "question": "Who banned Christmas in Britain in 1647?",
        "answers": [
        {"text": "William the Conqueror", "correct": false},
        {"text": "Oliver Cromwell", "correct": true},
        {"text": "King Henry VIII", "correct": false},
        {"text": "King Charles I", "correct": false}
        ]
        },
        {
        "question": "Who was the father of Elizabeth I?",
        "answers": [
        {"text": "Richard III", "correct": false},
        {"text": "Edward VI", "correct": false},
        {"text": "Henry VII", "correct": false},
        {"text": "Henry VIII", "correct": true}
        ]
        },
        {
        "question": "To What Was Byzantium Renamed In 330 AD?",
        "answers": [
        {"text": "Athens", "correct": false},
        {"text": "Jerusalem", "correct": false},
        {"text": "Alexandria", "correct": false},
        {"text": "Constantinople", "correct": true}
        ]
        },
        {
        "question": "Who gave John F. Kennedy a dog named Pushinka?",
        "answers": [
        {"text": "Winston Churchill", "correct": false},
        {"text": "Mao Zedong", "correct": false},
        {"text": "Nikita Khrushchev", "correct": true},
        {"text": "Fidel Castro", "correct": false}
        ]
        },
        {
        "question": "Who was President of the USA from 1953 till 1961?",
        "answers": [
        {"text": "John F. Kennedy", "correct": false},
        {"text": "Lyndon B. Johnson", "correct": false},
        {"text": "Harry Truman", "correct": false},
        {"text": "Dwight Eisenhower", "correct": true}
        ]
        },
        {
        "question": "Who was assassinated on Feb. 21, 1965?",
        "answers": [
        {"text": "John F. Kennedy", "correct": false},
        {"text": "Robert F. Kennedy", "correct": false},
        {"text": "Malcolm X", "correct": true},
        {"text": "Martin Luther King Jr.", "correct": false}
        ]
        },
        {
        "question": "Which War Involving The UK Began In 1982?",
        "answers": [
        {"text": "The Gulf War", "correct": false},
        {"text": "The Korean War", "correct": false},
        {"text": "The Vietnam War", "correct": false},
        {"text": "The Falklands War", "correct": true}
        ]
        },
        {
        "question": "In Which City Was John F Kennedy Assassinated?",
        "answers": [
        {"text": "Houston", "correct": false},
        {"text": "Austin", "correct": false},
        {"text": "San Antonio", "correct": false},
        {"text": "Dallas", "correct": true}
        ]
        },
        {
        "question": "Of which ship was Miles Standish captain?",
        "answers": [
        {"text": "The Pinta", "correct": false},
        {"text": "The Santa Maria", "correct": false},
        {"text": "The Nina", "correct": false},
        {"text": "The Mayflower", "correct": true}
        ]
        },
        {
        "question": "Which US state in 1907 was the last to declare Christmas a legal holiday?",
        "answers": [
        {"text": "Texas", "correct": false},
        {"text": "Louisiana", "correct": false},
        {"text": "California", "correct": false},
        {"text": "Oklahoma", "correct": true}
        ]
        },
        {
        "question": "What was the name of the B-29 used at Hiroshima to drop the bomb?",
        "answers": [
        {"text": "Big Stink", "correct": false},
        {"text": "Bockscar", "correct": false},
        {"text": "Fat Man", "correct": false},
        {"text": "Enola Gay", "correct": true}
        ]
        },
        {
        "question": "Who Was Marie Antoinette's Husband?",
        "answers": [
        {"text": "Louis XIV", "correct": false},
        {"text": "Louis XV", "correct": false},
        {"text": "Napoleon Bonaparte", "correct": false},
        {"text": "Louis XVI", "correct": true}
        ]
        },
        {
        "question": "Who was assassinated on November 22, 1963, in Dallas, Texas?",
        "answers": [
        {"text": "Malcolm X", "correct": false},
        {"text": "Martin Luther King Jr.", "correct": false},
        {"text": "Robert F. Kennedy", "correct": false},
        {"text": "President John F. Kennedy", "correct": true}
        ]
        },
        {
        "question": "Prior to 1935 what was Iran known as?",
        "answers": [
        {"text": "Mesopotamia", "correct": false},
        {"text": "Babylon", "correct": false},
        {"text": "Assyria", "correct": false},
        {"text": "Persia", "correct": true}
        ]
        },
        {
        "question": "Which City Did The Allies Liberate On August 25th, 1944?",
        "answers": [
        {"text": "Berlin", "correct": false},
        {"text": "Rome", "correct": false},
        {"text": "London", "correct": false},
        {"text": "Paris", "correct": true}
        ]
        },
    {
        "question": "What Office Did Churchill Hold For The Longest Continuous Period?",
        "answers": [
{"text": "Chancellor of the Exchequer", "correct": false},
{"text": "Foreign Secretary", "correct": false},
{"text": "Home Secretary", "correct": false},
{"text": "Prime Minister", "correct": true}
]
},
{
"question": "Peter Jackson Is Responsible For Directing Which Famous Trilogy?",
"answers": [
{"text": "The Matrix", "correct": false},
{"text": "Star Wars", "correct": false},
{"text": "Harry Potter", "correct": false},
{"text": "The Lord Of The Rings", "correct": true}
]
},
{
"question": "Who Played Bowls Before Engaging The Spanish Armada?",
"answers": [
{"text": "Sir Walter Raleigh", "correct": false},
{"text": "Sir John Hawkins", "correct": false},
{"text": "Sir Richard Grenville", "correct": false},
{"text": "Sir Francis Drake", "correct": true}
]
},
{
"question": "Who shot Lee Harvey Oswald, The Assassin Of John F Kennedy?",
"answers": [
{"text": "Lee Harvey Oswald", "correct": false},
{"text": "Lyndon B. Johnson", "correct": false},
{"text": "James Earl Ray", "correct": false},
{"text": "Jack Ruby", "correct": true}
]
},
{
"question": "Who Had An 80's Hit With The Song 'Just The Two of Us,'?",
"answers": [
{"text": "Stevie Wonder", "correct": false},
{"text": "Michael Jackson", "correct": false},
{"text": "Prince", "correct": false},
{"text": "Bill Withers", "correct": true}
]
},
{
"question": "In What Year Did Mikhail Gorbachev Become Leader Of The Soviet Union?",
"answers": [
{"text": "1980", "correct": false},
{"text": "1990", "correct": false},
{"text": "1995", "correct": false},
{"text": "1985", "correct": true}
]
},
{
"question": "Where was Napoleon defeated?",
"answers": [
{"text": "Austerlitz", "correct": false},
{"text": "Borodino", "correct": false},
{"text": "Trafalgar", "correct": false},
{"text": "Waterloo", "correct": true}
]
},
     
        
        
  
    {
        "question": "When Captain Cook discovered the Hawaiian Islands, what did he name them?",
        "answers": [
            {"text": "Sandwich Islands", "correct": true},
            {"text": "Paradise Islands", "correct": false},
            {"text": "Discovery Islands", "correct": false},
            {"text": "Polynesian Islands", "correct": false}
        ]
    },
    {
        "question": "U.S. President, Herbert C. _________",
        "answers": [
            {"text": "Hoover", "correct": true},
            {"text": "Harding", "correct": false},
            {"text": "Roosevelt", "correct": false},
            {"text": "Truman", "correct": false}
        ]
    },
    {
        "question": "Who Was President Of The USA At The Outbreak Of World War II?",
        "answers": [
           
            {"text": "Herbert Hoover", "correct": false},
            {"text": "Harry Truman", "correct": false},
            {"text": "Franklin Roosevelt", "correct": true},
            {"text": "Woodrow Wilson", "correct": false}
        ]
    },
    {
        "question": "In What Year Did The American Civil War End?",
        "answers": [
      
            {"text": "1863", "correct": false},
            {"text": "1867", "correct": false},
            {"text": "1869", "correct": false},
            {"text": "1865", "correct": true},
        ]
    },
    {
        "question": "The St. Valentine's Day massacre took place in this city?",
        "answers": [
            {"text": "Chicago", "correct": true},
            {"text": "New York", "correct": false},
            {"text": "Los Angeles", "correct": false},
            {"text": "Miami", "correct": false}
        ]
    },
    {
        "question": "What famous protest took place in Britain in 1936?",
        "answers": [
            {"text": "The Jarrow March", "correct": true},
            {"text": "The Peterloo Massacre", "correct": false},
            {"text": "The Tolpuddle Martyrs", "correct": false},
            {"text": "The Poll Tax Riots", "correct": false}
        ]
    },
    {
        "question": "The war in Vietnam ended with the fall of Saigon in what year?",
        "answers": [
            {"text": "1975", "correct": true},
            {"text": "1973", "correct": false},
            {"text": "1977", "correct": false},
            {"text": "1980", "correct": false}
        ]
    },
    {
        "question": "In what country is the waterloo battlefield?",
        "answers": [
            {"text": "Belgium", "correct": true},
            {"text": "France", "correct": false},
            {"text": "Germany", "correct": false},
            {"text": "Netherlands", "correct": false}
        ]
    },
    {
        "question": "Who is famous for historically riding naked on horseback through Coventry, England?",
        "answers": [
            {"text": "Lady Godiva", "correct": true},
            {"text": "Queen Elizabeth I", "correct": false},
            {"text": "Boudicca", "correct": false},
            {"text": "Margaret Thatcher", "correct": false}
        ]
    },
    {
        "question": "Which is the most ancient walled city?",
        "answers": [
            {"text": "Jericho", "correct": true},
            {"text": "Rome", "correct": false},
            {"text": "Athens", "correct": false},
            {"text": "Cairo", "correct": false}
        ]
    },
    {
        "question": "Who was crowned King of England at Westminster Abbey on Christmas day 1066?",
        "answers": [
          
            {"text": "Richard the Lionheart", "correct": false},
            {"text": "Henry II", "correct": false},
            {"text": "William The Conqueror", "correct": true},
            {"text": "Edward the Confessor", "correct": false}
        ]
    },
    {
        "question": "What Became America's 50th State On August 21st 1959?",
        "answers": [
           
            {"text": "Alaska", "correct": false},
            {"text": "California", "correct": false},
            {"text": "Florida", "correct": false},
            {"text": "Hawaii", "correct": true},
        ]
    },
    {
        "question": "In 1893, which country was the first to give women the vote?",
        "answers": [
            
            {"text": "United Kingdom", "correct": false},
            {"text": "United States", "correct": false},
            {"text": "New Zealand", "correct": true},
            {"text": "Australia", "correct": false}
        ]
    },
    {
        "question": "On What Japanese City Was The First Atomic Bomb Dropped?",
        "answers": [
       
        {"text": "Nagasaki", "correct": false},
        {"text": "Hiroshima", "correct": true},
        {"text": "Tokyo", "correct": false},
        {"text": "Osaka", "correct": false}
        ]
        },
        {
        "question": "Which King Wore Two Shirts At His Execution So As Not To Shiver And Appear Frightened?",
        "answers": [
        {"text": "Charles I", "correct": true},
        {"text": "Henry VIII", "correct": false},
        {"text": "Edward VI", "correct": false},
        {"text": "James II", "correct": false}
        ]
        },
        {
        "question": "Germany's WWI allies were Austria-Hungary, Bulgaria, and ________.",
        "answers": [
        
        {"text": "Italy", "correct": false},
        {"text": "Romania", "correct": false},
        {"text": "Japan", "correct": false},
        {"text": "Turkey", "correct": true},
        ]
        },
        {
        "question": "In 1969 Richard Cawston Made A Documentary For The BBC About Which Famous Family?",
        "answers": [
        
        {"text": "The Kennedys", "correct": false},
        {"text": "The Royal Family", "correct": true},
        {"text": "The Rockefellers", "correct": false},
        {"text": "The Kardashians", "correct": false}
        ]
        },
        {
        "question": "What did Temujin change his name to?",
        "answers": [
        {"text": "Genghis Khan", "correct": true},
        {"text": "Attila the Hun", "correct": false},
        {"text": "Tamerlane", "correct": false},
        {"text": "Kublai Khan", "correct": false}
        ]
        },
        {
        "question": "Of What Tribe Was Boadicea The Head?",
        "answers": [
        {"text": "Iceni", "correct": true},
        {"text": "Brigantes", "correct": false},
        {"text": "Cornovii", "correct": false},
        {"text": "Trinovantes", "correct": false}
        ]
        },
        {
        "question": "In which century was The Black Death?",
        "answers": [
        {"text": "Fifteenth", "correct": false},
        {"text": "Thirteenth", "correct": false},
        {"text": "Sixteenth", "correct": false},
        
        {"text": "Fourteenth", "correct": true},
        ]
        },
        {
        "question": "Where was the ancient script of Linear A and Linear B found?",
        "answers": [
     
        {"text": "Cyprus", "correct": false},
        {"text": "Crete", "correct": true},
        {"text": "Santorini", "correct": false},
        {"text": "Rhodes", "correct": false}
        ]
        },
        {
        "question": "Spain ceded Florida to Britain in exchange for this territory.",
        "answers": [
        
        {"text": "Puerto Rico", "correct": false},
        {"text": "Jamaica", "correct": false},
        {"text": "Hispaniola", "correct": false},
        {"text": "Cuba", "correct": true},
        ]
        },
        {
        "question": "Who Was The First Woman To Fly Solo Across The Atlantic Ocean?",
        "answers": [
        {"text": "Amelia Earhart", "correct": true},
        {"text": "Beryl Markham", "correct": false},
        {"text": "Jacqueline Cochran", "correct": false},
        {"text": "Harriet Quimby", "correct": false}
        ]
        },
        {
        "question": "What color is Santa Claus's belt?",
        "answers": [
        {"text": "Black", "correct": true},
        {"text": "Red", "correct": false},
        {"text": "Green", "correct": false},
        {"text": "Brown", "correct": false}
        ]
        },
        {
        "question": "What Name Was Given To The Practise Of Killing Every Tenth Man In A Mutinous Roman Cohort?",
        "answers": [
        {"text": "Decimate", "correct": true},
        {"text": "Annihilate", "correct": false},
        {"text": "Exterminate", "correct": false},
        {"text": "Eradicate", "correct": false}
        ]
        },
        {
        "question": "Formed in 1955, with which island was the organization known by the acronym EOKA associated?",
        "answers": [
        {"text": "Cyprus", "correct": true},
        {"text": "Sicily", "correct": false},
        {"text": "Crete", "correct": false},
        {"text": "Malta", "correct": false}
        ]
        },
        {
        "question": "What was the war between Argentina and Great Britain over?",
        "answers": [
        {"text": "Falkland Islands", "correct": true},
        {"text": "South Georgia", "correct": false},
        {"text": "South Sandwich Islands", "correct": false},
        {"text": "Tierra del Fuego", "correct": false}
        ]
        },
        {
        "question": "Who Was The 2nd Wife Of Henry VIII?",
        "answers": [
        {"text": "Anne Boleyn", "correct": true},
        {"text": "Catherine of Aragon", "correct": false},
        {"text": "Jane Seymour", "correct": false},
        {"text": "Anne of Cleves", "correct": false}
        ]
        },
        {
        "question": "Who was assassinated on Nov. 22, 1963?",
        "answers": [
        {"text": "John F Kennedy", "correct": true},
        {"text": "Martin Luther King Jr.", "correct": false},
        {"text": "Robert F. Kennedy", "correct": false},
        {"text": "Malcolm X", "correct": false}
        ]
        },
        {
        "question": "Who was the first First Lady to be received privately by the Pope?",
        "answers": [
        {"text": "Jackie Kennedy", "correct": true},
        {"text": "Eleanor Roosevelt", "correct": false},
        {"text": "Lady Bird Johnson", "correct": false},
        {"text": "Nancy Reagan", "correct": false}
        ]
        },
        {
        "question": "Germany's allies in WW II were Japan, Italy, Hungary, Bulgaria, Finland, Libya, and _________.",
        "answers": [
        {"text": "Romania", "correct": true},
        {"text": "Spain", "correct": false},
        {"text": "Greece", "correct": false},
        {"text": "France", "correct": false}
        ]
        },
        {
        "question": "Who led 900 followers in a mass suicide in 1979?",
        "answers": [
        {"text": "Jim Jones", "correct": true},
        {"text": "David Koresh", "correct": false},
        {"text": "Charles Manson", "correct": false},
        {"text": "Marshall Applewhite", "correct": false}
        ]
        },
        {
        "question": "Which country did Idi Amin invade in 1979?",
        "answers": [
        {"text": "Tanzania", "correct": true},
        {"text": "Kenya", "correct": false},
        {"text": "Uganda", "correct": false},
        {"text": "Zimbabwe", "correct": false}
        ]
        },
        {
        "question": "Who was the last of the apache warrior chiefs?",
        "answers": [
        
        {"text": "Sitting Bull", "correct": false},
        {"text": "Cochise", "correct": false},
        {"text": "Tecumseh", "correct": false},
        {"text": "Geronimo", "correct": true}
        ]
        },
        {
        "question": "The Charge Of The Light Brigade Occurred During Which War?",
        "answers": [
       
        {"text": "Napoleonic", "correct": false},
        {"text": "Crimean", "correct": true},
        {"text": "American Civil", "correct": false},
        {"text": "American Revolutionary", "correct": false}
        ]
        },
        {
        "question": "Approximately how many children did pharaoh Ramses II father?",
        "answers": [
        {"text": "160", "correct": true},
        {"text": "80", "correct": false},
        {"text": "240", "correct": false},
        {"text": "200", "correct": false}
        ]
        },
        {
        "question": "Where were the Hanging Gardens?",
        "answers": [
       
        {"text": "Nineveh", "correct": false},
        {"text": "Thebes", "correct": false},
        {"text": "Memphis", "correct": false},
        {"text": "Babylon", "correct": true}
        ]
        },
        {
        "question": "What was The Eldest Son Of Edward III Better Known As?",
        "answers": [
        {"text": "The Black Prince", "correct": true},
        {"text": "The Red Prince", "correct": false},
        {"text": "The White Prince", "correct": false},
        {"text": "The Green Prince", "correct": false}
        ]
        },
        {
        "question": "Which 1776 American Affirmation Asserted The Basic Rights Of All?",
        "answers": [
        {"text": "The Declaration Of Independence", "correct": true},
        {"text": "The Bill Of Rights", "correct": false},
        {"text": "The Gettysburg Address", "correct": false},
        {"text": "The Constitution", "correct": false}
        ]
        },
        {
        "question": "In Which Year Was The Battle Of Trafalgar Fought?",
        "answers": [
        {"text": "1805", "correct": true},
        {"text": "1806", "correct": false},
        {"text": "1804", "correct": false},
        {"text": "1803", "correct": false}
        ]
        },
        {
        "question": "In 1979 which English art historian was exposed as a one-time Soviet spy and stripped of his knighthood?",
        "answers": [
        {"text": "Anthony Blunt", "correct": true},
        {"text": "Kenneth Clark", "correct": false},
        {"text": "Ernst Gombrich", "correct": false},
        {"text": "John Berger", "correct": false}
        ]
        },
        {
        "question": "Who was the British Prime Minister at the outbreak of the Second World War?",
        "answers": [
        
        {"text": "Winston Churchill", "correct": false},
        {"text": "Neville Chamberlain", "correct": true},
        {"text": "Clement Attlee", "correct": false},
        {"text": "Stanley Baldwin", "correct": false}
        ]
        },
        {
        "question": "Who Brought Back Tobacco And Potatoes From The Americas?",
        "answers": [
      
        {"text": "Christopher Columbus", "correct": false},
        {"text": "Sir Walter Raleigh", "correct": true},
        {"text": "Hernán Cortés", "correct": false},
        {"text": "Francisco Pizarro", "correct": false}
        ]
        },
        {
        "question": "How Long Was The American Civil War?",
        "answers": [
        {"text": "Four Years", "correct": true},
        {"text": "Three Years", "correct": false},
        {"text": "Five Years", "correct": false},
        {"text": "Six Years", "correct": false}
        ]
        },
        {
        "question": "The Nordic countries (Denmark, Sweden, Norway notably) tend to celebrate Christmas chiefly on which date?",
        "answers": [

        {"text": "25th December", "correct": false},
        {"text": "26th December", "correct": false},
        {"text": "23rd December", "correct": false},
        {"text": "24th December", "correct": true}
        ]
        },
        {
        "question": "In What Year Was Queen Elizabeth The I Born?",
        "answers": [
        
        {"text": "1553", "correct": false},
        {"text": "1533", "correct": true},
        {"text": "1603", "correct": false},
        {"text": "1588", "correct": false}
        ]
        },
        {
        "question": "Which country blew up a Greenpeace ship in New Zealand?",
        "answers": [
        {"text": "France", "correct": true},
        {"text": "United States", "correct": false},
        {"text": "Australia", "correct": false},
        {"text": "Canada", "correct": false}
        ]
        },
        {
        "question": "In 1953, Stalin Died. Who ultimately succeeded him as the leader of the Soviet Union?",
        "answers": [
        {"text": "Khrushchev", "correct": true},
        {"text": "Brezhnev", "correct": false},
        {"text": "Andropov", "correct": false},
        {"text": "Gorbachev", "correct": false}
        ]
        },
        {
        "question": "Designed By Robert Fulton, Which Weapon Was Tested In The Seine In 1801?",
        "answers": [
        {"text": "The Submarine", "correct": true},
        {"text": "The Machine Gun", "correct": false},
        {"text": "The Tank", "correct": false},
        {"text": "The Rocket Launcher", "correct": false}
        ]
        },
        {
        "question": "Where Did The Mayflower Set Sail From In 1620?",
        "answers": [
        {"text": "Southampton", "correct": true},
        {"text": "Plymouth", "correct": false},
        {"text": "Bristol", "correct": false},
        {"text": "Portsmouth", "correct": false}
        ]
        },
        {
        "question": "Who was assassinated on Dec. 8, 1980, in New York City?",
        "answers": [
        
        {"text": "Bob Marley", "correct": false},
        {"text": "John Bonham", "correct": false},
        {"text": "John Lennon", "correct": true},
        {"text": "Freddie Mercury", "correct": false}
        ]
        },
        {
        "question": "What planet was 'ALF' from?",
        "answers": [
       
        {"text": "Zantar", "correct": false},
        {"text": "Xanthar", "correct": false},
        {"text": "Melmac", "correct": true},
        {"text": "Pluto", "correct": false}
        ]
        },
        {
        "question": "What name did the Indians give the black soldiers that were fighting against them in the late 1800s?",
        "answers": [
        {"text": "Buffalo soldiers", "correct": true},
        {"text": "Eagle soldiers", "correct": false},
        {"text": "Bear soldiers", "correct": false},
        {"text": "Lion soldiers", "correct": false}
        ]
        },
        {
        "question": "In March 1979, where did a major nuclear accident occur?",
        "answers": [
        {"text": "Three Mile Island", "correct": true},
        {"text": "Chernobyl", "correct": false},
        {"text": "Fukushima", "correct": false},
        {"text": "Hanford", "correct": false}
        ]
        },
        {
        "question": "How Many Crusades Were There?",
        "answers": [
        
        {"text": "Seven", "correct": false},
        {"text": "Nine", "correct": true},
        {"text": "Ten", "correct": false},
        {"text": "Twelve", "correct": false}
        ]
        },
        {
        "question": "Which Scary Movie Character Has The Real Name Charles Lee Ray?",
        "answers": [
        
        {"text": "Freddy Krueger", "correct": false},
        {"text": "Jason Voorhees", "correct": false},
        {"text": "Chucky", "correct": true},
        {"text": "Michael Myers", "correct": false}
        ]
        },
        {
        "question": "In Which Year Was Joan Of Arc Burned At The Stake?",
        "answers": [
        {"text": "1431", "correct": true},
        {"text": "1412", "correct": false},
        {"text": "1445", "correct": false},
        {"text": "1456", "correct": false}
        ]
        },
        {
        "question": "Who taught Alexander the Great?",
        "answers": [
      
        {"text": "Plato", "correct": false},
        {"text": "Aristotle", "correct": true},
        {"text": "Socrates", "correct": false},
        {"text": "Pythagoras", "correct": false}
        ]
        },
        {
        "question": "Which Royal House Ruled England Between 1603 & 1714?",
        "answers": [
        {"text": "The Tudors", "correct": false},
        {"text": "The Stuarts", "correct": true},
        {"text": "The Plantagenets", "correct": false},
        {"text": "The Hanoverians", "correct": false}
        ]
        },
    {
        
        "question": "What's Fidel Castro's brother's name?",
        "answers": [
        {"text": "Ernesto", "correct": false},
        {"text": "Alejandro", "correct": false},
        {"text": "Hernando", "correct": false},
        {"text": "Raoul", "correct": true}
        ]
    },
    
{
    "question": "What energy does an Eolic power station generate?",
    "answers": [
    {"text": "Wind", "correct": true},
    {"text": "Solar", "correct": false},
    {"text": "Geothermal", "correct": false},
    {"text": "Hydroelectric", "correct": false}
    ]
    },
    {
    "question": "What is Exobiology the study of?",
    "answers": [
    {"text": "life in outer space", "correct": true},
    {"text": "the ocean floor", "correct": false},
    {"text": "prehistoric life", "correct": false},
    {"text": "extinct species", "correct": false}
    ]
    },
    {
    "question": "What is the symbol for copper?",
    "answers": [
    {"text": "Cu", "correct": true},
    {"text": "Co", "correct": false},
    {"text": "Cr", "correct": false},
    {"text": "Cp", "correct": false}
    ]
    },
    {
    "question": "What is Hydrogeology the study of?",
    "answers": [
   
    {"text": "marine life", "correct": false},
    {"text": "volcanoes", "correct": false},
    {"text": "underground water", "correct": true},
    {"text": "fossils", "correct": false}
    ]
    },
    {
    "question": "A __________ consumes about 33 percent of its body weight in a single meal.",
    "answers": [
    {"text": "Pelican", "correct": true},
    {"text": "Penguin", "correct": false},
    {"text": "Seagull", "correct": false},
    {"text": "Hawk", "correct": false}
    ]
    },
    {
    "question": "What is Laryngology the study of?",
    "answers": [

    {"text": "laryngitis", "correct": false},
    {"text": "speech therapy", "correct": false},
    {"text": "the larynx, or voice box", "correct": true},
    {"text": "throat disorders", "correct": false}
    ]
    },
    {
    "question": "Which metal was invented by British metallurgist Harold Brearley in 1912?",
    "answers": [
    
    {"text": "Titanium", "correct": false},
    {"text": "Aluminum", "correct": false},
    {"text": "Bronze", "correct": false},
    {"text": "Stainless Steel", "correct": true}
    ]
    },
    {
    "question": "What is Ideology the study of?",
    "answers": [
    {"text": "human life or culture", "correct": true},
    {"text": "religion", "correct": false},
    {"text": "philosophy", "correct": false},
    {"text": "economics", "correct": false}
    ]
    },
    {
    "question": "The king crab walks __________",
    "answers": [
    
    {"text": "Sideways", "correct": false},
    {"text": "Diagonally", "correct": true},
    {"text": "Backwards", "correct": false},
    {"text": "Forwards", "correct": false}
    ]
    },
    {
    "question": "What is Anthropology the study of?",
    "answers": [
    {"text": "humans", "correct": true},
    {"text": "animals", "correct": false},
    {"text": "ancient civilizations", "correct": false},
    {"text": "earth's ecosystems", "correct": false}
    ]
    },
    {
    "question": "To What Is The Process Of Vulcanisation Applied?",
    "answers": [

    {"text": "Steel", "correct": false},
    {"text": "Plastic", "correct": false},
    {"text": "Rubber", "correct": true},
    {"text": "Aluminum", "correct": false}
    ]
    },
    {
    "question": "What is Cryptology the study of?",
    "answers": [
   
    {"text": "ancient civilizations", "correct": false},
    {"text": "human behavior", "correct": false},
    {"text": "encrypt and decrypt secret messages", "correct": true},
    {"text": "animal behavior", "correct": false}
    ]
    },
    {
    "question": "Which chemical has the atomic number one?",
    "answers": [
    {"text": "Hydrogen", "correct": true},
    {"text": "Oxygen", "correct": false},
    {"text": "Helium", "correct": false},
    {"text": "Carbon", "correct": false}
    ]
    },
    {
    "question": "What is Oology the study of?",
    "answers": [
    {"text": "eggs", "correct": true},
    {"text": "birds", "correct": false},
    {"text": "insects", "correct": false},
    {"text": "reptiles", "correct": false}
    ]
    },
    {
    "question": "What does a micron measure?",
    "answers": [
    {"text": "Distance", "correct": true},
    {"text": "Temperature", "correct": false},
    {"text": "Volume", "correct": false},
    {"text": "Weight", "correct": false}
    ]
    },
    {
    "question": "What is Neonatology the study of?",
    "answers": [
   
    {"text": "baby neon signs", "correct": false},
    {"text": "diseases and of newborn infants", "correct": true},
    {"text": "childbirth surgery", "correct": false},
    {"text": "neon colors", "correct": false}
    ]
    },
    {
    "question": "The crayfish isn't a fish at all, it is related to the __________",
    "answers": [
    {"text": "Lobster", "correct": true},
    {"text": "Crab", "correct": false},
    {"text": "Shrimp", "correct": false},
    {"text": "Prawn", "correct": false}
    ]
    },
    {
    "question": "What is Oceanology the study of?",
    "answers": [
  
    {"text": "marine life", "correct": false},
    {"text": "ocean currents", "correct": false},
    {"text": "ocean floor", "correct": false},
    {"text": "oceans", "correct": true},
    ]
    },
    {
        "question": "What is Symptomatology the study of?",
        "answers": [
      
        {"text": "medical treatments", "correct": false},
        {"text": "diseases", "correct": false},
        {"text": "symptoms", "correct": true},
        {"text": "diagnoses", "correct": false}
        ]
        },
        {
        "question": "Which science deals with the motion of projectiles?",
        "answers": [
        {"text": "Ballistics", "correct": true},
        {"text": "Astronomy", "correct": false},
        {"text": "Chemistry", "correct": false},
        {"text": "Geology", "correct": false}
        ]
        },
        {
        "question": "What is Nutriology the study of?",
        "answers": [
      
        {"text": "sports science", "correct": false},
        {"text": "nutrition", "correct": true},
        {"text": "food preparation", "correct": false},
        {"text": "culinary arts", "correct": false}
        ]
        },
        {
        "question": "Which astronomer had a metal nose?",
        "answers": [
       
        {"text": "Galileo Galilei", "correct": false},
        {"text": "Johannes Kepler", "correct": false},
        {"text": "Tycho Brahe", "correct": true},
        {"text": "Isaac Newton", "correct": false}
        ]
        },
        {
        "question": "What is Lexicology the study of?",
        "answers": [
     
        {"text": "literary analysis", "correct": false},
        {"text": "language structure", "correct": false},
        {"text": "etymology", "correct": false},
        {"text": "the signification and application of words", "correct": true},
        ]
        },
        {
        "question": "How many degrees does the earth rotate each hour?",
        "answers": [
       
        {"text": "Ten", "correct": false},
        {"text": "Twenty", "correct": false},
        {"text": "Thirty", "correct": false},
        {"text": "Fifteen", "correct": true},
        ]
        },
        {
            "question": "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?",
            "answers": [
      
            {"text": "Shellshock", "correct": false},
            {"text": "Heartbleed", "correct": true},
            {"text": "POODLE", "correct": false},
            {"text": "Spectre", "correct": false}
            ]
            },
            {
            "question": "Dutch computer scientist Mark Overmars is known for creating which game development engine?",
            "answers": [
      
            {"text": "Unity", "correct": false},
            {"text": "Unreal Engine", "correct": false},
            {"text": "Game Maker", "correct": true},
            {"text": "Godot", "correct": false}
            ]
            },
            {
            "question": "Which RAID array type is associated with data mirroring?",
            "answers": [
            {"text": "RAID 1", "correct": true},
            {"text": "RAID 0", "correct": false},
            {"text": "RAID 5", "correct": false},
            {"text": "RAID 10", "correct": false}
            ]
            },
            {
            "question": "When did the online streaming service 'Mixer' launch?",
            "answers": [
            {"text": "2016", "correct": true},
            {"text": "2014", "correct": false},
            {"text": "2015", "correct": false},
            {"text": "2017", "correct": false}
            ]
            },
            {
            "question": "When Gmail first launched, how much storage did it provide for your email?",
            "answers": [
            {"text": "1GB", "correct": true},
            {"text": "500MB", "correct": false},
            {"text": "2GB", "correct": false},
            {"text": "5GB", "correct": false}
            ]
            },
            {
            "question": "Who is the original author of the real-time physics engine called PhysX?",
            "answers": [
            {"text": "NovodeX", "correct": true},
            {"text": "Havok", "correct": false},
            {"text": "Bullet", "correct": false},
            {"text": "ODE", "correct": false}
            ]
            },
            {
            "question": "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
            "answers": [
            {"text": "1000", "correct": true},
            {"text": "1024", "correct": false},
            {"text": "2048", "correct": false},
            {"text": "500", "correct": false}
            ]
            },
            {
            "question": ".rs is the top-level domain for what country?",
            "answers": [
           
            {"text": "Russia", "correct": false},
            {"text": "Rwanda", "correct": false},
            {"text": "Saudi Arabia", "correct": false},
            {"text": "Serbia", "correct": true},
            ]
            },
            {
            "question": "Nvidia's headquarters are based in which Silicon Valley city?",
            "answers": [
           
            {"text": "San Jose", "correct": false},
            {"text": "Santa Clara", "correct": true},
            {"text": "Palo Alto", "correct": false},
            {"text": "Mountain View", "correct": false}
            ]
            },
            {
            "question": "The teapot often seen in many 3D modelling applications is called what?",
            "answers": [
            {"text": "Utah Teapot", "correct": true},
            {"text": "California Kettle", "correct": false},
            {"text": "Arizona Pot", "correct": false},
            {"text": "Texas Crockery", "correct": false}
            ]
            },
            {
            "question": "Unix Time is defined as the number of seconds that have elapsed since when?",
            "answers": [
            {"text": "Midnight, January 1, 1970", "correct": true},
            {"text": "Midnight, January 1, 1980", "correct": false},
            {"text": "Midnight, January 1, 1960", "correct": false},
            {"text": "Midnight, January 1, 1990", "correct": false}
            ]
            },
            {
            "question": "The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?",
            "answers": [
            {"text": "Taiwan", "correct": true},
            {"text": "China", "correct": false},
            {"text": "South Korea", "correct": false},
            {"text": "Japan", "correct": false}
            ]
            },
            {
            "question": "What is the name of the American film actress who laid the foundation for the development of technologies such as Wi-Fi, Bluetooth, and GPS?",
            "answers": [
         
            {"text": "Marilyn Monroe", "correct": false},
            {"text": "Audrey Hepburn", "correct": false},
            {"text": "Hedy Lamarr", "correct": true},
            {"text": "Grace Kelly", "correct": false}
            ]
            },
            {
                "question": "What element did Joseph Priestley discover in 1774?",
                "answers": [
                {"text": "Oxygen", "correct": true},
                {"text": "Hydrogen", "correct": false},
                {"text": "Nitrogen", "correct": false},
                {"text": "Carbon", "correct": false}
                ]
                },
                {
                "question": "What inorganic molecule is produced by lightning?",
                "answers": [
                {"text": "Ozone", "correct": true},
                {"text": "Carbon dioxide", "correct": false},
                {"text": "Nitrous oxide", "correct": false},
                {"text": "Water vapor", "correct": false}
                ]
                },
                {
                "question": "Bronze is an alloy consisting primarily of what two elements?",
                "answers": [
             
                {"text": "Copper and Zinc", "correct": false},
                {"text": "Iron and Nickel", "correct": false},
                {"text": "Aluminum and Silicon", "correct": false},
                {"text": "Copper and Tin", "correct": true}
                ]
                },
                {
                "question": "What is the nearest planet to the sun?",
                "answers": [
               
                {"text": "Venus", "correct": false},
                {"text": "Earth", "correct": false},
                {"text": "Mercury", "correct": true},
                {"text": "Mars", "correct": false}
                ]
                },
                {
                "question": "The earth has three layers that are different due to varying temperatures. What are its three layers?",
                "answers": [
                {"text": "Crust, mantle, and core", "correct": true},
                {"text": "Atmosphere, lithosphere, and hydrosphere", "correct": false},
                {"text": "Troposphere, stratosphere, and mesosphere", "correct": false},
                {"text": "Outer core, inner core, and asthenosphere", "correct": false}
                ]
                },
                {
                "question": "What is the largest known land animal?",
                "answers": [
                {"text": "Elephant", "correct": true},
                {"text": "Giraffe", "correct": false},
                {"text": "Hippo", "correct": false},
                {"text": "Dinosaur", "correct": false}
                ]
                },
                {
                "question": "Which of Newton’s Laws states that ‘for every action, there is an equal and opposite reaction?’",
                "answers": [
       
                {"text": "The first law of motion", "correct": false},
                {"text": "The second law of motion", "correct": false},
                {"text": "The third law of motion", "correct": true},
                {"text": "The law of universal gravitation", "correct": false}
                ]
                },
                {
                "question": "How many elements are there in the periodic table?",
                "answers": [
                {"text": "118", "correct": true},
                {"text": "92", "correct": false},
                {"text": "100", "correct": false},
                {"text": "120", "correct": false}
                ]
                },
                {
                "question": "What is the tallest type of grass?",
                "answers": [
                {"text": "Bamboo", "correct": true},
                {"text": "Wheat", "correct": false},
                {"text": "Corn", "correct": false},
                {"text": "Rice", "correct": false}
                ]
                },
                
                {
                "question": "Diabetes develops as the result of a problem with which specific organ in the body?",
                "answers": [
              
                {"text": "Liver", "correct": false},
                {"text": "Kidney", "correct": false},
                {"text": "Pancreas", "correct": true},
                {"text": "Spleen", "correct": false}
                ]
                },
                {
          
                "question": "What is it called when you make light change direction by passing it through a lens?",
                "answers": [
                {"text": "Refraction", "correct": true},
                {"text": "Reflection", "correct": false},
                {"text": "Dispersion", "correct": false},
                {"text": "Diffraction", "correct": false}
                ]
                },
              
                {
                "question": "Where is the world’s most active volcano located?",
                "answers": [
      
                {"text": "Japan", "correct": false},
                {"text": "Italy", "correct": false},
                {"text": "Indonesia", "correct": false},
                {"text": "Hawaii", "correct": true},
                ]
                },
                {
                "question": "What disease stems from the medieval term that means ‘bad air’?",
                "answers": [
               
                {"text": "Tuberculosis", "correct": false},
                {"text": "Malaria", "correct": true},
                {"text": "Typhoid", "correct": false},
                {"text": "Yellow fever", "correct": false}
                ]
                },
                {
                "question": "Optics is the study of what?",
                "answers": [
                {"text": "Light", "correct": true},
                {"text": "Sound", "correct": false},
                {"text": "Heat", "correct": false},
                {"text": "Electricity", "correct": false}
                ]
                },
                {
                "question": "What part of the brain deals with hearing and language?",
                "answers": [
           
                {"text": "Frontal lobe", "correct": false},
                {"text": "Occipital lobe", "correct": false},
                {"text": "Parietal lobe", "correct": false},
                {"text": "Temporal lobe", "correct": true}
                ]
                },
                {
                "question": "Dolly was the first-ever living creature to be cloned. What type of animal was she?",
                "answers": [
               
                {"text": "Dog", "correct": false},
                {"text": "Sheep", "correct": true},
                {"text": "Cat", "correct": false},
                {"text": "Mouse", "correct": false}
                ]
                },
                {
                "question": "Animals that eat both plants and meat are called what?",
                "answers": [
           
                {"text": "Herbivores", "correct": false},
                {"text": "Carnivores", "correct": false},
                {"text": "Omnivores", "correct": true},
                {"text": "Insectivores", "correct": false}
                ]
                },
                {
                "question": "What is the quality of an object that allows it to float on water?",
                "answers": [
                {"text": "Buoyancy", "correct": true},
                {"text": "Density", "correct": false},
                {"text": "Viscosity", "correct": false},
                {"text": "Surface tension", "correct": false}
                ]
                },
                {
                "question": "What is the largest internal organ of the human body?",
                "answers": [
              
                {"text": "Lungs", "correct": false},
                {"text": "Liver", "correct": true},
                {"text": "Brain", "correct": false},
                {"text": "Heart", "correct": false}
                ]
                },
                {
                "question": "Oncology focuses on what disease?",
                "answers": [
   
                {"text": "Heart disease", "correct": false},
                {"text": "Diabetes", "correct": false},
                {"text": "Cancer", "correct": true},
                {"text": "Alzheimer's", "correct": false}
                ]
                },
                {
                "question": "Which two elements on the periodic table are liquids at room temperature?",
                "answers": [
             
                {"text": "Gold and Silver", "correct": false},
                {"text": "Iron and Zinc", "correct": false},
                {"text": "Copper and Nickel", "correct": false},
                {"text": "Mercury and Bromine", "correct": true},
                ]
                },
                {
                "question": "What planet in our solar system has the most gravity?",
                "answers": [
                {"text": "Jupiter", "correct": true},
                {"text": "Saturn", "correct": false},
                {"text": "Neptune", "correct": false},
                {"text": "Earth", "correct": false}
                ]
                },
                {
                "question": "Penicillin is used to fight what type of infections?",
                "answers": [
        
                {"text": "Viral", "correct": false},
                {"text": "Bacterial", "correct": true},
                {"text": "Fungal", "correct": false},
                {"text": "Parasitic", "correct": false}
                ]
                },
                {
                "question": "What is the medical term for bad breath?",
                "answers": [
        
                {"text": "Gingivitis", "correct": false},
                {"text": "Plaque", "correct": false},
                {"text": "Halitosis", "correct": true},
                {"text": "Periodontitis", "correct": false}
                ]
                },
                {
                "question": "The study of the weather is called what?",
                "answers": [
              
                {"text": "Geology", "correct": false},
                {"text": "Astronomy", "correct": false},
                {"text": "Biology", "correct": false},
                {"text": "Meteorology", "correct": true},
                ]
                },
                {
                "question": "What is a Geiger Counter used to measure?",
                "answers": [
                {"text": "Radiation", "correct": true},
                {"text": "Temperature", "correct": false},
                {"text": "Humidity", "correct": false},
                {"text": "Pressure", "correct": false}
                ]
                },
                {
                "question": "What type of cell division results in two four daughter cells, each with half the number of chromosomes in the parent cells?",
                "answers": [
              
                {"text": "Mitosis", "correct": false},
                {"text": "Meiosis", "correct": true},
                {"text": "Binary fission", "correct": false},
                {"text": "Budding", "correct": false}
                ]
                },
                
                {
                "question": "What does ‘E’ represent in E=MC2?",
                "answers": [
                {"text": "Energy", "correct": true},
                {"text": "Electricity", "correct": false},
                {"text": "Entropy", "correct": false},
                {"text": "Einstein", "correct": false}
                ]
                },
                {
                "question": "According to Apollo astronauts, the Moon smells like what?",
                "answers": [
              
                {"text": "Rotten eggs", "correct": false},
                {"text": "Burnt gunpowder", "correct": true},
                {"text": "Fresh soil", "correct": false},
                {"text": "Metallic", "correct": false}
                ]
                },
                {
                "question": "Frogs belong to which animal group?",
                "answers": [
         
                {"text": "Reptiles", "correct": false},
                {"text": "Mammals", "correct": false},
                {"text": "Amphibians", "correct": true},
                {"text": "Insects", "correct": false}
                ]
                },
                {
                "question": "Which component of an atom might you expect to be orbiting around it?",
                "answers": [
             
                {"text": "Protons", "correct": false},
                {"text": "Neutrons", "correct": false},
                {"text": "Nucleus", "correct": false},
                {"text": "Electrons", "correct": true},
                ]
                },
                {
                "question": "Mycology is the scientific study of what?",
                "answers": [
                {"text": "Fungi", "correct": true},
                {"text": "Bacteria", "correct": false},
                {"text": "Viruses", "correct": false},
                {"text": "Protozoa", "correct": false}
                ]
                },
                {
                "question": "What is the name of the red pigment found in vertebrates that functions in oxygen transport?",
                "answers": [
    
                {"text": "Chlorophyll", "correct": false},
                {"text": "Melanin", "correct": false},
                {"text": "Hemoglobin", "correct": true},
                {"text": "Carotene", "correct": false}
                ]
                },
                {
                "question": "What is the electrical charge of a neutron?",
                "answers": [
      
                {"text": "Positive charge", "correct": false}, 
                {"text": "No charge", "correct": true},
                {"text": "Negative charge", "correct": false},
                {"text": "Variable charge", "correct": false}
                ]
                },
                {
                "question": "What kind of energy does an unlit match have?",
                "answers": [
            
                {"text": "Kinetic energy", "correct": false},
                {"text": "Potential energy", "correct": false},
                {"text": "Thermal energy", "correct": false},
                {"text": "Chemical energy", "correct": true},
                ]
                },
                {
                "question": "How do you calculate density?",
                "answers": [
                {"text": "Density is mass divided by volume", "correct": true},
                {"text": "Density is volume divided by mass", "correct": false},
                {"text": "Density is mass multiplied by volume", "correct": false},
                {"text": "Density is mass minus volume", "correct": false}
                ]
                },
                {
                "question": "What is it called when an individual doesn’t offer to help someone in an emergency if there are other people present?",
                "answers": [
             
                {"text": "Social distancing", "correct": false},
                {"text": "Bystander effect", "correct": true},
                {"text": "Passive behavior", "correct": false},
                {"text": "Avoidant behavior", "correct": false}
                ]
                },
                {
                "question": "Which psychological concept did Pavlov’s dog help him describe?",
                "answers": [
                {"text": "Memory recall", "correct": false},
                {"text": "Emotional intelligence", "correct": false},
                {"text": "Conditioning", "correct": true},

                {"text": "Cognitive dissonance", "correct": false}
                ]
                },
                {
                "question": "In terms of pH, what is ammonia?",
                "answers": [
            
                {"text": "Acidic", "correct": false},
                {"text": "Neutral", "correct": false},
                {"text": "Amphoteric", "correct": false},
                {"text": "Basic", "correct": true}
                ]
                },
                {
                "question": "About how old is Earth?",
                "answers": [
                {"text": "4.5 billion years", "correct": true},
                {"text": "2.5 billion years", "correct": false},
                {"text": "6.5 billion years", "correct": false},
                {"text": "8.5 billion years", "correct": false}
                ]
                },
                {
                "question": "What is the name of the most recent supercontinent?",
                "answers": [
       
                {"text": "Gondwana", "correct": false},
                {"text": "Laurasia", "correct": false},
                {"text": "Pangaea", "correct": true},
                {"text": "Rodinia", "correct": false}
                ]
                },
                {
                "question": "What is the scientific term for peeling skin?",
                "answers": [
            
                {"text": "Exfoliation", "correct": false},
                {"text": "Desquamation", "correct": true},
                {"text": "Ecdysis", "correct": false},
                {"text": "Molt", "correct": false}
                ]
                },
                {
                "question": "Which moon of Saturn has a methane cycle?",
                "answers": [
                
                {"text": "Enceladus", "correct": false},
                {"text": "Mimas", "correct": false},
                {"text": "Titan", "correct": true},
                {"text": "Rhea", "correct": false}
                ]
                },
                {
                "question": "Around what percentage of animal species are invertebrates?",
                "answers": [
    
                {"text": "75%", "correct": false},
                {"text": "85%", "correct": false},
                {"text": "65%", "correct": false},
                {"text": "95%", "correct": true},
                ]
                },
                {
                "question": "What animal is the closest living relative of a human?",
                "answers": [
                {"text": "Chimps", "correct": true},
                {"text": "Gorillas", "correct": false},
                {"text": "Orangutans", "correct": false},
                {"text": "Monkeys", "correct": false}
                ]
                },
                
               
                {
                "question": "The smallest bones in the body are located where?",
                "answers": [
                {"text": "The ear", "correct": true},
                {"text": "The nose", "correct": false},
                {"text": "The hand", "correct": false},
                {"text": "The foot", "correct": false}
                ]
                },
                {
                "question": "What is the scientific name for the job or role an organism plays in its habitat?",
                "answers": [
                
                {"text": "Habitat", "correct": false},
                {"text": "Niche", "correct": true},
                {"text": "Ecosystem", "correct": false},
                {"text": "Community", "correct": false}
                ]
                },
                {
                "question": "The process of weathered material moving due to gravity is called what?",
                "answers": [
                
                {"text": "Deposition", "correct": false},
                {"text": "Weathering", "correct": false},
                {"text": "Transportation", "correct": false},
                {"text": "Erosion", "correct": true},
                ]
                },
                {
                "question": "What is the fin on the backs of fish, some whales, and dolphins called?",
                "answers": [
               
                {"text": "Pectoral Fin", "correct": false},
                {"text": "Dorsal Fin", "correct": true},
                {"text": "Anal Fin", "correct": false},
                {"text": "Caudal Fin", "correct": false}
                ]
                },
                {
                "question": "What is a scientist who specializes in the study of cells called?",
                "answers": [
              
                {"text": "Biologist", "correct": false},
                {"text": "Geneticist", "correct": false},
                {"text": "Cytologist", "correct": true},
                {"text": "Histologist", "correct": false}
                ]
                },
                {
                "question": "What part of the brain controls hunger?",
                "answers": [
             
                {"text": "Cerebellum", "correct": false},
                {"text": "Amygdala", "correct": false},
                {"text": "Thalamus", "correct": false},
                {"text": "Hypothalamus", "correct": true},
                ]
                },
                {
                "question": "What flap on your windpipe helps keep out food",
                "answers": [
                {"text": "Epiglottis", "correct": true},
                {"text": "Trachea", "correct": false},
                {"text": "Bronchus", "correct": false},
                {"text": "Larynx", "correct": false}
                ]
                },
                {
                "question": "What causes the moon to shine?",
                "answers": [
             
                {"text": "Internal combustion", "correct": false},
                {"text": "Bioluminescence", "correct": false},
                {"text": "Reflection from the sunlight", "correct": true},
                {"text": "Lunar nuclear fusion", "correct": false}
                ]
                },
                {
                "question": "What does the ER of a cell stand for?",
                "answers": [
       
                {"text": "Energy Reservoir", "correct": false},
                {"text": "Endogenous Release", "correct": false},
                {"text": "Endoplasmic Reticulum", "correct": true},
                {"text": "Electron Regulator", "correct": false}
                ]
                },
                {
                "question": "What is the main structural molecule in hair and nails?",
                "answers": [
           
                {"text": "Collagen", "correct": false},
                {"text": "Elastin", "correct": false},
                {"text": "Melanin", "correct": false},
                {"text": "Keratin", "correct": true}
                ]
                },
                {
                "question": "What is a unit that measures force?",
                "answers": [
          
                {"text": "Kilograms", "correct": false},
                {"text": "Joules", "correct": false},
                {"text": "Watts", "correct": false},
                {"text": "Newtons", "correct": true},
                ]
                },
                {
                "question": "What are the gaps between nerve cells called?",
                "answers": [

                {"text": "Neurons", "correct": false},
                {"text": "Synapses", "correct": true},
                {"text": "Dendrites", "correct": false},
                {"text": "Axons", "correct": false}
                ]
                },
                {
                "question": "What is the galaxy closest in light-years to the Milky Way Galaxy?",
                "answers": [
 
                {"text": "Orion", "correct": false},
                {"text": "Triangulum", "correct": false},
                {"text": "Centaurus", "correct": false},
                {"text": "Andromeda", "correct": true},
                ]
                },
                {
                "question": "Which constellation are the stars Castor and Pollux in?",
                "answers": [
         
                {"text": "Orion", "correct": false},
                {"text": "Ursa Major", "correct": false},
                {"text": "Pegasus", "correct": false},
                {"text": "Gemini", "correct": true},
                ]
                },
                {
                "question": "What element is a diamond composed of?",
                "answers": [
                {"text": "Carbon", "correct": true},
                {"text": "Gold", "correct": false},
                {"text": "Silver", "correct": false},
                {"text": "Platinum", "correct": false}
                ]
                },
                {
                "question": "What was the first planet discovered with the aid of a telescope?",
                "answers": [
                {"text": "Uranus", "correct": true},
                {"text": "Neptune", "correct": false},
                {"text": "Pluto", "correct": false},
                {"text": "Saturn", "correct": false}
                ]
                },
                {
                "question": "What does a conchologist collect?",
                "answers": [
                {"text": "Seashells", "correct": true},
                {"text": "Coins", "correct": false},
                {"text": "Stamps", "correct": false},
                {"text": "Butterflies", "correct": false}
                ]
                },
                {
                "question": "What is the splitting of atomic nuclei called?",
                "answers": [
                {"text": "Nuclear Fission", "correct": true},
                {"text": "Nuclear Fusion", "correct": false},
                {"text": "Radioactive Decay", "correct": false},
                {"text": "Ionization", "correct": false}
                ]
                },
                {
                "question": "What is the sticky part of the pistil called?",
                "answers": [
           
                {"text": "Anther", "correct": false},
                {"text": "Style", "correct": false},
                {"text": "Stigma", "correct": true},
                {"text": "Ovary", "correct": false}
                ]
                },
                {
                "question": "What instrument do you use to measure wind speed?",
                "answers": [
                
                {"text": "Barometer", "correct": false},
                {"text": "Thermometer", "correct": false},
                {"text": "Hygrometer", "correct": false},
                {"text": "Anemometer", "correct": true},
                ]
                },
                
                {
                "question": "Botulinum toxin is commonly referred to as what?",
                "answers": [
   
                {"text": "Vaccine", "correct": false},
                {"text": "Bollium", "correct": false},
                {"text": "Botox", "correct": true},
                {"text": "Biactidote", "correct": false}
                ]
                },
                {
                "question": "What does the gall bladder secrete?",
                "answers": [
           
                {"text": "Insulin", "correct": false},
                {"text": "Bile", "correct": true},
                {"text": "Gastric juices", "correct": false},
                {"text": "Enzymes", "correct": false}
                ]
                },
                {
                "question": "What is made by white blood cells to help fight off infection?",
                "answers": [
      
                {"text": "Antigens", "correct": false},
                {"text": "Hormones", "correct": false},
                {"text": "Antibodies", "correct": true},
                {"text": "Enzymes", "correct": false}
                ]
                },
                {
                "question": "Which person is known for publishing “The Interpretation of Dreams”?",
                "answers": [
        
                {"text": "Carl Jung", "correct": false},
                {"text": "Alfred Adler", "correct": false},
                {"text": "Sigmund Freud", "correct": true},
                {"text": "Erik Erikson", "correct": false}
                ]
                },
                
                {
                "question": "The first vaccine was for which disease?",
                "answers": [
              
                {"text": "Polio", "correct": false},
                {"text": "Measles", "correct": false},
                {"text": "Tuberculosis", "correct": false},
                {"text": "Smallpox", "correct": true}
                ]
                },
                {
                "question": "Who was the first woman in space?",
                "answers": [
      
                {"text": "Sally Ride", "correct": false},
                {"text": "Mae Jemison", "correct": false},
                {"text": "Valentina Tereshkova", "correct": true},
                {"text": "Judith Resnik", "correct": false}
                ]
                },
                {
                "question": "What is the calm center part of a hurricane called?",
                "answers": [
               
                {"text": "Core", "correct": false},
                {"text": "Eye", "correct": true},
                {"text": "Vortex", "correct": false},
                {"text": "Cyclone", "correct": false}
                ]
                },
                {
                "question": "What layer of the Earth is right below the crust?",
                "answers": [
                
                {"text": "Outer Core", "correct": false},
                {"text": "Mantle", "correct": true},
                {"text": "Inner Core", "correct": false},
                {"text": "Asthenosphere", "correct": false}
                ]
                },
                {
                "question": "What is the first phase of mitosis?",
                "answers": [
                {"text": "Interphase", "correct": true},
                {"text": "Metaphase", "correct": false},
                {"text": "Anaphase", "correct": false},
                {"text": "Telophase", "correct": false}
                ]
                },
                {
                "question": "What are the lower chambers of the human heart called?",
                "answers": [
                {"text": "Ventricles", "correct": true},
                {"text": "Atria", "correct": false},
                {"text": "Aorta", "correct": false},
                {"text": "Pulmonary Trunk", "correct": false}
                ]
                },
                {
                "question": "Who begins food chains?",
                "answers": [
               
                {"text": "Consumers", "correct": false},
                {"text": "Decomposers", "correct": false},
                {"text": "Predators", "correct": false},
                {"text": "Producers", "correct": true}
                ]
                },
                {
                "question": "What part of the brain is responsible for vision?",
                "answers": [
               
                {"text": "Frontal", "correct": false},
                {"text": "Temporal", "correct": false},
                {"text": "Occipital", "correct": true},
                {"text": "Parietal", "correct": false}
                ]
                },
                
                {
                "question": "Who is considered the “father” of organic chemistry?",
                "answers": [
                
                {"text": "Linus Pauling", "correct": false},
                {"text": "Robert Hooke", "correct": false},
                {"text": "John Dalton", "correct": false},
                {"text": "Friedrich Wöhler", "correct": true},
                ]
                },
                {
                "question": "What scientist proposed the theory of continental drift?",
                "answers": [
                {"text": "Alfred Wegener", "correct": true},
                {"text": "Charles Lyell", "correct": false},
                {"text": "Harry Hess", "correct": false},
                {"text": "Arthur Holmes", "correct": false}
                ]
                },
                {
                "question": "What is the study of plant life called?",
                "answers": [
               
                {"text": "Zoology", "correct": false},
                {"text": "Entomology", "correct": false},
                {"text": "Mycology", "correct": false},
                {"text": "Botany", "correct": true}
                ]
                },
                {
                "question": "What color catches the eye first?",
                "answers": [
                {"text": "Yellow", "correct": false},
                {"text": "Red", "correct": false},
                {"text": "Blue", "correct": false},
                {"text": "Green", "correct": false}
                ]
                },
                {
                "question": "Specialized cells are called photoreceptors. What are the 2 types of photoreceptors in the retina called?",
                "answers": [
              
                {"text": "Bipolar cells and ganglion cells", "correct": false},
                {"text": "Astrocytes and oligodendrocytes", "correct": false},
                {"text": "Microglia and Schwann cells", "correct": false},
                {"text": "Rods and cones", "correct": true},
                ]
                },
                {
                "question": "A unit of electromotive force is called what?",
                "answers": [
          
                {"text": "Ampere", "correct": false},
                {"text": "Volt", "correct": true},
                {"text": "Ohm", "correct": false},
                {"text": "Watt", "correct": false}
                ]
                },
                {
                "question": "What gas makes up most of the atmosphere of Mars?",
                "answers": [
                {"text": "Carbon Dioxide", "correct": true},
                {"text": "Nitrogen", "correct": false},
                {"text": "Oxygen", "correct": false},
                {"text": "Helium", "correct": false}
                ]
                },
                {
                "question": "To any astronaut, what is an EVA?",
                "answers": [
                {"text": "Extravehicular activity", "correct": true},
                {"text": "Extraterrestrial visitation", "correct": false},
                {"text": "Earthly venture analysis", "correct": false},
                {"text": "Exoplanetary vehicle assembly", "correct": false}
                ]
                },
                {
                "question": "Between which two planets does the asteroid belt lie?",
                "answers": [
                {"text": "Jupiter and Mars", "correct": true},
                {"text": "Mars and Earth", "correct": false},
                {"text": "Saturn and Uranus", "correct": false},
                {"text": "Venus and Earth", "correct": false}
                ]
                },
                {
                "question": "What is the process of breaking down food called?",
                "answers": [
                {"text": "Digestion", "correct": true},
                {"text": "Assimilation", "correct": false},
                {"text": "Absorption", "correct": false},
                {"text": "Metabolism", "correct": false}
                ]
                },
                {
                "question": "How many bones are in a giraffe’s neck?",
                "answers": [
                {"text": "Seven", "correct": true},
                {"text": "Nine", "correct": false},
                {"text": "Twelve", "correct": false},
                {"text": "Five", "correct": false}
                ]
                },
                {
                "question": "What ongoing process allows water to be constantly recycled?",
                "answers": [
           
                {"text": "Water Flow", "correct": false},
                {"text": "Water Palpitating", "correct": false},
                {"text": "Precipitation", "correct": false},
                {"text": "Water Cycle", "correct": true},
                ]
                },
                {
                "question": "What is the average life cycle of a red blood cell?",
                "answers": [
              
                {"text": "38 days", "correct": false},
                {"text": "120 days", "correct": true},
                {"text": "365 days", "correct": false},
                {"text": "90 days", "correct": false}
                ]
                },
                {
                "question": "What was the first sound-recording device called?",
                "answers": [
            
                {"text": "Gramophone", "correct": false},
                {"text": "Phonograph", "correct": true},
                {"text": "Record Player", "correct": false},
                {"text": "Cylinderphone", "correct": false}
                ]
                },
                {
                "question": "What is the scientific word for push or pull?",
                "answers": [
             
                {"text": "Velocity", "correct": false},
                {"text": "Inertia", "correct": false},
                {"text": "Motion", "correct": false},
                {"text": "Force", "correct": true},
                ]
                },
                {
                "question": "What is the only bone in the human body that isn’t attached to another bone?",
                "answers": [
                
                {"text": "Stapes bone", "correct": false},
                {"text": "Patella", "correct": false},
                {"text": "Clavicle", "correct": false},
                {"text": "Hyoid bone", "correct": true},
                ]
                },
                {
                "question": "Who first proposed the concept of contact lenses?",
                "answers": [
                {"text": "Leonardo da Vinci", "correct": true},
                {"text": "Benjamin Franklin", "correct": false},
                {"text": "Thomas Edison", "correct": false},
                {"text": "Albert Einstein", "correct": false}
                ]
                },
                {
                "question": "What are the four states of matter?",
                "answers": [
                {"text": "Solid, liquid, gas, plasma", "correct": true},
                {"text": "Solid, liquid, gas, energy", "correct": false},
                {"text": "Solid, liquid, vapor, plasma", "correct": false},
                {"text": "Solid, liquid, air, plasma", "correct": false}
                ]
                },
                {
                "question": "The metamorphism of what rock forms marble?",
                "answers": [
                {"text": "Limestone", "correct": true},
                {"text": "Granite", "correct": false},
                {"text": "Shale", "correct": false},
                {"text": "Sandstone", "correct": false}
                ]
                },
                {
                "question": "Aspirin comes from the bark of what tree?",
                "answers": [
                {"text": "Willow", "correct": true},
                {"text": "Oak", "correct": false},
                {"text": "Birch", "correct": false},
                {"text": "Maple", "correct": false}
                ]
                },
                {
                "question": "What is the smallest organ in the human body?",
                "answers": [
                {"text": "Pineal gland", "correct": true},
                {"text": "Thyroid", "correct": false},
                {"text": "Pituitary gland", "correct": false},
                {"text": "Appendix", "correct": false}
                ]
                },
                {
                "question": "What are the four primary precious metals?",
                "answers": [
             
                {"text": "Gold, Silver, Ruby, and Emerald", "correct": false},
                {"text": "Gold, Silver, Platinum, and Palladium", "correct": true},
                {"text": "Silver, Platinum, Gold, and Saphire", "correct": false},
                {"text": "Gold, silver, copper, and rhodium", "correct": false}
                ]
                },
                {
                "question": "What is the only planet in our solar system less dense than water?",
                "answers": [
       
                {"text": "Neptune", "correct": false},
                {"text": "Jupiter", "correct": false},
                {"text": "Uranus", "correct": false},
                {"text": "Saturn", "correct": true},
                ]
                },
                {
                "question": "The Arrector Pili muscles are responsible for what phenomenon?",
                "answers": [
                {"text": "Goosebumps", "correct": true},
                {"text": "Shivering", "correct": false},
                {"text": "Blushing", "correct": false},
                {"text": "Twitching", "correct": false}
                ]
                },
                {
                "question": "What is the smallest named time interval?",
                "answers": [
              
                {"text": "Nanosecond", "correct": false},
                {"text": "Microsecond", "correct": false},
                {"text": "Planck time", "correct": true},
                {"text": "Plankosecond", "correct": false}
                ]
                },
                {
                "question": "What reaction releases energy into its surroundings?",
                "answers": [
               
                {"text": "Endothermic reaction", "correct": false},
                {"text": "Hydrolysis", "correct": false},
                {"text": "Oxidation", "correct": false},
                {"text": "Exothermic reaction", "correct": true}
                ]
                },
                {
                "question": "What gives onions their distinctive smell?",
                "answers": [
               
                {"text": "Allicin", "correct": false},
                {"text": "Acetic acid", "correct": false},
                {"text": "Sulfer", "correct": true},
                {"text": "Propyl sulfide", "correct": false}
                ]
                },
                {
                "question": "What element is named after the Greek word for green?",
                "answers": [
             
                {"text": "Copper", "correct": false},
                {"text": "Silver", "correct": false},
                {"text": "Nickel", "correct": false},
                {"text": "Sulfer", "correct": true},
                ]
                },
                {
                "question": "How many vertebrae in the human spine?",
                "answers": [
                {"text": "33", "correct": true},
                {"text": "27", "correct": false},
                {"text": "22", "correct": false},
                {"text": "37", "correct": false}
                ]
                },
                {
                "question": "How long is an eon?",
                "answers": [
          
                {"text": "A million years", "correct": false},
                {"text": "A thousand years", "correct": false},
                {"text": "A billion years", "correct": true},
                {"text": "Ten thousand years", "correct": false}
                ]
                },
                {
                "question": "What is the name of the process where plants lose water in the atmosphere?",
                "answers": [
  
                {"text": "Evaporation", "correct": false},
                {"text": "Condensation", "correct": false},
                {"text": "Transpiration", "correct": true},
                {"text": "Precipitation", "correct": false}
                ]
                },
                {
                "question": "What part of the human body is the axilla?",
                "answers": [
        
                {"text": "The elbow", "correct": false},
                {"text": "The ankle", "correct": false},
                {"text": "The knee", "correct": false},
                {"text": "The armpit", "correct": true},
                ]
                },
                {
                "question": "What is the second most abundant mineral in the human body?",
                "answers": [

                {"text": "Calcium", "correct": false},
                {"text": "Phosphorus", "correct": true},
                {"text": "Potassium", "correct": false},
                {"text": "Sodium", "correct": false}
                ]
                },
                {
                "question": "Where on the human body are the most sweat glands?",
                "answers": [
             
                {"text": "Armpits", "correct": false},
                {"text": "Back", "correct": false},
                {"text": "Palms", "correct": false},
                {"text": "Bottom of the feet", "correct": true},
                ]
                },
                {
                "question": "What metal is the best conductor of electricity?",
                "answers": [
                {"text": "Silver", "correct": true},
                {"text": "Gold", "correct": false},
                {"text": "Copper", "correct": false},
                {"text": "Aluminum", "correct": false}
                ]
                },
                {
                "question": "What does the human lacrimal gland produce?",
                "answers": [
       
                {"text": "Saliva", "correct": false},
                {"text": "Mucus", "correct": false},
                {"text": "Oil", "correct": false},
                {"text": "Tears", "correct": true},
                ]
                },
                {
                "question": "What are the four types of adult human teeth?",
                "answers": [
               
                {"text": "Incisors, molars, bicuspids, wisdom teeth", "correct": false},
                {"text": "Incisors, canines, premolars, molars", "correct": true},
                {"text": "Front teeth, back teeth, top teeth, bottom teeth", "correct": false},
                {"text": "Baby teeth, permanent teeth, milk teeth, wisdom teeth", "correct": false}
                ]
                },
                {
                "question": "What color has the longest wavelength in the visible spectrum?",
                "answers": [
            
                {"text": "Blue", "correct": false},
                {"text": "Yellow", "correct": false},
                {"text": "Red", "correct": true},
                {"text": "Green", "correct": false}
                ]
                },
                {
                "question": "Syncope is the medical name for what condition?",
                "answers": [
                {"text": "Fainting", "correct": true},
                {"text": "Seizure", "correct": false},
                {"text": "Vertigo", "correct": false},
                {"text": "Fainting", "correct": true},
                {"text": "Coma", "correct": false}
                ]
                },
                {
                "question": "What number on the Richter scale does an earthquake have to reach to be considered major?",
                "answers": [
                {"text": "7", "correct": true},
                {"text": "5", "correct": false},
                {"text": "8", "correct": false},
                {"text": "6", "correct": false}
                ]
                },
                {
                "question": "What scale is used to measure the hardness of minerals?",
                "answers": [
                {"text": "Mohs scale", "correct": true},
                {"text": "Beaufort scale", "correct": false},
                {"text": "Richter scale", "correct": false},
                {"text": "Kelvin scale", "correct": false}
                ]
                },
                {
                "question": "What is the largest nerve in the human body?",
                "answers": [
                {"text": "Sciatic", "correct": true},
                {"text": "Vagus", "correct": false},
                {"text": "Optic", "correct": false},
                {"text": "Phrenic", "correct": false}
                ]
                },
                {
                "question": "The small intestine is made up of jejunum, ileum, and what?",
                "answers": [
                
                {"text": "Rectum", "correct": false},
                {"text": "Colon", "correct": false},
                {"text": "Duodenum", "correct": true},
                {"text": "Cecum", "correct": false}
                ]
                },
                {
                "question": "What condition is singultus?",
                "answers": [
                {"text": "Hiccups", "correct": true},
                {"text": "Heartburn", "correct": false},
                {"text": "Asthma", "correct": false},
                {"text": "Arthritis", "correct": false}
                ]
                },
                {
                "question": "What sense is most closely linked to memory?",
                "answers": [
                {"text": "Smell", "correct": true},
                {"text": "Taste", "correct": false},
                {"text": "Hearing", "correct": false},
                {"text": "Sight", "correct": false}
                ]
                }
    ];


     

questions.sort(() => Math.random() - 0.5);




































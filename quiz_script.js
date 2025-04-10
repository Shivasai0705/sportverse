const quizzes = {
    football: [
        { question: "Which country won the FIFA World Cup in 2018?", options: ["Germany", "Brazil", "France", "Argentina"], answer: 2, explanation: "France won the FIFA World Cup in 2018, defeating Croatia in the final." },
        { question: "How many players are there in a standard football team?", options: ["9", "10", "11", "12"], answer: 2, explanation: "A standard football team consists of 11 players on the field." },
        { question: "What is the maximum duration of a standard football match?", options: ["80 minutes", "90 minutes", "100 minutes", "120 minutes"], answer: 1, explanation: "A standard football match lasts 90 minutes, divided into two halves of 45 minutes each." },
        { question: "Who has won the most Ballon d'Or awards?", options: ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Pele"], answer: 1, explanation: "Lionel Messi holds the record for the most Ballon d'Or awards." },
        { question: "Which club won the UEFA Champions League in 2021?", options: ["Manchester City", "Chelsea", "Real Madrid", "Barcelona"], answer: 1, explanation: "Chelsea won the 2021 UEFA Champions League, defeating Manchester City in the final." }
    ],
    basketball: [
        { question: "How many players are on a basketball team on the court?", options: ["4", "5", "6", "7"], answer: 1, explanation: "A basketball team has 5 players on the court at a time." },
        { question: "Who is known as 'His Airness' in basketball?", options: ["LeBron James", "Michael Jordan", "Kobe Bryant", "Shaquille O'Neal"], answer: 1, explanation: "Michael Jordan is famously known as 'His Airness' for his incredible dunking ability." },
        { question: "What is the duration of an NBA game?", options: ["40 minutes", "48 minutes", "60 minutes", "30 minutes"], answer: 1, explanation: "An NBA game consists of four 12-minute quarters, making it 48 minutes long." },
        { question: "Which country invented basketball?", options: ["USA", "Canada", "UK", "Australia"], answer: 1, explanation: "Basketball was invented by Dr. James Naismith, a Canadian, in the USA." },
        { question: "Which team won the NBA Championship in 2020?", options: ["Miami Heat", "Los Angeles Lakers", "Golden State Warriors", "Boston Celtics"], answer: 1, explanation: "The Los Angeles Lakers won the 2020 NBA Championship, led by LeBron James." }
    ],
    cricket: [
        { question: "Which country has won the most ICC Cricket World Cups?", options: ["India", "Australia", "England", "West Indies"], answer: 1, explanation: "Australia has won the most ICC Cricket World Cups." },
        { question: "What is the highest individual score in an ODI match?", options: ["200", "264", "210", "250"], answer: 1, explanation: "Rohit Sharma holds the record for the highest ODI score, 264 runs." },
        { question: "How many players are there in a cricket team?", options: ["10", "11", "12", "13"], answer: 1, explanation: "A cricket team consists of 11 players." },
        { question: "Who is known as the 'God of Cricket'?", options: ["Virat Kohli", "Sachin Tendulkar", "MS Dhoni", "Ricky Ponting"], answer: 1, explanation: "Sachin Tendulkar is referred to as the 'God of Cricket'." },
        { question: "What is the standard length of a cricket pitch?", options: ["20 yards", "22 yards", "25 yards", "18 yards"], answer: 1, explanation: "The standard length of a cricket pitch is 22 yards." }
    ],
    tennis: [
        { question: "Who has won the most Grand Slam titles in men's tennis?", options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"], answer: 2, explanation: "Novak Djokovic currently holds the record for the most Grand Slam titles in men's tennis." },
        { question: "What is the surface of the Wimbledon court made of?", options: ["Clay", "Grass", "Hard Court", "Carpet"], answer: 1, explanation: "Wimbledon is played on grass courts, making it unique among Grand Slam tournaments." },
        { question: "How many sets are played in a standard Grand Slam men's match?", options: ["3", "4", "5", "6"], answer: 2, explanation: "Men's Grand Slam matches are best-of-five sets." },
        { question: "Which female player has won the most Grand Slam titles?", options: ["Serena Williams", "Steffi Graf", "Margaret Court", "Martina Navratilova"], answer: 2, explanation: "Margaret Court holds the record for the most Grand Slam singles titles." },
        { question: "What is the term for a 40-40 score in tennis?", options: ["Match Point", "Advantage", "Deuce", "Break Point"], answer: 2, explanation: "A 40-40 score in tennis is called 'Deuce'." }
    ],
    swimming: [
        { question: "What stroke is used in the fastest swimming races?", options: ["Breaststroke", "Butterfly", "Freestyle", "Backstroke"], answer: 2, explanation: "Freestyle is the fastest swimming stroke in competitions." },
        { question: "How many lanes are there in an Olympic swimming pool?", options: ["6", "7", "8", "10"], answer: 3, explanation: "An Olympic swimming pool has 10 lanes." },
        { question: "Who has won the most Olympic gold medals in swimming?", options: ["Mark Spitz", "Michael Phelps", "Ian Thorpe", "Ryan Lochte"], answer: 1, explanation: "Michael Phelps holds the record for the most Olympic gold medals." },
        { question: "What is the length of an Olympic swimming pool?", options: ["25m", "50m", "100m", "75m"], answer: 1, explanation: "An Olympic swimming pool is 50 meters long." },
        { question: "What does IM stand for in swimming?", options: ["Individual Medley", "International Meet", "Interval Match", "Integrated Motion"], answer: 0, explanation: "IM stands for Individual Medley, where all four strokes are used in one race." }
    ]
};

let currentQuiz = [];
        let currentQuestionIndex = 0;

        function startQuiz(sport) {
            document.getElementById("quiz-section").classList.remove("hidden");
            document.getElementById("quiz-title").textContent = `${sport.charAt(0).toUpperCase() + sport.slice(1)} Quiz`;
            
            // Reset quiz data
            currentQuiz = quizzes[sport];
            currentQuestionIndex = 0;
            
            // Reset UI
            document.getElementById("quiz-container").classList.remove("hidden");
            document.getElementById("quiz-completion").classList.add("hidden");
            document.getElementById("explanation-section").classList.add("hidden");
            document.getElementById("options").innerHTML = "";
            document.getElementById("question").textContent = "";
            
            // **Load the first question immediately**
            loadQuestion();
        }

        function loadQuestion() {
            if (currentQuestionIndex >= currentQuiz.length) {
                document.getElementById("quiz-container").classList.add("hidden");
                document.getElementById("quiz-completion").classList.remove("hidden");
                return;
            }

            let q = currentQuiz[currentQuestionIndex];
            document.getElementById("question").textContent = q.question;
            let optionsHTML = "";
            q.options.forEach((option, index) => {
                optionsHTML += `<button onclick="checkAnswer(${index})" id="option-${index}">${option}</button>`;
            });
            document.getElementById("options").innerHTML = optionsHTML;

            // Hide explanation on new question
            document.getElementById("explanation-section").classList.add("hidden");
        }

        function checkAnswer(selectedIndex) {
            let q = currentQuiz[currentQuestionIndex];

            // Highlight correct & wrong answers
            document.getElementById(`option-${q.answer}`).classList.add("correct");
            if (selectedIndex !== q.answer) {
                document.getElementById(`option-${selectedIndex}`).classList.add("wrong");
                document.getElementById("explanation").textContent = q.explanation;
                document.getElementById("explanation-section").classList.remove("hidden");
            } else {
                nextQuestion();
            }
        }

        function nextQuestion() {
            currentQuestionIndex++;
            document.getElementById("explanation-section").classList.add("hidden"); 
            loadQuestion();
        }

        function resetQuiz() {
            document.getElementById("quiz-section").classList.add("hidden");
            document.getElementById("quiz-container").classList.remove("hidden");
            document.getElementById("quiz-completion").classList.add("hidden");
        }

const questions = [
    { word: "яблуко", correct: "apple", options: ["apple", "banana", "carrot", "lemon"] },
    { word: "кіт", correct: "cat", options: ["cat", "dog", "lion", "mouse"] },
    { word: "будинок", correct: "house", options: ["tent", "castle", "house", "flat"] },
    { word: "машина", correct: "car", options: ["bus", "train", "bike", "car"] },
    { word: "вікно", correct: "window", options: ["roof", "floor", "window", "wall"] },
    { word: "стілець", correct: "chair", options: ["table", "chair", "lamp", "bed"] },
    { word: "вода", correct: "water", options: ["milk", "juice", "soda", "water"] },
    { word: "книга", correct: "book", options: ["pen", "paper", "notebook", "book"] },
    { word: "сонце", correct: "sun", options: ["sun", "moon", "star", "sky"] },
    { word: "ніч", correct: "night", options: ["evening", "morning", "night", "afternoon"] },
    { word: "собака", correct: "dog", options: ["dog", "wolf", "fox", "bear"] },
    { word: "вчитель", correct: "teacher", options: ["student", "teacher", "worker", "boss"] },
    { word: "друг", correct: "friend", options: ["enemy", "friend", "stranger", "partner"] },
    { word: "школа", correct: "school", options: ["library", "school", "university", "club"] },
    { word: "ручка", correct: "pen", options: ["pencil", "pen", "brush", "marker"] }
  ];
  
  let currentIndex = 0;
  let score = 0;
  let timer = 0;
  let interval;
  
  const startBtn = document.getElementById("start-button");
  const startScreen = document.getElementById("start-screen");
  const gameScreen = document.getElementById("game-screen");
  const endScreen = document.getElementById("end-screen");
  const word = document.getElementById("word");
  const answers = document.querySelectorAll(".answer");
  const timerDisplay = document.getElementById("timer");
  const scoreDisplay = document.getElementById("score");
  const progress = document.getElementById("progress");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  
  startBtn.addEventListener("click", () => {
    startScreen.style.display = "none"; // скрываем стартовый экран полностью
    gameScreen.classList.remove("hidden");
    startGame();
  });
  
  function startGame() {
    interval = setInterval(() => {
      timer++;
      timerDisplay.textContent = `Час: ${timer} сек`;
    }, 1000);
    showQuestion();
  }
  
  function showQuestion() {
    const q = questions[currentIndex];
    word.textContent = q.word;
  
    let options = [...q.options].sort(() => Math.random() - 0.5);
    answers.forEach((btn, index) => {
      btn.textContent = options[index];
      btn.onclick = () => {
        if (options[index] === q.correct) {
          score += 10;
          scoreDisplay.textContent = `Бали: ${score}`;
        }
        if (currentIndex < questions.length - 1) {
          currentIndex++;
          showQuestion();
        } else {
          endGame();
        }
      };
    });
  
    progress.textContent = `Питання ${currentIndex + 1} з ${questions.length}`;
  }
  
  function endGame() {
    clearInterval(interval);
    gameScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");
  }
  
  document.getElementById("restart-btn").addEventListener("click", () => {
    score = 0;
    timer = 0;
    currentIndex = 0;
    timerDisplay.textContent = "Час: 0 сек";
    scoreDisplay.textContent = "Бали: 0";
    endScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    startGame();
  });
  
  prevBtn.onclick = () => {
    if (currentIndex > 0) {
      currentIndex--;
      showQuestion();
    }
  };
  
  nextBtn.onclick = () => {
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      showQuestion();
    }
  };
let score = 0;
let timeLeft = 10;
let timer;

const clickBtn = document.getElementById("clickBtn");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");

clickBtn.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
});

startBtn.addEventListener("click", () => {
    score = 0;
    timeLeft = 10;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
    clickBtn.disabled = false;
    startBtn.disabled = true;

    timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            clickBtn.disabled = true;
            startBtn.disabled = false;
            alert(`ゲーム終了！あなたのスコアは ${score} 点です！`);
        }
    }, 1000);
});

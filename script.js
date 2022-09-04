
// MOD1: The DOM-Based Game
// Whack_A_Mole!
// GAME ON!

const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const buttonEl = document.querySelector('button');

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = null;
let gameStarted = false;
let gameOver = true;
let countDownTimerId;

function randomSquare() {
    if (gameStarted == true) {
        squares.forEach(square => {
            square.classList.remove('mole')
        })

        let randomSquare = squares[Math.floor(Math.random() * 9)]
        randomSquare.classList.add('mole')

        hitPosition = randomSquare.id
    }
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition && gameStarted) {
            result++
            score.textContent = result
            hitPosition = null

        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 1000)
}

function countDown() {
    if (currentTime > 0) {
        currentTime--
        timeLeft.textContent = currentTime
    } else {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        gameOver=true
        gameStarted = false 
        alert('GAME OVER! Your final score is ' + result)
        alert('Hit START to play again and improve your score!')
    }
}

const restartButton = document.getElementById('start');
restartButton.addEventListener('click', () => {
    if (gameOver == true) {
        result = 0;
        score.textContent = "00";
        timeLeft.textContent = "10";
        currentTime = 10;
        timerId = null;
        gameStarted = true;
        gameOver = false;
        moveMole();
        countDownTimerId = setInterval(countDown, 1000)
    }
})
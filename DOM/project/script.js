'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // When there is no input
    if (!guess) {
        const upDate = document.querySelector('.message').textContent = 'No number!';
        console.log(upDate);

        // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct number!';
        // when guess is too high
    } else if (guess > secretNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost The Game!';
            document.querySelector('.score').textContent = 0;
        }

        // when guess is to low
        
    } else if (guess < secretNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost The Game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});
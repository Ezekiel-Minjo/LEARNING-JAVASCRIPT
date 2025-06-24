'use strict';
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas){
    if (avgDolphins >= (2 * scoreKoalas))
        console.log(`Dolphins Wins ${scoreDolphins} vs ${scoreKoalas}`);
    else if (avgKoalas >= 2 * scoreDolphins)
        console.log(`Koala Wins  ${scoreKoalas} vs ${scoreDolphins}`);
    else
    console.log(`No team wins...`); 
}
 let avgDolphins = scoreDolphins;
 let avgKoalas = scoreKoalas;
 checkWinner(avgDolphins, avgKoalas);
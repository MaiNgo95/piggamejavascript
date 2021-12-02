'use strict';
const player0 =document.querySelector('.player--0');
const player1 =document.querySelector('.player--1');
const score0 = document.querySelector('#score--0'); //#use in id not class
//same thing with selector we can use get 
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const diceEL = document.querySelector('.dice'); //use . in front for class
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
score0.textContent = 0; //make score to 0
score1.textContent = 0;
diceEL.classList.add('hidden');

//put the score outside of the loop roll
const scores = [0,0];
let currentScore = 0;
let activeplayer = 0;
let playing = true;

const replay =function(){
    const scores = [0,0];
    let currentScore = 0;
    let activeplayer = 0;
    let playing = true;

    score0.textContent = 0; //make score to 0
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    diceEL.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}

replay();
//get the information out of the function
let scores, currentScore, activeplayer, playing;


const switchPlayer = function(){
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    activeplayer = activeplayer === 0 ? 1 :0; //if player == 0 then new activeplayer should be 1 else 0
    currentScore= 0;
    //change color to which one is active which is not
    //toggle like pop up activity
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function(){
    if(playing){
    //generate random dice 
        const dice = Math.trunc(Math.random()*6) +1; //add 1 to get number 6
        //display dicenumber
        diceEL.classList.remove('hidden');
        diceEL.src = `dice-${dice}.png`; //image of the dices 
        if(dice !== 1){
            //
            //currentScore= currentScore + dice;
            currentScore += dice;
            //display the score after hit 1
            document.getElementById(`current--${activeplayer}`).textContent = currentScore;
            //current0.textContent = currentScore; 

        }else{
            //switch to the next player
            switchPlayer();

        }
    }
});

btnHold.addEventListener('click',function(){
    if(playing){
        scores[activeplayer] += currentScore; 
        document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];
        
        if(scores[activeplayer]>=100){
            playing = false;
            diceEL.classList.add('hidden');
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
        }else{
        switchPlayer();
        }
    }

});

btnNew.addEventListener('click', function(){
    replay();    
    

});
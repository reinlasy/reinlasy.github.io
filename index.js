const playerScoreSpan = document.getElementById('playerScore');
const compScoreSpan = document.getElementById('compScore');
const topElements = document.getElementsByClassName('top');
const button = document.getElementsByClassName('btn')
const resultDiv = document.getElementsByClassName('resultDiv');

const won = document.getElementById('won');
const lost = document.getElementById('lost');
const tie = document.getElementById('tie');


const tieSvg = document.getElementById('tieSvg');
const humanSvg = document.getElementById('humanSvg');
const compSvg = document.getElementById('compSvg');

// const h5ResultWon = document.createElement('h5');
// const h5ResultLost = document.createElement('h5');
// const h5ResultTie = document.createElement('h5');

// h5ResultWon.textContent = 'You Won!'
// h5ResultLost.textContent= 'You Lost!'
// h5ResultTie.textContent = 'Tied'


let hum =0;
let com =0;
let current = null;
let input = ''; 
let winner = '';
let count = 0;


function transitionjs(e) {
    if (current === null) {
        e.classList.toggle('toggled');
        current = e;
        console.log(current);
        inputCheck(e);
        whoWon();
        // playerScoreSpan.textContent = `${humScore}`;
        setTimeout(()=>removeToggle(e), 500);
    } else if (current === e) {
        return;
    }
    if(count==5){
        resetScore();
        for (let i = 0; i < topElements.length; i++) {
            topElements[i].style.pointerEvents = 'none';
        }
        if(hum==com){
            // resultDiv.appendChild(h5ResultTie);
            tie.classList.add('toggled')
        }
        if(hum>com){
            won.classList.add('toggled')
            // resultDiv.appendChild(h5ResultWon);
        }else{
            lost.classList.add('toggled')
            // resultDiv.appendChild(h5ResultLost);
        }
    }

}    


function removeToggle(e){
    e.classList.remove('toggled');
    current = null;
}

function inputCheck(e){
    if(e.classList.contains('rock')){
        input = 'rock';
        console.log(input);
    }
    if(e.classList.contains('paper')){
        input = 'paper';
        // console.log(input);
    }
    if(e.classList.contains('scissors')){
        input = 'scissors';
        // console.log(input);
    }
}


function getComputerChoice(){
    let rand = ['rock','paper','scissors'];
    return rand[Math.floor(Math.random()*3)].toLowerCase();
}

function whoWon(){
    let comp = getComputerChoice();
    if(input==getComputerChoice()){
        hum++;
        com++;
        compScoreSpan.textContent = `${com}`;
        playerScoreSpan.textContent = `${hum}`;

        tieSvg.classList.add('toggled');
        humanSvg.classList.remove('toggled');
        compSvg.classList.remove('toggled');
    }
    else if ((input=="rock" && comp=="scissors") || (input=="paper" && comp=="rock") || (input=="scissors" && comp=="paper")){
        hum++;
        playerScoreSpan.textContent = `${hum}`;
        humanSvg.classList.add('toggled');
        compSvg.classList.remove('toggled');
        tieSvg.classList.remove('toggled');
        
    } else{
        com++;
        compScoreSpan.textContent = `${com}`;
        compSvg.classList.add('toggled');
        humanSvg.classList.remove('toggled');
        tieSvg.classList.remove('toggled');
    } 
    count++;
}


function resetScore(){
}
// shifted reset score stuff to reset 

function reset(){
    count=0;
    hum=0;
    com=0;
    humScore=0;
    compScore=0;
    winner='';  
    compScoreSpan.textContent = 0;
    playerScoreSpan.textContent = 0;
    for (let i = 0; i < topElements.length; i++) {
        topElements[i].style.pointerEvents = 'auto';
    }
    won.classList.remove('toggled')
    lost.classList.remove('toggled')
    tie.classList.remove('toggled')
}


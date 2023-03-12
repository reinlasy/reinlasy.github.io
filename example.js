// function getComputerChoice(){
//     let rand = ["rock","paper","scissors"];
//     return rand[Math.floor(Math.random()*3)].toLowerCase();
// }

// let hum =0;
// let com =0;

// function whoWon(){
//     let input = prompt("Rock, papers or scissors?").toLowerCase();    
//     let comp = getComputerChoice();
//     if(input==getComputerChoice()){
//         // console.log("Tie !");
//         hum++;
//         com++;
//     }
//     else if ((input=="rock" && comp=="scissors") || (input=="paper" && comp=="rock") || (input=="scissors" && comp=="paper")){
//         // console.log("Human won !");
//         hum++;
//         console.log("human" +hum);
//     } else{
//         // console.log("Computer Won!");
//         com++;
//         console.log("com" +com);
//     } 
// }


// function Game(){
//     for(let i=0;i<5;i++){
//         whoWon();
//     }
//     if(hum>com){
//         console.log("Human smort B");
//     }else console.log("Human Dunmmnbbb");
// }

// Game();
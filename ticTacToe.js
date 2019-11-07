'use strict';

//this will set the board at the beginning
//it will also reset the game a new
//as well as randomly pick who should start the game
function startGame() {
    
    for (let i = 1; i <= 9; i++){
        clearBox(i);
    }

    document.turn = "X";
    if (Math.random() < 0.5) {
        document.turn = "O";
    }
    document.winner = null;
    setMessage(document.turn + " gets to start!");
}

//tells people who's move, who won and what is going on.
function setMessage(msg){
    document.getElementById("message").innerText = msg;
}
//this stops someone from placing their turn on top of an already occupied square
//it will also send a notification saying: can't do that!
function nextMove(square){
    if (document.winner !== null) {
        setMessage(document.winner + " already won the game.");
    }
    else if (square.innerText === ''){
    square.innerText = document.turn;
    console.log(" This is where this is")
    switchTurn();
    }
    else {
        setMessage("That square is already used!")
    }
}

//first see if there is a winner, if not next person gets a turn
function switchTurn() {

    if (checkForWinner(document.turn)){
        setMessage("Congratulations, " + document.turn + "! You win!");
        document.winner = document.turn;
    }
    else if (document.turn === "X"){
        document.turn = "O";
        setMessage("It's " + document.turn + "'s turn!");
    }
    else {
        document.turn = "X"; 
        setMessage("It's " + document.turn + "'s turn!");
    }
}
//check to see if someone has won the game
function checkForWinner(move){
    let result= false;
    if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {

        result = true;
    }
    return result;
}

//this is how we check on is there a winner?
function checkRow(a, b, c, move) {
    let result = false;
    if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
        result = true;
    }
    return result;
}
//used in the checkRow function to see if there is a X or O in a box
function getBox(number){
    return document.getElementById("s" + number).innerText;
}
//this is used to restart the game...if there is an X or O in the box it removes it and makes the box empty
function clearBox(number) {
    document.getElementById("s" + number).innerText = "";
}

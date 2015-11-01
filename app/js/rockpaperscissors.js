////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move !== 'rock' || move !== 'paper' || move !== 'scissors') {
      // move = getInput();
      move = 'rock';
    }
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move !== 'rock' || move !== 'paper' || move !== 'scissors') {
      move = randomPlay();
    }
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

    /* YOUR CODE HERE */
    var playerMoveInt = 0;
    var computerMoveInt = 0;

    switch (playerMove) {
      case 'rock': playerMoveInt = 1; break;
      case 'paper': playerMoveInt = 2; break;
      case 'scissors': playerMoveInt = 3; break;
      default: playerMoveInt = 0;
    }

    switch (computerMove) {
      case 'rock': computerMoveInt = 1; break;
      case 'paper': computerMoveInt = 2; break;
      case 'scissors': computerMoveInt = 3; break;
      default: computerMoveInt = 0;
    }

    var result = playerMoveInt - computerMoveInt;

    if (result === 1 || result === -2) {
      winner = 'player';
    }
    if (result === -1 || result === 2) {
      winner = 'computer';
    }
    if (playerMove === computerMove) {
      winner = 'tie';
    }
    return winner;
}

function announceWinner(winner) {
  if (winner === 'player') {
    console.log('You won!');
  } else if (winner === 'computer') {
    console.log('You lost.');
  } else {
    console.log('It\'s a tie!');
  }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var scoreBoard = [0, 0];
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    do {
      scoreBoard = playGame();
      playerWins = playerWins + scoreBoard[0];
      computerWins = computerWins + scoreBoard[1];
      console.log('Total wins for player: ' + playerWins);
      console.log('Total wins for computer: ' + computerWins);
    } while (playerWins !== 2 || computerWins !== 2);
    return [playerWins, computerWins];
}

function playGame() {
  var playerWins = 0;
  var computerWins = 0;

  console.log("Let's play Rock, Paper, Scissors");

  // get player move
  var playerMove = '';
  playerMove = getPlayerMove(playerMove);
  console.log('You chose ' + playerMove);

  // get computer move
  var computerMove = '';
  computerMove = getComputerMove(computerMove);
  console.log('Computer chose ' + computerMove);

  // get winner
  var winner = getWinner(playerMove, computerMove);

  // announce winner
  announceWinner(winner);

  // set winner count
  if (winner === 'player') {
    playerWins++;
  }
  if (winner === 'computer') {
    computerWins++;
  }

  return [playerWins, computerWins];
}

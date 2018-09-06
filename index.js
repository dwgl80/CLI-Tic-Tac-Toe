#!/usr/bin/env node

const { prompt } = require('inquirer');

const questions = [
  {
    type : 'input',
    name : 'row',
    message : 'Enter row ..'
  },
  {
    type : 'input',
    name : 'col',
    message : 'Enter col ..'
  },
  {
    type : 'input',
    name : 'player',
    message : 'Enter X or O ..'
  },
];

const board = 
[['_', '_', '_'],
['_', '_', '_'],
['_', '_', '_']];

const checkTie = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j =0; j < board.length; j++) {
      if (board[i][j] !== 'X' && board[i][j] !== 'O') {
        return false;
      }
    }
  }
  return true;
}

const checkRow = () => {
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] !== '_') {
      if (board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
        return true;
       } 
    }
  }
};

const checkColumn = () => {
  for (let i = 0; i < board.length; i++) {
    if (board[0][i] !== '_') {
      if (board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
        return true;
      }
    }
  }
};

const checkDiagonal = () => {
  if (board[0][0] !== '_' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
    return true;
  } else if (board[0][2] !== '_' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
  	return true;
  }
}

const makeMove = answer => {
  board[answer.row][answer.col] = answer.player;
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
}

const startGame = () => {
  if (checkTie()) {
    return console.log('tie game');
  }
  if (checkRow() || checkColumn() || checkDiagonal()) {
    return console.log('game over');
  } else {
    prompt(questions).then( answers => {
      makeMove(answers);
      startGame();
    })
  }
}

startGame();




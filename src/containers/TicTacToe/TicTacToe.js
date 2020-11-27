import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Board from '../../components/Board/Board';
import Menu from '../../components/Menu/Menu';
import Result from '../../components/Result/Result';

import classes from './TicTacToe.module.css';

class TicTacToe extends Component {
  state = {
    startingBoard: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],
    playersTurn: true,
    someoneWon: false
  };

  resetHandler = () => {
    const newBoard = this.state.startingBoard.map((row) => {
      let emptyRow = [];
      for (let i = 0; i < row.length; i++) {
        emptyRow[i] = null;
      }
      return emptyRow;
    });
    this.setState({
      startingBoard: newBoard,
      playersTurn: true,
      someoneWon: false
    });
  };

  tileClickedHandler = (id, i) => {
    if (this.state.someoneWon) {
      alert('Reset board to play again.');
    } else {
      const updatedBoard = [...this.state.startingBoard];
      let nextPlayer = this.state.playersTurn;
      if (updatedBoard[id][i] !== null) {
        alert('This move is not allowed!');
      } else {
        updatedBoard[id][i] = this.state.playersTurn ? 'X' : 'O';
        nextPlayer = !this.state.playersTurn;
      }

      function compareThreeThings(a, b, c) {
        if (a === b && b === c && a !== null) {
          return true;
        }
        return false;
      }

      let winner = this.state.someoneWon;
      if (
        compareThreeThings(
          updatedBoard[0][0],
          updatedBoard[0][1],
          updatedBoard[0][2]
        )
      ) {
        winner = true;
      } else if (
        compareThreeThings(
          updatedBoard[1][0],
          updatedBoard[1][1],
          updatedBoard[1][2]
        )
      ) {
        winner = true;
      } else if (
        compareThreeThings(
          updatedBoard[2][0],
          updatedBoard[2][1],
          updatedBoard[2][2]
        )
      ) {
        winner = true;
      } else if (
        compareThreeThings(
          updatedBoard[0][0],
          updatedBoard[1][0],
          updatedBoard[2][0]
        )
      ) {
        winner = true;
      } else if (
        compareThreeThings(
          updatedBoard[0][1],
          updatedBoard[1][1],
          updatedBoard[2][1]
        )
      ) {
        winner = true;
      } else if (
        compareThreeThings(
          updatedBoard[0][2],
          updatedBoard[1][2],
          updatedBoard[2][2]
        )
      ) {
        winner = true;
      } else if (
        compareThreeThings(
          updatedBoard[0][0],
          updatedBoard[1][1],
          updatedBoard[2][2]
        )
      ) {
        winner = true;
      } else if (
        compareThreeThings(
          updatedBoard[0][2],
          updatedBoard[1][1],
          updatedBoard[2][0]
        )
      ) {
        winner = true;
      }

      this.setState({
        startingBoard: updatedBoard,
        playersTurn: nextPlayer,
        someoneWon: winner
      });
    }
  };

  winningClickHandler = (winner) => {
    this.setState({
      someoneWon: winner
    });
  };

  versusAIClickHandler = () => {
    alert('This mode is not available yet!');
  };

  render() {
    return (
      <Aux>
        <div className={classes.Title}>TIC TAC TOE</div>
        <Menu reset={this.resetHandler} versusAI={this.versusAIClickHandler} />
        <div className={classes.PlayersTurn}>
          {this.state.playersTurn ? 'X' : 'O'}'s turn
        </div>
        <Board
          board={this.state.startingBoard}
          clicked={this.tileClickedHandler}
          winningClick={this.winningClickHandler}
        />
        {this.state.someoneWon && <Result winner={!this.state.playersTurn} />}
      </Aux>
    );
  }
}

export default TicTacToe;

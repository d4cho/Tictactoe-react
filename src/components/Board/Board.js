import React from 'react';
import classes from './Board.module.css';

// function compareThreeThings(a, b, c) {
//   if (a === b && b === c && a !== null) {
//     return true;
//   }
//   return false;
// }

const board = (props) => {
  //   const win = props.board;
  //   let winner = null;
  //   if (compareThreeThings(win[0][0], win[0][1], win[0][2])) {
  //     winner = true;
  //   } else if (compareThreeThings(win[1][0], win[1][1], win[1][2])) {
  //     winner = true;
  //   } else if (compareThreeThings(win[2][0], win[2][1], win[2][2])) {
  //     winner = true;
  //   } else if (compareThreeThings(win[0][0], win[1][0], win[2][0])) {
  //     winner = true;
  //   } else if (compareThreeThings(win[0][1], win[1][1], win[2][1])) {
  //     winner = true;
  //   } else if (compareThreeThings(win[0][2], win[1][2], win[2][2])) {
  //     winner = true;
  //   } else if (compareThreeThings(win[0][0], win[1][1], win[1][2])) {
  //     winner = true;
  //   } else if (compareThreeThings(win[0][2], win[1][1], win[2][0])) {
  //     winner = true;
  //   }
  //   console.log(winner);

  const tiles = props.board.map((tile, id) => {
    let a = [];
    for (let i = 0; i < tile.length; i++) {
      a.push(
        <div
          className={classes.Tile}
          onClick={() => {
            props.clicked(id, i);
          }}
          key={id + ',' + i}>
          {tile[i]}
        </div>
      );
    }
    return (
      <div className={classes.Row} key={tile + id}>
        {a}
      </div>
    );
  });
  return <div>{tiles}</div>;
};

export default board;

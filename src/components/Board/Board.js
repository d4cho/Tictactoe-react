import React from 'react';
import classes from './Board.module.css';

const board = (props) => {
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

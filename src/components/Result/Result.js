import React from 'react';
import classes from './Result.module.css';

const result = (props) => {
  let winner = null;
  props.winner ? (winner = 'X') : (winner = 'O');
  return <div className={classes.Result}>{winner} won!</div>;
};

export default result;

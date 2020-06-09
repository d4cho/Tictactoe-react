import React from 'react';

import classes from './Menu.module.css';

const menu = (props) => {
  return (
    <div className={classes.Menu}>
      <button onClick={props.versusAI}>Versus AI</button> ||
      <button>2 Players</button> ||
      <button onClick={props.reset}>Reset Board</button>
    </div>
  );
};

export default menu;

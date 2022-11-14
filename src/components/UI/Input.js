// the spread operator makes everything that is sent as props to be added
//example if the props has {type: 'text'}
//then the input type = 'text' is considered,
//making the input component highly configureable

import classes from './Input.module.css';

import React from 'react';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htlmFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} {...props.input} ref={ref} />
    </div>
  );
});

export default Input;

import React, { useRef, useEffect } from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  const inputRef = useRef();

  useEffect(() => {
    if (!props.isValid) inputRef.current.focus();
  }, [props.isValid])

  return (
    <div
      className={`${classes.input} ${!props.isValid ? classes.invalid : ''}`}
    >
      <label htmlFor={props.id}>
        {props.label}
      </label>
      <input
        ref={inputRef}
        type={props.type || 'text'}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      >
        {props.children}
      </input>
    </div>
  );
};

export default Input;

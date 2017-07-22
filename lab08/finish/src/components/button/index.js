import React from 'react';
import HOComponent from '../hoComponent/';

const Button = HOComponent(props =>
  <button onClick={props.update}>{props.children} - {props.count}</button>,
);

export default Button;

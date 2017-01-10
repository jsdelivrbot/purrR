import React, { Component } from 'react';

export default (props) => {
  return (
    <div>
      <button onClick={props.showPrev}>Prev</button>
      <button onClick={props.showNext}>Next</button>
    </div>
  )
}

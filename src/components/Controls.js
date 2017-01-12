import React, { Component } from 'react';

export default (props) => {
  return (
    <div>
      <button onClick={() => props.prev()}>Prev</button>
      <button onClick={() => props.next()}>Next</button>
    </div>
  )
}

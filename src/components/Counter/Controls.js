import React from 'react';

const Controls = ({onIncrement, onDecrement}) => (
  <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>
      Increment
    </button>
    <button type="button" onClick={onDecrement}>
      Decrement
    </button>
  </div>
);

export default Controls;

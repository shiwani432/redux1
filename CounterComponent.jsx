import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, minCount } from './ActionRedux';

const CounterComponent = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(addCount())}>Add</button>
      <button onClick={() => dispatch(minCount())}>Minus</button>
    </div>
  );
};

export default CounterComponent;

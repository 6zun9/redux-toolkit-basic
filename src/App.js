import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, incrementByAmount } from './redux/counter';

function App() {
  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      The count is : {count}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(70))}>increment by 70</button>
    </div>
  );
}

export default App;

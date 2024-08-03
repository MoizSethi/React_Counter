import { useState } from 'react';

function App() {
  // Initialize state with useState hook
  let [counter, setCounter] = useState(10);

  const addValue = () => {
    // Increment counter and ensure it doesn't exceed 20
    setCounter(prevCounter => Math.min(prevCounter + 1, 20));
  }

  const decValue = () => {
    // Decrement counter and ensure it doesn't go below 0
    setCounter(prevCounter => Math.max(prevCounter - 1, 0));
  }

  return (
    <>
      <h1>First Application</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Increment Value {counter}</button>
      <button onClick={decValue}>Decrement Value {counter}</button>
    </>
  );
}

export default App;

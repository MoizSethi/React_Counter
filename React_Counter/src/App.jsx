import { useState } from 'react'
import './App.css'

function App() {

  //useState() is the Hook

  let [counter, setCounter] = useState(9)
  
  // let counter = 9

  const addValue = () => {
    //UI updation controlled by React
    counter = counter + 1; 
    setCounter(counter);
    console.log("Counter Value", counter); 
  }
  const decValue = () => {
    counter = counter - 1;
    setCounter(counter);
    console.log("Counter Value", counter);
  }

  return (
    <>
      <h1>First Application</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={addValue}>Increment Value {counter}</button>
      <button onClick={decValue}>Decrement Value{counter}</button>
    </>
  )
}

export default App
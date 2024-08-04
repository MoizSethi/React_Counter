import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Cards from './components/Cards';

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: 'Moiz_Sethi',
    age: 24
  };

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl mb-4'>Tailwind And Props in React</h1>
      <Cards username="Moiz Sethi" age="24" obj={myObj} />
      <Cards username="Atif" age="36"/>
    </>
  );
}

export default App;

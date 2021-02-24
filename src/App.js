import React, { useState } from 'react'

import logo from './logo.svg'

import Plane from './components/Plane'

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const onRandomize = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <div className='options'>
          <button type="button" onClick={onRandomize}>{'Randomize'}</button>
          <p>You clicked {count} times</p>
        </div>
        <div className='plane-of-planes'>
          <Plane direction='top' />
          <Plane direction='right' />
          <Plane direction='bottom' />
          <Plane direction='left' />
        </div>
      </main>
    </div>
  )
}

export default App;

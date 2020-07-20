import React from 'react';
import './App.css';
import './components/highscore'
import Wrapper from './components/wrapper';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Wrapper/>
    </div>
  );
}

export default App;

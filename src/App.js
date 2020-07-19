import React from 'react';
import './App.css';
import './components/highscore'
import Highscore from './components/highscore';
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Searchbar/>
      <Highscore rsn="Lander" />
    </div>
  );
}

export default App;

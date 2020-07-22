import React, { useState }  from 'react';
import Highscore from './highscore';
import Searchbar from './searchbar';

export default function Wrapper() {
  const [playerData, setPlayerdata] = useState();

  return (
    <div>
      <Searchbar 
        setPlayerdata={setPlayerdata} 
        playerData={playerData}
      />

      {playerData && <Highscore playerData={playerData} />}
    </div>
  );
}

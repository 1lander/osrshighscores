import React, { useState }  from 'react';
import Highscore from './highscore';
import Searchbar from './searchbar';

export default function Wrapper() {
  const [rsn, setRsn] = useState("");

  return (
    <div>
      <Searchbar setRsn={setRsn} rsn={rsn}/>
      <Highscore rsn={rsn} />
    </div>
  );
}

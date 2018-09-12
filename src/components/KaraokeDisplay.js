import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
// console.log("KaraokeDisplay:", props)
  return (
    <div className="karaoke-display">
      <h2>{props.displayLyrics ? props.displayLyrics.title : "Choose a Song!"}</h2>
      <Lyrics lyrics={props.displayLyrics ? props.displayLyrics.lyrics : "The lyrics will display here."} />
    </div>
  )
}

export default KaraokeDisplay;

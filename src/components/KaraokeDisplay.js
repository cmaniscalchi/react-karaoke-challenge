import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  // console.log("KaraokeDisplay:", props.selectedSong)

  // I'm able to send my selected song down to KaraokeDisplay, but I'm having trouble accessing the lyrics I need to pass down to the Lyrics component. props.selectedSong is the right object

  // debugger;
  return (
    <div className="karaoke-display">
      <h2>Song Title</h2>
      <Lyrics lyrics={props.selectedSong.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;

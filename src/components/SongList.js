import React from 'react';
import Song from './Song'

const SongList = (props) => {
  // console.log("SongList:", props)
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>
        {props.songs.map(song => <Song song={song} key={song.id} playSong={props.playSong}/>)}
      </tbody>
    </table>
  )
}

export default SongList;

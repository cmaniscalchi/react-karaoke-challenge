import React from 'react';
import Song from './Song'

const SongList = (props) => {
  // console.log("SongList:", props)

  let songArray = props.songs.map(song => {
    return <Song song={song} key={song.id} handleClick={props.handleClick} />
  })

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {songArray}

      </tbody>
    </table>
  )
}

export default SongList;

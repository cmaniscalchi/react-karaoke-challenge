import React from 'react';

const Song = (props) => {
// console.log("Song:", props)
  let {title, singer} = props.song
  return (
    <tr className="song">
      <td>{title}</td>
      <td>{singer}</td>
      <td><button onClick={() => props.playSong(props.song.id)}>Play</button></td>
    </tr>
  )
}

export default Song;

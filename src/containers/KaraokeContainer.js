import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';

class KaraokeContainer extends Component {

  state = {
    songs: [],
    playedSongId: null,
    input: ""
  }

  componentDidMount() {
    fetch("http://localhost:4000/songs/")
    .then(res => res.json())
    .then(data => this.setState({songs: data}))
  }

  playSong = (songId) => {
    this.setState({playedSongId: songId})
  }

  displayLyrics = () => {
    return this.state.songs.find(song => song.id === this.state.playedSongId)
  }

  handleFilterInput = (event) => {
    this.setState({input: event.target.value})
  }

  filterSongs = () => {
    return this.state.songs.filter(song => song.title.toLowerCase().includes(this.state.input))
  }

  render() {
    // console.log("KaraokeContainer:", this.state)
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleFilterInput={this.handleFilterInput} input={this.state.input}/>
          <SongList songs={this.filterSongs()} playSong={this.playSong} />
        </div>
        <KaraokeDisplay displayLyrics={this.displayLyrics()}/>
      </div>
    );
  }
}

export default KaraokeContainer;

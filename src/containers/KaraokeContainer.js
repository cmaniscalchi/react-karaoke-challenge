import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';

class KaraokeContainer extends Component {
  constructor() {
    super()
    this.state = {
      songs: [],
      filteredSongs: [],
      selectedSong: [],
      input: ""
    }
  }

  componentDidMount() {
    let url = 'http://localhost:4000/songs/'
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({
      songs: data,
      filteredSongs: data
    }))
  }

  handleChange = (event) => {
    this.setState({input: event.target.value}, this.filterSongs)
  }

  filterSongs = () => {

    let filter = this.state.songs.filter(song => {
      return song.title.toLowerCase().includes(this.state.input)
    })

    if (this.state.input === '') {
      this.setState({filteredSongs: this.state.songs})
    } else {
      this.setState({filteredSongs: filter})
    }
  }


// I ran into issues setting state based on the song the user clicks on. ideally I'd set state of selectedSong equal to props.song (the correct song object in the Song component), rather than this filter workaround, but I can't access props in this component
  handleClick = (event) => {
  let title = event.target.parentElement.parentElement.firstChild.innerText
  let matchingSong = this.state.songs.filter(song => {
    return song.title.includes(title)
  })
  this.setState({
    selectedSong: matchingSong
  })
  }

  render() {
    // console.log(this.state)
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter input={this.state.input} handleChange={this.handleChange}/>
          <SongList songs={this.state.filteredSongs} handleClick={this.handleClick} />
        </div>
        <KaraokeDisplay selectedSong={this.state.selectedSong} />
      </div>
    );
  }
}

export default KaraokeContainer;

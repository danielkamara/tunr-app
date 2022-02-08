import { Component } from "react";
import "./App.css";
import Song from "./components/Song";
import playlist from "./data";

console.log(playlist);

class App extends Component {
  state = {
    playlist: playlist,
    title: "",
    artist: "",
    time: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newSong = {
      title: this.state.title,
      artist: this.state.artist,
      time: this.state.time,
    };
    this.setState({
      playlist: {
        songs: [...this.state.playlist.songs, newSong],
        title: this.state.playlist.title,
        created: this.state.playlist.created,
      },
      title: "",
      time: "",
      artist: "",
    });
    console.log(this.playlist.songs);
  };

  render() {
    return (
      <div className="tunr-container">
        <header>
          {" "}
          <h1>Tunr.</h1>
          <h2>For all your playlist needs.</h2>
        </header>

        <div className="playlist">
          <h1>{this.state.playlist.title}</h1>

          <div className="songs">
            {this.state.playlist.songs.map((song) => (
              <Song song={song} />
            ))}
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
          ></input>

          <label htmlFor="artist">Artist</label>
          <input
            type="text"
            id="artist"
            value={this.state.artist}
            onChange={this.handleChange}
          ></input>

          <label htmlFor="time">Time</label>
          <input
            type="text"
            id="time"
            value={this.state.time}
            onChange={this.handleChange}
          ></input>
          <input type="submit" value="Add a new song"></input>
        </form>
      </div>
    );
  }
}

export default App;

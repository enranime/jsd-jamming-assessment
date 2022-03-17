import './Playlist.css';
import React from 'react';
import Track from '../Track/Track.js'

function Playlist() {
  return <div className="Playlist">
  <input value="New Playlist"/>
  <Track/>
  <button className="Playlist-save">SAVE TO SPOTIFY</button>
</div>;
}

export default Playlist;

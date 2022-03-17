import './SearchResults.css';
import React from 'react';
import Track from '../Track/Track.js'

function SearchResults(props) {
  return <div className="SearchResults">
  <h2>Results</h2>
  <Track/>
</div>;
}

export default SearchResults;

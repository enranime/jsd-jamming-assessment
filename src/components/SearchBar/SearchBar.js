/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './SearchBar.css';

// function SearchBar(props) {
//   return <div className="SearchBar">
//   <input placeholder="Enter A Song, Album, or Artist" />
//   <button className="SearchButton">SEARCH</button>
// </div>
// }

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
    
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  handleTermChange(event) {
    this.setState({term: event.target.value})
  }


  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton">SEARCH</button>
      </div>
    )
  }
}

export default SearchBar;

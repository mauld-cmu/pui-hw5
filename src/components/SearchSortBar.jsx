import React, { Component } from 'react';
import './SearchSortBar.css';

class SearchSortBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {  
  }
  render() { 
    return ( 
      <div id="bar">
        <input type="text" onChange={this.props.filterProducts} />
        <button id="search-button" onClick={this.props.clickSearch}>Search</button>
        <span id="sort-by">sort by: </span>
        <select onChange={this.props.sortProducts}>
          <option value="Name">Name</option>
          <option value="Base Price">Base Price</option>
        </select>
      </div>
    );
  }
}

export default SearchSortBar;
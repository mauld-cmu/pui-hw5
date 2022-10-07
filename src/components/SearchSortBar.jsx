import React, { Component } from 'react';
import './SearchSortBar.css';

class SearchSortBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return ( 
      <div id="bar">
        <input type="text"/>
        <button id="search-button">Search</button>
        <span id="sort-by">sort by: </span>
        <select>
          <option value="Name">Name</option>
          <option value="Base Price">Base Price</option>
        </select>
      </div>
    );
  }
}

export default SearchSortBar;
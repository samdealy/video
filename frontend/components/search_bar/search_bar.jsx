import React from 'react'
import { Link } from 'react-router-dom';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prefix: ''
    }
    this.updatePrefix = this.updatePrefix.bind(this);
    this.pressEnter   = this.pressEnter.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.handleClick  = this.handleClick.bind(this);
  }

  updatePrefix(e) {
    this.setState({ prefix: e.currentTarget.value })
  }

  pressEnter(e) {
    e.preventDefault();
    if(e.keyCode === 13) {
      this.submitSearch();
    }
  }

  handleClick(e) {
    this.submitSearch();
  }

  submitSearch() {
    const { fetchSearch } = this.props;
    if(this.state.prefix !== '') fetchSearch(this.state.prefix);
  }

  render() {
    return(
      <li id="search-bar-wrapper">
        <input onChange={this.updatePrefix}
               onKeyUp={this.pressEnter}
          id="search-bar" placeholder="Search for videos..."></input>
        <button onClick={this.handleClick}>
          <i className="fas fa-search"></i>
        </button>
      </li>
    );
  }
}

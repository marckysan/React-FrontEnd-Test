import React, { Component } from 'react';

import classes from './Search.css';

class Search extends Component {
  state = {
    name: "",
    searching: false
  }

  onChangeHandler(event) {
    var name = this.state.name;
    var newName = event.target.value;
    name = newName;

    this.setState({ name : name });
    console.log(this.state.name)
  }

  sendData = (e) => {
    e.preventDefault()
    this.setState({
      searching: true
    });
    this.props.parentCallback(this.state.name, this.state.searching);
  }




  render() {
    return (
    <form>
      <input
        type="text"
        value={this.state.name}
        onChange={this.onChangeHandler.bind(this)}
      />
      <button
        type="submit"
        className={classes.SearchButton}
        onClick = {(e) => this.sendData(e)}>
        Search
      </button>
    </form>
    )
  }
}


export default Search;
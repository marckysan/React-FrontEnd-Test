import React, { Component } from 'react';

class Search extends Component {
  state = {
    name: ""
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
    this.props.parentCallback(this.state.name);
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
        className="SearchButton"
        onClick = {(e) => this.sendData(e)}>
        Search
      </button>
    </form>
    )
  }
}


export default Search;
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      age: 0,
      location: ""
    };
  }

  handleChange({ target: { name, value } }) {
    debugger;
    this.setState({ [name]: value }, (...rest) => {
      console.log("rest: ", rest);
      console.log(this.state);
    });
    console.log(this.state);
  }

  render() {
    return (
      <>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <input
            type="text"
            name="input"
            placeholder="input"
            value={this.state.input}
            onChange={e => this.handleChange(e)}
          />
          <input
            type="text"
            name="age"
            placeholder="age"
            value={this.state.age}
            onChange={e => this.handleChange(e)}
          />
          <input
            type="text"
            name="location"
            placeholder="location"
            value={this.state.location}
            onChange={e => this.handleChange(e)}
          />

          {this.state.input}
          <br />
          {this.state.age ? this.state.age : null}
          <br />
          {this.state.location}
          <br />
        </header>
      </>
    );
  }
}

export default App;

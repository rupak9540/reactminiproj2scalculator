import "./styles.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }
  Add = (e) => {
    this.setState((prevState) => {
      return {
        number: prevState.number + 2
      };
    });
  };
  Square = () => {
    this.setState((prevState) => {
      return {
        number: prevState.number * prevState.number
      };
    });
  };
  Double = () => {
    this.setState((prevState) => {
      return {
        number: prevState.number * 2
      };
    });
  };
  Divide = () => {
    this.setState((prevState) => {
      return {
        number: prevState.number / 2
      };
    });
  };
  Subtract = () => {
    const { number } = this.state;
    if (number === 0) {
      return;
    }
    this.setState((prevState) => {
      return {
        number: prevState.number - 2
      };
    });
  };
  Clear = () => {
    this.setState((prevState) => {
      return {
        number: 0
      };
    });
  };

  render() {
    const { number } = this.state;
    return (
      <div className="App">
        <div className="input">
          {/* <input type="text"
       id="fname"
       placeholder="Enter the value"
        name="fname"
        onChange={this.handlechange}
        value={number}/> */}
          <div>{number}</div>
        </div>
        <div className="button">
          <div className="add2 space">
            <button onClick={this.Add}>Add2!</button>
          </div>
          <div className="square space">
            <button onClick={this.Square}>Square!</button>
          </div>
          <div className="double space">
            <button onClick={this.Double}>Double!</button>
          </div>
          <div className="divide space">
            <button onClick={this.Divide}>Divide2!</button>
          </div>
          <div className="subtract space">
            <button onClick={this.Subtract}>Subtract2!</button>
          </div>
          <div className="clear space">
            <button onClick={this.Clear}>Clear</button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

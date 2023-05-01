import React, { Component } from "react";
import "../css/PlayerRegister.css";

class PlayerRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { onRegister } = this.props;
    const { name } = this.state;
    onRegister(name);
    this.setState({ name: "" });
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { started, onStartGame } = this.props;
    const { name } = this.state;

    return (
      <div className="player-register">
        <h1>Register a Player</h1>
        <form children className="register-form" onSubmit={this.handleSubmit}>
          <label className="register-info">
            Enter your name:
            <input className="register-info" type="text" value={name} onChange={this.handleChange} />
          </label>
          <button
            type="submit"
            className="register-button"
            disabled={name === ""}
          >
            Register
          </button>
        </form>
        {!started && (
          <button onClick={onStartGame} className="start-button">
            Start Game
          </button>
        )}
      </div>
    );
  }
}

export default PlayerRegister;
import React, { Component } from "react";
import AddPlayersComponent from "./AddPlayersComponent";

class AddPlayers extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      level: "easy",
    };
  }

  addPlayer = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    const inputName = document.getElementById("player_input");
    const name = inputName.value;
    if (this.state.players.some((player) => player.name === name)) {
      alert("Player already exists!");
    } else {
      this.setState((prevState) => {
        return {
          players: prevState.players.concat({
            name: name,
            number: randomNumber,
            steps: 0,
            scores: [],
          }),
        };
      });
      inputName.value = "";
    }
  };

  changeLevel = (newLevel) => {
    this.setState({...this.state, level: newLevel})
  }

  render(props) {
    return (
      <AddPlayersComponent
        addPlayer={this.addPlayer}
        changeLevel={this.changeLevel}
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default AddPlayers;

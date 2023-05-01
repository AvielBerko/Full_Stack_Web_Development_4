import React, { Component } from "react";
import WelcomeWindow from "./components/mainWindow/WelcomeWindow.js";
import AddPlayers from "./components/AddPlayers/AddPlayersContainer.js";
import Game from "./components/Game/GameContainer.js";

class App2 extends Component {
  constructor() {
    super();
    this.state = {
      window: "init",
    };
  }

  moveToPrepGame = () => {
    this.setState({ window: "AddPlayers" });
  };

  moveToGame = (players, level) => {
    if (players.length === 0) {
      alert("You need at least 1 player to start the game!");
      return;
    }
    this.setState({ window: "Game", players: players, level:level });
  };

  homeWindow = () => {
    this.setState({ window: "init" });
  };

  render() {
    if (this.state.window === "init") {
      return <WelcomeWindow switchWindow={this.moveToPrepGame} />;
    } else if (this.state.window === "AddPlayers") {
      return <AddPlayers startGame={this.moveToGame} />;
    } else if (this.state.window === "Game") {
      return <Game players={this.state.players} level={this.state.level} quitGame={this.homeWindow} />;
    }
  }
}

export default App2;

import React, { Component } from "react";
import GameComponent from "./GameComponent";

class Game extends Component {
  constructor(props) {
    super();
    let players = Array.from(props.players);
    this.state = {
      currentPlayer: players.shift(),
      other_players: players,
      isWinner: false,
    };
  }

  winner() {
    let player = this.state.currentPlayer;
    player.scores.push(player.steps);
    this.setState({ ...this.state, currentPlayer: player, isWinner: true });
  }

  quit = (quitGame) => {
    if (this.state.other_players.length === 0) {
      quitGame();
    } else {
      let others = this.state.other_players;
      let player = others.shift();
      this.setState({
        currentPlayer: player,
        other_players: others,
        isWinner: false,
      });
    }
  };

  restart = () => {
    let player = this.state.currentPlayer;
    player.number = Math.floor(Math.random() * 100);
    player.steps = 0;
    this.setState({ ...this.state, currentPlayer: player, isWinner: false });
    this.switchPlayer();
  };

  switchPlayer() {
    let player = this.state.currentPlayer;
    let others = this.state.other_players;
    others.push(player);
    let newPlayer = others.shift();
    this.setState({
      currentPlayer: newPlayer,
      other_players: others,
      isWinner: false,
    });
  }

  updatePlayer = (newNumber) => {
    let player = this.state.currentPlayer;
    player.number = newNumber;
    player.steps += 1;
    this.setState({ ...this.state, currentPlayer: player });

    if (newNumber === 100) {
      this.winner();
    } else {
      this.switchPlayer();
    }
  };

  render(props) {
    return <GameComponent {...this.state} {...this.props} restart= {this.restart} updatePlayer= {this.updatePlayer} quit= {this.quit}/>
  }
}

export default Game;

import React, { Component } from "react";
import PlayerBoard from "./Game/PlayerBoard";
import Top3Players from "./Top3Players";
import PlayerRegister from "./PlayerRegister";
import "../css/GetTo100.css";

class GetTo100 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayerIndex: 0,
      started: false,
    };
  }

  handleRestart = (player) => {
    const { players, currentPlayerIndex } = this.state;
    const idx = players.findIndex((p) => p.name === player.name);
    if (idx === -1) {
      console.log(`Player with name ${player.name} not found.`);
      return;
    }

    let newPlayers = [...players];
    newPlayers[idx] = {
      ...player,
      number: Math.floor(Math.random() * 100),
      totalActions: 0,
      gameOver: false,
    };
    this.setState({
      players: newPlayers
    }, () => this.setState({currentPlayerIndex: this.getPlayerIndex(players.filter(player => !player.gameOver).length > 0)}));
  };


  handleRegister = (name) => {
    const { players } = this.state;

    // Check if the name already exists in the players array
    const existingPlayer = players.find((player) => player.name === name);

    if (existingPlayer) {
      alert(`A player with the name ${name} already exists.`);
      return;
    }

    const newPlayer = {
      name,
      number: Math.floor(Math.random() * 100),
      games: [],
      totalActions: 0,
      gameOver: true,
    };
    this.setState({ players: [...players, newPlayer] });
  };

  handlePlayerAction = (player) => {
    const { players } = this.state;
    const idx = players.findIndex((p) => p.name === player.name);
    if (idx === -1) {
      console.log(`Player with name ${player.name} not found.`);
      return;
    }

    let newPlayers = [...players];
    newPlayers[idx] = player;
    newPlayers[idx].totalActions += 1;

    // Update the state 
    this.setState(
      {
        players: newPlayers,
        currentPlayerIndex: this.getPlayerIndex(false)
      },
      () => {
        if (newPlayers[idx].number === 100) this.handleGameOver(idx);
      }
    );
  };

  handleGameOver = (winnerIdx) => {
    const { players } = this.state;
    let newPlayers = [...players];
    newPlayers[winnerIdx].games.push(players[winnerIdx].totalActions);
    newPlayers[winnerIdx].gameOver = true;
    this.setState({
      players: newPlayers,
    });
  };

  handleStartGame = () => {
    const { players } = this.state;
    if (players.length > 0) {
      const updatedPlayers = players.map((player) => ({
        ...player,
        gameOver: false,
        currentPlayerIndex: 0
      }));
      this.setState({ started: true, players: updatedPlayers });
    } else alert("No players were registered");
  };

  handlePlayerLeave = (player) => {
    const idx = this.state.players.findIndex((p) => p.name === player.name);
    if (idx === -1) {
      console.log(`Player with name ${player.name} not found.`);
      return;
    }
    const updatedPlayers = [...this.state.players];
    updatedPlayers.splice(idx, 1);
    if (updatedPlayers.length === 0) {
      this.setState({ started: false });
    }
    this.setState({ players: updatedPlayers });
  };

  getPlayerIndex = (force_keep) => {
    const { players, currentPlayerIndex } = this.state;
    let nextPlayerIndex = -1;

    // Find the index of the next player with gameOver = false
    for (let i = (currentPlayerIndex + 1) % players.length; i !== currentPlayerIndex; i = (i + 1) % players.length) {
      if (!players[i].gameOver) {
        nextPlayerIndex = i;
        break;
      }
    }
    
    // If no next player was found, stay on the current player
    if (nextPlayerIndex === -1 || force_keep) {
      nextPlayerIndex = currentPlayerIndex;
    }
    return  nextPlayerIndex;
  }

  render() {
    const { players, currentPlayerIndex, started } = this.state;
    return (
      <div>
        {!started && (
          <PlayerRegister
            started={started}
            onRegister={this.handleRegister}
            onStartGame={this.handleStartGame}
            onQuit={this.handleQuit}
          />
        )}
        <div className={`${started ? "game-started" : ""}`}>
          {started && <h1>Game In Action</h1>}
          <div
            className={`${
              players && players.length > 1 ? "player-boards" : ""
            }`}
          >
            {players.map(function (p, idx) {
              return (
                <PlayerBoard
                  player={p}
                  started={started}
                  active={currentPlayerIndex === idx}
                  onAction={this.handlePlayerAction}
                  onLeave={this.handlePlayerLeave}
                  onRestart={this.handleRestart}
                />
              );
            }, this)}
          </div>
        </div>
        {started && <Top3Players players={players} />}
      </div>
    );
  }
}
export default GetTo100;
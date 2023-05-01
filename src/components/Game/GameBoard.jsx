import React, { Component } from "react";
import GameButtons from "./GameButtons";
import "../../css/GameBoard.css";

class GameBoard extends Component {
  handleAction(action) {
    const { player } = this.props;
    let newNumber = player.number;

    switch (action) {
      case "+1":
        newNumber += 1;
        break;
      case "-1":
        newNumber -= 1;
        break;
      case "*2":
        newNumber *= 2;
        break;
      case "/2":
        newNumber = Math.round(player.number / 2);
        break;
      default:
        break;
    }

    const newPlayer = { ...player, number: newNumber };

    if (this.props.onAction) {
      this.props.onAction(newPlayer);
    }
  }

  render() {
    const { player, active, started } = this.props;

    return (
      <div className="game-board">
        <div className="player-name">
          <h2 style={{ margin: 0 }}>Player: {player.name}</h2>
          {!player.gameOver && active && (
            <h2 style={{ color: "red", margin: 0, marginLeft: "10px" }}>
              {" "}
              Active{" "}
            </h2>
          )}
        </div>
        {!player.gameOver && (
          <React.Fragment>
            <p>Current Number: {player.number}</p>
            <p>Total Actions: {player.totalActions}</p>
          </React.Fragment>
        )}
        {
          <p>
            Scores:{" "}
            {player.games.length > 0 ? `[${player.games.join(", ")}]` : ""}{" "}
          </p>
        }
        {!player.gameOver && (
          <GameButtons
            className="game-buttons"
            active={active}
            onAction={(action) => this.handleAction(action)}
          />
        )}
      </div>
    );
  }
}

export default GameBoard;

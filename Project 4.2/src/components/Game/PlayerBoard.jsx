import React, { Component } from "react";
import GameBoard from "./GameBoard";
import "../../css/PlayerBoard.css"

class PlayerBoard extends Component {
  render() {
    const { player, active, started  } = this.props;
    return (
      <div className="player-board">
        {<GameBoard
          player={player}
          active={active}
          started={started}
          onAction={this.props.onAction}
        />}
        <React.Fragment>
        {player.gameOver && 
          <button onClick={() => this.props.onLeave(player)}>Leave</button>
        }
        {started && player.gameOver && (
          <button onClick={() => this.props.onRestart(player)}>Restart</button>
        )}
        </React.Fragment>
      </div>
    );
  }
}

export default PlayerBoard;

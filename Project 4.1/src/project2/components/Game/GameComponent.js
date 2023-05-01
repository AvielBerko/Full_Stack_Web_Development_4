import React, { Component } from "react";
import Player from "../PlayersInfo/Player";
import TopPlayers from "../PlayersInfo/TopPlayers";
import ActionsButtons from "./ButtonUtils/ActionsButtons"
import ActionsButtonsHard from "./ButtonUtils/ActionsButtonsHard";
import DecisionButtons from "./ButtonUtils/DecisionButtons";
import "../../css/App.css"
import "../../css/Game.css"
class GameComponent extends Component {
  render(props){
    const players_items = this.props.other_players.map((player) => (
        <Player key={player.name} {...player} />
    ));

    return (
      <div>
        <div className="game-container">
        <div className="game-section">
        <h1>get to 100!!</h1>
        <br />
          <div className="info-row">
            <h2>Current Player</h2>
          </div>
          <Player
            key={this.props.currentPlayer.name}
            {...this.props.currentPlayer}
          />
          <br />
          <div className="info-row">
            {!this.props.isWinner && this.props.level === "easy" && <ActionsButtons {...this.props}/>}
            {!this.props.isWinner && this.props.level === "hard" && <ActionsButtonsHard {...this.props}/>}
            {this.props.isWinner && <DecisionButtons {...this.props} />}
          </div>
          <br />
          <div className="info-row">
            <h2>Other players</h2>
          </div>
          <div>
            {players_items}
          </div>
        </div>
        <div className="leaders-section">
          <TopPlayers
            players={this.props.other_players.concat([this.props.currentPlayer])}
          />
        </div>
        </div>
      </div>
    );
  }
}

export default GameComponent;

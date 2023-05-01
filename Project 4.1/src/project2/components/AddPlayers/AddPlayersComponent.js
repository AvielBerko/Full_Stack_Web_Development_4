import React, { Component } from "react";
import Player from "../PlayersInfo/Player";
import "../../css/App.css"
class AddPlayersComponent extends Component {
  render(props){
    const players = this.props.players.map((player) => (
        <Player key={player.name} {...player} />
    ));
    const levelOptions = ["easy", "hard"]
    const levelOptionsItems = levelOptions.map((level) => <>
      <input type="radio" checked={this.props.level === level} id={level} name="levelOption" value={level} onChange={(event)=>this.props.changeLevel(event.target.value)}></input>
      <label for={level}>{level}</label>
    </>)
    return (
      <div>
        <h1>let's play!</h1>
        <h1>ADD PLAYERS</h1>
        <div className="info-row">
          <label className="info-category">
            Enter Player Name:
            <input id="player_input" type="text" name="name" />
          </label>
          <button className="my-button-orange" onClick={this.props.addPlayer}>submit</button>
          <button className="my-button-orange" onClick={() => this.props.startGame(this.props.players, this.props.level)}>
            Start Game
          </button>
        </div>
        <div className="info-row">
          <h2 className="info-category">Choose game level:</h2>
          {levelOptionsItems}
        </div>
        <div className="info-row"><h2 className="info-category">ALL PLAYERS</h2></div>
        <div>
          {players}
        </div>
      </div>
    );
  }
}

export default AddPlayersComponent;

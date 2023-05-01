import React, { Component } from "react";
import "../../css/topPlayers.css";
import {getTopThreeScores, average} from "../../utils/mathUtils"

class TopPlayers extends Component{
  render(props){
    const topPlayersItems = getTopThreeScores(this.props.players).map(function(player, index) {
      return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{player.name}</td>
        <td>{average(player.scores) !== Number.POSITIVE_INFINITY && average(player.scores)}</td>
      </tr>)
      });
      return (
        <div>
          <div className="wrapper">
            <table>
              <caption>High Scores (top 3)</caption>
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Name</th>
                  <th>Average Score</th>
                </tr>
              </thead>
              <tbody>
                {topPlayersItems}
              </tbody>
            </table>
          </div>
        </div>
      );
  }
}

export default TopPlayers;

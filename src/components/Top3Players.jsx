import React, { Component } from "react";
import "../css/Top3Players.css"

class Top3Players extends Component {
  render() {
    // Assuming that this.props.players is an array of player objects
    const players = this.props.players;

    // Filter out players without game scores
    const playersWithScores = players.filter(
      (player) => player.games.length > 0
    );

    // Sort the players by their mean score, in descending order
    const sortedPlayers = playersWithScores?.sort((a, b) => {
      const aMeanScore =
        a.games.reduce((acc, score) => acc + score, 0) / a.games.length;
      const bMeanScore =
        b.games.reduce((acc, score) => acc + score, 0) / b.games.length;
      return aMeanScore - bMeanScore;
    });

    // Take the top 3 players
    const top3Players = sortedPlayers?.slice(0, 3);

    return (
      <div className="top-3-players">
        {top3Players.length > 0 && (
          <div>
            <h1>Top 3 Players</h1>
            <ul>
              {top3Players?.map((player) => (
                <li key={player.name}>
                  {player.name} scores: [{player.games.join(", ")}] (Mean ={" "}
                  {(
                    player.games.reduce((acc, score) => acc + score, 0) /
                    player.games.length
                  ).toFixed(2)}
                  ).
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Top3Players;

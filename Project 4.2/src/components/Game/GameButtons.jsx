import React, { Component } from 'react';

class GameButtons extends Component {
  render() {
    const { active, onAction } = this.props;
    return (
      <div className="game-buttons">
        <button onClick={() => active && onAction("+1")}>+1</button>
        <button onClick={() => active && onAction("-1")}>-1</button>
        <button onClick={() => active && onAction("*2")}>*2</button>
        <button onClick={() => active && onAction("/2")}>/2</button>
      </div>
    );
  }
}

export default GameButtons;

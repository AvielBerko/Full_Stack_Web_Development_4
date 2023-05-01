import React, { Component } from "react";
import "../../css/Player.css"
import "../../css/App.css"
class Player extends Component {
  render(props) {
    return (
      <div className="player-container">
	    	<div className="info-row">
	    		<p><span className="info-category">Name:</span> <span className="info-value">{this.props.name}</span></p>
	    	</div>
	    	<div className="info-row">
	    		<p><span className="info-category">Current Number:</span> <span className="info-value">{this.props.number}</span></p>
	    	</div>
	    	<div className="info-row">
	    		<p><span className="info-category">Number of Steps:</span> <span className="info-value">{this.props.steps}</span></p>
	    	</div>
	    	<div className="info-row">
	    		<p><span className="info-category">Scores:</span> <span className="info-value">{this.props.scores.toString()}</span></p>
	    	</div>
	    </div>
    );
  }
}

export default Player;

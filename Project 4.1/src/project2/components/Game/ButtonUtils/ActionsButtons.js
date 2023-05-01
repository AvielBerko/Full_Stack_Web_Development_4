import React, { Component } from "react";
import "../../../css/App.css"
class ActionsButtons extends Component {
  render(props){
    return (
      <div>
          <button className="my-button-orange"
            onClick={() =>
              this.props.updatePlayer(this.props.currentPlayer.number + 1)
            }
          >
            +1
          </button>
          <button className="my-button-orange"
            onClick={() =>
              this.props.updatePlayer(this.props.currentPlayer.number - 1)
            }
          >
            -1
          </button>
          <button className="my-button-orange"
            onClick={() =>
              this.props.updatePlayer(this.props.currentPlayer.number * 2)
            }
          >
            *2
          </button>
          <button className="my-button-orange"
            onClick={() =>
              this.props.updatePlayer(Math.round(this.props.currentPlayer.number / 2))
            }
          >
            /2
          </button>
      </div>
    )
  }
}

export default ActionsButtons;

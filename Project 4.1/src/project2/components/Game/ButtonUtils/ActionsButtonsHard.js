import React, { Component } from "react";
import "../../../css/App.css"
class ActionsButtonsHard extends Component {
  render(props){
    return (
      <div>
          <button className="my-button-orange"
            onClick={() =>
              this.props.updatePlayer(this.props.currentPlayer.number ** 2)
            }
          >
            ^2
          </button>
          <button className="my-button-orange"
            onClick={() =>
              this.props.updatePlayer(Math.round(Math.sqrt(this.props.currentPlayer.number)))
            }
          >
            √
          </button>
          <button className="my-button-orange"
            onClick={() =>
              this.props.updatePlayer(this.props.currentPlayer.number * 3)
            }
          >
            *3
          </button>
          <button className="my-button-orange"
            onClick={() =>
              this.props.updatePlayer(Math.round(this.props.currentPlayer.number / 5))
            }
          >
            /5
          </button>
          <button className="my-button-orange"
            onClick={() =>
              this.props.updatePlayer(this.props.currentPlayer.number + 1)
            }
          >
            +1
          </button>
      </div>
    )
  }
}

export default ActionsButtonsHard;

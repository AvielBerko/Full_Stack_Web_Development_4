import "../../css/App.css";
import React, { Component } from "react";

class WelcomeWindow extends Component {
  render(props) {
    return (
      <div className="bgimg">
        <div className="topleft">
          <p>Itamar & Chananel</p>
        </div>
        <div className="top_right">
          <p>בס"ד</p>
        </div>
        <div className="middle">
          <h1>PROJECT 2 MATH GAME !</h1>
          <hr />
          <p>
            <b>are you ready to play?</b>
          </p>
          <button onClick={() => this.props.switchWindow()}>Start</button>
        </div>
      </div>
    );
  }
}

export default WelcomeWindow;

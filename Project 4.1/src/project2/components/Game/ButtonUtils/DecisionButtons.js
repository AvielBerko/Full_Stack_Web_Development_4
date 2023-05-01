import React, { Component } from "react";
import "../../../css/App.css"
class DecisionButtons extends Component {
    render(props){
        return (
            <div>
                <button className="my-button-orange" onClick={this.props.restart}>restart</button>
                <button className="my-button-orange" onClick={() => this.props.quit(this.props.quitGame)}>quit</button>
            </div>
            )
    }
}

export default DecisionButtons;

import React, { Component } from "react";
import "../../../css/keyboard.css";
class SizeOptions extends Component {
    render(props){
        return (
            <div className="row-options">
              <label>font size:</label>
              <button className="my-button" onClick={() => this.props.raiseFontSize()}>
                +
              </button>
              <label>{this.props.size}</label>
              <button className="my-button" onClick={() => this.props.lowerFontSize()}>
                -
              </button>
              <div className="left"><button className="my-button" onClick={() => this.props.setSizeAll(this.props.size)}>Apply all</button></div>
            </div>
        );
    }
}

export default SizeOptions;

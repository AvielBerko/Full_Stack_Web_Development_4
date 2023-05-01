import React, { Component } from "react";
import "../../../css/keyboard.css";
class FontFamilyOptions extends Component {
    render(props){
        return (
            <div className="row-options">
              <label for="fontSelector">Select a font:</label>
              <select
                id="fontSelector"
                onChange={(event) => this.props.changeFont(event.target.value)}
              >
                <option value="Arial">Arial</option>
                <option value="Verdana">Verdana</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Georgia">Georgia</option>
                <option value="Courier New">Courier New</option>
              </select>
              <div className="left"><button className="my-button" onClick={() => this.props.setFontFamilyAll(this.props.font)}>Apply all</button></div>
            </div>
        );
    }
}

export default FontFamilyOptions;

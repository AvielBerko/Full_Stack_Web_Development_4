import React, { Component } from "react";
import "../../../css/keyboard.css";
class ColorsOptions extends Component {
    render(props){
        const colorOptions = this.props.colors.split(" ").map(color => <>
            <input type="radio" checked={this.props.color === color} id={color} name="colorOptions" value={color} onChange={event => this.props.setColor(event.target.value)}/>
            <label for={color}>{color}</label>
            </>)
          return (
            <div className="row-options">
              <label>select color: </label>
              {colorOptions}
              <div className="left"><button className="my-button" onClick={() => this.props.setColorAll(this.props.color)}>Apply all</button></div>
            </div>
          );
    }
}

export default ColorsOptions;

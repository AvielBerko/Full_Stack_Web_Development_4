import React, { Component } from "react";

class Screen extends Component {
  render(props){
    const characterElements = this.props.output.map(
      ({ value, size, color, font }, index) => (
        <span
          key={index}
          style={{
            fontSize: `${size}px`,
            color: color,
            fontFamily: font,
          }}
        >
          {value}
        </span>
      )
    );
    return (
      <div>
        <p>{characterElements}</p>
      </div>
    );
  }
}

export default Screen;

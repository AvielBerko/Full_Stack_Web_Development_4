import "./css/App.css";
import Keyboard from "./components/Keyboard/KeyboardContainer";
import Screen from "./components/Screen/Screen";
import React, { Component } from "react";

class App1 extends Component {
  constructor() {
    super();
    this.state = {
      output: [],
    };
    this.commandsStack = [];
    this.undoStack = [];
  }

  saveState() {
    this.commandsStack.push(this.state);
    this.undoStack = [];
  }

  addChar = (newChar) => {
    const current = this.state.output;
    this.saveState();
    this.setState({ output: current.concat(newChar) });
  };

  deleteLast = () => {
    const current = this.state.output;
    if (current.length > 0) {
      this.saveState();
      this.setState({ output: current.slice(0, -1) });
    }
  };

  undo = () => {
    if (this.commandsStack.length > 0) {
      const lastState = this.commandsStack.pop();
      this.undoStack.push(this.state);
      this.setState(lastState);
    }
  };

  reverseUndo = () => {
    if (this.undoStack.length > 0) {
      const lastUndoState = this.undoStack.pop();
      this.commandsStack.push(this.state);
      this.setState(lastUndoState);
    }
  };

  clear = () => {
    this.saveState();
    this.setState({ output: [] });
  };

  upper = () => {
    const current = this.state.output;
    this.saveState();
    this.setState({
      output: current.map((ch) => {
        return { ...ch, value: ch.value.toUpperCase() };
      }),
    });
  };

  lower = () => {
    const current = this.state.output;
    this.saveState();
    this.setState({
      output: current.map((ch) => {
        return { ...ch, value: ch.value.toLowerCase() };
      }),
    });
  };

  setColor = (newColor) => {
    const current = this.state.output;
    this.saveState();
    this.setState({
      output: current.map((ch) => {
        return { ...ch, color: newColor };
      }),
    });
  }

  setSize = (newSize) => {
    const current = this.state.output;
    this.saveState();
    this.setState({
      output: current.map((ch) => {
        return { ...ch, size: newSize };
      }),
    });
  }

  setFontFamily = (newFontFamily) => {
    const current = this.state.output;
    this.saveState();
    this.setState({
      output: current.map((ch) => {
        return { ...ch, font: newFontFamily };
      }),
    });
  }

  render() {
    return (
      <div className="container">
        <Screen {...this.state} />
        <Keyboard
          add={this.addChar}
          delete={this.deleteLast}
          ctrlz={this.undo}
          ctrly={this.reverseUndo}
          lowerAll={this.lower}
          upperAll={this.upper}
          deletAll={this.clear}
          setColorAll={this.setColor}
          setSizeAll={this.setSize}
          setFontFamilyAll={this.setFontFamily}
        />
      </div>
    );
  }
}

export default App1;

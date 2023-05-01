import React, { Component } from "react";
import KeyboardComponent from "./KeyboardComponent";

class Keyboard extends Component {
  constructor() {
    super();
    this.state = {
      characters: "language", //language/special
      language: "English", //English/Hebrew/emoji
      isLowerCase: true,
      color: "black",
      size: "32",
      font: "Ariel",
    };

    this.keyboardDictionary = {
      EnglishLowerCase: [
        "q w e r t y u i o p",
        "a s d f g h j k l",
        "z x c v b n m",
      ],
      EnglishUpperCase: [
        "Q W E R T Y U I O P",
        "A S D F G H J K L",
        "Z X C V B N M",
      ],
      Hebrew: ["ק ר א ט ו ן ם פ", "ש ד ג כ ע י ח ל ך ף", "ז ס ב ה נ מ צ ת ץ"],
      special: [
        "1 2 3 4 5 6 7 8 9 0",
        "! @ # $ ^ & _ - = +",
        "; : ( ) / ' \" , . ?",
      ],
      emoji: [
        "😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊",
        "😎 🤔 🙄 🤗 🤩 😇 😜 😝 😛 😊",
        "🤪 🥳 🥴 🥺 🤓 😴 😷 😝 😛 😊",
      ],
    };
  }

  changeLanguage = () => {
    let newL = "";
    if (this.state.language === "English") {
      newL = "Hebrew";
    } else if (this.state.language === "Hebrew") {
      newL = "emoji";
    } else if (this.state.language === "emoji") {
      newL = "English";
    }
    this.setState({ ...this.state, language: newL });
  };

  specialCharacters = () => {
    const newChars =
      this.state.characters === "language" ? "special" : "language";
    this.setState({ ...this.state, characters: newChars });
  };

  capsClick = () => {
    if (this.state.language === "English") {
      this.setState({ ...this.state, isLowerCase: !this.state.isLowerCase });
    }
  };

  handleClick = (char, handler) => {
    handler({
      value: char,
      size: this.state.size,
      color: this.state.color,
      font: this.state.font,
    });
  };

  setColor = (newColor) => {
    //there will be few color options, black/green/red etc' -> props.setColor(event.target.textContent)
    this.setState({ ...this.state, color: newColor });
  };

  raiseFontSize = () => {
    //there will be 2 buttons up(^) and down, each lower or raise the font. limits here:
    let currentSize = Number(this.state.size);
    if (currentSize < 50) {
      this.setState({ ...this.state, size: String(currentSize + 2) });
    }
  };

  lowerFontSize = () => {
    let currentSize = Number(this.state.size);
    if (currentSize > 16) {
      this.setState({ ...this.state, size: String(currentSize - 2) });
    }
  };

  changeFont = (newFont) => {
    this.setState({ ...this.state, font: newFont });
  };

  logState = () => {
    console.log(this.state);
  };

  render(props) {
    return (
      <KeyboardComponent
        caps={this.capsClick}
        changeLanguage={this.changeLanguage}
        specialCharacters={this.specialCharacters}
        handleClick={this.handleClick}
        setColor={this.setColor}
        raiseFontSize={this.raiseFontSize}
        lowerFontSize={this.lowerFontSize}
        changeFont={this.changeFont}
        {...this.state}
        {...this.keyboardDictionary}
        {...this.props}
      />
    );
  }
}
export default Keyboard;

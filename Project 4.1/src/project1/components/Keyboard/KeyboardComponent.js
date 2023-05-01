import React, { Component } from "react";
import ColorsOptions from "./fontOptions/ColorOptions";
import SizeOptions from "./fontOptions/SizeOptions";
import FontFamilyOptions from "./fontOptions/FontFamilyOptions";
import "../../css/keyboard.css";

function createButtonRow(content, props) {
  return content.split(" ").map((char) => (
    <button
      className="charButton stylish"
      key={char}
      onClick={(event) =>
        props.handleClick(event.target.textContent, props.add)
      }
    >
      {char}
    </button>
  ));
}

function createTabButton(props) {
  return (
    <button
      className={`tabButton${
        props.characters === "language" && props.language !== "emoji" ? "" : "Special"
      } stylish`}
      onClick={() => props.handleClick("   ", props.add)}
    >
      tab
    </button>
  );
}

function padRow1(row, props) {
  let classNameBackspace="backspaceButton stylish"
  if (props.language === "Hebrew" && props.characters === "language") {
    row.unshift(createTabButton(props));
    classNameBackspace += " widthBackspace"
  }
  row.push(
    <button className={classNameBackspace} onClick={props.delete}>
      backspace 
    </button>
  );
  return row;
}

function padRow2(row, props) {
  if (
    (props.language === "English" && props.language !== "emoji") &&
    props.characters === "language"
  ) {
    row.unshift(createTabButton(props));
  }
  let classNameBackspace= `enterButton${
    props.characters === "language" && props.language !== "emoji" ? "" : "Special"
  } stylish`
  if (props.language === "Hebrew" && props.characters === "language") {
      classNameBackspace += " enterSpace"
    
  }
  row.push(
    <button
      className={classNameBackspace}
    >
      {"<enter"}
    </button>
  ); //does nothing as the whole app is only keyboard
  return row;
}

function padRow3(row, props) {
  if (
    (props.language === "English") &&
    props.characters === "language"
  ) {
    row.unshift(
      <button className="capsButton stylish" onClick={props.caps}>
        caps lock
      </button>
    );
  }
  if (props.characters === "language" && props.language !== "emoji" ) {
    let classNameDot = "charButton stylish"
    if(props.language === "Hebrew"){
      classNameDot += " indent"
     }
      row.push(
        <button
          className={classNameDot}
          onClick={() => props.handleClick(",", props.add)}
        >
          ,
        </button>
      );
      row.push(
        <button
        className={classNameDot}
        onClick={() => props.handleClick(".", props.add)}
        >
          .
        </button>
      );
  } else {
    row.unshift(createTabButton(props));
  }
  return row;
}

function createButtonRow4(props) {
  return (
    <>
      <button className="tabButton stylish" onClick={props.specialCharacters}>
        &123
      </button>
      <button className="tabButton stylish" onClick={props.ctrlz}>
        Ctrl-Z
      </button>
      <button className="tabButton stylish" onClick={props.ctrly}>
        Ctrl-Y
      </button>
      <button
        className="spacebarButton stylish"
        onClick={() => props.handleClick(" ", props.add)}
      ></button>
      <button className="tabButton stylish" onClick={props.changeLanguage}>
        {(props.language === "English" && "ENG") ||
        (props.language === "Hebrew" && "עבר")  ||
        (props.language === "emoji" && "☻")
        }
      </button>
    </>
  );
}

function createButtonSpecialRow(props) {
  return (
    <>
      <button className="my-button" onClick={props.lowerAll}>
        Lower all
      </button>
      <button className="my-button" onClick={props.upperAll}>
        Upper all
      </button>
      <button className="my-button" onClick={props.deletAll}>
        Delete all
      </button>
    </>
  );
}

class KeyboardComponent extends Component {
  render(props){
    let curState = this.props.characters;
    if (curState === "language") {
      curState = this.props.language;
      if (curState === "English") {
        curState += this.props.isLowerCase ? "LowerCase" : "UpperCase";
      }
    }
    const content = this.props[curState];
    let row1 = padRow1(createButtonRow(content[0], this.props), this.props);
    let row2 = padRow2(createButtonRow(content[1], this.props), this.props);
    let row3 = padRow3(createButtonRow(content[2], this.props), this.props);
    let row4 = createButtonRow4(this.props);
    let row5 = createButtonSpecialRow(this.props);
    return (
      <div>
        <div>
          <div className="row">{row1}</div>
          <div className="row">{row2}</div>
          <div className="row">{row3}</div>
          <div className="row">{row4}</div>
          <div><br/></div>
          <div className="row">{row5}</div>
          <div><br/></div>
          <ColorsOptions {...this.props} colors={"black red green blue"}/>
          <div><br/></div>
          <SizeOptions {...this.props}/>
          <div><br/></div>
          <FontFamilyOptions {...this.props}/>
        </div>
      </div>
    );
  }
}

export default KeyboardComponent;

import "./Home.css";
import React, { useReducer, useState } from "react";

const Home = () => {
  const onClickHandler = (initState, action) => {
    switch (action.type) {
      case "update":
          return action.payload;
      case "upper":
        return initState.toUpperCase();
      case "lower":
        return initState.toLowerCase();
      case "clear":
        return "";
      case "copy":
        navigator.clipboard.writeText(initState);
      return initState;
      case "extraSpace":
        return initState.split(/\s+/).join(" ")
      default:
        break;
    }
  };
  //useReducer for all the actions
  const [inputText, dispatch] = useReducer(onClickHandler, "");

  const readingSpeed = () => {
    const wordsPerMinute = 238;
    const wordCount = inputText.split(/\s+/).filter(word => word !== "").length;
    const readingTime = wordCount / wordsPerMinute;
    return readingTime
  }

  return (
    <main>
      <section className="home">
        <h1>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={inputText}
          onChange={(e) => dispatch({type: "update", payload: e.target.value})}
        ></textarea>
        <div className="btn-container">
          <button onClick={() => dispatch({type: "upper"})}>Convert Uppercase</button>
          <button onClick={() => dispatch({type: "lower"})}>Convert Lowercase</button>
          <button onClick={() => dispatch({type: "clear"})}>Clear Text</button>
          <button onClick={() => dispatch({type: "copy"})}>Copy To Clipboard</button>
          <button onClick={() => dispatch({type: "extraSpace"})}>Remove Extra Spaces</button>
        </div>
        <div className="summary">
        <h1>Summery Of Your Text</h1>
        <p>Number of words : {inputText.split(/\s+/).filter(word => word !== "").length}</p>
        <p>Number of charecters : {inputText.length}</p>
        <p>Reading Time: {(0.008 * (inputText.split(' ').filter((element)=>{return element.length!==0}).length)).toFixed(3)} Minutes</p>
        </div>
        <div className="preview">
          <h1>Preview Document</h1>
          <textarea name="" id="" cols="30" rows="10" value={inputText} readOnly></textarea>
        </div>
      </section>
    </main>
  );
};

export default Home;

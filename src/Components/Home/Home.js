import React, { useReducer } from "react";
import Button from "./Button";
import "./Home.css";

const Home = () => {
  const onClickHandler = (initState, action) => {
    switch (action.type) {
      case "update":
        return { ...initState, text: action.payload };
      case "upper":
        return { ...initState, text: initState.text.toUpperCase() };
      case "lower":
        return { ...initState, text: initState.text.toLowerCase() };
      case "clear":
        return { ...initState, text: "" };
      case "copy":
        navigator.clipboard.writeText(initState.text);
        return initState;
      case "extraSpace":
        return { ...initState, text: initState.text.split(/\s+/).join(" ") };
      default:
        return initState;
    }
  };

  // useReducer for all the actions
  const [inputText, dispatch] = useReducer(onClickHandler, { text: "" });

  const readingSpeed = () => {
    const wordsPerMinute = 238;
    const wordCount = inputText.text
      .split(/\s+/)
      .filter((word) => word !== "").length;
    const readingTime = wordCount / wordsPerMinute;
    return readingTime;
  };

  return (
    <main>
      <section className="home">
        <div className="home-container">
          <h1>
            TextUtils - Word Counter, Character Counter, Remove Extra Space
          </h1>
          <h2>Enter Text Here :</h2>
          <textarea
            placeholder="Enter Text Here..."
            value={inputText.text}
            onChange={(e) =>
              dispatch({ type: "update", payload: e.target.value })
            }
          ></textarea>
          <div className="home-btn-container">
            <Button
              className={"btn-blue"}
              title="Convert Uppercase"
              onClick={() => dispatch({ type: "upper" })}
              text={inputText.text}
            />
            <Button
              className={"btn-blue"}
              title="Convert Lowercase"
              onClick={() => dispatch({ type: "lower" })}
              text={inputText.text}
            />
            <Button
              className={"btn-blue"}
              title=" Remove Extra Spaces"
              onClick={() => dispatch({ type: "extraSpace" })}
              text={inputText.text}
            />
            <Button
              className={"btn-green"}
              title="Copy To Clipboard"
              onClick={() => dispatch({ type: "copy" })}
              text={inputText.text}
            />
            <Button
              className={"btn-red"}
              title="Clear Text"
              onClick={() => dispatch({ type: "clear" })}
              text={inputText.text}
            />
          </div>
          <div className="summary">
            <h2>Summary Of Your Text</h2>
            <p>
              Number of words:{" "}
              {inputText.text.split(/\s+/).filter((word) => word !== "").length}
            </p>
            <p>Number of characters: {inputText.text.length}</p>
            <p>
              Reading Time:{" "}
              {(
                0.008 *
                inputText.text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length
              ).toFixed(3)}{" "}
              Minutes
            </p>
          </div>
          <div className="preview">
            <h2>Preview Document</h2>
            <textarea value={inputText.text} readOnly></textarea>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

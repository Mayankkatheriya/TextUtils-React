import React, { memo } from "react";
import Button from "./Button";
import "./Home.css";
import { useReducerContext } from "../../Context/ReducerContext";

const Home = () => {
  console.log("Home");
  const {state, dispatch} = useReducerContext();

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
            value={state.text}
            onChange={(e) =>
              dispatch({ type: "update", payload: e.target.value })
            }
          ></textarea>
          <div className="home-btn-container">
            <Button
              className={"btn-blue"}
              title="Convert Uppercase"
              onClick={() => dispatch({ type: "upper" })}
              text={state.text}
            />
            <Button
              className={"btn-blue"}
              title="Convert Lowercase"
              onClick={() => dispatch({ type: "lower" })}
              text={state.text}
            />
            <Button
              className={"btn-blue"}
              title=" Remove Extra Spaces"
              onClick={() => dispatch({ type: "extraSpace" })}
              text={state.text}
            />
            <Button
              className={"btn-green"}
              title="Copy To Clipboard"
              onClick={() => dispatch({ type: "copy" })}
              text={state.text}
            />
            <Button
              className={"btn-red"}
              title="Clear Text"
              onClick={() => dispatch({ type: "clear" })}
              text={state.text}
            />
          </div>
          <div className="summary">
            <h2>Summary Of Your Text</h2>
            <p>
              Number of words:{" "}
              {state.text.split(/\s+/).filter((word) => word !== "").length}
            </p>
            <p>Number of characters: {state.text.length}</p>
            <p>
              Reading Time:{" "}
              {(
                0.008 *
                state.text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length
              ).toFixed(3)}{" "}
              Minutes
            </p>
          </div>
          <div className="preview">
            <h2>Preview Document</h2>
            <textarea value={state.text} readOnly></textarea>
          </div>
        </div>
      </section>
    </main>
  );
};

export default memo (Home);

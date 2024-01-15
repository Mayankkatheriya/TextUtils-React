import "./Header.css";
import React, { memo, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { useReducerContext } from "../../Context/ReducerContext";

const Header = () => {
    console.log("Header");
  const {state, dispatch} = useReducerContext()

  useEffect(() => {
    document.body.classList[state.theme ? "add" : "remove"]("dark");
  }, [state]);

  return (
    <header>
      <nav className="nav_left">
        <Link to="/">
          <h1>📝 TextUtils</h1>
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <nav className="nav_right">
        <div className="checkbox-wrapper-54">
          <label className="switch">
            <input
              type="checkbox"
              checked={state.theme}
              onChange={() => dispatch({ type: "toggle" })}
            />
            <span className="slider"></span>
          </label>
        </div>
      </nav>
    </header>
  );
};

export default memo (Header);

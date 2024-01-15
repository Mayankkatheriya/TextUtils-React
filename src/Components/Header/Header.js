import "./Header.css";
import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useReducerContext } from "../../Context/ReducerContext";

const Header = () => {
  console.log("Header");
  const { state, dispatch } = useReducerContext();
  const [showHamburger, setHamburger] = useState(false)

  useEffect(() => {
    document.body.classList[state.theme ? "add" : "remove"]("dark");
  }, [state]);

  return (
    <header>
      <nav className="nav_left">
        <Link to="/">
          <h1>📝 TextUtils</h1>
        </Link>
      </nav>
      <ul className={showHamburger ? "mobile-nav-menu" :"nav-menu"}>
        <li>
          <Link to="/" onClick={() => setHamburger(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setHamburger(false)}>About Us</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setHamburger(false)}>Contact</Link>
        </li>
      </ul>
      <nav className="nav_right">
        <span>Enable {state.theme ? "Light" : "Dark"} Mode</span>
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
        <div className="hamburger">
          <i className="fa-solid fa-bars" onClick={() => setHamburger(!showHamburger)}></i>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header, (prevProps, nextProps) => {
  // If any of these properties are different, react will re-render the component
  return prevProps !== nextProps;
});

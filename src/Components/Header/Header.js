import "./Header.css";
import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const toggleHandler = (initState, action) => {
    switch (action.type) {
      case "toggle":
        return !initState;

      default:
        break;
    }
  };
  const [isDark, dispatch] = useReducer(toggleHandler, false);

  useEffect(() => {
    document.body.classList[isDark ? "add" : "remove"]("dark");
  }, [isDark]);

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
        <div class="checkbox-wrapper-54">
          <label class="switch">
            <input
              type="checkbox"
              checked={isDark}
              onChange={() => dispatch({ type: "toggle" })}
            />
            <span class="slider"></span>
          </label>
        </div>
      </nav>
    </header>
  );
};

export default Header;

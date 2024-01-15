import React, { createContext, useReducer, useContext } from "react";

export const ReducerContext = createContext();

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
    case "toggle":
      return { ...initState, theme: !initState.theme };
    default:
      return initState;
  }
};

const ReducerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(onClickHandler, {
    text: "",
    theme: false,
  });
  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};

export const useReducerContext = () => {
  const context = useContext(ReducerContext);
  if (!context) {
    throw new Error(
      "useReducerContext must be used within a ReducerContextProvider"
    );
  }
  return context;
};

export default ReducerContextProvider;

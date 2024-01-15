import React from "react";

const Button = ({title, onClick, text, className}) => {
  return (
    <button className = {className} onClick={onClick} disabled = {(text.length===0) ? true : false}>
      {title}
    </button>
  );
};

export default Button;

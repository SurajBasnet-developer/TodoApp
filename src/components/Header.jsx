import React from "react";
import { GrPowerReset } from "react-icons/gr";

const Header = ({ handleDeleteAllTodos, handleToggleDarkNode }) => {
  return (
    <div className="header">
      <h1>
        <span style={{ color: "#327ffa" }}>Your</span>TODO
      </h1>
      <button
        onClick={() =>
          handleToggleDarkNode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        Mode
      </button>
      <div className="reset-section" onClick={handleDeleteAllTodos}>
        <p>
          <b>Reset</b>
        </p>
        <GrPowerReset size={30} />
      </div>
    </div>
  );
};

export default Header;

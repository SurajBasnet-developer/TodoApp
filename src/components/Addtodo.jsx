import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

// This component is responsible for creating new note application

const Addtodo = ({ handleAddTodo }) => {
  const [notetext, setNotetext] = useState("");
  const charlimit = 300;
  const handleChange = (event) => {
    if (charlimit - event.target.value.length >= 0) {
      setNotetext(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (notetext.trim().length > 0) {
      handleAddTodo(notetext);
      setNotetext("");
    }
  };

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="1"
        placeholder="Add you Task"
        onChange={handleChange}
        value={notetext}
      ></textarea>
      <div className="note-footer">
        <small>{charlimit - notetext.length} Remaining</small>
        <div>
          <AiFillPlusCircle
            size={33}
            color="#327ffa"
            onClick={handleSaveClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Addtodo;

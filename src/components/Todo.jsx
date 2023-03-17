import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FcApproval } from "react-icons/fc";

const Todo = ({ id, text, date, handleDelete }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <FcApproval
          size={30}
          onClick={() => handleDelete(id)}
          className="delete-icon"
        />
      </div>
    </div>
  );
};

export default Todo;

import React from "react";
import Addtodo from "./Addtodo";
import Todo from "./Todo";

const TodoList = ({ notes, handleAddTodo, handleDelete }) => {
  return (
    <div className="notes-list">
      <Addtodo handleAddTodo={handleAddTodo} />
      {notes.map((note) => (
        <Todo
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;

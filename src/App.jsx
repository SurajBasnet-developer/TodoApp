import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first todo",
      date: "03/11/2022",
    },

    {
      id: nanoid(),
      text: "This is my second todo",
      date: "03/11/2022",
    },
    {
      id: nanoid(),
      text: "This is my third todo",
      date: "03/11/2022",
    },
  ]);
  const [searchNote, setSearchNote] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  //to store the data in local storage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addTodo = (text) => {
    const date = new Date();
    const newTodo = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newTodo];
    setNotes(newNotes);
    newNotes.reverse();
  };

  const deletingAllTodos = () => {
    setNotes([]);
  };

  const deeletingTodo = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    const nt = notes.filter((note) => note.id === id);
    setNotes([...newNotes, ...nt]);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header
          handleDeleteAllTodos={deletingAllTodos}
          handleToggleDarkNode={setDarkMode}
        />

        <Search handleSearch={setSearchNote} />
        <TodoList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchNote)
          )}
          handleAddTodo={addTodo}
          handleDelete={deeletingTodo}
        />
      </div>
    </div>
  );
};

export default App;

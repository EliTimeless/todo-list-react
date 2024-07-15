import { useState } from "react";
import "./App.css";
import ListOfNotes from "./ListOfNotes";
import Note from "./Note";
import Header from "./Header";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function addDelete(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <ListOfNotes onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            deleteItem={addDelete}
          />
        );
      })}
    </div>
  );
}

export default App;

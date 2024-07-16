import { useState } from "react";
import "./App.css";
import ListOfNotes from "./ListOfNotes";
import Note from "./Note";
import Header from "./Header";

function App() {
  const [notes, setNotes] = useState([]);
  const maxTitleLength = 30; // Maximum characters for title
  const maxContentLength = 250;

  function addNote(newNote) {
    if (
      newNote.content.trim() &&
      newNote.title.length <= maxTitleLength &&
      newNote.content.length <= maxContentLength
    ) {
      setNotes((prevNotes) => {
        return [...prevNotes, newNote];
      });
    } else {
      alert("Note exceeds maximum allowed characters!");
    }
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
      {notes.length > 0
        ? notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                deleteItem={addDelete}
              />
            );
          })
        : null}
    </div>
  );
}

export default App;

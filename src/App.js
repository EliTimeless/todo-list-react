import { useState } from "react";
import "./App.css";
import ListOfNotes from "./ListOfNotes";
import Note from "./Note";
import Header from "./Header";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./Firebase";

function App() {
  const [notes, setNotes] = useState([]);
  const maxTitleLength = 50;
  const maxContentLength = 250;

  async function addNote(newNote) {
    if (
      newNote.content.trim() &&
      newNote.title.length <= maxTitleLength &&
      newNote.content.length <= maxContentLength
    ) {
      try {
        const docRef = await addDoc(collection(db, "notes"), newNote);
        setNotes((prevNotes) => [...prevNotes, { ...newNote, id: docRef.id }]);
      } catch (error) {
        console.log("something is wrong", error);
      }
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
                key={noteItem.id}
                id={noteItem.id}
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

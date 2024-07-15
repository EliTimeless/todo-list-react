import React from "react";
import "./App.css";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function handleClick() {
    props.deleteItem(props.id);
  }

  return (
    <div>
      <div className="itemNote">
        <div className="item">
          <h3>{props.title}</h3>
          <p>{props.content}</p>
        </div>
        <button className="deleteButton" onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default Note;

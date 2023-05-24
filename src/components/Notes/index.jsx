import React from "react";
import Note from "../../containers/Note";
import Editable from "../Editable";

const Notes = ({
  notes,
  onMoveNote,
  onDeleteNote,
  onEditNote,
  onValueClick,
}) => {
  return (
    <ul className="notes-list">
      {notes.map((note) => (
        <Note id={note.id} key={note.id} onMoveNote={onMoveNote}>
          <Editable
            editing={note.editing}
            id={note.id}
            value={note.text}
            onDelete={onDeleteNote}
            onEdit={onEditNote}
            onValueClick={onValueClick}
          />
        </Note>
      ))}
    </ul>
  );
};

export default Notes;

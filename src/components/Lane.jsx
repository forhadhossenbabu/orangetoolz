import React from "react";
import Notes from "./Notes";
import Editable from "./Editable";

const Lane = (props) => {
  const {
    onCreateNote,
    onMoveNote,
    onEditNote,
    onEditLane,
    onDeleteLane,
    onDeleteNote,
    lane,
    allNotes,
    connectDragSource,
    connectDragPreview,
    connectDropTarget,
  } = props;

  const laneNotes = lane.notes
    .map((id) => allNotes.find((note) => note.id === id))
    .filter((note) => note);

  const handleDeleteNote = (noteId) => onDeleteNote(lane.id, noteId);

  const handleDeleteLane = () => {
    onDeleteLane(lane.id);
    lane.notes.forEach((noteId) => onDeleteNote(null, noteId));
  };

  const handleCreateNote = () => onCreateNote(lane.id);

  return connectDragPreview(
    connectDropTarget(
      <div className="lane">
        <h2 className="lane__name">
          <Editable
            editing={lane.editing}
            id={lane.id}
            value={lane.name}
            onEdit={onEditLane}
            onValueClick={onEditLane}
          />
          <button className="lane__delete" onClick={handleDeleteLane} />
          {connectDragSource(<button className="lane__drag" />)}
        </h2>
        <Notes
          notes={laneNotes}
          onDeleteNote={handleDeleteNote}
          onEditNote={onEditNote}
          onValueClick={onEditNote}
          onMoveNote={onMoveNote}
        />
        <button className="add-note" onClick={handleCreateNote}>
          + TASK
        </button>
      </div>
    )
  );
};

export default Lane;

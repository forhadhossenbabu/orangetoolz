import React from "react";

const Note = ({
  children,
  connectDragSource,
  connectDropTarget,
  isDragging,
}) => {
  return connectDragSource(
    connectDropTarget(
      <li style={{ opacity: isDragging ? 0 : 1 }} className="note">
        {children}
      </li>
    )
  );
};

export default Note;

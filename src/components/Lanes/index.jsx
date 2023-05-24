import React from "react";
import Lane from "../../containers/Lane";

const Lanes = ({ lanes, onEditLane, onDeleteLane, onMoveLane }) => {
  return (
    <div className="lanes">
      {lanes.map((lane) => (
        <Lane
          key={lane.id}
          lane={lane}
          onEditLane={onEditLane}
          onDeleteLane={onDeleteLane}
          onMoveLane={onMoveLane}
        />
      ))}
    </div>
  );
};

export default Lanes;

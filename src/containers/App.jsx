import React from "react";

import lanesActions from "../redux/actions/lanes";
import { connect } from "react-redux";
import Lanes from "../components/Lanes";

import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

const App = (props) => {
  return (
    <div className="react-kanban">
      <div className="app-title">
        <img
          src="https://orangetoolz.com/wp-content/uploads/2018/10/logo-white.png"
          alt="orangetoolz"
        />
        <div className="app-buttons">
          <button className="reset-store" onClick={props.onReset}>
            RESET KANBAN
          </button>
          <button className="add-lane" onClick={props.onCreateLane}>
            ADD LENE
          </button>
        </div>
      </div>
      <h1 className="app-slogan">
        LET'S CONVERT GREAT IDEAS INTO BRILLIANT SOLUTIONS
      </h1>
      <Lanes
        lanes={props.lanes}
        onEditLane={props.onEditLane}
        onDeleteLane={props.onDeleteLane}
        onMoveLane={props.onMoveLane}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  lanes: state.lanes,
});

const mapDispatchToProps = (dispatch) => ({
  onCreateLane() {
    dispatch(lanesActions.createLane("Active"));
  },

  onEditLane(laneId, name) {
    const updatedLane = {
      id: laneId,
    };

    if (name) {
      updatedLane.name = name;
      updatedLane.editing = false;
    } else {
      updatedLane.editing = true;
    }

    dispatch(lanesActions.updateLane(updatedLane));
  },

  onDeleteLane(laneId) {
    dispatch(lanesActions.deleteLane(laneId));
  },

  onMoveLane(sourceId, targetId) {
    dispatch(lanesActions.move("lane", sourceId, targetId));
  },
});

export default DragDropContext(HTML5Backend)(
  connect(mapStateToProps, mapDispatchToProps)(App)
);

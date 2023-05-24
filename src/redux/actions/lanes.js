import uuid from "uuid";
import { isV4 } from "../../utils/helpers";
import * as actionTypes from "../types/actionTypes";

/**
 * Returns a createLane action
 */
function createLane(name) {
  return {
    type: actionTypes.CREATE_LANE,
    payload: {
      id: uuid.v4(),
      name,
      notes: [],
    },
  };
}

/**
 * Returns the action to update a lane
 */
function updateLane(updatedLane) {
  if (!isV4(updatedLane.id)) {
    throw new Error(
      `params have not valid uuids ${JSON.stringify(updatedLane)}`
    );
  }

  return {
    type: actionTypes.UPDATE_LANE,
    payload: updatedLane,
  };
}

/**
 * Returns an action to delete a lane
 */
function deleteLane(id) {
  if (!isV4(id)) {
    throw new Error(`params have not valid uuids ${id}`);
  }

  return {
    type: actionTypes.DELETE_LANE,
    payload: {
      id,
    },
  };
}

/**
 * Returns an action to attach a note to a lane
 */
function attachToLane(laneId, noteId) {
  if (!isV4(laneId) || !isV4(noteId)) {
    throw new Error(`params have not valid uuids ${laneId} ${noteId}`);
  }

  return {
    type: actionTypes.ATTACH_TO_LANE,
    payload: {
      laneId,
      noteId,
    },
  };
}

/**
 * Returns an action to detach a note from a lane
 */
function detachFromLane(laneId, noteId) {
  if (!isV4(laneId) || !isV4(noteId)) {
    throw new Error(`params have not valid uuids ${laneId} ${noteId}`);
  }

  return {
    type: actionTypes.DETACH_FROM_LANE,
    payload: {
      laneId,
      noteId,
    },
  };
}

/**
 * Returns an action to move a note or a lane
 */
function move(target, sourceId, targetId) {
  if (!isV4(sourceId) || !isV4(targetId)) {
    throw new Error(
      `params have not valid uuids ${target} ${sourceId} ${targetId}`
    );
  }

  return {
    type: target === "note" ? actionTypes.MOVE_NOTE : actionTypes.MOVE_LANE,
    payload: {
      sourceId,
      targetId,
    },
  };
}

export default {
  createLane,
  updateLane,
  deleteLane,
  attachToLane,
  detachFromLane,
  move,
};

import { ADD_LAUNCHS, ADD_SELECTION } from '../Constants';

export const addLaunchs = (payload) => {
  return {
    type: ADD_LAUNCHS,
    payload,
  };
};

export const addSelection = (payload) => {
  return {
    type: ADD_SELECTION,
    payload,
  };
};

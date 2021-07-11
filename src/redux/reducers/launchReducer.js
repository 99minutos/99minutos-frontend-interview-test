import { ADD_LAUNCHS, ADD_SELECTION } from '../Constants';

const initialState = {
  data: [],
  selected: [],
};

const lastLaunches = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LAUNCHS:
      return {
        ...state,
        data: Object.assign({}, action?.payload),
      };

    case ADD_SELECTION:
      const copy = Object.values(state.data);
      const selection = copy.filter(
        (item) => item?.mission_name === action.payload
      );
      return {
        selected: selection,
        data: copy,
      };

    default:
      return state;
  }
};

export default lastLaunches;

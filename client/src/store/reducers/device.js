import { SET_DEVICES } from "../../const/duckKeys";

const initState = {
  devices: [],
};

const deviceReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_DEVICES:
      if (!payload) {
        return { ...state };
      }
      return { devices: [...payload] };
    default:
      return state;
  }
};

export default deviceReducer;

import { SET_ACTIVE_BRAND, SET_BRANDS } from "../../const/duckKeys";

const initState = {
  brands: [],
  selectedBrandId: null,
};

const brandReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_BRANDS:
      return { ...state, brands: [...payload] };
    case SET_ACTIVE_BRAND:
      state.selectedBrandId =
        payload.id === state.selectedBrandId ? null : payload.id;

      return { ...state };
    default:
      return state;
  }
};

export default brandReducer;

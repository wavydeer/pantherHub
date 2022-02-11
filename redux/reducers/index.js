import * as c from "../constants/index";

const initialState = {
  currentUser: null,
  isLoading: false,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.LOGIN:
      return {
        ...state, // copies the previous state
        currentUser: action.payload.currentUser,
      };
    case c.LOGOUT:
      return {
        ...initialState, //reset the data back to its initial state
      };
    default:
      return state;
  }
};


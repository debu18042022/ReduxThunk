import { USER } from "./Type";

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case USER:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

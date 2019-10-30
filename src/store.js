import { createStore } from "redux";

let initialState = {
  count: 0
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...action.data
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const store = createStore(
  userReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

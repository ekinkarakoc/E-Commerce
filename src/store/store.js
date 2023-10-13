import { legacy_createStore as createStore } from "redux";

function reducer(state, action) {
  return {
    title: "merhaba redux",
  };
}

export const store = createStore(reducer);

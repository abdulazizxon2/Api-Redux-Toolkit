import { configureStore } from "@reduxjs/toolkit";
import counter from "./slicers/Counter";
import todos from "./slicers/GetData";

export const store = configureStore({
  reducer: {
    // counter: counter,
    counter,
    todos,
  },
});

export default store;

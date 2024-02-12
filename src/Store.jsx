import { configureStore } from "@reduxjs/toolkit";
import counter from "./slicers/Counter";
export const store = configureStore({
  reducer: {
    // counter: counter,
    counter,
  },
});

export default store;

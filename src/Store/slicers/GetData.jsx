import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const get_todos = createAsyncThunk("get_todos", async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/", {
    method: "get",
  });
  const results = data.json();
  return results;
});

export const get_todos_slice = createSlice({
  name: "get_todos",
  initialState: { todos: [], status: "" },
  extraReducers: (builder) => {
    builder.addCase(get_todos.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(get_todos.fulfilled, (state, action) => {
      state.status = "succes";
      state.todos = action.payload;
    });
    builder.addCase(get_todos.rejected, (state) => {
      state.status = "eror";
      state.todos = [];
    });
  },
});

export default get_todos_slice.reducer;

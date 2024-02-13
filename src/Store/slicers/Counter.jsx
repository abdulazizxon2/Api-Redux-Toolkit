import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
  name: "counter",
  initialState: {
    data: [
      {
        id:0,
        name:"text",
        count:1,
      },
      {
        id:1,
        name:"text",
        count:1,
      },{
        id:2,
        name:"text",
        count:1,
      },
    ],
  },
  reducers: {
    handlePlus:(state,action)=>{
      state.data=state.data.map((c)=>{
        return c.id===action.payload?{...c,count:c.count+1}:c
      });
    },
    handleMinus: (state, action) => {
      return {
        ...state,
        data: state.data.map((c) => {
          return c.id === action.payload ? { ...c, count: c.count - 1 } : c;
        }),
      };
    },
  },
});

export const { handlePlus,handleMinus } = counter.actions;
export default counter.reducer;

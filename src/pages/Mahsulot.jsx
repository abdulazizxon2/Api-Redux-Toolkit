import React from "react";
import { handleMinus, handlePlus } from "../Store/slicers/Counter";
import { useSelector,useDispatch } from "react-redux";

export default function Home() {
  const { data } = useSelector((store) => store.counter);
  let dispatch = useDispatch();

  return (
    <div>
      {data.map((c) => {
        return (
          <div key={c.id}>
            <h2> name :{c.text} </h2>
            <button onClick={() => dispatch(handlePlus(c.id))}>plus</button>
            <h1>{c.count} </h1>
            <button onClick={() => dispatch(handleMinus(c.id))}>minus</button>
          </div>
        );
      })}
    </div>
  );
}

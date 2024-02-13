import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_todos } from "../Store/slicers/GetData";

export default function Todos() {
  const store = useSelector((store) => store.todos);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_todos());
  }, []);
  if (store.status === "pending") return <h1>Loading...</h1>;
  if (store.status === "error") return <h1>Error</h1>;

  return (
    <div>
      {store.todos.map((item) => {
        return (
          <div key={item.id}>
            <h2>user ID : {item.userId}</h2>
            <h1>title: {item.title}</h1>
          </div>
        );
      })}
    </div>
  );
}

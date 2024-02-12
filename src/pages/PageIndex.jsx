import React from "react";
import { Route, Routes } from "react-router-dom";
import Mahsulot from "./Mahsulot";
import Skidka from "./Skidka";
import LogIn from "./LogIn";

export default function PageIndex() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Mahsulot />} />
        <Route path="/skidka" element={<Skidka />} />
        <Route path="/login" element={<LogIn />} />
      </Route>
    </Routes>
  );
}

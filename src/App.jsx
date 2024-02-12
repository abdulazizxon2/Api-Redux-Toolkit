import React from "react";
import PageIndex from "./pages/PageIndex";
import Navbar from "./pages/Components/Navbar";
// import Config from "./pages/Components/Config";

export default function App() {
  return (
    <div className="kontener">
      <Navbar />
      {/* <Config/> */}
      <PageIndex />
    </div>
  );
}

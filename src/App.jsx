import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./Timer";
import Clock from "./Clock";

function App() {
  return (
    <>
      <Clock timeZone={"Europe/Stockholm"} city={"Stockholm"} />
      <Clock timeZone={"Europe/London"} city={"London"} /> <br />

      <Timer startingTime={60} />
      <Timer startingTime={120} />
    </>
  );
}
export default App;

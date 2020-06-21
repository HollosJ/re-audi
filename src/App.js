import React from "react";
import "./App.scss";

import Nav from "./Nav";
import Hero from "./Hero";
import Tiles from "./Tiles";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Tiles />
    </div>
  );
}

export default App;

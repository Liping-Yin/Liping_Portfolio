import React from "react";
import { FadeInCard, TwoFlips } from "./Card";

function App() {
  return (
    <div className="app">
      <h1>React Animation</h1>
      <div className="container">
        <div className="row">
          <FadeInCard />
          <TwoFlips />
        </div>
      </div>
    </div>
  );
}

export default App;

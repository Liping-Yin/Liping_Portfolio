import React from "react";
import BackgroundAnimation from "./components/BackgroundAnimation";
// import Canvas from "./CustomCanvas";
// import CustomCursor from "./CustomCursor.";
// import { FadeInCard, TwoFlips } from "./Card";

function App() {
  return (
    <div className="app">
      {/* <CustomCursor /> */}

      <BackgroundAnimation />
      <h1>React Animation</h1>
      {/* <div className="container">
        <div className="row">
          <FadeInCard />
          <TwoFlips />
        </div>
      </div> */}
    </div>
  );
}

export default App;

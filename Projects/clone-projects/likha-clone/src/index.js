import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./components/ScrollToTop";
import { MouseContextProvider } from "./components/Cursor";
// import {Provider} from "react-redux";
// import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <MouseContextProvider>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </MouseContextProvider>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

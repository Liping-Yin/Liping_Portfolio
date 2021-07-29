import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import OverLaySvg from "./assets/OverLaySvg";
import Cursor from "./components/Cursor";
import Menu from "./components/Menu";
import AppointmentCTA from "./components/AppointmentCTA";
import Treatments from "./pages/Treatments";
import About from "./pages/About";
import Products from "./pages/Products";
function App() {
  return (
    <div className="app">
      <Header />
      <Menu />
      <AppointmentCTA />
      <Cursor
      // mouseStates={{
      //   hoverMenu: false,
      //   hoverCta: false,
      //   hoverDiscover: false,
      // }}
      />
      <Home />
      <OverLaySvg
        className="overlays"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route path="/treatments">
          <Treatments />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

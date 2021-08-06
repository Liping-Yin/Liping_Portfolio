import React from "react";
import Navigation, { MenuIcon } from "./Navigation";

export default function HomePage() {
  return (
    <div className="home">
      <MenuIcon />
      <div className="container container--home"></div>
      <Navigation />
    </div>
  );
}

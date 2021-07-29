import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CTASvg } from "../assets/IconsSvg";
import { MouseContext } from "./Cursor";

export default function AppointmentCTA(props) {
  // const { mobile } = props;
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <Link
      to="/"
      className="cta cta--fixed link"
      onMouseEnter={() => cursorChangeHandler({ hoverCta: true })}
      onMouseLeave={() => cursorChangeHandler({ hoverCta: false })}
    >
      <CTASvg width="32" height="13" fill="none" viewBox="0 0 32 13" />
    </Link>
  );
}

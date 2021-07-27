import React from "react";
import { Link } from "react-router-dom";
import { CTA } from "../assets/IconsSvg";

export default function AppointmentCTA(props) {
  const { mobile } = props;
  return (
    <>
      {mobile ? (
        <Link to="/" id="cta-mobile" className="btn btn-primary link">
          <CTA width="32" height="13" fill="none" viewBox="0 0 32 13" />
        </Link>
      ) : (
        <Link to="/" id="cta-fixed" className="btn btn-primary link">
          <CTA width="32" height="13" fill="none" viewBox="0 0 32 13" />
        </Link>
      )}
    </>
  );
}

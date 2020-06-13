import React from "react";
import "../App.css";
import { Button } from "reactstrap";

function TopBar() {
  return (
    <div className="TopBar">
      <div className="LogoContainer">
        <div className="LeftLogoText">up</div>
        <div className="RightLogoText">lift</div>
      </div>
      <div className="TRButtonContainer">
        <Button outline className="TopRightButton">
          profile
        </Button>
      </div>
    </div>
  );
}

export default TopBar;
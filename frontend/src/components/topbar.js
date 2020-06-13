import React, { useState, useEffect } from "react";
import "../App.css";
import { Button } from "reactstrap";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function TopBar() {
  const { height, width } = useWindowDimensions();
  console.log(height, width);
  return (
    <div className="TopBar">
      <div className="LogoContainer">
        <div className="LeftLogoText">up</div>
        <div className="RightLogoText">lift</div>
      </div>
      <div className="TRButtonContainer shadow-none">
        <Button
          outline
          size={height*.75 < width ? "lg" : "sm"}
          block={height*.75 < width}
          className="TopRightButton"
        >
          profile
        </Button>
      </div>
    </div>
  );
}

export default TopBar;

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

function ResponsiveButton(props) {
  const { height, width } = useWindowDimensions();
  return (
    <Button
      outline
      size={height * 0.75 < width ? "lg" : "sm"}
      onClick={props.onClick}
      block={height * 0.75 < width}
      className={props.className}
    >
      {props.text}
    </Button>
  );
}

export default ResponsiveButton;

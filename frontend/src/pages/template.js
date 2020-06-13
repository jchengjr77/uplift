import React from "react";
import "../App.css";
import TopBar from "../components/topbar"

function Template() {
  return (
    <div className="PageContainer">
      <TopBar />
      <div className="BodyContainer"></div>
    </div>
  );
}

export default Template;

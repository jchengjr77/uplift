import React, { useState } from "react";
import ResponsiveButton from "./responsivebutton";
import LoginModal from "./loginmodal";
import SignupModal from "./signupmodal";
import "../App.css";

function TopBar() {
  const [auth, setAuth] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  return (
    <div className="TopBar">
      <div className="LogoContainer">
        <div className="LeftLogoText">up</div>
        <div className="RightLogoText">lift</div>
      </div>
      <LoginModal
        open={login}
        close={() => setLogin(false)}
        authenticate={() => setAuth(true)}
        signup={() => {
          setLogin(false);
          setSignup(true);
        }}
      />
      <SignupModal
        open={signup}
        close={() => setSignup(false)}
        login={() => {
          setSignup(false);
          setLogin(true);
        }}
        authenticate={() => setAuth(true)}
      />
      <div className="TRButtonContainer">
        <ResponsiveButton
          text={auth ? "profile" : "login"}
          className="TopRightButton"
          onClick={() => {
            if (!auth) {
              setLogin(true);
            } else {
              console.log("test");
            }
          }}
        />
      </div>
    </div>
  );
}

export default TopBar;

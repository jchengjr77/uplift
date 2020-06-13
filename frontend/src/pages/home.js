import React, { useState } from "react";
import "../App.css";
import TopBar from "../components/topbar";
import { TextField, Fade } from "@material-ui/core";
import ResponsiveButton from "../components/responsivebutton";

function Home() {
  const [inspiration, getInspiration] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [input, setInput] = useState("");
  const friendText = "I loved your cooking at the barbeque";
  const selfText = "today, i love my...";
  const elseText = "today, i love Anna's...";

  function submit() {
    setSubmitted(!submitted);
    setInput("");
  }
  return (
    <div className="PageContainer">
      <TopBar />
      <div className="HomePageContainer">
        {" "}
        <TextField
          id="standard-basic"
          fullWidth
          placeholder={submitted ? selfText : elseText}
          value={input}
          onChange={event => setInput(event.target.value)}
          onKeyPress={e => {
            if (e.key === "Enter") {
              submit();
            }
          }}
        />
        <div className="InputButtons">
          <div className="InputLeftButton">
            <ResponsiveButton
              text="get inspiration"
              className="InspirationButton"
              onClick={() => getInspiration(!inspiration)}
            />
          </div>
          <div className="InputRightButton">
            <ResponsiveButton
              text="submit"
              className="TopRightButton"
              onClick={submit}
            />
          </div>
        </div>
      </div>
      <Fade in={inspiration} {...(inspiration ? { timeout: 1000 } : {})}>
        <div className="HiddenText">"{friendText}"</div>
      </Fade>
    </div>
  );
}

export default Home;

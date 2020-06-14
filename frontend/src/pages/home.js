import React, { useState, useEffect } from "react";
import "../App.css";
import TopBar from "../components/topbar";
import { TextField, Fade } from "@material-ui/core";
import ResponsiveButton from "../components/responsivebutton";

function Home(props) {
  const fadeTime = 1000 // Fade time in ms
  const [inspiration, setInspiration] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [input, setInput] = useState("");
  const [profile, setProfile] = useState({});
  const [randomFriend, setRandomFriend] = useState({});
  const [randomMessage, setRandomMessage] = useState("");
  const selfText = "today, i love my...";
  const elseText = `today, i love ${randomFriend.name}'s...`;

  async function getRandomFriend() {
    try {
      const response = await fetch("/random-friend?self_id=0").then(res =>
        res.json()
      );
      setRandomFriend(response);
    } catch (e) {
      console.error(e);
    }
  }

  async function getRandomMessage() {
    try {
      const response = await fetch("/random-message?self_id=0");
      response.text().then(res => setRandomMessage(res));
    } catch (e) {
      console.error(e);
    }
  }

  async function getInspiration() {
    if (inspiration) {
      setInspiration(false);
      await new Promise(r => setTimeout(r, fadeTime)).then(() => {
        getRandomMessage().then(() => setInspiration(true));
      })
    } else {
      setInspiration(true);
    }
  }

async function sendSelfMessage() {
  try {
    //const uid = auth.currentUser.uid;
    console.log(input);
    console.log(JSON.stringify(input))
    const uid = 0;
    fetch(`/to-self/${uid}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: input
      })
    });
  } catch (e) {
    console.error(e);
  }
}

async function sendFriendMessage() {
  try {
    //const uid = randomFriend.uid;
    const uid = 1;
    fetch(`/to/${uid}`, {
      method: `POST`,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: input
      })
    });
  } catch (e) {
    console.error(e);
  }
}


  function submit() {
    if (submitted) {
      sendFriendMessage();
      getRandomFriend()
    }
    else {
      sendSelfMessage();
    }
    setSubmitted(!submitted);
    setInput("");
  }

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/profile?uid=0").then(res => res.json());
        setProfile(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchProfile();

    getRandomFriend();

    getRandomMessage();
  }, []);

  return (
    <div className="PageContainer">
      <TopBar to={props.to} isAuthed={props.isAuthed} />
      <div className="HomePageContainer">
        {" "}
        <TextField
          id="standard-basic"
          fullWidth
          placeholder={submitted ? elseText : selfText}
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
              onClick={getInspiration}
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
      <Fade
        in={inspiration}
        {...(inspiration ? { timeout: fadeTime } : { timeout: fadeTime })}
      >
        <div className="HiddenText">"{randomMessage}"</div>
      </Fade>
    </div>
  );
}

export default Home;

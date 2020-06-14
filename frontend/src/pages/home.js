import React, { useState, useEffect } from "react";
import "../App.css";
import TopBar from "../components/topbar";
import { TextField, Fade } from "@material-ui/core";
import ResponsiveButton from "../components/responsivebutton";
import auth from "../fire";

function Home(props) {
  const fadeTime = 1000; // Fade time in ms
  const [inspiration, setInspiration] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [input, setInput] = useState("");
  const [, setProfile] = useState({});
  const [randomFriend, setRandomFriend] = useState({});
  const [randomMessage, setRandomMessage] = useState("");
  const selfText = "today, i love my...";
  const noFriends =
    randomFriend.name === undefined || randomFriend.name === null;
  const elseText = noFriends
    ? "add some friends to say what you love about them!"
    : `today, i love ${randomFriend.name}'s...`;

  async function getRandomFriend() {
    try {
      const response = await fetch(
        `/random-friend?self_id=${auth.currentUser.uid}`
      ).then(res => res.json());
      setRandomFriend(response);
    } catch (e) {
      console.error(e);
    }
  }

  async function getRandomMessage() {
    try {
      const response = await fetch(
        `/random-message?self_id=${auth.currentUser.uid}`
      );
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
      });
    } else {
      setInspiration(true);
    }
  }

  async function sendSelfMessage() {
    try {
      const uid = auth.currentUser.uid;
      fetch(`/to-self/${uid}`, {
        method: "POST",
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
      const uid = randomFriend.uid;
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
    if (!props.isAuthed) {
      alert("Log in to say what you love about yourself!");
      return;
    }
    if (input !== "") {
      if (submitted) {
        sendFriendMessage();
        getRandomFriend();
      } else sendSelfMessage();
      setSubmitted(!submitted);
      setInput("");
    }
  }

  useEffect(() => {
    if (props.isAuthed) {
      const fetchProfile = async () => {
        try {
          const response = await fetch(`/profile?uid=${auth.currentUser.uid}`);
          const res = await response.json();
          setProfile(res);
        } catch (e) {
          console.error(e);
        }
      };
      fetchProfile();

      getRandomFriend();

      getRandomMessage();
    }
  }, [props.isAuthed]);

  return (
    <div className="PageContainer">
      <TopBar to={props.to} isAuthed={props.isAuthed} />
      <div className="HomePageContainer">
        {" "}
        <TextField
          id="standard-basic"
          fullWidth
          placeholder={submitted ? elseText : selfText}
          disabled={submitted && noFriends}
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
              onClick={
                props.isAuthed
                  ? getInspiration
                  : () => {
                      alert("Login to hear what others love about you!");
                    }
              }
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

import React, { useState, useEffect } from "react";
import "../App.css";
import TopBar from "../components/topbar";
import { List, ListItem, ListItemText, Paper } from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

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

const theme = createMuiTheme({
  shadows: ["none"]
});
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    borderColor: "#a46ddb !important",
    borderWidth: 1,
    borderStyle: "solid",
    shadows: ["none"]
  },
  list: {
    borderColor: "#a46ddb !important",
    borderWidth: 1
  }
}));

function Messages(props) {
  const [profile, setProfile] = useState({});
  const history = useHistory();
  useEffect(() => {
    if (!props.isAuthed) {
      history.push("/");
    }
    const fetchProfile = async () => {
      try {
        const response = await fetch("/profile?uid=0").then(res => res.json());
        setProfile(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchProfile();
  }, []);

  const { height, width } = useWindowDimensions();
  const horizontal = height < width;
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="PageContainer">
        <TopBar to={props.to} isAuthed={props.isAuthed} />
        <div
          className="MessageContainer"
          style={{
            flexDirection: horizontal ? "row" : "column",
            alignItems: horizontal ? "flex-start" : "center"
          }}
        >
          <div
            className="SelfMessageContainer"
            style={{
              paddingLeft: horizontal ? "10vw" : "0",
              paddingBottom: horizontal ? "0" : "5vh",
              paddingTop: horizontal ? "0" : "5vw"
            }}
          >
            <div className={classes.root}>
              <Paper
                style={{
                  maxHeight: "65vh",
                  overflow: "auto",
                  width: horizontal ? "35vw" : "70vw"
                }}
              >
                <div className="FriendsContainer">
                  <List className={classes.list}>messages from you:</List>
                  {profile.hasOwnProperty("self_messages")
                    ? Object.values(profile.self_messages).map((msg, idx) => {
                        return (
                          <ListItem key={idx}>
                            <ListItemText primary={msg} />
                          </ListItem>
                        );
                      })
                    : ""}
                </div>
              </Paper>
            </div>
          </div>
          <div
            className="FriendMessageContainer"
            style={{
              paddingRight: horizontal ? "10vw" : "0",
              paddingBottom: horizontal ? "0" : "10vw"
            }}
          >
            <div className={classes.root}>
              <Paper
                style={{
                  maxHeight: "65vh",
                  overflow: "auto",
                  width: horizontal ? "35vw" : "70vw"
                }}
              >
                <div className="FriendsContainer">
                  <List className={classes.list}>messages from friends:</List>
                  {profile.hasOwnProperty("other_messages")
                    ? Object.values(profile.other_messages).map((msg, idx) => {
                        return (
                          <ListItem key={idx}>
                            <ListItemText primary={msg} />
                          </ListItem>
                        );
                      })
                    : ""}
                </div>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Messages;

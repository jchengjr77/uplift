import React from "react";
import "../App.css";
import TopBar from "../components/topbar";
import { Button } from "reactstrap";
import { List, ListItem, ListItemText, Paper } from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import data from "../data/data.json";

const theme = createMuiTheme({
  shadows: ["none"],
});
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    borderColor: "#a46ddb !important",
    borderWidth: 1,
    borderStyle: "solid",
    shadows: ["none"],
  },
  list: {
    borderColor: "#a46ddb !important",
    borderWidth: 1,
  },
}));

function friendsFromUid(friendsList) {
  let ret = [];
  friendsList.forEach((friend) => {
    ret.push(data[friend].name);
  });
  return ret.sort();
}

function Profile(props) {
  const friendsList_Uid = Object.keys(data.uid_0.friends);
  let friendsList = friendsFromUid(friendsList_Uid);
  const classes = useStyles();

  return (
    <ThemeProvider theme = {theme}>
      <div className="PageContainer" theme={theme}>
        <TopBar to={props.to} />
        <div className="ProfileContainer">
          <div className="NameContainer">name: {data.uid_0.name}</div>
          <div className="EmailContainer">email: {data.uid_0.email}</div>
          <div className="FriendsText">friends:</div>
          <div className={classes.root}>
            <Paper style={{ maxHeight: 200, overflow: "auto" }} boxShadow={0}>
              <div className="FriendsContainer">
                <List className={classes.list}>
                  {friendsList.map((friend, idx) => {
                    return (
                      <ListItem key={idx}>
                        <ListItemText primary={friend} />
                      </ListItem>
                    );
                  })}
                </List>
              </div>
            </Paper>
          </div>
          <div className="AMButtonContainer">
            <Button className="AllMessagesButton">all messages</Button>
          </div>
          <div className="LogoutButtonContainer">
            <Button className="LogoutButton">log out</Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Profile;

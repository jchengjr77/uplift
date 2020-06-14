import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button
} from "@material-ui/core";
import auth from "../fire";

function AddFriendModal(props) {
  const [email, setEmail] = useState("");

  async function addNewFriend() {
    const body = JSON.stringify({
      friend_email: email
    });
    const response = await fetch(`/add-friend/${auth.currentUser.uid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    });
    console.log(response.text());
    return response;
  }

  return (
    <div style={{ width: "3vw" }}>
      <Dialog
        open={props.open}
        onClose={() => {
          setEmail("");
          props.close();
        }}
        fullWidth
      >
        <DialogTitle>Add a friend</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            onChange={e => {
              setEmail(e.target.value);
            }}
            onKeyPress={ev => {
              if (ev.key === "Enter") {
                addNewFriend();
                props.close();
                ev.preventDefault();
              }
            }}
            value={email}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setEmail("");
              props.close();
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              addNewFriend();
              props.close();
            }}
          >
            Add Friend
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddFriendModal;

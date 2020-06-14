import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button
} from "@material-ui/core";

function AddFriendModal(props) {
  const [email, setEmail] = useState("");
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
          <Button onClick={props.close}>Add Friend</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddFriendModal;

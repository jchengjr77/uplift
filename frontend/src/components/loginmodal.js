import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button
} from "@material-ui/core";
import auth from "../fire";

function LoginModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enteredInvalid, setEnteredInvalid] = useState(false);

  function attemptLogin() {
    auth.signInWithEmailAndPassword(email, password).then(() => {
      setEnteredInvalid(false);
      setEmail("");
      setPassword("");
      props.authenticate();
      props.close();
    }).catch(() => {
      setEnteredInvalid(true);
    })
  }

  return (
    <Dialog
      open={props.open}
      onClose={() => {
        setEmail("");
        setPassword("");
        setEnteredInvalid(false);
        props.close();
      }}
    >
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <DialogContentText
          style={{
            display: enteredInvalid ? "inline" : "none",
            color: "#ED3434"
          }}
        >
          Invalid email or password
        </DialogContentText>
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
              attemptLogin();
              ev.preventDefault();
            }
          }}
          value={email}
        />
        <TextField
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          onChange={p => {
            setPassword(p.target.value);
          }}
          onKeyPress={ev => {
            if (ev.key === "Enter") {
              attemptLogin();
              ev.preventDefault();
            }
          }}
          value={password}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setEmail("");
            setPassword("");
            setEnteredInvalid(false);
            props.close();
          }}
        >
          Cancel
        </Button>
        <Button onClick={attemptLogin}>Login</Button>
      </DialogActions>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "2vh"
        }}
      >
        <div>Don't have an account?</div>
        <button className="LinkText" onClick={props.signup}>
          Signup
        </button>
      </div>
    </Dialog>
  );
}

export default LoginModal;

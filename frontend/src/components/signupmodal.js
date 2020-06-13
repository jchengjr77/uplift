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
// import { auth } from '../fire';

function SignupModal(props) {
  const [email, setEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const canSignup =
    email !== "" &&
    password === confirm &&
    password.length >= 8 &&
    confirm.length >= 8 &&
    name !== "";
  const goodPass =
    password === confirm && password.length >= 8 && confirm.length >= 8;

  function attemptSignup() {
    setEmail("");
    setName("");
    setPassword("");
    setConfirm("");
    setInvalidEmail(false);
    props.authenticate();
    props.close();
  }

  return (
    <Dialog
      open={props.open}
      onClose={() => {
        setEmail("");
        setName("");
        setPassword("");
        setConfirm("");
        setInvalidEmail(false);
        props.close();
      }}
    >
      <DialogTitle>Sign Up</DialogTitle>
      <DialogContent>
        <DialogContentText
          style={{ display: canSignup ? "none" : "inline", color: "#ED3434" }}
        >
          All fields are required.{" "}
        </DialogContentText>
        <DialogContentText
          style={{ display: goodPass ? "none" : "inline", color: "#ED3434" }}
        >
          Passwords must match and be at least 8 characters.
        </DialogContentText>
        <DialogContentText
          style={{ display: !goodPass ? "none" : "inline", color: "#1D800E" }}
        >
          Password is valid.
        </DialogContentText>
        <br />
        <DialogContentText
          style={{
            display: !invalidEmail ? "none" : "inline",
            color: "#ED3434"
          }}
        >
          Invalid Email
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="name"
          fullWidth
          onChange={e => {
            setName(e.target.value);
          }}
          onKeyPress={ev => {
            if (ev.key === "Enter" && canSignup) {
              attemptSignup();
              ev.preventDefault();
            }
          }}
          value={name}
        />
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
            if (ev.key === "Enter" && canSignup) {
              attemptSignup();
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
            if (ev.key === "Enter" && canSignup) {
              attemptSignup();
              ev.preventDefault();
            }
          }}
          value={password}
        />
        <TextField
          margin="dense"
          label="Confirm Password"
          type="password"
          fullWidth
          onChange={p => {
            setConfirm(p.target.value);
          }}
          onKeyPress={ev => {
            if (ev.key === "Enter" && canSignup) {
              attemptSignup();
              ev.preventDefault();
            }
          }}
          value={confirm}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setEmail("");
            setName("");
            setPassword("");
            setConfirm("");
            setInvalidEmail(false);
            props.close();
          }}
        >
          Cancel
        </Button>
        <Button onClick={attemptSignup} disabled={!canSignup}>
          Sign Up
        </Button>
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
        <div>Already have an account?</div>
        <button className="LinkText" onClick={props.login}>Login</button>
      </div>
    </Dialog>
  );
}

export default SignupModal;

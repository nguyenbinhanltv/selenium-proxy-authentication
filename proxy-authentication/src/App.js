import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './App.css';

import Done from "./Done";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let flag = false;

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function compareTo(email, password) {
    flag = email === "admin@gmail.com" && password === "admin" ? true : false;
    console.log(flag);
  }

  if (flag === false) {
    return (
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            Email
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            Password
            <FormControl
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <Button block bsSize="large" disabled={!validateForm()} type="submit" onClick={compareTo(email, password)}>
            Login
          </Button>
        </form>
      </div>
    );
  }

  if (flag === true) {
    return (
      <div>
        Proxy Authentication Done
      </div>
    );
  }
}

export default App;

import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './App.css';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let message = "";

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function compareTo(email, password) {
    message = email === "admin@gmail.com" && password === "admin" ? "Proxy Authentication Done" : "";
  }

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

      <div>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;

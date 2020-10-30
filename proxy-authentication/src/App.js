import React, { useState } from "react";
import { Button, FormGroup, FormControl,Form } from "react-bootstrap";
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
    message = email === "admin@gmail.com" && password === "admin" ? "Proxy Authentication Done" : "Not authorized";
  }

  return (
    <div className="Login">
    <h1>Selenium Test Login</h1>
      <form onSubmit={handleSubmit}>
        <Form.Group controlId="formGroupEmail" className="input-email">
        <Form.Label className="eml-pass">Email</Form.Label>
          <Form.Control className="email-input"
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="off"
            placeholder="abc@gmail.com"
            
          />

        </Form.Group>
        <Form.Group controlId="formGroupPassword" bsSize="large">
        <Form.Label className="eml-pass" >Password</Form.Label>
          <Form.Control className="password-input"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </Form.Group>
        <Button block bsSize="large"  type="submit" onClick={compareTo(email, password)}>
          Login
        </Button>
      </form>

      <div className="login-mess">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;

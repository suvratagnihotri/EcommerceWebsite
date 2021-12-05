import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import { useNavigate } from "react-router-dom";
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   let navigate = useNavigate();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    var email = event.target[0].value
    var password = event.target[1].value
    console.log(email)
    console.log(password)
  }

  return (
    <div className="login">
      <Form className="loginForm" onSubmit={handleSubmit} >
        <Form.Group className="email" size="lg" controlId="email">
          <Form.Label className= "label" >Email</Form.Label>
          <Form.Control className="input"
          style={{marginLeft:30}}
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="password" size="lg" controlId="password">
          <Form.Label className= "label">Password</Form.Label>
          <Form.Control className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
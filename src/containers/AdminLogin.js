import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    var email = event.target[0].value
    var password = event.target[1].value
    console.log(email)
    console.log(password)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email:email,password:password })
  };
  fetch('http://localhost:8080/user/present', requestOptions)
  .then(response => response.json())
  .then(data => {
      if (data === true) {  
          console.log(data)
          console.log("User Logged in")
          navigate("../home", { replace: true });           
      }
      else{
        console.log("user credentials are wrong")
      }
  });
  }

  return (
    <html>

    <head>
      <link rel="stylesheet" href="css/style.css"/>
      <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
      <title>Sign in</title>
    </head>

    <body>
      <div class="main">
        <p class="sign" align="center">Admin Login</p>
        <form class="form1" onSubmit={handleSubmit}>
          <input class="un " type="text" align="center" placeholder="Email"  controlId="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input class="pass" type="password" align="center" placeholder="Password" controlId="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button class="submit" type="submit" align="center" disabled={!validateForm()}>Sign in</button>
          <p class="forgot" align="center"><a href="#"></a>Forgot Password?</p>
          {/* <p class="newUser" align="center"><a href="#"></a>New User?</p> */}
        </form>                 
      </div>
        
    </body>

</html>
  );
}
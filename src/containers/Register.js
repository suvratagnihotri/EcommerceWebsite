import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css'

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName] = useState("");
  let navigate = useNavigate();

  function oldUser(){
    navigate("../login", { replace: true });
  }

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
      body: JSON.stringify({ name:name,email:email,password:password })
  };
  fetch('http://ec2-13-232-35-196.ap-south-1.compute.amazonaws.com:8080/ecommerce/user/add', requestOptions)
  .then(response => response.json())
  .then(data => {
      if (data === true) {  
          console.log(data)
          console.log("User Logged in")
          navigate("../home", { replace: true });           
      }
      else{
        console.log("User is already registered")
      }
  });
  }

    return(
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
        <p class="register" align="center">Register</p>
        <form class="form1" onSubmit={handleSubmit}>
        <input class="un " type="text" align="center" placeholder="Name"  controlId="name" value={name} onChange={(e) => setName(e.target.value)}/>
          <input class="un " type="text" align="center" placeholder="Email"  controlId="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input class="pass" type="password" align="center" placeholder="Password" controlId="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button class="submit" type="submit" align="center" disabled={!validateForm()}>Register</button>
          {/* <p class="forgot" align="center"><a href="#"></a>Forgot Password?</p> */}
          <p class="oldUser" align="center" onClick={oldUser}><a href="#"></a>Old User? Login</p>
        </form>    
                    
        </div>
        
    </body>

</html>
    );
}
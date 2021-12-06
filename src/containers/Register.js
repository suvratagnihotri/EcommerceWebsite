import React from 'react';
import './Register.css'

export default function Register() {
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
        <form class="form1">
          <input class="un " type="text" align="center" placeholder="Name"/>
          <input class="un " type="text" align="center" placeholder="Email"/>
          <input class="pass" type="password" align="center" placeholder="Password"/>
          <a class="submit" align="center">Register</a>
          {/* <p class="forgot" align="center"><a href="#"></a>Forgot Password?</p> */}
          <p class="oldUser" align="center"><a href="#"></a>Old User? Login</p>
        </form>    
                    
        </div>
        
    </body>

</html>
    );
}
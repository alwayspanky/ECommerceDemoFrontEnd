<!DOCTYPE html>
<html>
    <head>
        <title>Form Demo</title>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    </head>
    <body>
       

        <div>
            <h2>Login</h2>  
        </div>
        <div>
        
            
            <label>Username</label></br>
            <input type="text" placeholder="Username" id="user"/></br>
            <label>Password</label></br>
            <input type="password" placeholder="password" id="pass"/></br>
            <button onclick="login()">Login</button>
        </div>
    </body>

    <script src="Controller/login.js"></script>

</html>
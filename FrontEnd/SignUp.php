<!DOCTYPE html>
<html>
    <head>
        <title>Form Demo</title>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    </head>
    <body>
        <h1>Form Demo</h1>

        <div>
            <h2>Registration Form</h2>  
        </div>
        <div>
        
            
            <label>First Name</label></br>
            <input type="text" placeholder="first name" id="firstName"/></br>
            <label>Last Name</label></br>
            <input type="text" placeholder="Last name" id="lastName"/></br>
            <label>Mobile</label></br>
            <input type="text" placeholder="mobile number" id="mobile"/></br>
            <label>Password</label></br>
            <input type="password" placeholder="password" id="password"/></br>
            <button onclick="registerUser()">Register</button>
        </div>
    </body>

    <script src="Controller/register.js"></script>

</html>
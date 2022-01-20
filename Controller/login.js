function login(){

    let name = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;


    axios({
        method: 'post',
        url: "http://192.168.1.37/ECommerceDemoBackend/Services/login.php",
        params:{
            "username":name,
            "password": pass
        }
        
        })
    .then(res =>{
        let data = res.data;
        console.log(data);

        if(data.status.code == "LOGIN_SUCCESSFULL"){
    
            localStorage.setItem("username", data.output.username);
            localStorage.setItem("userId", data.output.user_id);
            alert("Login Successfull");
            location.href = "index.php"
            

    
        }else{
            alert("Login Unsuccessfull. Please try again.");
        }
        }, err=>{
        console.log(err)
        });

}
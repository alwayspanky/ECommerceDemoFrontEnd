function registerUser(){

    let name = document.getElementById("firstName").value;
    let mobile = document.getElementById("mobile").value;
    let pass = document.getElementById("password").value;

    console.log(name);
    console.log(mobile);
    console.log(pass);

    axios({
        method: 'post',
        url: "http://192.168.1.37/ECommerceDemoBackend/Services/register.php",
        params:{
            "username":name,
            "mobile": mobile,
            "password": pass
        }
        
        })
    .then(res =>{
        let data = res.data;
        console.log(data);

        if(data.status.code == "ACCOUNT_CREATED"){
    
            alert("Registration Successfull, Thank You.");
    
        }else{
            alert("Failed to register.");
        }
        }, err=>{
        console.log(err)
        });


}
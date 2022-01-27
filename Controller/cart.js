function getCartProducts(){

  

    let userId = localStorage.getItem("userId");

    axios({
        method: 'post',
        url: "http://192.168.1.37/ECommerceDemoBackend/Services/getAllCart.php",
        params:{
            "userId":userId
        }
        
        })
    .then(res =>{
        let data = res.data;
        console.log(data);

       
        }, err=>{
        console.log(err)
        });
}

window.onload = getCartProducts();

let cartData = {
    cartItems = []
}

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
        

        for(let i= 0; i<data.output.products.length; i++){
            
            cartData.cartItems[i].push({
                "userId": data.output.products[i].user_id,
                "pId": data.output.products[i].p_id,
                "pQuantity": data.output.products[i].qty,
                "pDescription": data.output.products[i].p_description,
                "pPrice": data.output.products[i].p_price,
                "pImage": data.output.products[i].p_image,

            })

    }
  

        }, err=>{
        console.log(err)
        });
}


function placeOrder(){

    let mobileNo = document.getElementById("mobile").value;
    let address = document.getElementById("add").value;


    if(mobileNo == ""){
        alert("please enter mobile number");
    }else if(address == ""){
        alert("please enter address");
    }else{
        console.log("place order clicked");
    }

}


window.onload = getCartProducts();
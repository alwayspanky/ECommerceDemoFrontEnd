let cartDiv = document.getElementById("cartList");
let sum = 0;


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
            
            
        
        cartDiv.innerHTML +=`
        <div class="container-fluid" style="margin-top:2%">
            <section class="text-gray-600 body-font" style="background-color: rgb(237, 237, 234);">
            <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div class="md:max-w-md md:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img style="width:200px; height:200px" class="object-cover object-center rounded" alt="hero"
                    src="${data.output.products[i].p_image}">
                </div>
                <div
                class="md:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">${data.output.products[i].p_name}
                    <!-- <br class="hidden lg:inline-block">readymade gluten -->
                </h1>
                <p class="mb-8 leading-relaxed">${data.output.products[i].p_description}</p>
                <br>
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">INR ${data.output.products[i].p_price}</h1>
                <div class="flex justify-center">
                    <button
                    class="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Move to Wishlist</button>
                    <button
                    class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"  >Remove</button>
                </div>
                </div>
            </div>
            </section>
        </div>
        `
            sum = sum + parseInt(data.output.products[i].p_price);
           

    }
    console.log(sum);
    SetTotal();

        }, err=>{
        console.log(err)
        });
}


function SetTotal(){

    document.getElementById("total").innerHTML = `
    <div style="float:right;">
      <h2 style="padding-bottom:20px">Total <b>₹ ${sum}</b></h2>
      <button
            class="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg"  >Proceed To Checkout</button>
      <div>
    `
}

function start(){
    getCartProducts();
    
   
}

window.onload = start();
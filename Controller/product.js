let categoryId = localStorage.getItem("catId");
console.log("CategoryId",categoryId);

let productDiv = document.getElementById("productList");

function getProducts(){

    axios({
        method: 'post',
        url: "http://192.168.1.37/ECommerceDemoBackend/Services/getProducts.php",
        params: {
            "catId":categoryId
        }
        
        })
    .then(res =>{
        let data = res.data;
        console.log(data);
    
    
          for(let i= 0 ;i<data.output.products.length;i++){
    
            productDiv.innerHTML +=` <div class="container-fluid" style="margin-top:2%">
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
                    class="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Wishlist</button>
                    <button
                    class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"  onclick="addCartItem(${data.output.products[i].p_id})">Add
                    To Cart</button>
                </div>
                </div>
            </div>
            </section>
        </div>`
    
        }
    
    });
}

function addCartItem(pId){

    console.log("productId",pId);

    let userId = localStorage.getItem("userId");

    axios({
        method: 'post',
        url: "http://192.168.1.37/ECommerceDemoBackend/Services/addToCart.php",
        params:{
            "productId":pId,
            "userId":userId
        }
        
        })
    .then(res =>{
        let data = res.data;
        console.log(data);

        if(data.status.code == "PRODUCT_ADDED"){
    
            alert("Added to cart.");
    
        }else{
            alert("Failed to add.");
        }
        }, err=>{
        console.log(err)
        });
}


window.onload = getProducts();
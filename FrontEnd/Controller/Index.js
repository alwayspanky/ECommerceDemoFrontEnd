let banner = document.getElementById("bannerDiv");

let BaseUrl = "http://192.168.1.37/ECommerceDemo/Backend/Services/";

function getAllBanner(){

  axios({
    method: 'get',
    url: BaseUrl + "getBannerImages.php",
    
    })
.then(res =>{
    let data = res.data;
    console.log(data);

    banner.innerHTML +=` <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img style="height: 600px;" src="${data.output.images[0].banner_img}" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img style="height: 600px;" src="${data.output.images[1].banner_img}" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  `

});
}


function getAllCategories(){

  let catDivision = document.getElementById("catDiv");

  axios({
    method: 'get',
    url: BaseUrl + "getCategories.php",
    
    })
.then(res =>{
    let data = res.data;
    console.log(data);


      for(let i= 0 ;i<5;i++){

          catDivision.innerHTML +=`<div class="col">
          <img style="width:150px; height:150px"  src="${data.output.category[i].cat_img}" />
          <h4>${data.output.category[i].cat_name}</h4>
        </div>`

    }

});

}



function start(){
    getAllBanner();
    getAllCategories();

}

window.onload = start();
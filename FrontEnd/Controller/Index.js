let banner = document.getElementById("bannerDiv");

function getAllBanner(){

    let bannerImg = ["https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?cs=srgb&dl=pexels-travis-blessing-1363876.jpg&fm=jpg","https://images.pexels.com/photos/2080960/pexels-photo-2080960.jpeg?cs=srgb&dl=pexels-johannes-plenio-2080960.jpg&fm=jpg","https://images.unsplash.com/photo-1498263382026-c65d01dad017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"];

    banner.innerHTML +=` <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img style="height: 600px;" src="${bannerImg[0]}" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img style="height: 600px;" src="${bannerImg[1]}" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img style="height: 600px;" src="${bannerImg[2]}" class="d-block w-100" alt="...">
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
  <button onclick="getData()">Click me</button>`
}



function getData(){
  axios({
    method: 'get',
    url: "https://jsonplaceholder.typicode.com/users",
    
    })
.then(res =>{
    let output = res.data;
    console.log(output);

    for(let index=0;index<=output.length; index++){

      document.getElementById("apiData").innerHTML += `
     po
`
    }

   

    }, err=>{
    console.log(err)
    });
   

}

function start(){
    getAllBanner();
    getName();
    
}

window.onload = start();
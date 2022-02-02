<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />

  <!-- Tailwind CSS -->
  <link rel="stylesheet" href="	https://unpkg.com/tailwindcss@3.0.15/lib/index.js">
  <script src="https://unpkg.com/tailwindcss-jit-cdn"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

  <title>Ecomm Checkout</title>
</head>

<body>
    <h1>Checkout Page</h1>

    <div  style="width:50%; margin:5%;">
        <h3>General Information</h3>
        <input id="mobile" style=" margin-top:5%;" class="form-control"  placeholder="mobile" />
        <input id="add" style=" margin-top:5%;" class="form-control" placeholder="Address" />

        <h1 style=" margin-top:5%;" id="total"> </h1>

        <script>
            document.getElementById("total").innerHTML = `Total : `+ localStorage.getItem("subtotal");
        </script>

        <button style=" margin-top:5%;" class="btn btn-primary" onclick="placeOrder()">Place Order</button>
    </div>
</body>
<script src="Controller/checkout.js" ></script>
</html>
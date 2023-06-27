fetch("product.json")
  .then((response) => response.json())
  .then((data) => {
    var result = data.result;
    var productContainer = document.getElementById("productContainer");

    // products.sort((a,b)=> a.price - b.price)

    result.forEach(function (product) {
      var card = document.createElement("div");
      card.innerHTML = `<div class="product-card">
      <img class="img"src=${product.image[product.image.length - 1]} />
      <div class="product-name">${product.title}</div>
      <div class="product-price">${product.price.map((e) => e.number + " " + e.currency)}</div>
      <div class="product-location">${product.location_address}</div></div>`;

      productContainer.appendChild(card);

    });
    // Sort products by price
    const sortByPrice = document.getElementById("sortByPriceBtn")
    sortByPrice.forEach((button) => {
      button.addEventListener('click', (e) => {

      })
    })
  })
  .catch((error) => console.log(error));




  // <img class="img">${product.image}></img>

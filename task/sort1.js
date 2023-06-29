fetch("product.json")
  .then((response) => response.json())
  .then((data) => {
    var result = data.result;
    var productContainer = document.getElementById("productContainer");

    // All Product Liss
    var countDisplay = document.getElementById("All");
    var approve = result.filter(function (product) {
      return product.status === "approved";
    });
    countDisplay.innerHTML = `Approve Status: ${approve.length}`;
    countDisplay.addEventListener("click", function () {
      renderProductCards(approve);
    });

    // Only Show Reviews
    var clickReviews = document.getElementById("reviews");
    var emptyReviews = result.filter(function (house) {
      return house.status === "pending";
    });
    clickReviews.innerHTML = `Pending Status: ${emptyReviews.length}`;
    clickReviews.addEventListener("click", function () {
      renderProductCards(emptyReviews);
    });

    // Only Show NoReviews
    var clickShowBadReview = document.getElementById("showBadReviews");
    var badReviews = result.filter(function (product) {
      return product.status === "decline";
    });
    clickShowBadReview.innerHTML = `Decline Status: ${badReviews.length}`;

    clickShowBadReview.addEventListener("click", function () {
      var noReviews = result.filter(function (product) {
        return product.status === "decline";
      });
      renderProductCards(noReviews);
    });

    function renderProductCards(products) {
      productContainer.innerHTML = "";
      products.forEach(function (product) {
        // Date day month year
        var createdAt = new Date(product.createdAt);
        var date = createdAt.toLocaleString("default", { day: 'numeric', month: 'long', year: 'numeric' });

        // Star Solid Regular
        var card = document.createElement("div");
        var ratingStars = "";
        var filledStars = product.property_reviews;
        var emptyStars = 5 - filledStars;

        for (var i = 0; i < filledStars; i++) {
          ratingStars += '<i class="icon fa-solid fa-star fa-xs"></i>';
        }
        for (var i = 0; i < emptyStars; i++) {
          ratingStars += '<i class="icon fa-regular fa-star fa-xs"></i>';
        }

        // innerHTML 
        var card = document.createElement("div");
        card.innerHTML = `<div class="product-card">
        <img class="img" src="${product.image[product.image.length - 1]}" />
        <div class="display" style="padding:10px;">
          <div class="container">
              <div class="product-title">${product.title}</div>
              <div><span class="product-price">${product.price[0].number + " " + product.price[0].currency.slice(0, 1)}</span></div>
          </div>
          <div class="product-location">${product.location}</div>
          <div class="dateRating">
            <div class="product-currDate">${date}</div>
            <div class="product-rating">${ratingStars}</div>
          </div>
        </div>
    </div>`;

        productContainer.appendChild(card);


      });
    }
    
    renderProductCards(result);
  })

  .catch((error) => console.log(error));



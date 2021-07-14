//selecting general elements
const productContainer = document.querySelector(".products");
// const addCart = document.querySelectorAll(".add-cart");
let output = "";

const viewCart = () => {
	console.log("Cart Button Click");
	!localStorage.getItem("userToken") ? (window.location = "/html/sign-in.html") : (window.location = "/html/cart.html");
};

window.onload = () => {
	fetch("https://maniera-dev.herokuapp.com/api/auth/products", {
		method: "GET",
	})
		.then((res) => res.json())
		.then((data) => {
			let products = data.products;
			console.log(products);
			products.forEach((product) => {
				output += `<div class="product-thumbnail shadow">
                <div class="thumbnail-img">
                    <img src="${product.cloudinaryUrl}" alt="maniera-products-listing" />
                </div>
                <div class="thumbnail-text">
                    <h4>${product.productName}</h4>
                    <div class="rated-stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>(10)</span>
                    </div>
                    <div class="category">
                        <span>Safari Wears</span>
                        <p>$${product.productPrice}</p>
                    </div>
                    <div class="purchase-selector">
                        <button class="btn-product add-cart" onclick='viewCart()'>Add to cart</button>
                        <button class="btn-product">Buy now</button>
                    </div>
                </div>
            </div>`;
			});
			productContainer.innerHTML = output;
		});
};

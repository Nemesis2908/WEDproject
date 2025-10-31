// products
const products = [
  { name: "Red Apples", price: 1.00, image: "IMAGES/pexels-cenali-2487443.jpg", unit: "/ lb" },
  { name: "Bread", price: 4.49, image: "IMAGES/bread.jpg", unit: "/ loaf" },
  { name: "Fresh Organic Milk", price: 3.99, image: "IMAGES/milk.png", unit: "/ gallon" },
  { name: "Free-Range Eggs", price: 5.29, image: "IMAGES/egg.jpg", unit: "/ dozen" }
];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");

// Function to render products
function renderProducts(list) {
  productList.innerHTML = "";
  list.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="product-price">R${product.price.toFixed(2)} ${product.unit}</p>
      <button class="add-to-cart-btn">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

// Initial render
renderProducts(products);

// Search functionality
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm));
  const sorted = sortProducts(filtered);
  renderProducts(sorted);
});

// Sort functionality
sortSelect.addEventListener("change", () => {
  const filtered = products.filter(p => p.name.toLowerCase().includes(searchInput.value.toLowerCase()));
  const sorted = sortProducts(filtered);
  renderProducts(sorted);
});

// Sort helper function
function sortProducts(list) {
  const sortValue = sortSelect.value;
  if (sortValue === "asc") {
    return list.sort((a, b) => a.price - b.price);
  } else if (sortValue === "desc") {
    return list.sort((a, b) => b.price - a.price);
  }
  return list;
}
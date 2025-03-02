async function fetchProducts() {
  try {
    let response = await fetch("https://dummyjson.com/product");
    let products = await response.json();
const url = "https://dummyjson.com/product";
    const container = document.getElementById("product-container");
    container.innerHTML = "";
    products.forEach((product) => {
      let card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>${product.price} $</strong></p>
            `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("XatoS:", error);
  }
}

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    showData(data);
  });
  .catch((error) => {
    console.error(error);
  });

fetchProducts();

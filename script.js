async function fetchProducts() {
  try {
    let response = await fetch("https://dummyjson.com/product");
    let products = await response.json();

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
fetchProducts();

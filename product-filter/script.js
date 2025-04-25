document.addEventListener("DOMContentLoaded", () => {
  const products = {
    data: [
      { productName: "Regular White T-Shirt", category: "Jacket", price: "30", image: "images/flight jacket.webp" },
      { productName: "Regular White T-Shirt", category: "Jacket", price: "50", image: "images/winter coat.webp" },
      { productName: "Beige Short Skirt", category: "Wallet", price: "49", image: "images/slim rfid wallet.webp" },
      { productName: "Sporty SmartWatch", category: "Watch", price: "99", image: "images/chronograph watch.webp" },
      { productName: "Sporty SmartWatch", category: "Watch", price: "89", image: "images/smart touch watch.webp" },
      { productName: "Sporty SmartWatch", category: "Watch", price: "89", image: "images/fitness smartwatch.webp" },
      { productName: "Sporty SmartWatch", category: "Watch", price: "89", image: "images/luxury diamond watch.webp" },
      { productName: "Basic Knitted Top", category: "Watch", price: "29", image: "images/smart touch watch.webp" },
      { productName: "Black Leather Jacket", category: "Jacket", price: "129", image: "images/flight jacket.webp" },
      { productName: "Stylish Pink Trousers", category: "Wallet", price: "89", image: "images/genuine leather wallet.webp" },
      { productName: "Brown Men's Jacket", category: "Jacket", price: "189", image: "images/winter coat.webp" },
      { productName: "Comfy Gray Pants", category: "Wallet", price: "49", image: "images/brown wallet.webp" },
    ]
  };

  const productsContainer = document.getElementById("products");

  // Create product cards dynamically
  function createProductCards() {
    products.data.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("card", product.category, "hide");

      const imgContainer = document.createElement("div");
      imgContainer.classList.add("image-container");
      const image = document.createElement('img');
      image.src = product.image;
      imgContainer.appendChild(image);
      card.appendChild(imgContainer);

      const container = document.createElement("div");
      container.classList.add('container');
      const name = document.createElement('h5');
      name.classList.add('product-name');
      name.innerText = product.productName.toUpperCase();
      container.appendChild(name);

      const price = document.createElement('h6');
      price.innerText = '$' + product.price;
      container.appendChild(price);

      card.appendChild(container);
      productsContainer.appendChild(card);
    });
  }

  // Filter products based on category
  function filterProduct(value) {
    const buttons = document.querySelectorAll('.button-value');
    const elements = document.querySelectorAll('.card');

    // Toggle active button class
    buttons.forEach((button) => {
      button.classList.toggle('active', value.toUpperCase() === button.innerText.toUpperCase());
    });

    // Display or hide cards based on category
    elements.forEach((element) => {
      if (value === 'all' || element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    });
  }

  // Search functionality
  function searchProducts() {
    const searchInput = document.getElementById('search-input').value.toUpperCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
      const productName = card.querySelector('.product-name').innerText.toUpperCase();
      card.classList.toggle('hide', !productName.includes(searchInput));
    });
  }

  // Event listeners for buttons and search
  document.getElementById('search').addEventListener('click', searchProducts);
  document.getElementById('search-input').addEventListener('input', searchProducts);

  // Filter products by category when a button is clicked
  document.querySelectorAll('.button-value').forEach((button) => {
    button.addEventListener('click', () => {
      filterProduct(button.innerText.toLowerCase());
    });
  });

  // Initial setup
  window.onload = () => {
    createProductCards();
    filterProduct("all");
  };
});

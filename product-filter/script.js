let products = {
  data: [
    {
      productName: "Regular White T-Shirt",
      category: "Jacket",
      price: "30",
      image: "images/flight jacket.webp",
    },
    {
      productName: "Regular White T-Shirt",
      category: "Jacket",
      price: "50",
      image: "images/winter coat.webp",
    },
    {
      productName: "Beige Short Skirt",
      category: "Wallet",
      price: "49",
      image: "images/slim rfid wallet.webp",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "images/chronograph watch.webp",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "89",
      image: "images/smart touch watch.webp",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "89",
      image: "images/fitness smartwatch.webp",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "89",
      image: " images/luxury diamond watch.webp",
    },
    {
      productName: "Basic Knitted Top",
      category: "Watch",
      price: "29",
      image: "images/smart touch watch.webp",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "images/flight jacket.webp",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Wallet",
      price: "89",
      image: "images/genuine leather wallet.webp",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "images/winter coat.webp",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Wallet",
      price: "49",
      image: "images/brown wallet.webp",
    },
  ],
};

for ( let i of products.data) {
  //create card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card",i.category,"hide")
  //image div
  let imgcontainer = document.createElement("div");
  imgcontainer.classList.add("image-container")
  //img tag
  let image = document.createElement('img');
  image.setAttribute('src',i.image);
  imgcontainer.appendChild(image)
  card.appendChild(imgcontainer);
  //container
  let container = document.createElement("div");
  container.classList.add('container');
  //product name
  let name = document.createElement('h5');
  name.classList.add('product-name');
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name)
  //price
  let price = document.createElement('h6');
  price.innerText = '$'+ i.price;
  container.appendChild(price)

  card.appendChild(container)  
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll('.button-value')
  buttons.forEach((button) => {
   // check if value equals innerText
   if(value.toUpperCase() == button.innerText.toUpperCase()){
    button.classList.add('active')
   }else{
    button.classList.remove('active')
   }
  });
  

  //select all cards
  let elements = document.querySelectorAll('.card');
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if(value == 'all'){
      element.classList.remove("hide")
    } else {
       //Check if element contains category class
       if(element.classList.contains(value)){
         //display element based on category
         element.classList.remove("hide")
       }else {
        //hide other elements
        element.classList.add("hide")
       }
    }
  })
  //search button click
    document.getElementById('search').addEventListener('click', () => {
      let searchInput = document.getElementById('search-input').value;
      let elements = document.querySelectorAll('.product-name');
      let cards = document.querySelectorAll('.card')

      //loop through all elements
      elements.forEach((element,index) => {
        //check if text includes the search value
        if(element.innerText.includes(searchInput.toUpperCase())) {
          //display matching card
          cards[index].classList.remove('hide');
        }else {
          //hide others
          cards[index].classList.add('hide');
        }
      });
    });
  }

    //Intially display all products
    window.onload = () => {
      filterProduct("all")
    }
  

/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

// I moved this below all the product literals. -S

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

//Currencies. -S

const symbols = {
  usd: 1.0000,
  eur: 0.9965,
  yen: 139.56
}

//current balance so that 'pay' at least partially makes sense.
currentBalance = 0

//product object literals. -S

const strawberry = {
  name: "A strawberry.",
  inStock: 10,
  price: 100,
  basePrice: 100,
  quantity: 0,
  productId: 100,
  image: "/images/susberry.png"
};
const potato = {
  name: "A potato.",
  inStock: 20,
  price: 200,
  basePrice: 200,
  quantity: 0,
  productId: 101,
  image: "/images/suspotato.png"
};
const radish = {
  name: "A radish.",
  inStock: 15,
  price: 150,  
  basePrice: 150,
  quantity: 0,
  productId: 102,
  image: "/images/susradish.png"
};
const artichoke = {
  name: "An artichoke.",
  inStock: 20,
  price: 200,
  basePrice: 200,  
  quantity: 0,
  productId: 103,
  image: "/images/susartichoke.png"
};
const banana = {
  name: "A banana.",
  inStock: 99,
  price: 50,
  basePrice: 50,
  quantity: 0,
  productId: 104,
  image: "/images/susbanana.png"
};
const cherry = {
  name: "A cherry.",
  inStock: 5,
  price: 2000,
  basePrice: 2000,
  quantity: 0,
  productId: 105,
  image: "/images/suscherry.png"
};

// products array. -S

const products = [  
  strawberry,
  potato,
  radish,
  artichoke,
  banana,
  cherry
];

/* Images provided in /images folder.
   - susberry.png by Sean x DALL-E 2
   - suspotato.png by Sean x DALL-E 2
   - susradish.jpg by Sean x DALL-E 2
   - susartichoke.png by Sean x DALL-E 2
   - susbanana.png by Sean x DALL-E 2
   - suscherry.png by Sean x DALL-E 2
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

//Function to retrieve product object based on product id.
function getProduct(productId){
  for(let i = 0; i < products.length; i++){
    if(products[i].productId === productId){
      return products[i];
    }
  }
}

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId){
  let p = getProduct(productId);
  p.quantity += 1;
  if(!cart.includes(p)){    
    cart.push(p);    
  }  
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId){
  getProduct(productId).quantity += 1;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId){
  let p = getProduct(productId);
  p.quantity -= 1;
  if(p.quantity === 0){    
    removeProductFromCart(productId);
                                          
                                          
        
    }
}


/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId){
  let p = getProduct(productId);
  p.quantity = 0;
  for(let i = 0; i < cart.length; i++){
    if(cart[i].productId == productId){
      cart.splice(i, 1);
    }
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

function cartTotal(){
  let sum = 0;
  for(let i = 0; i < cart.length; i++){
    sum += (cart[i].quantity * cart[i].price);
  }
  balance = sum
  return parseFloat(sum.toFixed(2));
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){
  const n = cart.length; 
  for(let i = 0; i < n; i++){
    cart.pop();
  }
  console.log(cart);
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount){
  if (amount < balance){
    balance -= amount;
    return -balance;
  }
  return amount - balance
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


function currency(currencyType){
  switch(currencyType){
    case 'EUR':
      convert(symbols.eur);  
      break;
    case 'YEN':
      convert(symbols.yen);
      break;
    case 'USD': 
      convert(symbols.usd);
      break;
  }
}

function convert(symbol){
  for(let i = 0; i < products.length; i++){    
    products[i].price = (products[i].basePrice * symbol).toFixed(2)
  }
}

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   currency
}

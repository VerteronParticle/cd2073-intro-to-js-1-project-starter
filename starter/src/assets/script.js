//Currency conversion lookup. -S

const symbols = {
  usd: 1.0000,
  eur: 0.9965,
  yen: 139.56
}

//current balance so that 'pay' at least partially makes sense.
currentBalance = 0

// product object literals containing important data.

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
  //get product
  let p = getProduct(productId);
  //increase quantity no matter what, but if it's not in there,
  //put it in there.
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

function decreaseQuantity(productId){
  let p = getProduct(productId);
  //decrease quantity no matter what. if it's zero, remove it from the 
  //cart.
  p.quantity -= 1;
  if(p.quantity === 0){    
    removeProductFromCart(productId);
  }
}

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
  //calculate the grand total from the items in the cart.
  let sum = 0;
  for(let i = 0; i < cart.length; i++){
    //add the quantity * the price of each item in the cart
    //to the sum.
    sum += (cart[i].quantity * cart[i].price);
  }
  balance = sum
  return parseFloat(sum.toFixed(2));
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){
  //save the length in variable, so you don't lose your spot when
  //other indexes are missing.  
  const n = cart.length; 
  //remove everything from the cart.
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
  //I improved this idea so that the balance can be paid down over time.  
  //if the amount being paid is less than the balance, subtract amount,
  //return negative number.
  if (amount < balance){
    balance -= amount;
    return -balance;
  }
  //otherwise just return what's coming back to the customer.
  return amount - balance
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


function currency(currencyType){
  //call convert() against KV pairs from the symbols lookup.
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

//function to convert currency values.
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

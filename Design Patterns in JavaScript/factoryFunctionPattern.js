/* FACTORY FUNCTION PATTERN
  
  Definition: You create a function that generates objects 
  (Factory = a machine for making objects).
  
  Design Pattern: The Factory Function Pattern is a design pattern 
  where we write a simple function that creates and returns new 
  objects without using a class or the new keyword.
  
  Main Idea: The core concept is to control object creation 
  through a single function.
  
  Functionality: Every time you call the factory function, you get 
  a new object that can have its own methods and (if desired) 
  private data.
  
  Use Case: This pattern is especially useful when you need many 
  objects of the same type, such as users, products, tasks, etc.
*/

function createProduct(name, price) {
  let stock = 10;
  return {
    name,
    price,

    checkStock() {
      console.log(stock);
    },

    buy(qty) {
      if (qty <= stock) {
        stock -= qty;
        console.log(`${qty} pieces booked - ${stock} pieces left`);
      } else {
        console.error(`We only have - ${stock} pieces left`);
      }
    },

    refill(qty) {
      stock += qty;
      console.log(`refiled stocks - ${stock} pieces now`);
    },
  };
}

let iphone = createProduct("iphone", 70000);
let kitkat = createProduct("kikat", 70);

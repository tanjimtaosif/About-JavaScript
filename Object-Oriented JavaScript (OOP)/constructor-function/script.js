// 1. WHY: To create a "Blueprint" or "Class-like" structure.
// Use a Constructor when you need to create MANY objects with the same properties but different values.
function CreatePencil(name, price, color, company) {
  // 'this' refers to the specific object being created (e.g., pencil1)
  this.name = name;
  this.price = price;
  this.color = color;
  this.company = company;

  // 2. HOW: Defining a method inside the constructor.
  // Note: Every time you use 'new', a fresh copy of this function is created in memory.
  this.write = function (text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = color; // Uses the color passed during creation
    document.body.append(h1);
  };
}

// 3. WHEN: Use the 'new' keyword to instantiate the object.
// This triggers the constructor, sets 'this' to a new empty object, and returns it.
let pencil1 = new CreatePencil("Nataraj", 10, "black", "nataraj");
let pencil2 = new CreatePencil("Doms", 10, "red", "doms");

pencil1.write("Hello from Nataraj!"); // Writes in black
pencil2.write("Hello from Doms!"); // Writes in red

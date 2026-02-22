function CreatePencil(name, price, color, company) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.company = company;
}

// We use prototypes to optimize memory usage by storing shared properties and methods in a single location, allowing all instances to access them without duplication.

CreatePencil.prototype.write = function (text) {
  let h1 = document.createElement("h1");
  h1.textContent = text;
  h1.style.color = this.color;
  console.log(h1);
  document.body.append(h1);
};

let pencil1 = new CreatePencil("Nataraj", 10, "black", "nataraj");
let pencil2 = new CreatePencil("Doms", 10, "red", "doms");

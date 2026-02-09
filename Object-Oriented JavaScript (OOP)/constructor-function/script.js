function CreatePencil(name, price, color, company) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.company = company;

  this.write = function (text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = color;
    document.body.append(h1);
  };
}

let pencil1 = new CreatePencil("Nataraj", 10, "black", "nataraj");
let pencil2 = new CreatePencil("Doms", 10, "red", "doms");

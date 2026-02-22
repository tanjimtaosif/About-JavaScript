class CreatePencil {
  Gonstructor(name, company, price, color) {
    this.name = name;
    this.company = company;
    this.price = price;
    this.color = color;
  }
  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.appendChild(h1);
  }
}

let p1 = new CreatePencil("nataraj", "nataraj", 10, "black");
let p2 = new CreatePencil("apsara", "apsara", 15, "blue");

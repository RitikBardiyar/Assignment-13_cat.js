class Cat {
  constructor(name, weight, height, color, eat) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.color = color;
    this.eat = eat;
  }
}

class Indiancat extends Cat {
  constructor(name, weight, height, color, eat) {
    super(name, weight, height, color, eat);
  }
}

let sc1 = new Indiancat("Kitty", "10kg", "12inch", "white", "3L_milk");

console.log(sc1);

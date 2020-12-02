// import using require

// declare class
let Shape = require("./shape");
// declare class
class Circle extends Shape {
  constructor() {
    super();
    this.color = "blue";
  }
  calculateArea() {}
}
module.exports = Circle;

// export class using module.exports

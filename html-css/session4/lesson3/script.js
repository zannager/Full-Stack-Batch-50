// abstraction
class Circle {
    constructor(radius) {
        this.radius = radius;
        console.log("radius: ", this.radius);
    }
    calculatedArea() {
        this.area = Math.PI * this.radius * this.radius;
        console.log("Area: ", this.area);
        return this.area;
    }
}

const myCircle = new Circle(5);
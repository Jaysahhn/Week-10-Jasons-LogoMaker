// circle class
class Circle {
    // initialize circle properties
    constructor(cx, cy, r, fill) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.fill = fill;
    }

    // generate SVG code for a circle
    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`;
    }
}

// Triangle class
class Triangle {
    // initialize triangle properties
    constructor(points, fill) {
        this.points = points;
        this.fill = fill;
    }

    // generate SVG code for a triangle
    render() {
        return `<polygon points="${this.points}" fill="${this.fill}" />`;
    }
}

// Square class
class Square {
    // initialize square properties
    constructor(x, y, side, fill) {
        this.x = x;
        this.y = y;
        this.side = side;
        this.fill = fill;
    }

    // generate SVG code for a square
    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.side}" height="${this.side}" fill="${this.fill}" />`;
    }
}

// Export the classes to be referenced
module.exports = { Circle, Triangle, Square };

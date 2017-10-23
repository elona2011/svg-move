class MovingObject {
    constructor(dom, a, b, step) {
        this.dom = dom;
        this.a = a;
        this.b = b;
        this.step = step;
        this.direction = true;
        this.x = 0;
    }
}
let domEarth = document.querySelector('svg #earth');
let earth;
if (domEarth) {
    earth = new MovingObject(domEarth, 300, 200, 1);
}
//# sourceMappingURL=index.js.map
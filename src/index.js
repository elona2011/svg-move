class MovingObject {
    constructor(dom, a, b, step) {
        this.dom = dom;
        this.a = a;
        this.b = b;
        this.step = step;
        this.direction = true;
        this.x = 0;
        this.y = 0;
    }
    moving() {
        setInterval(() => {
            let x = 400, y = 400;
            this.tick();
            this.dom.style['transform'] = `matrix(1,0,0,1,${x + this.x},${y + this.y})`;
        }, 15);
    }
    tick() {
        let step = 1;
        this.x = 200;
        this.y = 200;
    }
}
let domEarth = document.querySelector('svg #earth');
let earth;
if (domEarth) {
    earth = new MovingObject(domEarth, 300, 200, 1);
    earth.moving();
}
//# sourceMappingURL=index.js.map
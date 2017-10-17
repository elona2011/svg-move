class MovingObject {
    constructor(dom) {
        this.dom = dom;
    }
    addOrbit(orbit) {
        this.orbit = orbit;
    }
    moving() {
        this.dom.style['transform'] = 'translate(100px,100px)';
    }
}
let domEarth = document.querySelector('svg #earth');
let earth;
if (domEarth) {
    earth = new MovingObject(domEarth);
    earth.moving();
}
//# sourceMappingURL=index.js.map
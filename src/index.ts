interface location {
    x: number,
    y: number
}

class MovingObject {
    public orbit: location[]

    constructor(public dom: SVGElement) {

    }

    addOrbit(orbit: location[]) {
        if (orbit.length < 1) throw new Error('orbit.length<1');

        this.orbit = orbit
    }

    moving() {
        this.dom.style['transform'] = 'translate(100px,100px)'
    }
}

let domEarth = <SVGElement>document.querySelector('svg #earth')

let earth: MovingObject

if (domEarth) {
    earth = new MovingObject(domEarth)
    earth.moving()
}
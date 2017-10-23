class MovingObject {
    public direction: boolean = true

    constructor(public dom: SVGElement, public a: number, public b: number, public step: number) {

    }

    moving() {
        setInterval(() => {
            let x = 400,
                y = 400
            this.tick()
            this.dom.style['transform'] = `matrix(1,0,0,1,${x + this.x},${y + this.y})`
        }, 15)
    }

    tick(): void {
        let step = 1

    }



    distanceC(x: number, y: number) {
        let disX = x - Math.sqrt(this.a * this.a - this.b * this.b)
        return Math.sqrt(disX * disX + this.y * this.y)
    }

    velocity(x: number, y: number) {
        let C = 1

    }

    sinV(x: number, y: number) {
        let k1 = this.b * this.b * x
    }

    next() {

    }

    [Symbol.iterator]() {
        return this
    }
}

let domEarth = <SVGElement>document.querySelector('svg #earth')

let earth: MovingObject

if (domEarth) {
    earth = new MovingObject(domEarth, 300, 200, 1)
    earth.moving()
}

export { MovingObject }
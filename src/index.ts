class MovingObject {
    public direction: boolean = true
    public x: number = 0
    public y: number = 0

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

        // step = this.loop(0, step)

        // let { x, y } = this.getXY(step)
        // if (y * this.y < 0) this.direction = !this.direction

        this.x = 200
        this.y = 200

    }


}

let domEarth = <SVGElement>document.querySelector('svg #earth')

let earth: MovingObject

if (domEarth) {
    earth = new MovingObject(domEarth, 300, 200, 1)
    earth.moving()
}

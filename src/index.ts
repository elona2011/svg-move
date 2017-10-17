class MovingObject {
    public direction: boolean = true
    public x: number = 0
    public y: number = this.getY(this.x)

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

        step = this.loop(0, step)

        let { x, y } = this.getXY(step)
        if (y * this.y < 0) this.direction = !this.direction

        this.x = x
        this.y = y

    }

    loop(min: number, max: number): number {
        let step = (min + max) / 2
        let d = this.getD(step)
        if (d - 1 > 0.5) {
            return this.loop(min, step)
        } else if (d - 1 < -0.5) {
            return this.loop(step, max)
        } else {
            return step
        }
    }

    getD(step: number): number {
        let { x, y } = this.getXY(step)

        return Math.sqrt((x - this.x) * (x - this.x) + (y - this.y) * (y - this.y))
    }

    getXY(step: number): { x: number, y: number } {
        let x = 0, y = this.getY(x)

        if (this.direction) {
            x = this.x + step
            if (x > this.a) {
                x = this.x
                y = -this.getY(x)
                // this.direction = !this.direction
            }
        } else {
            x = this.x - step
            if (x < -this.a) {
                x = this.x
                y = -this.getY(x)
                // this.direction = !this.direction
            }
        }
        y = this.getY(x)
        return { x, y }
    }

    getY(x: number): number {
        let y = Math.sqrt((1 - x * x / (this.a * this.a)) * this.b * this.b)
        if (this.direction) {
            return -y
        } else
            return y
    }
}

let domEarth = <SVGElement>document.querySelector('svg #earth')

let earth: MovingObject

if (domEarth) {
    earth = new MovingObject(domEarth, 300, 200, 1)
    earth.moving()
}
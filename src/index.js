let imgWidth = 2732,
    imgHeight = 1536

addCssStyle('mercury', 200, 0.3, 0.2, 0.6, 0.4, 10, 0)
addCssStyle('venus', 300, 0.3, 0.2, 0.55, 0.5, 14, 0)
addCssStyle('earth', 400, 0.3, 0.2, 0.5, 0.7, 18, 0)
addCssStyle('mars', 500, 0.3, 0.2, 0.45, 0.5, 22, 0)
addCssStyle('jupiter', 600, 0.3, 0.2, 0.4, 1.3, 30, 0)
addCssStyle('saturn', 700, 0.4, 0.2, 0.35, 1.8, 40, 0)
addCssStyle('uranus', 800, 0.5, 0.2, 0.3, 1.2, 50, 0)
addCssStyle('neptune', 900, 0.6, 0.2, 0.25, 1.3, 80, 0)

function addPlanet(name) {
    let planet

    planet = document.createElement('figure')
    planet.id = name
    planet.innerHTML = `
    <div>
        <div>
            <div>
                <img src="img/${name}.png" alt="">
            </div>
        </div>
    </div>
    `
    document.body.appendChild(planet)
}

function addCssStyle(name, radius, rightOffse, leftOffset, topOffset, scale, duration = 5, delay = 0) {
    let style = document.createElement('style'),
        width = getWidth(),
        height = getHeight(),
        ratio = getRatio() * scale,
        keyFrames

    addPlanet(name)
    // leftOffset = 0
    style.type = 'text/css'
    keyFrames = `
        @keyframes ${name}zindex{
            0%{
                z-index:-1;
            }
            88% {
                z-index:1;
            }
            89%{
                z-index:-1;
            }
            100%{
                z-index:-1;
            }
        }

        @keyframes ${name}leftright {
            to{
                transform: translate(${width*rightOffse}px, -400px);
            }
        }

        @keyframes ${name}circle {
            0% {
                transform: rotate(0turn);
            }
            25% {
                transform: rotate(0.25turn);
            }
            50% {
                transform: rotate(0.5turn);
            }
            75% {
                transform: rotate(0.75turn);
            }
            100% {
                transform: rotate(1turn);
            }
        }

        @keyframes ${name}perspective {
            0%{
                transform: perspective(250px) translateZ(180px);
            }
            30%{
                transform: perspective(250px) translateZ(0px);
            }
            50%{
                transform: perspective(250px) translateZ(100px);
            } 
            80%{
                transform: perspective(250px) translateZ(200px);
            }
            95%{
                transform: perspective(250px) translateZ(200px);
            }
            100%{
                transform: perspective(250px) translateZ(180px);
            }
        }

        #${name} {
            position: relative;
            top: ${height*topOffset}px;
            left: -${width*leftOffset}px;
            animation: ${name}zindex ${duration}s infinite ease-in-out
        }
        
        #${name} div {
            animation: ${name}leftright ${duration/2}s infinite ease-in-out alternate;
            animation-delay: ${delay}s;
        }

        #${name} div div{
            width: ${radius}px;
            transform-origin: 100% center;
            animation: ${name}circle ${duration}s infinite linear;
            animation-delay: ${delay}s;
        }

        #${name} div div div{
            animation: ${name}circle ${duration}s infinite linear reverse;
            transform-origin: center;
            animation-delay: ${delay}s;
        }
        
        #${name} div div div img{
            width: ${50*ratio}px;
            animation: ${name}perspective ${duration}s infinite linear;
        }`
    style.innerHTML = keyFrames
    document.querySelector('head').appendChild(style)
}

function getHeight() {
    let width = document.body.clientWidth,
        height = document.body.clientHeight

    if (width / height <= imgWidth / imgHeight) {
        return height
    } else {
        return imgHeight * width / imgWidth
    }
}

function getWidth() {
    let width = document.body.clientWidth,
        height = document.body.clientHeight

    if (width / height <= imgWidth / imgHeight) {
        return height * imgWidth / imgHeight
    } else {
        return width
    }
}

function getRatio() {
    let width = document.body.clientWidth,
        height = document.body.clientHeight

    if (width / height <= imgWidth / imgHeight) {
        return height / imgHeight
    } else {
        return width / imgWidth
    }
}
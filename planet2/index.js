let imgWidth = 2732,
    imgHeight = 1536

addPlanet('mercury', 350, 0.3, 0.2, 0.6, 0.4, 2, 0)
// addPlanet('venus', 300, 0.3, 0.2, 0.55, 0.5, 14, 0)
// addPlanet('earth', 400, 0.3, 0.2, 0.5, 0.7, 18, 0)
// addPlanet('mars', 500, 0.3, 0.2, 0.45, 0.5, 22, 0)
// addPlanet('jupiter', 600, 0.3, 0.2, 0.4, 1.3, 30, 0)
// addPlanet('saturn', 700, 0.4, 0.2, 0.35, 1.8, 40, 0)
// addPlanet('uranus', 800, 0.5, 0.2, 0.3, 1.2, 50, 0)
// addPlanet('neptune', 900, 0.6, 0.2, 0.25, 1.3, 80, 0)

function addPlanet(name, radius, rightOffse, leftOffset, topOffset, scale, duration = 5, delay = 0) {
    //add dom
    let planet,
        dom = document.querySelector('#planet')

    planet = document.createElement('div')
    orbit = document.createElement('div')
    planet.id = name
    orbit.id = `${name}orbit`
    planet.innerHTML = `
                <div class="img-wrap">
                    <img src="img/${name}.png" alt="">
                </div>
        `
    planet.appendChild(orbit)
    dom.appendChild(planet)

    //add animation
    let style = document.createElement('style'),
        width = getWidth(),
        height = getHeight(),
        ratio = getRatio() * scale,
        keyFrames

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

    @keyframes ${name}cir {
        0% {
          transform: rotateX(80deg) rotateY(-10deg) rotateZ(0deg);
        }
        100% {
          transform: rotateX(80deg) rotateY(-10deg) rotateZ(360deg);
        }
      }

    #${name}{
        width: 350px;
        height: 350px;
        animation:${name}cir ${duration}s infinite linear;
    }

    #${name} .img-wrap{
        position: absolute;
    }

    #${name} img{
        transform: translate(-50%,-50%);
        position: relative;
        top: ${radius/2}px;
    }
    
    #${name}orbit {
        width: ${radius}px;
        height: ${radius}px;
        top: 0;
        border: 20px solid #aaa;
        box-sizing: border-box;
        border-radius: 50%;
    }
    `
    style.innerHTML = keyFrames
    document.querySelector('head').appendChild(style)
}
//http://hovertree.com/texiao/css3/24/

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
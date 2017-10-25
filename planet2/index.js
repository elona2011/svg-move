let imgWidth = 2732,
    imgHeight = 1536

addPlanet('mercury', 400, 150, 0, 6, 0)
addPlanet('venus', 500, 80, 0, 14, 0)
addPlanet('earth', 600, 0, 0, 18, 0)
addPlanet('mars', 750, -80, 0, 22, 0)
addPlanet('jupiter', 900, -160, 0, 30, 0)
addPlanet('saturn', 1100, -300, 0, 40, 0)
// addPlanet('uranus', 800, 0.5, 0.2, 0.3, 1.2, 50, 0)
// addPlanet('neptune', 900, 0.6, 0.2, 0.25, 1.3, 80, 0)

function addPlanet(name, radius, topOffset, leftOffset, duration = 5, delay = 0) {
    //add dom
    let planet = document.createElement('div'),
        dom = document.querySelector('#planet'),
        orbit = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
        circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')

    planet.id = name
    orbit.id = `${name}orbit`
    orbit.appendChild(circle)
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
        keyFrames

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
      @keyframes ${name}cireverse {
        0% {
          transform:  rotateZ(0deg);
        }
        100% {
          transform:  rotateZ(-360deg);
        }
      }
    @keyframes ${name}cir1 {
       0%{
        transform: rotateY(0deg);
       }
       100%{
           transform: rotateY(360deg);
       }
    }

    #${name}{
        top:${topOffset}px;
        left:${leftOffset}px;
        position: absolute;
        width: ${radius}px;
        height: ${radius}px;
        animation:${name}cir ${duration}s infinite linear;
        transform-style: preserve-3d;
    }

    #${name} .img-wrap{
        position: absolute;
        transform-style: preserve-3d;
        transform: rotateX(-90deg) translateX(${radius/3.1}px) translateY(${-radius/100}px);        
    }

    #${name} img{
        transform: translate(-50%,-50%);
        animation: ${name}cir1 ${duration}s infinite linear;
    }
    
    #${name} svg {
        width:100%;
        height:100%;
        animation:${name}cireverse ${duration}s infinite linear;
    }
    #${name} svg circle{
        cx: ${radius/2}px;
        cy: ${radius/2}px;
        r:${radius/2-5}px;
        fill:rgba(0,0,0,0);
        stroke:rgba(170,170,170,0.3);
        stroke-width:10;
        stroke-dasharray:${radius*2.5};
        transform:rotate(-143deg);
        transform-origin:center;
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
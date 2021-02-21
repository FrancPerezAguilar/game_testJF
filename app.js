const STEP = 25;
let nau = document.getElementById('player1');
x = nau.offsetLeft;
y = nau.offsetTop;

console.log(window.innerHeight, window.innerWidth)

const log = document.getElementById('log');

document.addEventListener('keydown', logKey);

function logKey(e) {
    //console.log(`${e.code}`);
    switch (e.code) {
        case "KeyA":
            console.log();
            x -= STEP;

            if ( x <= -50) {
                x = window.innerWidth;
            }

            nau.style.left = x + "px";
        break;
        case "KeyW":
            console.log("W")
        break;
        case "KeyD":
            x += STEP
            let divMaster = document.querySelector('.game-container');
            if ( x >= window.innerWidth) {
                x = -50;
            }
            nau.style.left = x + "px";
        break;
        case "KeyS":
            console.log("S")
            
        break;
        case "Space":
            console.log("Space");
            shot(x);
 }
}

function shot(position) {
    
    let bullet = document.createElement('div');
    bullet.setAttribute('class', 'bullet');
    //bullet.setAttribute('style', 'animation: shotFX 3s;');

    bullet.style.left = position + 25 + "px";
    bullet.style.top = y + "px";

    document.querySelector('.game-container').appendChild(bullet);

    translate( bullet, position+25, 0 );



}

function translate( elem, xt, yt ) {
    var left = x + 25,
        top = y,
        dx = left - xt,
        dy = top - yt,
        i = 1,
        count = 50,
        delay = 50;

    function loop() {
        if ( i >= count ) { return; }
        i += 1;
        elem.style.left = ( left - ( dx * i / count ) ).toFixed( 0 ) + 'px';
        elem.style.top = ( top - ( dy * i / count ) ).toFixed( 0 ) + 'px';
        setTimeout( loop, delay );
    }

    loop();
}

const nauPlayer1 = document.getElementById("player1");
const nauProperties = window.getComputedStyle(nauPlayer1, null)

let nauPlayer1_coordenades = {
    top: nauPlayer1.offsetLeft,
    left: nauPlayer1.offsetTop,
    height: nauProperties.height,
    width: nauProperties.width
}

// movement


// shot
let nauPlayer1_shot;
nauPlayer1.insertAdjacentHTML("afterbegin", "<div id='shot' style='background-color:red; max-width:30px; text-align:center;'>s</div>");




console.log(nauPlayer1_coordenades);
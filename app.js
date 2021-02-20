let nau = document.getElementById('player1');
x = nau.offsetLeft;
y = nau.offsetTop;

console.log(window.innerHeight, window.innerWidth)

const log = document.getElementById('log');

document.addEventListener('keypress', logKey);


function logKey(e) {

    const percentile = 0.02;
    //console.log(`${e.code}`);
    switch (e.code) {
        case "KeyA":
            console.log();
            x -= 25

            if ( x <= -50) {
                x = window.innerWidth;
            }

            nau.style.left = x + "px";
        break;
        case "KeyW":
            console.log("W")
        break;
        case "KeyD":
            x += 25
            let divMaster = document.querySelector('.game-container');
            if ( x >= window.innerWidth) {
                x = -50;
            }
            nau.style.left = x + "px";
            console.log(window.innerWidth)
            console.log(nau.style.left)
            console.log(x)
        break;
        case "KeyS":
            console.log("S")
            
        break;
 }
}

document.onkeypress = function (e) {

    

    
    
};


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
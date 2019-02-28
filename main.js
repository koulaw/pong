const $field = document.getElementById("field");
const $paddleP1 = document.getElementById("paddleP1");
const $paddleP2 = document.getElementById("paddleP2");
const $ball = document.getElementById("ball");

const pong = new Pong($field, $ball, $paddleP1);

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case "ArrowUp":
            pong.movePaddleUp($paddleP1);
            break;
        case "ArrowDown":
            pong.movePaddleDown($paddleP1);
            break;
        case "a":
            pong.movePaddleUp($paddleP2);
            break;
        case "q":
            pong.movePaddleDown($paddleP2);
            break;
        case " ":
            pong.start();
            break;
    }
})

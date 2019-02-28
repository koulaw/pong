function Pong(field, ball, paddleP1) {

    let paddleSpeed = 10;
    let ballSpeedX = -5;
    let ballSpeedY = -5;

    let isGameStarted = false;

    function start() {
        isGameStarted = true;
    }

    function movePaddleUp(paddle) {
        if (!isGameStarted) return;

        if (paddle.offsetTop <= 0) return;
        paddle.style.top = paddle.offsetTop - paddleSpeed + "px";
    }

    function movePaddleDown(paddle) {
        if (!isGameStarted) return;

        if (paddle.offsetTop >= field.offsetHeight - paddle.offsetHeight) return;
        paddle.style.top = paddle.offsetTop + paddleSpeed + "px";
    }

    function moveBall(ball) {
        if (!isGameStarted) return;

        if (ball.offsetLeft <= 0 || ball.offsetLeft >= field.offsetWidth - ball.offsetWidth) {
            ballSpeedX *= -1;
        }
        if (ball.offsetTop <= 0 || ball.offsetTop >= field.offsetHeight - ball.offsetHeight) {
            ballSpeedY *= -1;
        }
        ball.style.left = ball.offsetLeft + ballSpeedX + "px";
        ball.style.top = ball.offsetTop + ballSpeedY + "px";

        if (isCollideElt(ball, paddleP1)) {
            ballSpeedX *= -1;
        }


    }

    function isCollideElt(elt1, elt2) {

        if (elt1.offsetLeft <= elt2.offsetLeft + elt2.offsetWidth && elt1.offsetTop >= elt2.offsetTop && elt1.offsetTop <= elt2.offsetTop + elt2.offsetHeight) {
            return true;
        }

        return false;
    }

    setInterval(function() {
        moveBall(ball);
    }, 32);

    return {
        start: start,
        movePaddleUp: movePaddleUp,
        movePaddleDown: movePaddleDown
    }

}
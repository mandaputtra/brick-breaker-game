export default class InputHandler {
  constructor(paddle, game) {
    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 37:
          paddle.moveLeft()
          break;
        case 39:
          paddle.moveRight()
          break;
      }
    })

    document.addEventListener('keyup', event => {
      switch (event.keyCode) {
        case 37: // LEFT
          if(paddle.speed < 0) paddle.stop()
          break;
        case 39: // RIGHT
          if(paddle.speed > 0) paddle.stop()
          break;
        case 27: // ESC
          game.togglePause()
          break;
        case 32: // SPACE
          if (game.gameState === 1) {
            break;
          } else {
            game.start()
          }
          break;
      }
    })
  }

}
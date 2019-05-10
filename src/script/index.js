import Game from './game'
const canvas = document.getElementById('screen')

const ctx = canvas.getContext('2d')

const GAME_WIDTH = 800
const GAME_HEIGHT = 600

const game = new Game(GAME_WIDTH, GAME_HEIGHT)

let lastTime = 0
function start(timestamps) {
  let deltaTime = timestamps - lastTime
  lastTime = timestamps

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
  game.update(deltaTime)
  game.draw(ctx)
  requestAnimationFrame(start)
}

requestAnimationFrame(start)

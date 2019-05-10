import Paddle from './paddle'
import InputHandler from './input'
import Ball from './ball'
import Brick from './brick'
import { buildLevel, level1 } from './levels'
import RenderScreen from './render-menu-screen'

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
  WIN: 4
}

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
    this.gameState = GAMESTATE.MENU
    this.paddle = new Paddle(this)
    this.ball = new Ball(this)
    new InputHandler(this.paddle, this)
    this.gameObject = []
    this.bricks = []
    this.lives = 1
  }

  start() {
    if(this.gameState === GAMESTATE.GAMEOVER) {
      this.gameState = GAMESTATE.RUNNING
      this.lives = 1
      this.ball.resetPosition()
    }
    this.gameState = GAMESTATE.RUNNING
    this.bricks = buildLevel(this, level1)
    this.gameObject = [this.paddle, this.ball]
  }

  update(deltaTime) {
    if(this.lives === 0) this.gameState = GAMESTATE.GAMEOVER
    if(
      this.gameState === GAMESTATE.PAUSED ||
      this.gameState === GAMESTATE.MENU ||
      this.gameState === GAMESTATE.GAMEOVER ||
      this.gameState === GAMESTATE.WIN
    ) return
    [...this.gameObject, ...this.bricks].forEach(obj => obj.update(deltaTime))
    this.bricks = this.bricks.filter(brick => !brick.deleteBrick)
    if(this.bricks.length === 0) {
      this.gameState = GAMESTATE.WIN
    }
  }

  draw(ctx) {
    [...this.gameObject, ...this.bricks].forEach(obj => obj.draw(ctx))
    this.screenMenu = new RenderScreen(this, GAMESTATE)
    this.screenMenu.showGameScreen(ctx)
  }

  togglePause() {
    const unPausedState = [
      GAMESTATE.MENU,
      GAMESTATE.GAMEOVER,
      GAMESTATE.WIN
    ]

    if(this.gameState === GAMESTATE.PAUSED) {
      this.gameState = GAMESTATE.RUNNING
    } else if (unPausedState.indexOf(this.gameState) !== -1) {
      return
    } else {
      this.gameState = GAMESTATE.PAUSED
    }
  }

  checkState() {
    return GAMESTATE[this.gameState]
  }
}
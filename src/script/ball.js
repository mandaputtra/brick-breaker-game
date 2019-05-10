import { detectCollision } from './collision-detection'

export default class Ball {
  // this.game refers to all object inside game class
  constructor(game) {
    this.game = game
    this.gameHeight = game.gameHeight
    this.gameWidth = game.gameWidth
    this.image = document.getElementById('ball')
    this.speed = { x: 4, y: -2 }
    this.position = { x: 10, y: 400 }
    this.size = 16
  }

  draw(ctx){
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    )
  }

  update(deltaTime){
    this.position.x += this.speed.x
    this.position.y += this.speed.y

    // ball in the left or right wall
    if(this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x
    }
    // ball with top wall
    if(this.position.y < 0) {
      this.speed.y = -this.speed.y
    }
    // ball with bottom wall
    if(this.position.y + this.size > this.gameHeight) {
      this.game.lives--;
    }

    if(detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y
      this.position.y = this.game.paddle.position.y - this.size
    }
  }

  resetPosition() {
    this.position.x = 10
    this.position.y = 400
  }
}
import { detectCollision } from "./collision-detection";

export default class Brick {
  constructor(game, position) {
    this.game = game
    this.image = document.getElementById('brick')
    this.position = position
    this.width = 80
    this.height = 24

    this.deleteBrick = false
  }

  update() {
    if(detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y
      this.deleteBrick = true
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
  }
}
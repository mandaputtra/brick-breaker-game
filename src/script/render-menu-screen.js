export default class RenderScreen {
  constructor(game, state) {
    this.width = game.gameWidth
    this.height = game.gameHeight
    this.gameState = game.gameState
    this.state = state
  }

  renderMenuScreen(ctx, word, backgroundcolor) {
    ctx.rect(0, 0, this.width, this.height)
    ctx.fillStyle = backgroundcolor
    ctx.fill()

    ctx.font = "30px Arial"
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.fillText(word, this.width / 2, this.height / 2)
  }

  showGameScreen(ctx) {
    if(this.gameState === this.state.PAUSED) {
      this.renderMenuScreen(
        ctx,
        "Paused",
        'rgba(0, 0, 0, 0.5)'
      )
    }

    if(this.gameState === this.state.MENU) {
      this.renderMenuScreen(
        ctx,
        "Press SPACEBAR to Start",
        'rgba(0, 0, 0, 1)'
      )
    }

    if(this.gameState === this.state.GAMEOVER) {
      this.renderMenuScreen(
        ctx,
        'Gameover press SPACEBAR again to retry',
        'rgba(0, 0, 0, 1)',
      )
    }

    if(this.gameState === this.state.WIN) {
      this.renderMenuScreen(
        ctx,
        'You Win',
        'rgba(0, 0, 0, 1)'
      )
    }
  }
}


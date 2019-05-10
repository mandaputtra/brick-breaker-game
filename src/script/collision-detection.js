export function detectCollision(ball, gameObject) {
  const bottomOfBall = ball.position.y + ball.size
  const topOfBall = ball.position.y

  const topOfObject = gameObject.position.y
  const leftSideOfObject = gameObject.position.x
  const rightSideOfObject = gameObject.position.x + gameObject.width
  const bottomOfObject = gameObject.position.y + gameObject.height;

  if (
      bottomOfBall >= topOfObject &&
      topOfBall <= bottomOfObject &&
      ball.position.x >= leftSideOfObject &&
      ball.position.x + ball.size < rightSideOfObject
    ) {
    return true
  } else {
    return false
  }
}
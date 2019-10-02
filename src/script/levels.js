import Brick from './brick'

function randomBrick(row) {
  let lvl = []
  for (let i = 0; i < row; i++) {
    // add level
    lvl.push([])
    for (let k = 0; k < 12; k++) {
      const rand = (Math.random() * 10).toFixed()
      if (rand > 5) {
        lvl[i].push(1)
      } else {
        lvl[i].push(0)
      }
    }
  }
  return lvl
}


export function buildLevel(game, level) {
  let bricks = []
  const genBricks = randomBrick(level)
  genBricks.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if(brick === 1) {
        let position = {
          x: 80 * brickIndex,
          y: 75 + 24 * rowIndex
        }
        bricks.push(new Brick(game, position))
      }
    })
  })
  return bricks
}
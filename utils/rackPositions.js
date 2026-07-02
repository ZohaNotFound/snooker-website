export function generateRack(radius = 0.06) {
  const positions = []
  const spacing = radius * 2.06
  const SURFACE_TOP = 0.035
  const BALL_Y = SURFACE_TOP + radius

  for (let row = 0; row < 5; row++) {
    for (let col = 0; col <= row; col++) {
      positions.push([
        (col - row / 2) * spacing,
        BALL_Y,
        -row * spacing * 0.866 - 0.15,
      ])
    }
  }

  return positions
}
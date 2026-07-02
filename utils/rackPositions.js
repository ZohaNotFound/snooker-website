export function generateRack(radius = 0.06) {
  const positions = [];

  const spacing = radius * 2.1;

  for (let row = 0; row < 5; row++) {
    for (let col = 0; col <= row; col++) {
      positions.push([
        (col - row / 2) * spacing,
        radius,
        -row * spacing * 0.87 - 0.4,
      ]);
    }
  }

  return positions;
}
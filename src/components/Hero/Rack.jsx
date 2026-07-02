import Ball from './Ball'
import { generateRack } from '../../../utils/rackPositions'

const BALL_RADIUS = 0.06

export default function Rack() {
  const positions = generateRack(BALL_RADIUS)
  return (
    <>
      {positions.map((pos, i) => (
        <Ball
          key={i}
          position={pos}
          color="#b91c1c"
        />
      ))}
    </>
  )
}
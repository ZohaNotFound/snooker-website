import { forwardRef } from 'react'
import Ball from './Ball'

const SURFACE_TOP = 0.035
const BALL_RADIUS = 0.06
const BALL_Y = SURFACE_TOP + BALL_RADIUS

const CueBall = forwardRef(({ visible = false }, ref) => {
  return (
    <Ball
      position={[0, BALL_Y, 0.52]}
      color="white"
      visible={visible}
      ref={ref}
    />
  )
})

CueBall.displayName = 'CueBall'

export default CueBall
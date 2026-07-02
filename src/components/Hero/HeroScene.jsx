import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { useRef } from 'react'
import CameraRig from './CameraRig'
import Lights from './Lights'
import PoolTable from './PoolTable'
import Effects from './Effects'

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

export default function HeroScene({ isVisible }) {
  return (
    <>
      <CameraRig />
      <Lights />
      <PoolTable />
      <Effects />
    </>
  )
}

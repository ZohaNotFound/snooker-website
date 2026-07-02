import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'
import Lights from './Lights'
import PoolTable from './PoolTable'
import Rack from './Rack'
import CueBall from './CueBall'

const WIDE_START    = [-3.5, 4.8, 4.2]
const WIDE_LOOK     = new THREE.Vector3(0, 0.05, -0.15)
const PUSH_END      = [-2.2, 3.0, 2.8]
const PUSH_LOOK     = new THREE.Vector3(0, 0.05, -0.25)
const BROADCAST_POS = [-0.25, 0.52, 2.6]
const BROADCAST_LOOK = new THREE.Vector3(0.15, 0.12, -0.55)

export default function HeroScene({ isVisible }) {
  const cameraRef       = useRef()
  const cueBallRef      = useRef()
  const timelineRef     = useRef(null)
  const impulseApplied  = useRef(false)
  const impulseScheduled= useRef(false)
  const [cueBallVisible, setCueBallVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!cameraRef.current) return
      const cam = cameraRef.current

      const lerpLook = new THREE.Vector3()
      const tl = gsap.timeline({ paused: true })

      tl.to(cam.position, {
        x: PUSH_END[0], y: PUSH_END[1], z: PUSH_END[2],
        duration: 3.2,
        ease: 'power2.inOut',
        onUpdate() { cam.lookAt(PUSH_LOOK) },
      })

      const transProgress = { t: 0 }
      tl.to(
        transProgress,
        {
          t: 1,
          duration: 1.4,
          ease: 'power3.in',
          onStart() {
            cam.position.set(PUSH_END[0], PUSH_END[1], PUSH_END[2])
          },
          onUpdate() {
            cam.position.lerpVectors(
              new THREE.Vector3(...PUSH_END),
              new THREE.Vector3(...BROADCAST_POS),
              transProgress.t
            )
            lerpLook.lerpVectors(PUSH_LOOK, BROADCAST_LOOK, transProgress.t)
            cam.lookAt(lerpLook)
          },
          onComplete() {
            cam.position.set(...BROADCAST_POS)
            cam.lookAt(BROADCAST_LOOK)
            setCueBallVisible(true)
            setTimeout(() => { impulseScheduled.current = true }, 80)
          },
        },
        '+=0.3'
      )

      timelineRef.current = tl
      if (isVisible) tl.play()
    }, 350)

    return () => {
      clearTimeout(timer)
      timelineRef.current?.kill()
    }
  }, [])

  useEffect(() => {
    if (!timelineRef.current) return
    isVisible ? timelineRef.current.play() : timelineRef.current.pause()
  }, [isVisible])

  useFrame(() => {
    if (!impulseScheduled.current || impulseApplied.current || !cueBallRef.current) return
    cueBallRef.current.applyImpulse({ x: 0.0008, y: 0, z: -0.006 }, true)
    impulseApplied.current = true
  })

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={WIDE_START}
        fov={40}
        onUpdate={(cam) => cam.lookAt(WIDE_LOOK)}
      />
      <Lights />
      <Physics gravity={[0, -9.81, 0]} interpolate colliders={false} timeStep={1 / 120}>
        <PoolTable />
        <Rack />
        <CueBall ref={cueBallRef} visible={cueBallVisible} />
      </Physics>
    </>
  )
}
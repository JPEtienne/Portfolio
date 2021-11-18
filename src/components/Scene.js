import React, { Suspense, useMemo } from 'react'
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from 'react-three-fiber'
import * as THREE from 'three'
import circleImg from '../assets/circle.png'

function Points() {
  const imgTexture = useLoader(THREE.TextureLoader, circleImg)

  const count = 100
  const separation = 3
  let positions = useMemo(() => {
    let positions = []

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = separation * (xi - count / 2)
        let z = separation * (zi - count / 2)
        let y = 0
        positions.push(x, y, z)
      }
    }

    return new Float32Array(positions)
  }, [count, separation])

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={['attributes', 'position']}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        attach="material"
        map={imgTexture}
        color={0xf19232}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  )
}

export default function AnimationCanvas() {
  return (
    <Canvas
      colorManagement={false}
      camera={{ position: [100, 10, 0], fov: 75 }}
    >
        <Points />
      {/* <Suspense fallback={null}>
      </Suspense> */}
    </Canvas>
  )
}

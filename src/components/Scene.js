import React, { useMemo, useCallback, useRef } from 'react'
import { Canvas, useFrame, useLoader } from 'react-three-fiber'
import * as THREE from 'three'
import circleImg from '../assets/circle.png'

function Points() {
  const imgTexture = useLoader(THREE.TextureLoader, circleImg)
  const materialRef = useRef()
  const bufferRef = useRef()

  let t = 0
  let f = 0.8
  let a = 0.5

  const graph = useCallback(
    (x, y) => {
      return Math.sin(f * (x * 0.7 + y * 0.3 + t)) * a
    },
    [t, f, a]
  )

  const count = 30
  const separation = 0.5
  let positions = useMemo(() => {
    let positions = []

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = separation * (xi - count / 2)
        let z = separation * (zi - count / 2)
        let y = graph(x, z)
        positions.push(x, y, z)
      }
    }
    return new Float32Array(positions)
  }, [count, separation, graph])

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null
  }

  useFrame(() => {
    t += 0.01
    const positions = bufferRef.current.array
    const currentColors = materialRef.current.color
    const sColor = sessionStorage.getItem('color')
    if (sColor) {
      const { r, g, b } = hexToRgb(sColor)
      currentColors.r = (r / 255) * 2
      currentColors.g = (g / 255) * 0.6
      currentColors.b = (b / 255) * 1
      console.log(currentColors)
    }
    let i = 0
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = separation * (xi - count / 2)
        let z = separation * (zi - count / 2)
        positions[i + 1] = graph(x, z)
        i += 3
      }
    }
    materialRef.current.needsUpdate = true
    bufferRef.current.needsUpdate = true
  })

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attachObject={['attributes', 'position']}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        ref={materialRef}
        attach="material"
        map={imgTexture}
        color={0xf0861a}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  )
}

export default function AnimationCanvas({ color }) {
  return (
    <Canvas colorManagement={false} camera={{ position: [50, 35, 90], fov: 5 }}>
      <Points color={color} />
      {/* <Suspense fallback={null}>
      </Suspense> */}
    </Canvas>
  )
}

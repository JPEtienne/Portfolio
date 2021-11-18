import React, { Suspense } from 'react'
import * as s from '../styles/hero.module.scss'
import AnimationCanvas from './Scene'

export default function Hero() {
  const isSSR = typeof window === 'undefined'
  return (
    <div className={s.hero}>
      {!isSSR && (
        <Suspense fallback={<div>Loading...</div>}>
          <AnimationCanvas />
        </Suspense>
      )}
    </div>
  )
}

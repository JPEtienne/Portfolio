import React, { Suspense } from 'react'
import * as s from '../styles/hero.module.scss'
import AnimationCanvas from './Scene'

export default function Hero({color}) {
  const isSSR = typeof window === 'undefined'
  return (
    <div className={s.hero}>
      {!isSSR && (
        <Suspense fallback={<div>Loading...</div>}>
          <AnimationCanvas className="canvas" color={color}/>
        </Suspense>
      )}
      <div className={s.heroContent}>
        <div className={s.content}>
          <div className={s.title}>
            <h1>WEB DEVELOPER</h1>
            <h2>REACT</h2>
            <h2 style={{ display: 'none' }}>VUE</h2>
            <button type="button" className={s.heroContact}>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

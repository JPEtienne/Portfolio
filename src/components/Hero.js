import React, { Suspense } from 'react'
import * as s from '../styles/hero.module.scss'
import AnimationCanvas from './Scene'


export default function Hero() {
  return (
    <div className={s.hero}>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <AnimationCanvas />
      {/* </Suspense> */}
    </div>
  )
}

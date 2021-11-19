import React, { Suspense } from 'react'
import * as s from '../styles/hero.module.scss'
import AnimationCanvas from './Scene'
import { motion } from 'framer-motion'

export default function Hero({ color }) {
  const isSSR = typeof window === 'undefined'
  return (
    <section className={s.hero}>
      {!isSSR && (
        <Suspense fallback={<div>Loading...</div>}>
          <AnimationCanvas className="canvas" color={color} />
        </Suspense>
      )}
      <div className={s.heroContent}>
        <div className={s.content}>
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, translateX: '-5%' },
              show: { opacity: 1, translateX: '0%' },
            }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className={s.title}
          >
            <div>
              <h1>WEB DEVELOPER</h1>
              <h2>REACT</h2>
              <h2 style={{ display: 'none' }}>VUE</h2>
            </div>
            <a type="button" className={s.heroContact}>
              Contact me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import * as s from '../styles/hero.module.scss'
import { motion } from 'framer-motion'
import AnimationCanvas from './Scene'
import React from 'react'

export default function Hero() {
  return (
    <section className={s.hero}>
      <AnimationCanvas className="canvas" />
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
            <a href="#" className={s.heroContact}>
              Contact me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

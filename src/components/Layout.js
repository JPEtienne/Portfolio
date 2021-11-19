import * as s from '../styles/layout.module.scss'
import { motion } from 'framer-motion'
import React from 'react'

export default function Layout() {
  const changeStyle = (color) => {
    let desiredColor
    let desiredHover
    switch (color) {
      case 1:
        desiredColor = '#f0861a'
        desiredHover = '#f19232'
        break
      case 2:
        desiredColor = '#f80735'
        desiredHover = '#fa1d46'
        break
      case 3:
        desiredColor = '#47bfd9'
        desiredHover = '#57c9e2'
        break
      case 4:
        desiredColor = '#be6bff'
        desiredHover = '#c288ee'
        break
    }
    sessionStorage.setItem('color', desiredColor)
    document.documentElement.style.setProperty('--currentColor', desiredColor)
    document.documentElement.style.setProperty('--currentColorHover', desiredHover)
  }

  return (
    <div className={s.layout}>
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, translateY: '-40%' },
          show: { opacity: 1, translateY: '-50%' },
        }}
        transition={{ delay: 0.1, duration: 0.6}}
        className={s.left}
      >
        <nav>
          <ul>
            <li>
              <a href="https://bit.ly/3Cxdl9l" target="_blank">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="https://bit.ly/3CuDm9b" target="_blank">
                <i className="fab fa-github" />
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a href="#"> Contact</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">SKills</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <p>JP</p>
            </li>
          </ul>
        </nav>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, translateY: '-60%' },
          show: { opacity: 1, translateY: '-50%' },
        }}
        transition={{ delay: 0.1, duration: 0.6}} className={s.right}>
        <div onClick={() => changeStyle(1)}></div>
        <div onClick={() => changeStyle(2)}></div>
        <div onClick={() => changeStyle(3)}></div>
        <div onClick={() => changeStyle(4)}></div>
      </motion.div>
    </div>
  )
}

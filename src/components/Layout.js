import React from 'react'
import * as s from '../styles/layout.module.scss'

export default function Layout() {
  const changeStyle = (color) => {
    let desiredColor
    switch (color) {
      case 1:
        desiredColor = '#f0861a'
        break
      case 2:
        desiredColor = '#f80735'
        break
      case 3:
        desiredColor = '#47bfd9'
        break
      case 4:
        desiredColor = '#be6bff'
        break
    }
    sessionStorage.setItem('color', desiredColor)
    document.documentElement.style.setProperty('--currentColor', desiredColor)
  }

  return (
    <div className={s.layout}>
      <div className={s.left}>
        <nav>
          <ul>
            <li>
              <i className="fab fa-linkedin-in" />
            </li>
            <li>
              <i className="fab fa-github" />
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
      </div>
      <div className={s.right}>
        <div onClick={() => changeStyle(1)}></div>
        <div onClick={() => changeStyle(2)}></div>
        <div onClick={() => changeStyle(3)}></div>
        <div onClick={() => changeStyle(4)}></div>
      </div>
    </div>
  )
}

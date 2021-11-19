import { NineCellLoading } from 'react-loadingg'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { Helmet } from 'react-helmet'
import * as React from 'react'
import { Suspense } from 'react'

import '../styles/global.scss'

export default function Home() {
  const isSSR = typeof window === 'undefined'
  const sColor = sessionStorage.getItem('color') ?? false
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </Helmet>
      {isSSR && <NineCellLoading color={sColor ?? '#f0861a'}/>}
      {!isSSR && (
        <>
          <Suspense fallback={<NineCellLoading color={sColor ?? '#f0861a'}/>}>
            <Layout />
            <Hero />
          </Suspense>
        </>
      )}
    </>
  )
}

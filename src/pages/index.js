import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'
import '../styles/global.scss'

export default function Home() {
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
      <Layout />
      <Hero />
    </>
  )
}

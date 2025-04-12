import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Common = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default Common
import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../components/nav'
import Footer from '../components/Footer'


const MainLayout = () => {
  return (
    <>
      <header>
        <Nav/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default MainLayout

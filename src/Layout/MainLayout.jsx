import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../components/nav'


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
        <p>Copyright &copy; 2023</p>
      </footer>
    </>
  )
}

export default MainLayout

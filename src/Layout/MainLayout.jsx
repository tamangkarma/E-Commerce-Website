import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Nav from '../components/Nav'


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

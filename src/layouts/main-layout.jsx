import React from 'react'
import { Header,Footer } from '../components'
import { Outlet } from 'react-router-dom'
export const MainLayout = () => {
  return (
    <>
      <header >
        <Header />
      </header>
      <main>

        <div className='container'>
          <Outlet />

        </div>
      </main>
      <footer>
        <div className='container'>
          <Footer />

        </div>
      </footer>

    </>
  )
}

import { Outlet } from 'react-router'
import Footer from './footer'
import MainContent from './main-content'

export default function LayoutMain() {
  return (
    <>
      <MainContent className='mt-4 md:mt-8'>
        <Outlet />
      </MainContent>

      <Footer />
    </>
  )
}

import {Outlet} from 'react-router-dom'
import SideNavbar from './SideNavbar'
import TopNavbar from './TopNavbar'
function Layout(){
  return (
    <div className="flex gap-4">
      <TopNavbar />
      <SideNavbar />
      <main className="w-full mt-20 p-6 pb-12 overflow-y"><Outlet /></main>
    </div>
  )
}

export default Layout
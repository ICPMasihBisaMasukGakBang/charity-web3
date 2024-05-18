
import {Outlet} from 'react-router-dom'
import SideNavbar from './SideNavbar'
import TopNavbar from './TopNavbar'
function Layout(){
  return (
    <div className="font-ibm-plex-sans">
      <TopNavbar />
      <div className="flex md:flex-row flex-col gap-4">
        <SideNavbar />
        <main className="w-full mt-20 p-6 pb-12 overflow-y"><Outlet /></main>
      </div>
    </div>
  )
}

export default Layout
import { FcEnteringHeavenAlive } from "react-icons/fc";
import { MdOutlineExplore } from "react-icons/md";
import { IoWalletOutline, IoMenuSharp, IoSettingsOutline, IoSearchOutline, IoCreateOutline  } from "react-icons/io5";
import {NavLink} from 'react-router-dom'
import {useState} from 'react'

export default function SideNavbar(){
  const [menuToggle, setMenuToggle] = useState(false)
  const handleMenuMobile = () => {
    setMenuToggle(!menuToggle)
  }
  return (
    <div className={`md:sticky fixed md:h-screen ${menuToggle ? "h-screen": ""} top-0 left-0 right-0 flex flex-col z-20 bg-white gap-2 items-center shadow-[5px_4px_4px_#00000080]`}>
      <div className="flex items-center justify-between px-4 w-full">
        <FcEnteringHeavenAlive className="text-center text-black" size={64} />
        <div className="md:hidden block" onClick={handleMenuMobile}>
          <IoMenuSharp size={24} />
        </div>
      </div>
      <div className={`${menuToggle ? "block": "hidden"} md:block w-full`}> 
        <nav>
          <ul className="flex flex-col">
            <li>
              <NavLink to="/explore" className={({isActive}) => `${isActive ? "active": ""} flex items-center gap-2 px-6 py-2`}>
                <MdOutlineExplore size={24} />
                Explore
              </NavLink>
            </li>
            <li>
              <NavLink to="/charity" className={({isActive}) => `${isActive ? "active": ""} flex items-center gap-2 px-6 py-2`}>
                <IoCreateOutline size={24} />
                Create
              </NavLink>
            </li>
            <li>
              <NavLink to="/donate" className={({isActive}) => `${isActive ? "active": ""} flex items-center gap-2 px-6 py-2 `}>
                <IoCreateOutline size={24} />
                Donate
              </NavLink>
            </li>
            <li>
              <NavLink to="/transaction" className={({isActive}) => `${isActive ? "active": ""} flex items-center gap-2 px-6 py-2`}>
                <IoWalletOutline size={24} />
                Transaction
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" className={({isActive}) => `${isActive ? "active": ""} flex gap-2 items-center px-6 py-2`}>
                <IoSettingsOutline size={24} />
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex md:hidden items-center rounded-full w-full px-4 gap-2">
          <IoSearchOutline className="text-gray-500" size={28} />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
  )
}

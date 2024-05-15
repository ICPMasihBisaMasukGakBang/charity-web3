import { FcEnteringHeavenAlive } from "react-icons/fc";
import { MdOutlineExplore } from "react-icons/md";
import { IoWalletOutline,IoSettingsOutline, IoCreateOutline  } from "react-icons/io5";
import {NavLink} from 'react-router-dom'

export default function SideNavbar(){
  return (
    <div className="sticky h-screen top-0 left-0 right-0 flex flex-col z-20 bg-white gap-2 items-center shadow-[5px_4px_4px_#00000080] w-[15%]">
      <FcEnteringHeavenAlive className="text-center text-black" size={64} />
      <nav className=" w-full">
        <ul className="flex flex-col gap-4">
          <li>
            <NavLink to="/donate/explore" className={`flex px-6 items-center gap-2 py-2`}>
              <MdOutlineExplore size={24} />
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink to="/donate/create" className={`flex px-6 items-center gap-2 py-2`}>
              <IoCreateOutline size={24} />
              Create
            </NavLink>
          </li>
          <li>
            <NavLink to="/donate" className={`flex px-6 items-center gap-2 py-2`}>
              <IoCreateOutline size={24} />
              Donate
            </NavLink>
          </li>
          <li>
            <NavLink to="/transaction" className={`flex px-6 items-center gap-2 py-2`}>
              <IoWalletOutline size={24} />
              Transaction
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={`flex px-6 items-center gap-2 py-2`}>
              <IoSettingsOutline size={24} />
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

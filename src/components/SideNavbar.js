"use client"
import { FcEnteringHeavenAlive } from "react-icons/fc";
import { MdOutlineExplore } from "react-icons/md";
import { IoWalletOutline,IoSettingsOutline, IoCreateOutline  } from "react-icons/io5";
import Link from 'next/link'
import { usePathname } from "next/navigation";

export default function SideNavbar(){
  const pathname = usePathname()
  return (
    <div className="sticky h-screen top-0 left-0 right-0 flex flex-col z-20 bg-white gap-2 items-center shadow-[5px_4px_4px_#00000080] w-[15%]">
      <FcEnteringHeavenAlive className="text-center text-black" size={64} />
      <nav className=" w-full">
        <ul className="flex flex-col gap-4">
          <li className={`flex px-6 items-center gap-2 py-2 ${pathname === "/donate/explore" ? "active": ""}`}>
            <MdOutlineExplore size={24} />
            <Link href="/donate/explore">Explore</Link>
          </li>
          <li className={`flex px-6 items-center gap-2 py-2 ${pathname === "/donate/create" ? "active": ""}`}>
            <IoCreateOutline size={24} />
            <Link href="/donate/create">Create</Link>
          </li>
          <li className={`flex px-6 items-center gap-2 py-2 ${pathname === "/wallet" ? "active": ""}`}>
            <IoWalletOutline size={24} />
            <Link href="/wallet">Wallet</Link>
          </li>
          <li className={`flex px-6 items-center gap-2 py-2 ${pathname === "/settings" ? "active": ""}`}>
            <IoSettingsOutline size={24} />
            <Link href="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

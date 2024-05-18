import {  IoSearchOutline } from "react-icons/io5";
import { GoBellFill } from "react-icons/go";
import { FaUser } from "react-icons/fa6";

export default function TopNavbar(){
  return (
    <div className="fixed z-[14] top-0 hidden md:flex left-0 flex gap-6 px-6 justify-end items-center bg-red-orange h-16 w-full">
      <div className="flex items-center rounded-full bg-white w-max px-4 gap-2">
        <IoSearchOutline className="text-gray-500" size={28} />
        <input className="px-2" type="text" placeholder="Search..." />
      </div>
      <div className="flex gap-4">
        <GoBellFill className="rounded-full bg-white text-gray-500" size={28} />
        <FaUser className="rounded-full bg-white text-gray-500" size={28} />
      </div>
    </div>
  )
}
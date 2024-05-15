import SideNavbar from "@/components/SideNavbar";
import TopNavbar from "@/components/TopNavbar";

export default function LayoutNavbar({children}){
  return (
    <div className="flex gap-4">
      <TopNavbar />
      <SideNavbar />
      <main className="w-full mt-20 p-6 pb-12">{children}</main>
    </div>
  )
}
import Link from "next/link";

export default function LoginForm(){
  return (
    <div className="flex justify-center items-center mx-auto h-screen w-[90%]">
      <div className="relative flex flex-col bg-white shadow-[10px_10px_#FD5A47] items-center w-full rounded-md h-4/5 justify-center border border-black">
        <h1 className="absolute -top-8 rounded-full px-6 py-2 left-20 text-white bg-red-orange font-press-start-2p">Login</h1>
        <div className="flex flex-col gap-2 justify-center w-[90%]">
          <div className="flex flex-col">
            <label className="pl-4" htmlFor="email">Email :</label>
            <input type="email" id="email" placeholder="Enter your email" className="bg-muted placeholder:text-muted py-2 px-4 border border-black rounded-full" />
          </div>
          <div className="flex flex-col">
            <label className="pl-4" htmlFor="username">Username :</label>
            <input type="text" id="username" placeholder="Enter your username" className="bg-muted placeholder:text-muted py-2 px-4 border border-black rounded-full" />
          </div>
          <div className="flex flex-col">
            <label className="pl-4" htmlFor="password">Password :</label>
            <input type="password" id="password" placeholder="Enter your password" className="bg-muted placeholder:text-muted py-2 px-4 border border-black rounded-full" />
          </div>
            <div className="flex flex-col pt-8 gap-2 justify-center">
              <button type="submit" className="bg-success py-2 px-4 shadow-[4px_4px_black] font-press-start-2p mx-auto p-2 rounded-md text-white">Login</button>
            <span className="mx-auto">Already have an account? <Link className="underline" href="/register">Register</Link></span>
          </div>
        </div>
      </div>
    </div>
  )
}
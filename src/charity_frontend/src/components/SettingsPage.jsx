function SettingsPage(){
  return (
    <div className="border border-black py-12 space-y-6 px-6 rounded-md shadow-[10px_10px_#FD5A47]">
      <div className="flex flex-col bg-white items-center w-full justify-center">
        <h1 className="relative -bottom-6 rounded-full px-6 py-2 mx-auto text-white bg-red-orange font-press-start-2p">Personal Data</h1>
        <div className="flex flex-col gap-2 justify-center w-full p-8 border border-black rounded-md">
          <div className="flex flex-col gap-2 justify-center w-[90%]">
            <div className="flex flex-col">
              <label className="pl-4" htmlFor="email">Email :</label>
              <input type="email" id="email" placeholder="Enter your email" className="bg-muted placeholder:text-muted py-2 px-4 border border-black rounded-full" />
            </div>
            <div className="flex flex-col">
              <label className="pl-4" htmlFor="username">Username :</label>
              <div className="flex flex-wrap gap-2">
                <input type="text" id="username" placeholder="Enter your username" className="bg-muted placeholder:text-muted py-2 px-4 border border-black rounded-full" />
                <button className="text-white border border-black bg-success p-2 rounded-md shadow-[5px_5px_black]">Change</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white items-center w-full justify-center">
        <h1 className="relative -bottom-6 rounded-full px-6 py-2 mx-auto text-white bg-red-orange font-press-start-2p">Password</h1>
        <div className="flex flex-col gap-2 justify-center w-full p-8 border border-black rounded-md">
          <div className="flex flex-col gap-2 justify-center w-[90%]">
            <div className="flex flex-col">
              <label className="pl-4" htmlFor="oldPassword">Old Password :</label>
              <input type="password" id="oldPassword" placeholder="Enter your old password" className="bg-muted placeholder:text-muted py-2 px-4 border border-black rounded-full" />
            </div>
            <div className="flex flex-col">
              <label className="pl-4" htmlFor="newPassword">New Password :</label>
              <input type="password" id="newPassword" placeholder="Enter your new password" className="bg-muted placeholder:text-muted py-2 px-4 border border-black rounded-full" />
            </div>
            <div className="flex flex-col">
              <label className="pl-4" htmlFor="password">Confirm Password :</label>
              <input type="password" id="password" placeholder="Confirm your password" className="bg-muted placeholder:text-muted py-2 px-4 border border-black rounded-full" />
            </div>
            <button className="text-white border w-max border-black bg-success p-2 rounded-md shadow-[5px_5px_black]">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
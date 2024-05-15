import {IoShareSocial} from 'react-icons/io5'
function DonatePage(){
  return (
    <div className="flex flex-col gap-4 p-8 w-full">
      <div className="flex gap-4 border border-black rounded-md shadow-[10px_8px_#FC7DA8]">
        <div className="p-2">
          <img src="https://placehold.co/500x300/png" alt="placeholder" className="rounded-md" width={500} height={300} />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <h1 className="font-semibold text-balance">Solidarity to Help fellow People Affected by Disasters</h1>
          <span className="text-muted">Volunteer School</span>
          <div className="bg-muted rounded-full w-full h-2 relative">
            <div className="w-1/4 h-2 rounded-full bg-success" />
          </div>
          <div className="flex h-16 justify-between">
            <div className="flex flex-col">
              <span>Collected</span>
              <span className="text-success font-bold">500 DNT</span>
            </div>
            <div className="flex items-center py-4 px-2 my-auto justify-end h-1/2 text-blue-500 gap-2 border border-blue-500 rounded-md">
              <IoShareSocial size={32} />
              <span>Share</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="pl-2">Donation Amount</h2>
        <div className="flex justify-between gap-2">
          <div className="border border-black rounded-md py-2 px-12 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
            10 DNT
          </div>
          <div className="border border-black rounded-md py-2 px-12 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
            20 DNT
          </div>
          <div className="border border-black rounded-md py-2 px-12 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
            50 DNT
          </div>
          <div className="border border-black rounded-md py-2 px-12 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
            100 DNT
          </div>
          <div className="border border-black rounded-md py-2 px-12 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
            500 DNT
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="pl-4" htmlFor="otherAmount">Other Nominal Amount :</label>
        <input type="text" id="otherAmount" placeholder="Enter the amount" className="bg-muted text-muted py-2 px-4 border border-black rounded-full" />
        <p className="pl-6 text-[#5E5E5E]">Min. Donation of 5 DNT</p>
      </div>
      <button type="submit" className="my-8 bg-success w-max mx-auto p-2 border border-black rounded-md shadow-[5px_5px_black] text-white font-press-start-2p">
        Continue Payment
      </button>
    </div>
  )
}

export default DonatePage;
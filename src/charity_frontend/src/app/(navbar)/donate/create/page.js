import { FaWheelchair } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

export default function CreateDonate(){
  return (
    <div className="border border-black py-12 px-6 rounded-md shadow-[10px_10px_#FD5A47]">
      <div className="flex flex-col gap-8 p-2">
        <div className="relative flex flex-col bg-white items-center w-full rounded-md justify-center border border-black">
          <h1 className="absolute z-[12] -top-6 rounded-full px-6 py-2 mx-auto text-white bg-red-orange font-press-start-2p">Objective</h1>
          <div className="flex flex-col gap-2 justify-center w-full p-8">
            <div className="flex flex-col">
              <label className="pl-4" htmlFor="category">Select Category</label>
              <div className="flex items-center w-max relative">
                <select placeholder="disabled" className="border border-black rounded-full bg-muted placeholder:text-muted px-12 p-1" >
                  <option value="disabled">
                    <FaWheelchair className="absolute left-4" size={24} />
                    Disabled
                  </option>
                  <FaChevronDown className="absolute right-4" size={24} />
                </select>
              </div>
              <h2>Donation will be directed to :</h2>
              <div className="flex gap-8">
                <div className="border border-black rounded-md py-2 px-9 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
                  Activities / Program
                </div>
                <div className="border border-black rounded-md py-2 px-9 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
                  Operational cost of institution
                </div>
                <div className="border border-black rounded-md py-2 px-9 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
                  Repair of infrastructure
                </div>
                <div className="border border-black rounded-md py-2 px-9 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
                  Victims of natural disaster
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col bg-white items-center w-full rounded-md justify-center border border-black">
          <h1 className="absolute z-[12] -top-6 rounded-full px-6 py-2 mx-auto text-white bg-red-orange font-press-start-2p">Personal Data</h1>
          <div className="flex flex-col gap-2 justify-center w-full p-8">
            <div className="flex flex-col">
              <label className="pl-4" htmlFor="name">Name :</label>
              <input type="text" id="name" placeholder="Enter your name" className="bg-muted placeholder:text-muted py-2 px-4 border border-black rounded-full" />
            </div>
            <div className="flex flex-col">
              <label className="pl-4" htmlFor="cellphone">No. Cellphone :</label>
              <input type="number" id="cellphone" placeholder="Enter your number" className="bg-muted placeholder:text-muted py-2 px-4 border border-black rounded-full" />
            </div>
            <div className="flex flex-col">
              <label className="pl-4" htmlFor="job">Current Job :</label>
              <input type="text" id="job" placeholder="Enter your job" className="bg-muted placeholder:text-muted py-2 px-4 border border-black rounded-full" />
            </div>
            <div className="flex flex-col">
              <label className="pl-4" htmlFor="workplace">Name of Workplace :</label>
              <input type="text" id="workplace" placeholder="Enter your workplace" className="bg-muted placeholder:text-muted py-2 px-4 border border-black rounded-full" />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col bg-white items-center w-full rounded-md justify-center border border-black">
          <h1 className="absolute z-[12] -top-6 rounded-full px-6 py-2 mx-auto text-white bg-red-orange font-press-start-2p">Recipient</h1>
          <div className="flex flex-col gap-2 justify-center w-full p-8">
            <div className="flex flex-col">
              <label className="pl-4" htmlFor="event">Name of event/program :</label>
              <textarea id="event" placeholder="Fill the name of event/program" className="bg-muted max-h-32 placeholder:text-muted h-12 py-2 px-4 border min-h-12 my-auto border-black rounded-md" />
            </div>
            <div className="flex flex-col">
              <label className="pl-4" htmlFor="purpose">The purpose of organizing events/programs :</label>
              <textarea id="purpose" placeholder="Fill the purpose of event/program" className="bg-muted max-h-32 placeholder:text-muted h-12 py-2 px-4 border min-h-12 my-auto border-black rounded-md" />
            </div>
            <div className="flex flex-col">
              <label className="pl-4" htmlFor="location">Location :</label>
              <textarea id="location" placeholder="Fill the activity location" className="bg-muted max-h-32 placeholder:text-muted py-2 px-4 border min-h-12 my-auto border-black h-12 rounded-md" />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col bg-white items-center w-full rounded-md justify-center border border-black">
          <h1 className="absolute z-[12] -top-6 rounded-full px-6 py-2 mx-auto text-white bg-red-orange font-press-start-2p">Donation Target</h1>
          <div className="flex flex-col w-full justify-between gap-2 p-8">
            <h2>Long the fundraising will last :</h2>
            <div className="flex gap-8">
              <div className="border border-black rounded-md py-2 px-12 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
                30 days
              </div>
              <div className="border border-black rounded-md py-2 px-12 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
                2 months
              </div>
              <div className="border border-black rounded-md py-2 px-12 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
                3 months
              </div>
              <div className="border border-black rounded-md py-2 px-12 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
                Select a date
              </div>
            </div>
            <label htmlFor="detailFunds">Details of the use of funds</label>
            <textarea id="detailFunds" placeholder="Fill the activity location" className="bg-muted max-h-32 placeholder:text-muted py-2 px-4 border min-h-12 my-auto border-black h-12 rounded-md"></textarea>
          </div>
        </div>
        <button type="submit" className="bg-success py-2 px-4 shadow-[4px_4px_black] font-press-start-2p mx-auto p-2 rounded-md text-white">Create</button>
      </div>
    </div>
  )
}
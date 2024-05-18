import { FaWheelchair, FaChevronDown } from "react-icons/fa6"; 
import { charity_backend } from '../../../declarations/charity_backend';
import {useRef} from 'react'

function CreateDonate(){
  const formRef = useRef(null);
  async function createCharityDonate(data){
    const charityPost= await charity_backend.createCharityPost(data);
    console.log(charityPost);
  }
  async function handleSubmit(e) {  
    e.preventDefault();
    const formData = new FormData(formRef.current)
    const donators = await charity_backend.getDonators()
    console.log(donators)
    const data = {
      category: formData.get("category"),
      name: formData.get("name"),
      phone: formData.get("cellphone"),
      typeDonation: formData.get("typeDonate"),
      detailOfFund: formData.get("detailFunds"),
      event: formData.get("event"),
      currentJob: formData.get("job"),
      donationTargetRangeDate: formData.get("date"),
      location: formData.get("location"),
      purpose: formData.get("purpose"),
      workplace: formData.get("workplace"),
      idCharity: donators[0].idCharity
    }
    await createCharityDonate(data);
    const getCharity = await charity_backend.getCharityPosts()
    console.log(getCharity)
  }
  return (
    <div className="border border-black py-12 px-6">
      <form ref={formRef} onSubmit={handleSubmit} className="max-w-full m-0 flex flex-col gap-8 p-2">
        <div className="flex flex-col bg-white items-center w-full justify-center">
          <h1 className="relative  -bottom-6 rounded-full px-6 py-2 mx-auto text-white bg-red-orange font-press-start-2p">Objective</h1>
          <div className="flex flex-col gap-2 justify-center w-full p-8 border border-black rounded-md">
            <div className="flex flex-col">
              <label className="pl-4" htmlFor="category">Select Category</label>
              <div className="flex items-center w-max relative">
                <select name="category" placeholder="disabled" className="border border-black rounded-full bg-muted placeholder:text-muted px-12 p-1" >
                  <option value="disabled">
                    <FaWheelchair className="absolute left-4" size={24} />
                    Disabled
                  </option>
                  <FaChevronDown className="absolute right-4" size={24} />
                </select>
              </div>
              <h2>Donation will be directed to :</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="flex items-center border border-black rounded-md py-2 px-9 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
                  <input type="radio" className="opacity-0" id="activity" value="Activities / Program" name="typeDonate" />
                  <label htmlFor="activity">Activities / Program</label>
                </div>
                <div className="flex items-center border border-black rounded-md py-2 px-9 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
                  <input type="radio" className="opacity-0" id="operational" value="Operational cost of institution" name="typeDonate" />
                  <label htmlFor="operational">Operational cost of institution</label>
                </div>
                <div className="flex items-center border border-black rounded-md py-2 px-9 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
                  <input type="radio" className="opacity-0" id="repair" value="Repair of infrastructure" name="typeDonate" />
                  <label htmlFor="repair">Repair of infrastructure</label>
                </div>
                <div className="flex items-center border border-black rounded-md py-2 px-9 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
                  <input type="radio" className="opacity-0" id="victims" value="Victims of natural disaster" name="typeDonate" />
                  <label htmlFor="victims">Victims of natural disaster</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white items-center w-full justify-center">
          <h1 className="relative -bottom-6 rounded-full px-6 py-2 mx-auto text-white bg-red-orange font-press-start-2p">Personal Data</h1>
          <div className="flex flex-col gap-2 justify-center w-full p-8 border border-black rounded-md">
            <div className="flex flex-col">
              <label className="pl-4" htmlFor="name">Name :</label>
              <input type="text" name="name" id="name" placeholder="Enter your name" className="bg-muted placeholder:text-muted py-2 px-4 border border-black rounded-full" />
            </div>
            <div className="flex flex-col">
              <label className="pl-4" htmlFor="cellphone">No. Cellphone :</label>
              <input type="number" name="cellphone" id="cellphone" placeholder="Enter your number" className="bg-muted placeholder:text-muted py-2 px-4 border border-black rounded-full" />
            </div>
            <div className="flex flex-col">
              <label className="pl-4" htmlFor="job">Current Job :</label>
              <input type="text" name="job" id="job" placeholder="Enter your job" className="bg-muted placeholder:text-muted py-2 px-4 border border-black rounded-full" />
            </div>
            <div className="flex flex-col">
              <label className="pl-4" htmlFor="workplace">Name of Workplace :</label>
              <input type="text" name="workplace" id="workplace" placeholder="Enter your workplace" className="bg-muted placeholder:text-muted py-2 px-4 border border-black rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white items-center w-full justify-center">
          <h1 className="relative -bottom-6 rounded-full px-6 py-2 mx-auto text-white bg-red-orange font-press-start-2p">Recipient</h1>
          <div className="flex flex-col gap-2 justify-center w-full p-8 border border-black rounded-md">
            <div className="flex flex-col">
              <label className="pl-4" htmlFor="event">Name of event/program :</label>
              <textarea name="event" id="event" placeholder="Fill the name of event/program" className="bg-muted max-h-32 placeholder:text-muted h-12 py-2 px-4 border min-h-12 my-auto border-black rounded-md" />
            </div>
            <div className="flex flex-col">
              <label className="pl-4" htmlFor="purpose">The purpose of organizing events/programs :</label>
              <textarea name="purpose" id="purpose" placeholder="Fill the purpose of event/program" className="bg-muted max-h-32 placeholder:text-muted h-12 py-2 px-4 border min-h-12 my-auto border-black rounded-md" />
            </div>
            <div className="flex flex-col">
              <label className="pl-4" htmlFor="location">Location :</label>
              <textarea name="location" id="location" placeholder="Fill the activity location" className="bg-muted max-h-32 placeholder:text-muted py-2 px-4 border min-h-12 my-auto border-black h-12 rounded-md" />
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white items-center w-full justify-center">
          <h1 className="relative -bottom-6 rounded-full px-6 py-2 mx-auto text-white bg-red-orange font-press-start-2p">Donation Target</h1>
          <div className="flex flex-col w-full justify-between gap-2 p-8 border border-black rounded-md">
            <h2>Long the fundraising will last :</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="text-center border border-black rounded-md py-2 px-12 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
                <input type="radio" className="opacity-0" name="date" value="30 days" id="day30" />
                <label htmlFor="day30">30 days</label>
              </div>
              <div className="text-center border border-black rounded-md py-2 px-12 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
                <input type="radio" className="opacity-0" name="date" value="2 months" id="month2" />
                <label htmlFor="month2">2 months</label>
              </div>
              <div className="text-center border border-black rounded-md py-2 px-12 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
                <input type="radio" className="opacity-0" name="date" value="3 months" id="month3" />
                <label htmlFor="month3">3 months</label>
              </div>
              <div className="text-center border border-black rounded-md py-2 px-12 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
                <input type="date" name="date" value="" className="bg-inherit" id="selectData" />
                <label htmlFor="selectData">Select Date</label>
              </div>
            </div>
            <label htmlFor="detailFunds">Details of the use of funds</label>
            <textarea name="detailFunds" id="detailFunds" placeholder="Fill the activity location" className="bg-muted max-h-32 placeholder:text-muted py-2 px-4 border min-h-12 my-auto border-black h-12 rounded-md"></textarea>
          </div>
        </div>
        <button type="submit" className="bg-success py-2 px-4 shadow-[4px_4px_black] font-press-start-2p mx-auto p-2 rounded-md text-white">Create</button>
      </form>
    </div>
  )
}
export default CreateDonate;
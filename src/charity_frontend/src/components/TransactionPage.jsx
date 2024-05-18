import { charity_backend } from '../../../declarations/charity_backend';
import { HiOutlineDotsVertical } from "react-icons/hi";
import {useState, useEffect} from 'react'
function ExplorePage(){
  const [donators, setDonators] = useState([])
  useEffect(()=> {
    const getDonators = async() =>{
      const donators = await charity_backend.getDonators();
      setDonators(donators)
    }
    getDonators() 
  },[])
  console.log(donators)
  return (
    <>
      <div className="border flex flex-col gap-2 p-2 border-black rounded-md shadow-[10px_10px_#FD5A47]">
        <div className="grid grid-cols-4 text-center">
          <span>Address</span>
          <span>Date</span>
          <span>Amount</span>
          <span></span>
          {
            donators?.map((donator)=> {
              return (
                <>
                  <span>{donator.addressWallet}</span>
                  <span>{donator.date}</span>
                  <span className="text-success font-bold">{(donator.amount).toString()} DNT</span>
                  <span>
                    <HiOutlineDotsVertical size={32} className="text-gray-500" />
                  </span>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
export default ExplorePage;
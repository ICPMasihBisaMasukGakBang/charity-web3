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
        <table className="ml-4 mr-4 text-center">
          <thead> 
            <tr>
              <th>Address</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody> 
            {
              donators?.map((donator)=> {
                // const getAmount = async() => {
                //   return await charity_backend?.totalAmountCharityPostById(donator?.idCharity)
                // }
                // const amount = getAmount()  
                // console.log(amount)
                return (
                  // amount ? 
                    <tr className="*:px-12" key={donator?.address}>
                      <td>{donator.addressWallet}</td>
                      <td>{donator.date}</td>
                      <td className="text-success font-bold">{amount} DNT</td>
                      <td>
                        <HiOutlineDotsVertical size={32} className="text-gray-500" />
                      </td>
                    </tr>
                  // : <tr></tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
export default ExplorePage;
import { charity_backend } from '../../../declarations/charity_backend';
import {useState, useEffect} from 'react'

function WalletPage(){
  const [charityPosts, setCharityPosts] = useState([])
  useEffect(()=> {
    const getCharityPosts = async() =>{
      const charityPosting = await charity_backend.getCharityPosts();
      setCharityPosts(charityPosting)
    }
    getCharityPosts() 
  },[])
  return (
    <>
      <div className="border flex flex-col gap-4 p-2 border-black rounded-md shadow-[10px_10px_#FD5A47]">
        <div className="text-center mt-6 h-32 text-success w-[90%] border border-black rounded-md mx-auto shadow-[10px_8px_#009A5E]">
          <div className="mt-4">
            <h1 className="font-bold">
              0 DNT
            </h1>
            <p>$0, 00 USD</p>
          </div>
        </div>
        <div className="ml-4 mr-4 text-center">
          <div className="border-[#FD5A47] border-b-2"> 
            <div className="flex *:flex-grow">
              <span>Token</span>
              <span>Activity</span>
            </div>
          </div>
          <div className="grid grid-cols-2">
            {
              charityPosts?.map((charityPost)=> (
                <>
                  <span className="border-[#FD5A4757] border-r-2">{charityPost?.idCharity}</span>
                  <span>{charityPost?.typeDonation}</span>
                </>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
export default WalletPage
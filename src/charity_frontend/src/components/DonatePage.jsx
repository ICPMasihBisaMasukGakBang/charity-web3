import {IoShareSocial} from 'react-icons/io5'
import { charity_backend} from '../../../declarations/charity_backend'
import {useRef, useState, useEffect} from 'react'
function DonatePage(){
  const formRef = useRef(null)
  const [charityPostAmount, setCharityPostAmount] = useState("")
  useEffect(()=>{
    const totalAmountCharityPost = async() => {
      const charityAmount = await charity_backend.totalAmountCharityPostById("4x5zyqg");
      setCharityPostAmount(charityAmount.toString())
    }
    totalAmountCharityPost()
  },[])
  console.log({charityPostAmount})
  const handleSubmit = async(e) => {  
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const amount = parseInt(formData.get("amount"))
    console.log(amount)
    const otherAmount = parseInt(formData.get("otherAmount"))
    const donate = await charity_backend.donate({idCharity: "4x5zyqg", date: (new Date).getUTCDate().toString(),addressWallet:"oq6ts1p", address:"2ffb1at", amount: otherAmount || amount})
    console.log(donate)
  }
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col md:flex-row gap-4 border border-black rounded-md shadow-[10px_8px_#FC7DA8]">
        <div className="p-2">
          <img src="https://placehold.co/500x300/png" alt="placeholder" className="rounded-md" width={350} height={300} />
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
              <span className="text-success font-bold">{charityPostAmount} DNT</span>
            </div>
            <div className="flex items-center py-4 px-2 my-auto justify-end h-1/2 text-blue-500 gap-2 border border-blue-500 rounded-md">
              <IoShareSocial size={32} />
              <span>Share</span>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="flex flex-col">
          <h2 className="pl-2">Donation Amount</h2>
          <div className="flex flex-col flex-wrap md:flex-row gap-2">
            <div className="flex items-center border border-black rounded-md py-2 px-12 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
              <input type="radio" value="10" id="10dnt" name="amount" class="opacity-0" />
              <label htmlFor="10dnt">10 DNT</label>
            </div>
            <div className="flex items-center border border-black rounded-md py-2 px-12 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
              <input type="radio" value="20" id="20dnt" name="amount" class="opacity-0" />
              <label htmlFor="20dnt">20 DNT</label>
            </div>
            <div className="flex items-center border border-black rounded-md py-2 px-12 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
              <input type="radio" value="50" id="50dnt" name="amount" class="opacity-0" />
              <label htmlFor="50dnt">50 DNT</label>
            </div>
            <div className="flex items-center border border-black rounded-md py-2 px-12 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
              <input type="radio" value="100" id="100dnt" name="amount" class="opacity-0" />
              <label htmlFor="100dnt">100 DNT</label>
            </div>
            <div className="flex items-center border border-black rounded-md py-2 px-12 shadow-[5px_5px_#FD5A47] bg-[#FFC567]">
              <input type="radio" value="500" id="500dnt" name="amount" class="opacity-0" />
              <label htmlFor="500dnt">500 DNT</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="pl-4" htmlFor="otherAmount">Other Nominal Amount :</label>
          <input type="text" name="otherAmount" id="otherAmount" placeholder="Enter the amount" className="bg-muted text-muted py-2 px-4 border border-black rounded-full" />
          <p className="pl-6 text-[#5E5E5E]">Min. Donation of 5 DNT</p>
        </div>
        <button type="submit" className="my-8 bg-success w-max mx-auto p-2 border border-black rounded-md shadow-[5px_5px_black] text-white font-press-start-2p">
          Continue Payment
        </button>
      </form>
    </div>
  )
}

export default DonatePage;
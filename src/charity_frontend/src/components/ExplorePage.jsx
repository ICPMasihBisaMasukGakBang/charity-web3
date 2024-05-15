import { users } from "../constants";
import { HiOutlineDotsVertical } from "react-icons/hi";
function ExplorePage(){
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
              users.map((user)=> (
                <tr className="*:px-12" key={user.name}>
                  <td>{user.name}</td>
                  <td>{user.date}</td>
                  <td className="text-success font-bold">{user.funds}</td>
                  <td>
                    <HiOutlineDotsVertical size={32} className="text-gray-500" />
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
export default ExplorePage;
import { useEffect, useState } from 'react'

const AddBid = ({ auctionId }) => {
    const [amount, setAmount] = useState("")
    const [auctionID, setauctionid] = useState("")
    const [bidid, setbidid] = useState("")
    const [bidder, setbidder] = useState("")
    const [groupcode, setgroupcode] = useState("")

    const URL = `https://auctioneer2.azurewebsites.net/bid/5mlk/${auctionId}`

const NewBid = () => {
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
            
        })
    })

  return (
    <div>
        <ul>
            
        </ul>
        </div>
  )
}}

export default AddBid
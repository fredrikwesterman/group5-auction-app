import { useEffect, useState } from 'react'

const AddBid = ({ auctionId }) => {
    const [amount, setAmount] = useState("")
    const [auctionID, setAuctionID] = useState("")
    const [bidid, setBidid] = useState("")
    const [bidder, setBidder] = useState("")
    const [groupcode, setGroupCode] = useState("")
    const [bidAdded, setBidAdded] = useState (false)

    const URL = `https://auctioneer2.azurewebsites.net/bid/5mlk/${auctionId}`

const NewBid = () => {
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
            Amount: amount,
            AuctionID: auctionID,
            BidID: bidid,
            Bidder: bidder,
            GroupCode: groupcode,
        })
    })

    setAmount("")
    setAuctionID("")
    setBidid("")
    setBidder("")
    setBidAdded(true)

    setTimeout(() => {
        setBidAdded(false);
    }, "5000");

  return (
    <div>
        <h3>Add New Bid</h3>
            <form>
                <label htmlFor="amount">Amount: </label><br />
                <input
                    type="text" 
                    id="amount"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    />
                <br />

                <label htmlFor="bidder">Bidder: </label><br />
                <input
                    type="text" 
                    id="bidder"
                    required
                    value={bidder}
                    onChange={(e) => setBidder(e.target.value)}
                    />
                <br/>
                </form>
                <button onClick={(e) => NewBid(e)}>Add Bid</button>
                {bidAdded && 
                <>
                    <br />
                    <div>Bid sucessfully added!</div>
                </>
}
        </div>
  )
}}

export default AddBid
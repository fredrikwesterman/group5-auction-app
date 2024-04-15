import { useEffect, useState } from 'react'

const AddBid = ({ auctionId, allBids, setAllBids }) => {
    const [amount, setAmount] = useState("")
    const [bidder, setBidder] = useState("")
    const [groupCode, setGroupCode] = useState("5mlk")
    const [bidToLowAdded, setBidToLowAdded] = useState(false)
    // const URL = `https://auctioneer2.azurewebsites.net/bid/5mlk/${auctionId}`

const newBid = () => {
    try {
        allBids.forEach(bid => {
            if (bid.Amount >= amount) {
                setBidToLowAdded(true)
                return
            }
        });
        
        fetch(`https://auctioneer2.azurewebsites.net/bid/5mlk/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({
                Amount: amount,
                AuctionID: auctionId,
                Bidder: bidder,
                GroupCode: groupCode,
            })
        })
        
        setAmount("")
        setBidder("")
        setAllBids([...allBids, {
            AuctionID: auctionId,
            Amount: amount,
            Bidder: bidder,
            GroupCode: '5mlk'
        }]);
        } catch (error) {
            console.log('Kunde inte lägga till bud: ' + error)
        }
    }

    return (
    <div>
        <h3>Add New Bid</h3>
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
                <button className="btn btn-primary" onClick={(e) => newBid(e)}>Add Bid</button>

                {bidToLowAdded && <p>Bid to low!</p>}
        </div>
    )
}

export default AddBid
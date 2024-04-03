import { useState, useEffect } from "react"

const SingleAuction = () => {
    const BIDS_URL = 'https://auctioneer.azurewebsites.net/bid/5mlk/200'

    const [bidList, setBidList] = useState(null)
    
    useEffect(() => {
        fetch(BIDS_URL)
        .then((res) => res.json())
        .then((data) => setBidList(data))

        return () => {
            setBidList(null)
        }
    }, [])
    
    console.log(bidList)

    return (
        <>
            <h2>Title: titleState</h2>
            <p>Description: DescriptionState</p>
            <i>Created: Creation DateState</i><br />
            <i>Time till end: TimeState</i><br />
            <p>Current bid Leader:</p>
            {/* {TimeState && <AddBid />}  */}
        </>
    )
}

export default SingleAuction
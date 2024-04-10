import { useState, useEffect } from 'react'

const GetAllBids = ({ auctionId, allBids, setAllBids }) => {
    useEffect(() => {
        fetch(`https://auctioneer2.azurewebsites.net/bid/5mlk/${auctionId}`)
            .then((response) => response.json())
            .then((data) => setAllBids(data))
            .catch((error) => console.error('Error fetching auctions:', error));
        }, [allBids])

    return (
        <div>
            <ul>
                {allBids && allBids.map(bid => (
                    <li key={bid.BidID}>
                        <p>Bid: {bid.Amount}kr</p>
                        <p>Bidder: {bid.Bidder}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GetAllBids
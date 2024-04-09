import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import GetAllBids from './GetAllBids';
import AddBid from './AddBid';


const SingleAuction = ({ match }) => {

    const location = useLocation();
    const { auction } = location.state || {}
    console.log(auction)

    //vad gör detta? :D
    const [error, setError] = useState(null);
    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!auction) {
        return <div>Auction not found</div>;
    }

    const todaysDate = new Date()
    console.log(todaysDate.toLocaleDateString())

    return (

        <div>
            <h2>{auction.Title}</h2>
            <p>Description: {auction.Description}</p>
            <p>Start Date: {auction.StartDate}</p>
            <p>End Date: {auction.EndDate}</p>
            <p>Starting Price: {auction.StartingPrice}</p>
            <button className={homeStyle.auctionBtn}>
                <NavLink to={`/single-auction/${auction.AuctionID}`} state={{ auction }}>
                        Go to auction
                </NavLink>
            </button>

            {auction.EndDate > todaysDate ?
                (
            <>
                <GetAllBids auctionId={auction.AuctionID}/>
                <AddBid auctionId={auction.AuctionID} /> 
            </> 
                ) : (
                    // component that shows only the last bid here! auctionId={auction.AuctionID} som prop.
                    <p>Last bid!</p>
                )
            }
        </div>
    );
};

export default SingleAuction;
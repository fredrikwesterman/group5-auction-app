import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import GetAllBids from './GetAllBids';
import AddBid from './AddBid';
import LastBid from './LastBid';
import RemoveAuctionButton from "./RemoveAuctionButton";

const SingleAuction = ({ match }) => {
    const [allBids, setAllBids] = useState([])
    const location = useLocation();
    const { auction } = location.state || {}
    console.log(auction)

    //vad gör detta? :D ////////////////////////////
    const [error, setError] = useState(null);     //
    if (error) {                                  //
        return <div>Error: {error}</div>;         //
    }                                             //
                                                  //  
    if (!auction) {                               //
        return <div>Auction not found</div>;      //
    }                                             //
    ////////////////////////////////////////////////


    const todaysDate = new Date().toISOString()
    console.log(todaysDate)
    console.log('auctions endDate: ' + auction.EndDate)

    return (
        <div className='flex justify-center'>
        <div>
            <h2>{auction.Title}</h2>
            <p>Description: {auction.Description}</p>
            <p>Start Date: {auction.StartDate}</p>
            <p>End Date: {auction.EndDate}</p>
            <p>Starting Price: {auction.StartingPrice}</p>
            <div className='divider'></div>
            <RemoveAuctionButton auction={auction} allBids = {allBids} />
            {auction.EndDate > todaysDate ?
                (
                    <>
                        <AddBid allBids={allBids} setAllBids={setAllBids} auctionId={auction.AuctionID} /> 
                        <GetAllBids allBids={allBids} setAllBids={setAllBids} auctionId={auction.AuctionID}/>
                    </>
                ) : (
                    // component that shows only the last bid here! auctionId={auction.AuctionID} som prop.
                    <>
                        <LastBid auctionId={auction.AuctionID} />
                    </>
                )
            }
        </div>
        </div>
    );
};

export default SingleAuction;
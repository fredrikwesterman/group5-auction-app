import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import GetAllBids from "./GetAllBids";
import AddBid from "./AddBid";
import LastBid from "./LastBid";
import RemoveAuctionButton from "./RemoveAuctionButton";
import placeholder from '../img/placeholder.png'

const SingleAuction = ({ match }) => {
  const [allBids, setAllBids] = useState([]);
  const location = useLocation();
  const { auction } = location.state || {};
  console.log(auction);

  //vad gör detta? :D ////////////////////////////
  const [error, setError] = useState(null); //
  if (error) {
    //
    return <div>Error: {error}</div>; //
  } //
  //
  if (!auction) {
    //
    return <div>Auction not found</div>; //
  } //
  ////////////////////////////////////////////////

  const todaysDate = new Date().toISOString();
  console.log(todaysDate);
  console.log("auctions endDate: " + auction.EndDate);

  return (
    <div className="flex justify-center">
      <div>
        <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
          <img src={placeholder} alt='placeholder img' className="object-cover object-center" />
        </div>
        <h2><b>{auction.Title}</b></h2>
        <p><b>Description: </b>{auction.Description}</p>
        <p><b>Start Date: </b>{auction.StartDate}</p>
        <p><b>End Date: </b>{auction.EndDate}</p>
        <p><b>Starting Price: </b>{auction.StartingPrice}</p>
        <div className="divider"></div>
        <RemoveAuctionButton auction={auction} allBids={allBids} />
        {auction.EndDate > todaysDate ? (
          <>
            <AddBid
              allBids={allBids}
              setAllBids={setAllBids}
              auctionId={auction.AuctionID}
            />
            <GetAllBids
              allBids={allBids}
              setAllBids={setAllBids}
              auctionId={auction.AuctionID}
            />
          </>
        ) : (
          // component that shows only the last bid here! auctionId={auction.AuctionID} som prop.
          <>
            <LastBid auctionId={auction.AuctionID} />
          </>
        )}
      </div>
    </div>
  );
};

export default SingleAuction;

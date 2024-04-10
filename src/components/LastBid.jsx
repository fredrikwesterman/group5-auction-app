

import React, { useState, useEffect } from 'react';

const LastBid = ({ auctionId }) => {
  const [lastBid, setLastBid] = useState(null);

  useEffect(() => {
    const fetchLastBid = async () => {
      try {
       
        const response = await fetch(`https://auctioneer2.azurewebsites.net/bid/5mlk/${auctionId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch last bid');
        }
        const data = await response.json();
        const highestBid = data.reduce(function(prev, current) {
          return (prev && prev.Amount > current.Amount) ? prev : current
        })
        setLastBid(highestBid);
      } catch (error) {
        console.error('Error fetching last bid:', error);
      }
    };

    fetchLastBid();
  }, [auctionId]);
  return (
    <div>
      {lastBid ? (
        <div>
          <h3>Last bid</h3>
          <p>Amount: {lastBid.Amount}</p> 
          <p>Bidder: {lastBid.Bidder}</p>
          
          
        </div>
      ) : (
        <p>No bids yet</p>
      )}
    </div>
  );
};

export default LastBid;
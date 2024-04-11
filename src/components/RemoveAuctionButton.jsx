import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const RemoveAuctionButton = ({ auction, allBids }) => {
  // const [bidsEmpty, setBidsEmpty] = useState(auction.bids.length === 0);
  const navigate=useNavigate();

  const handleRemove = () => {
    const confirmation = window.confirm('Are you sure you want to delete this auction?');
    if (confirmation) {
      fetch(`https://auctioneer2.azurewebsites.net/auction/5mlk/${auction.AuctionID}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            // How to update the UI after deleting the auction ?
            navigate('/');
            console.log('Auction deleted successfully');
          } else {
            throw new Error('Failed to delete auction');
          }
        })
        .catch(error => {
          console.error('Error deleting auction:', error);
        });
    }
  };

  return (allBids.length === 0) ? (
    <button  onClick={handleRemove}>Remove</button>
  ) : null;
};

export default RemoveAuctionButton;

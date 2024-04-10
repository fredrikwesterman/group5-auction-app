import React, { useState } from 'react';

const RemoveAuctionButton = ({ auction }) => {
// const [bidsEmpty, setBidsEmpty] = useState(auction.bids.length === 0);
  const [bidsEmpty, setBidsEmpty] = useState(true);
  const handleRemove = () => {
    const confirmation = window.confirm('Are you sure you want to delete this auction?');
    if (confirmation) {
      fetch(`https://auctioneer2.azurewebsites.net/auction/5mlk/${auction.AuctionID}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            // How to update the UI after deleting the auction ?
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

  return bidsEmpty ? (
    <button  onClick={handleRemove}>Remove</button>
  ) : null;
};

export default RemoveAuctionButton;

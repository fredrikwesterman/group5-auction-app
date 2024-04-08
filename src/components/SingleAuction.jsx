import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'


const SingleAuction = ({ match, auctionID }) => {

    const location = useLocation();
    const { auction } = location.state || {}

    console.log(auction)

    const [theauction, settheAuction] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        if (!match || !match.params || !match.params.auctionId) {
            return;
        }
/*
    const fetchAuction = async () => {
            try {
                const response = await fetch(`https://auctioneer2.azurewebsites.net/auction/${match.params.auctionId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch auction');
                }
                const data = await response.json();
                setAuction(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchAuction();

    */

    }, [match]); 

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!auction) {
        return <div>Auction not found</div>;
    }

    return (
        <div>
            <h2>{auction.Title}</h2>
            <p>Description: {auction.Description}</p>
            <p>Start Date: {auction.StartDate}</p>
            <p>End Date: {auction.EndDate}</p>
            <p>Starting Price: {auction.StartingPrice}</p>
            {/* Andra detaljer om auktionen */}
        </div>
    );
};

export default SingleAuction;
import { useState } from "react"

const CreateAuction = () => {

    const URL = 'https://auctioneer.azurewebsites.net/auction/5mlk'
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Title: 
            Description:
            StartDate:
            EndDate:
            GroupCode:
            StartingPrice:
            CreatedBy:
        })
    })

    return (
        <>
            <h3>Add New Auction:</h3>
            <input type="text" />
        </>
    )
}

export default CreateAuction
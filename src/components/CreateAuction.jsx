import { useState } from "react"

const CreateAuction = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [groupCode, setGroupCode] = useState("")
    const [startingPrice, setStartingPrice] = useState("")
    const [createdBy, setCreatedBy] = useState("")

    const URL = 'https://auctioneer2.azurewebsites.net/auction/5mlk'

const newAuction = () => {
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Title: title,
            Description: description,
            StartDate: startDate,
            EndDate: endDate,
            GroupCode: groupCode,
            StartingPrice: startingPrice,
            CreatedBy: createdBy,
        })
    })

    setTitle("")
    setDescription("")
    setStartDate("")
    setEndDate("")
    setStartingPrice("")
    setCreatedBy("")
}

    return (
        <>
            <h3>Add New Auction:</h3>
            <form>
                <label htmlFor="createdBy">Created By</label><br />
                <input
                    type="text" 
                    id="createdBy"
                    required
                    value={createdBy}
                    onChange={(e) => setCreatedBy(e.target.value)}
                    />
                <br />

                <label htmlFor="title">Title</label><br />
                <input
                    type="text" 
                    id="title"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <br />
                
                <label htmlFor="description">Description</label><br />
                <textarea
                    id="description"
                    required
                    rows="4"
                    cols="22"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                <br />

                <label htmlFor="startingPrice">Starting Price</label><br />
                <input
                    type="text" 
                    id="startingPrice"
                    required
                    value={startingPrice}
                    onChange={(e) => setStartingPrice(e.target.value)}
                    />
                <br />

                <label htmlFor="startDate">Start Date</label><br />
                <input
                    type="datetime-local" 
                    id="startDate"
                    required
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    />
                <br />

                <label htmlFor="endDate">End Date</label><br />
                <input
                    type="datetime-local" 
                    id="endDate"
                    required
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    />
                    <br />

            </form>
            <br />

            <button onClick={(e) => newAuction(e)}>Post Auction</button>
        </>
    )
}

export default CreateAuction
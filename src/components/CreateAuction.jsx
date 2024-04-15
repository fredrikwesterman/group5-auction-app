import { useState } from "react"
import {useNavigate} from 'react-router-dom';

const CreateAuction = () => {
    const navigate=useNavigate();
    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [groupCode, setGroupCode] = useState("")
    const [startingPrice, setStartingPrice] = useState("")
    const [createdBy, setCreatedBy] = useState("")
    
    const URL = 'https://auctioneer2.azurewebsites.net/auction/5mlk'
    
    const newAuction = () => {
        
        try {
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
            .then(response => {
                if(response.ok){
                    navigate('/');
                } else {
                    throw new Error('Failed to post auction!');
                }
            })
            .catch((error) => console.log("failed to post auction" + error))

            setTitle("")
            setDescription("")
            setStartDate("")
            setEndDate("")
            setStartingPrice("")
            setCreatedBy("")
            setPostAdded(true)

    } catch(error) {
        console.log("Could not post new auction!" + error)
    }
}
    return (
        <>
        <div className="flex justify-center">
            <div>
                <label htmlFor="createdBy">Created By</label><br />
                <input
                    type="text" 
                    id="createdBy"
                    className="input input-bordered w-full max-w-xs"
                    required
                    value={createdBy}
                    onChange={(e) => setCreatedBy(e.target.value)}
                    />
                <br />

                <label htmlFor="title">Title</label><br />
                <input
                    type="text" 
                    id="title"
                    className="input input-bordered w-full max-w-xs "
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <br />
                
                <label htmlFor="description">Description</label><br />
                <textarea
                    id="description"
                    required
                    rows="3"
                    cols="44"
                    className="textarea textarea-bordered"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                <br />

                <label htmlFor="startingPrice">Starting Price</label><br />
                <input
                    type="text" 
                    id="startingPrice"
                    className="input input-bordered w-full max-w-xs"
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
                    <button className="btn btn-primary mt-4" onClick={(e) => newAuction(e)}>Post Auction</button>
                </div>
            </div>
            <br />
        </>
    )
}

export default CreateAuction
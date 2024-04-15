import { NavLink } from 'react-router-dom';

const SearchResults = ({ searchAuctions }) => {
    return (
        <>
        <div className='flex gap-4'>
            {searchAuctions.map(auction => (
                <div className="card w-200 bg-base-100 shadow-xl ">
                <div key={auction.AuctionID} className="card-body">
                    <h3>{auction.Title}</h3>
                    <p><b>Seller:</b> {auction.CreatedBy}</p>
                    <p><b>Description: </b>{auction.Description.slice(0, 20) + "..."}</p>
                    <p><b>Start Price: </b>{auction.StartingPrice}</p>
                    <p><b>Created: </b>{auction.StartDate}</p>
                    <p><b>Ending: </b>{auction.EndDate}</p>
                    <button className="btn btn-primary">
                        <NavLink to={`/single-auction/${auction.AuctionID}`} state={{ auction }}>
                            Go to auction
                        </NavLink>
                    </button>
                </div>
                </div>
            ))}
        </div>
        <div className='divider'></div>
        </>
    )
}

export default SearchResults
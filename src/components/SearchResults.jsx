import { NavLink } from 'react-router-dom';

const SearchResults = ({ searchAuctions }) => {
    return (
        <div>
            {searchAuctions.map(auction => (
                <div key={auction.AuctionID}>
                    <h3>{auction.Title}</h3>
                    <p><b>Seller:</b> {auction.CreatedBy}</p>
                    <p><b>Description: </b>{auction.Description}</p>
                    <p><b>Start Price: </b>{auction.StartingPrice}</p>
                    <p><b>Created: </b>{auction.StartDate}</p>
                    <p><b>Ending: </b>{auction.EndDate}</p>
                    <button>
                        <NavLink to={`/single-auction/${auction.AuctionID}`} state={{ auction }}>
                            Go to auction
                        </NavLink>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default SearchResults
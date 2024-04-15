// Lägger till React för att kunna använda React-komponenter i den här filen
import {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import SearchAuction from "./SearchAuction"
import SearchResults from "./SearchResults"
import homeStyle from '../styles/Home.module.css'



// Vi börjar med att lägga till en bit kod som gör en sida med en enkel React-komponent
// Det här är starten. Vi säger att vi vill göra en sida som vi kallar för 'Home'.
const Home = () => {
    const [allAuctions, setAllAuctions] = useState([]) // state with all auctions
    const [searchInput, setSearchInput] = useState('') // state for the search inputfield
    const [searchAuctions, setSearchAuctions] = useState([]) //the suppose to be filtered auctions based on the search
  
  // Gets all the Current auctions, they are stored in allAuctions. Send this as props for you components that needs the auctions.
    useEffect(() => {
      fetch('https://auctioneer2.azurewebsites.net/auction/5mlk')
        .then((response) => response.json())
        .then((data) => setAllAuctions(data))
        .catch((error) => console.error('Error fetching auctions:', error));
        return () => {
          setAllAuctions(null)      
        }
      }, [])
  
      console.log(allAuctions)
  
      useEffect(() => {

        const searchTerm = searchInput.toLowerCase();

        // Filter allAuctions based on searchInput
        const filteredAuctions = searchTerm
          ? allAuctions.filter(auction =>
              auction.Title.toLowerCase().includes(searchTerm)
            )
          : [];
        // Update searchAuctions with the filtered result
        setSearchAuctions(filteredAuctions);
  
      }, [searchInput, allAuctions]);
      
      const currentDate = new Date();
      const activeAuctions = allAuctions.filter((auction) => new Date(auction.EndDate) > currentDate);

    return (
      <>
      <div className="flex justify-center">
        <SearchAuction setSearchInput={setSearchInput}/>
      </div>

      <div className="divider"></div>
      {searchAuctions && <SearchResults searchAuctions={searchAuctions}/>}
      
     <div className="container mx-auto grid grid-cols-4 gap-4">
            {allAuctions && activeAuctions.map(auction => (
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
      </>
    )
  }

  export default Home
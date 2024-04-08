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
        return () => {
          setAllAuctions(null)      
        }
      }, [])
  
      console.log(allAuctions)
  
      useEffect(() => {
        // Filter allAuctions based on searchInput
        const filteredAuctions = allAuctions.filter(auction =>
          auction.Title.toLowerCase().includes(searchInput)
        );
        // Update searchAuctions with the filtered result
        setSearchAuctions(filteredAuctions);
  
        return () => {
          setSearchAuctions([])
        }
      }, [searchInput]);
  
      console.log(searchAuctions)


  
    return (
      <>
      <div className={homeStyle.searchbar}>
        <SearchAuction setSearchInput={setSearchInput}/>
      </div>
      {searchAuctions ? <SearchResults searchAuctions={searchAuctions}/> : <h1>No Auctions found 🤷‍♂️</h1>}

      <div className={homeStyle.auctionCardContainer}>
            {allAuctions && allAuctions.map(auction => (
                  <div key={auction.AuctionID} className={homeStyle.auctionCard}>
                    <h3>{auction.Title}</h3>
                    <p><b>Seller:</b> {auction.CreatedBy}</p>
                    <p><b>Description: </b>{auction.Description.slice(0, 20) + "..."}</p>
                    <p><b>Start Price: </b>{auction.StartingPrice}</p>
                    <p><b>Created: </b>{auction.StartDate}</p>
                    <p><b>Ending: </b>{auction.EndDate}</p>
                    <button className={homeStyle.auctionBtn}>
                      <NavLink to={`/single-auction/${auction.AuctionID}`} state={{ auction }}>
                        Go to auction
                      </NavLink>
                    </button>
                  </div>
            ))}
        </div>
      </>
    )
  }

  export default Home
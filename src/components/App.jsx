import '../styles/App.css'
import SearchAuction from './SearchAuction'
import SearchResults from './SearchResults'
import CreateAuction from './CreateAuction'
import SingleAuction from './SingleAuction'
import { useEffect, useState } from 'react'

function App() {

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
    <h1>Hello Team!</h1>
    {/* <SingleAuction /> */}
    {/* <CreateAuction /> */}
    <SearchAuction setSearchInput={setSearchInput}/>
    {searchAuctions ? <SearchResults searchAuctions={searchAuctions}/> : <h1>No Auctions found 🤷‍♂️</h1>}
    </>
  )
}

export default App

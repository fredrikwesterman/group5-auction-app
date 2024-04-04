import '../styles/App.css'
// import CreateAuction from './CreateAuction'
import SingleAuction from './SingleAuction'
import { useEffect, useState } from 'react'

function App() {

  const [allAuctions, setAllAuctions] = useState(null)


  // Gets all the Current auctions, they are stored in allAuctions. Send this as props for you components that needs the auctions.
  useEffect(() => {
    fetch('https://auctioneer.azurewebsites.net/auction/5mlk')
      .then((response) => response.json())
      .then((data) => setAllAuctions(data))
      return () => {
        setAllAuctions(null)      
      }
    }, [])

    console.log(allAuctions)

  return (
    <>
    <h1>Hello Team!</h1>
    <SingleAuction />
    {/* <CreateAuction /> */}
    </>
  )
}

export default App

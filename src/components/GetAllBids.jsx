import { useEffect } from "react";

const GetAllBids = ({ auctionId, allBids, setAllBids }) => {
  useEffect(() => {
    fetch(`https://auctioneer2.azurewebsites.net/bid/5mlk/${auctionId}`)
      .then((response) => response.json())
      .then((data) => setAllBids(data))
      .catch((error) => console.error("Error fetching auctions:", error));
  }, []);
  //allBids i dependencyarrayen gör så att vi får en infinite loop.
  //vi sätter allBids i fetchen till data, och varje gång den sätter det
  //kommer den rerenderara komponenten och köra om fetchen forever.

  return (
    <div>
      <ul className="flex gap-4">
        {allBids &&
          allBids.map((bid) => (
            <li key={bid.BidID}>
              <p>Bid: {bid.Amount}kr</p>
              <p>Bidder: {bid.Bidder}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GetAllBids;

import { useState } from "react";

const AddBid = ({ auctionId, allBids, setAllBids }) => {
  const [amount, setAmount] = useState("");
  const [bidder, setBidder] = useState("");
  const [groupCode, setGroupCode] = useState("5mlk");
  const [bidToLowAdded, setBidToLowAdded] = useState(false);
  // const URL = `https://auctioneer2.azurewebsites.net/bid/5mlk/${auctionId}`

  const newBid = () => {
    try {

      let isBidTooLow = false;

      allBids.forEach((bid) => {
        if (bid.Amount >= amount) {
          setBidToLowAdded(true);
          isBidTooLow = true;
          return;
        }
      });
      
      if (!isBidTooLow) {
        fetch(`https://auctioneer2.azurewebsites.net/bid/5mlk/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Amount: amount,
            AuctionID: auctionId,
            Bidder: bidder,
            GroupCode: groupCode,
          }),
        });

        setBidToLowAdded(false)

        setAllBids([
          ...allBids,
          {
            AuctionID: auctionId,
            Amount: amount,
            Bidder: bidder,
            GroupCode: "5mlk",
          },
        ]);

      }

      setAmount("");
      setBidder("");
    } catch (error) {
      console.log("Kunde inte lägga till bud: " + error);
    }
  };

  return (
    <div>
      <h3>Add New Bid</h3>
      <label htmlFor="amount">Amount: </label>
      <br />
      <input
        type="text"
        id="amount"
        required
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />

      <label htmlFor="bidder">Bidder: </label>
      <br />
      <input
        type="text"
        id="bidder"
        required
        value={bidder}
        onChange={(e) => setBidder(e.target.value)}
      />
      <br />
      <button className="btn btn-primary mt-4 mb-4" onClick={(e) => newBid(e)}>
        Add Bid
      </button>
      <br />

      {bidToLowAdded && (
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong class="font-bold">Bid Was to low!</strong>
          <span class="block sm:inline">You need to bid a higher amount!</span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3 mb-4"></span>
        </div>
      )}

    </div>
  );
};

export default AddBid;

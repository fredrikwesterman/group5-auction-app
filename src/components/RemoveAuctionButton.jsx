import { useNavigate } from "react-router-dom";

const RemoveAuctionButton = ({ auction, allBids }) => {
  const navigate = useNavigate();

  const handleRemove = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this auction?"
    );
    if (confirmation) {
      fetch(
        `https://auctioneer2.azurewebsites.net/auction/5mlk/${auction.AuctionID}`,
        {
          method: "DELETE",
        }
      )
        .then((response) => {
          if (response.ok) {
            // How to update the UI after deleting the auction ?
            navigate("/");
            console.log("Auction deleted successfully");
          } else {
            throw new Error("Failed to delete auction");
          }
        })
        .catch((error) => {
          console.error("Error deleting auction:", error);
        });
    }
  };

  return (
    <>
      {allBids !== null && allBids.length === 0 && auction.EndDate > new Date().toISOString() && (
        <button className="btn btn-secondary" onClick={handleRemove}>
          Remove
        </button>
      )}
      <div className="divider"></div>
    </>
  );
};

export default RemoveAuctionButton;

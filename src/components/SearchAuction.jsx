import { useRef } from "react"

const SearchAuction = ({ setSearchInput }) => {

    const searchInput = useRef()

    return (
        <>
            <input className="input input-bordered w-24 md:w-auto"
                ref={searchInput}
                type="text" 
                placeholder="Type auction name"
            />
            <button className="btn btn-ghost text-m" onClick={() => setSearchInput(searchInput.current.value)}>Search for auction</button>
        </>
    )
}

export default SearchAuction
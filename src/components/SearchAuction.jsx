import { useRef } from "react"

const SearchAuction = ({ setSearchInput }) => {

    const searchInput = useRef()

    return (
        <>
            <input 
                ref={searchInput}
                type="text" 
                placeholder="Type auction name"
            />
            <button onClick={() => setSearchInput(searchInput.current.value)}>Search for auction</button>
        </>
    )
}

export default SearchAuction
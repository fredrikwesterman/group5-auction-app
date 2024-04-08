import { useRef } from "react"
import homeStyle from '../styles/Home.module.css'

const SearchAuction = ({ setSearchInput }) => {

    const searchInput = useRef()

    return (
        <>
            <input className={homeStyle.inputfield}
                ref={searchInput}
                type="text" 
                placeholder="Type auction name"
            />
            <button className={homeStyle.searchBtn} onClick={() => setSearchInput(searchInput.current.value)}>Search for auction</button>
        </>
    )
}

export default SearchAuction
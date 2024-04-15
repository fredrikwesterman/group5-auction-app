import headerStyle from '../styles/Header.module.css'
import Nav from './Nav'

const Header = () => {
    return (
        <div className="navbar bg-base-100 ">
            <h1>Auction App</h1>
            <Nav />
        </div>
    )
}

export default Header
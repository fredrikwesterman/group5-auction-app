import { NavLink } from "react-router-dom"

const Nav = () => {
return (
    <nav>
        <ul className="flex-1">
            <li className="btn btn-ghost text-xl"><NavLink to='/'>Home</NavLink></li>
            <li className="btn btn-ghost text-xl"><NavLink to='/create-auction'>Create Auction</NavLink></li>
        </ul>
    </nav>
    )
}

export default Nav
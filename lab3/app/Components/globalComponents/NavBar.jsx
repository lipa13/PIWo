import { NavLink } from "react-router";
import "../../styles/navbarStyle.css";

export default function NavBar() {
    return (
        <header className="main-header">
            <h1 className="bookstore-label">Bookzaar</h1>

            <nav className="main-nav">
                <NavLink to="/">
                    <button className="btn home">Home</button>
                </NavLink>
                <NavLink to="/shop">
                    <button className="btn shop-all">Shop All</button>
                </NavLink>
                <NavLink to="/sell">
                    <button className="btn add">Sell</button>
                </NavLink>
                <NavLink to="/learn">
                    <button className="btn learn">Learn</button>
                </NavLink>
            </nav>

            <input type="search" className="search" placeholder="Search..." />

            <div className="user-controls">
                <button className="btn account">Account</button>
                <NavLink to="/cart">
                    <button className="btn cart">Cart</button>
                </NavLink>
            </div>
        </header>
    );
}
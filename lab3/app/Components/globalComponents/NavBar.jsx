import { NavLink } from "react-router";
import "../../styles/navbarStyle.css";
import CartIcon from "../../../assets/cart-outline.svg?react";
import AccountIcon from "../../../assets/person-outline.svg?react";

export default function NavBar() {
    return (
        <header className="main-header">
            <h1 className="bookstore-label">BookZaar</h1>

            <nav className="main-nav">
                <NavLink to="/" className="nav-hover nav-btn-left">Home</NavLink>
                <NavLink to="/shop" className="nav-hover nav-btn-left">Shop</NavLink>
                <NavLink to="/sell" className="nav-hover nav-btn-left">Sell</NavLink>
                <NavLink to="/learn" className="nav-hover nav-btn-left">Learn</NavLink>
            </nav>

            <input type="search" className="search" placeholder="Search..." />

            <div className="user-controls">
                <button className="nav-hover account">
                    <AccountIcon className="account-icon"/>
                </button>
                <NavLink to="/cart">
                    <button className="nav-hover cart">
                        <CartIcon className="cart-icon"/>
                    </button>
                </NavLink>
            </div>
        </header>
    );
}
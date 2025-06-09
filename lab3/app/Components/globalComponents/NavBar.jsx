import { NavLink } from "react-router";
import "../../styles/navbarStyle.css";
import CartIcon from "../../../assets/cart-outline.svg?react";
import AccountIcon from "../../../assets/person-outline.svg?react";
import {useEffect, useRef, useState} from "react";
import { useUser } from "../../Contexts/UserContext";

import {auth, googleProvider} from "../../firebase";
import {signInWithPopup} from "firebase/auth";

export default function NavBar() {
    const userContext = useUser();
    const user = userContext?.user;
    const setUser = userContext?.setUser;

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(prev => !prev);
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setUser(result.user); // zapisz dane użytkownika do kontekstu
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

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
                <button className="nav-hover account" onClick={toggleDropdown}>
                    <AccountIcon className="account-icon"/>
                </button>
                <NavLink to="/cart">
                    <button className="nav-hover cart">
                        <CartIcon className="cart-icon"/>
                    </button>
                </NavLink>
                {showDropdown && (
                    <div className="account-dropdown" onClick={handleGoogleLogin}>
                        <button className="login-btn">Log in with Google</button>
                    </div>
                )}
            </div>
        </header>
    );
}

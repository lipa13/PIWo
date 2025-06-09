import { NavLink } from "react-router";
import "../../styles/navbarStyle.css";
import CartIcon from "../../../assets/cart-outline.svg?react";
import AccountIcon from "../../../assets/person-outline.svg?react";
import {useEffect, useRef, useState} from "react";
import { useUser } from "../../Contexts/UserContext";

import {auth, googleProvider, db} from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import {signInWithPopup, signOut} from "firebase/auth";

export default function NavBar() {
    const { user, setUser } = useUser();

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(prev => !prev);
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setUser(result.user); // zapisz dane użytkownika do kontekstu
            await saveUserToFirestore(result.user);
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const saveUserToFirestore = async (user) => {
        const userRef = doc(db, "users", user.uid);

        await setDoc(userRef, {
            displayName: user.displayName,
            email: user.email,
            createdAt: new Date().toISOString(),
        }, { merge: true });
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
                    <div className="account-dropdown">
                        {user ? (
                            <>
                                <div className="welcome-text">Hi, {user.displayName || "User"}</div>
                                <NavLink className="my-books-btn" to="account"> My books</NavLink>
                                <button className="login-btn" onClick={handleLogout}>
                                    Wyloguj
                                </button>
                            </>
                        ) : (
                            <button className="login-btn" onClick={handleGoogleLogin}>
                                Log in with Google
                            </button>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
}

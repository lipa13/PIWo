import { NavLink } from "react-router";
import RightIcon from "../../../assets/arrow-forward-outline.svg?react";
import img from '../../../assets/hero-section-img.jpg';

export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-left-side">
                <h2 className="hero-section-title">
                    Turn Your Books Into Cash — Or Find Your Next Favorite
                </h2>
                <p className="hero-section-text">
                    List your books, set your price, and connect with readers who want them.
                    Whether you’re clearing your shelf or hunting for hidden gems, our community-driven marketplace makes it easy to buy and sell books.
                    Start selling or browsing today — it’s free and simple.
                </p>
                <div className="hero-section-buttons">
                    <NavLink className="hero-navlink" to="/shop">
                        <button className="hero-btn hero-section-shop"><RightIcon className="left-right-icons"/>Shop products</button>
                    </NavLink>
                    <NavLink className="hero-navlink" to="/sell">
                        <button className="hero-btn hero-section-add"><RightIcon className="left-right-icons"/>Sell product</button>
                    </NavLink>
                </div>
            </div>
            <img className="hero-img" src={img} alt="Hero section image"/>
        </section>
    );
}

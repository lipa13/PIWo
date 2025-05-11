import "../styles/shopStyle.css";
import UpIcon from "../../assets/chevron-up-outline.svg?react";
import DownIcon from "../../assets/chevron-down-outline.svg?react";
import Filters from "../components/shopComponents/Filters";
import BookCard from "../Components/shopComponents/BookCard";
import {useContext} from "react";
import {BookOffersContext} from "../Contexts/BookOffersContext.jsx";

export default function Shop(){

    const { bookOffers } = useContext(BookOffersContext);

    return (
        <main className="shop-content">
            <div className="shop-buttons">
                <button className="btn filter">
                    Filter <DownIcon className="up-down-icon"/>
                </button>
                <button className="btn sort">
                    Sort <DownIcon className="up-down-icon"/>
                </button>
            </div>
            <Filters />
            <div className="shop-books">
                <div className="shop-books">
                    {bookOffers.map((book) => (
                        <BookCard key={book.OfferID} book={book} />
                    ))}
                </div>
            </div>
        </main>
    );
}
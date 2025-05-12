import "../styles/shopStyle.css";
import UpIcon from "../../assets/chevron-up-outline.svg?react";
import DownIcon from "../../assets/chevron-down-outline.svg?react";
import Filters from "../components/shopComponents/Filters";
import BookCard from "../Components/shopComponents/BookCard";
import {useContext, useState} from "react";
import {BookOffersContext} from "../Contexts/BookOffersContext.jsx";

export default function Shop(){

    const { bookOffers } = useContext(BookOffersContext);

    const [activePanel, setActivePanel] = useState(null); // "filters", "sort" lub null

    const togglePanel = (panel) => {
        setActivePanel(prev => (prev === panel ? null : panel));
    };

    return (
        <main className="shop-content">
            <div className="shop-buttons">
                <button className="btn filter" onClick={() => togglePanel("filters")}>
                    Filter {activePanel === "filters" ?
                    <UpIcon className="up-down-icon" /> : <DownIcon className="up-down-icon" />}
                </button>
                <button className="btn sort" onClick={() => togglePanel("sort")}>
                    Sort {activePanel === "sort" ?
                    <UpIcon className="up-down-icon" /> : <DownIcon className="up-down-icon" />}
                </button>
            </div>

            {activePanel === "filters" && <Filters />}
            {activePanel === "sort"}

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
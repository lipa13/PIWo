import "../styles/shopStyle.css";
import UpIcon from "../../assets/chevron-up-outline.svg?react";
import DownIcon from "../../assets/chevron-down-outline.svg?react";
import Filters from "../components/shopComponents/Filters";
import BookCard from "../Components/shopComponents/BookCard";
import {useContext, useState} from "react";
import {BookOffersContext} from "../Contexts/BookOffersContext.jsx";

export default function Shop(){

    const { bookOffers } = useContext(BookOffersContext);

    const [filters, setFilters] = useState({
        Author: [],
        Category: [],
        Cover: [],
        PriceMin: null,
        PriceMax: null,
        PagesMin: null,
        PagesMax: null,
    });

    const filteredBooks = bookOffers.filter((book) => {
        // Author filter
        if (filters.Author.length > 0 && !filters.Author.includes(book.Author)) return false;

        // Category filter
        if (filters.Category.length > 0 && !filters.Category.includes(book.Category)) return false;

        // Cover filter
        if (filters.Cover.length > 0 && !filters.Cover.includes(book.Cover)) return false;

        // Price filter
        if (filters.PriceMin !== null && book.Price < filters.PriceMin) return false;
        if (filters.PriceMax !== null && book.Price > filters.PriceMax) return false;

        // Pages filter
        if (filters.PagesMin !== null && book.Pages < filters.PagesMin) return false;
        return !(filters.PagesMax !== null && book.Pages > filters.PagesMax);


    });

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

            {activePanel === "filters" && <Filters filters={filters} setFilters={setFilters} />}
            {activePanel === "sort"}

            <div className="shop-books">
                {filteredBooks.map((book) => (
                    <BookCard key={book.OfferID} book={book} />
                ))}
            </div>
        </main>
    );
}
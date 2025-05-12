import FilterListItemCheck from "./FilterListItemCheck.jsx";
import FilterListItemInput from "./FilterListItemInput.jsx";
import {useContext} from "react";
import {BookOffersContext} from "../../../Contexts/BookOffersContext.jsx";

export default function FilterList({ type, filters, setFilters }) {
    const isCheckType = ["Author", "Category", "Cover"].includes(type);

    const { bookOffers } = useContext(BookOffersContext);

    let values = [];

    if (type === "Author") {
        values = [...new Set(bookOffers.map(book => book.Author))].sort((a, b) =>
            a.localeCompare(b)
        );
    } else if (type === "Category") {
        values = ["Action", "Fantasy", "Horror", "Romance",  "Thriller", ];
    } else if (type === "Cover") {
        values = ["Hardcover", "Paperback"];
    }


    return (
        <div className="filter-list-container">
            <ul className="filter-list">
                {isCheckType ? (
                    values.map((value, index) => (
                        <FilterListItemCheck
                            key={index}
                            label={value}
                            type={type}
                            filters={filters}
                            setFilters={setFilters}
                        />
                    ))
                ) : (
                    <>
                        <FilterListItemInput label="Min" type={type}
                                             filters={filters} setFilters={setFilters} />
                        <FilterListItemInput label="Max" type={type}
                                             filters={filters} setFilters={setFilters} />
                    </>
                )}
            </ul>
        </div>
    )
}
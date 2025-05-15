import "../styles/sellStyle.css";
import AutocompleteInput from "../Components/sellComponents/AutocompleteInput.jsx";
import {useContext} from "react";
import {BookOffersContext} from "../Contexts/BookOffersContext.jsx";
import SingleSelectDropdown from "../Components/sellComponents/SingleSelectDropdown.jsx";

export default function Sell(){
    const { bookOffers } = useContext(BookOffersContext);

    const titles =
        [...new Set(bookOffers.map(book => book.Title))].sort((a, b) =>
        a.localeCompare(b)
    );

    const authors =
        [...new Set(bookOffers.map(book => book.Author))].sort((a, b) =>
        a.localeCompare(b)
    );

    const categories = ["Fantasy", "Horror", "Romance", "Action", "Thriller"];

    const bookCondition = ["New", "Very good", "Good", "Acceptable"];

    const covers = ["Hardcover", "Paperback"];

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Form Submitted!");
    };

    return (
        <div className="sell-container">
            <h3>Sell your book now with this simple form!</h3>
            <form className="sell-form" onSubmit={handleSubmit}>
                <div className="sell-div">
                    <label className="sell-title">Title:</label>
                    <AutocompleteInput className="autocomplete-input" suggestions={titles} />
                </div>

                <div className="sell-div">
                    <label className="sell-author">Author:</label>
                    <AutocompleteInput className="autocomplete-input" suggestions={authors} />
                </div>

                <div className="sell-div">
                    <label className="sell-category">Category:</label>
                    <SingleSelectDropdown
                        label="Select Category"
                        options={categories}
                        onSelect={(value) => console.log("Selected:", value)}
                    />
                </div>

                <div className="sell-div">
                    <label className="sell-description">Description:</label>
                    <textarea
                        className="input-sell input-sell-description"
                        id="multi-input"
                        rows={4}
                    />
                </div>

                <div className="sell-div">
                    <label className="sell-condition">Condition:</label>
                    <SingleSelectDropdown
                        label="Book condition"
                        options={bookCondition}
                        onSelect={(value) => console.log("Selected:", value)}
                    />
                </div>

                <div className="sell-div">
                    <label className="sell-pages">Pages:</label>
                    <input className="input-sell input-sell-pages" type="number"/>
                </div>

                <div className="sell-div">
                    <label className="sell-cover">Cover:</label>
                    <SingleSelectDropdown
                        label="Book cover"
                        options={covers}
                        onSelect={(value) => console.log("Selected:", value)}
                    />
                </div>

                <div className="sell-div">
                    <label className="sell-price">Price:</label>
                    <input className="input-sell input-sell-price" type="number"/>
                </div>

                <button className="btn sell">Submit</button>
            </form>
        </div>
    );
}
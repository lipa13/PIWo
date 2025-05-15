import "../styles/sellStyle.css";
import AutocompleteInput from "../Components/sellComponents/AutocompleteInput.jsx";
import {useContext} from "react";
import {BookOffersContext} from "../Contexts/BookOffersContext.jsx";

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

    return (
        <div className="sell-container">
            <h3>Sell your book now with this simple form!</h3>
            <form className="sell-form">
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
                </div>

                <div className="sell-div">
                    <label className="sell-pages">Pages:</label>
                    <input className="input-sell input-sell-pages" type="number"/>
                </div>

                <div className="sell-div">
                    <label className="sell-cover">Cover:</label>
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
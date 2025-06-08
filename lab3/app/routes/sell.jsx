import "../styles/sellStyle.css";
import AutocompleteInput from "../Components/sellComponents/AutocompleteInput.jsx";
import {useContext, useState} from "react";
import {BookOffersContext} from "../Contexts/BookOffersContext.jsx";
import SingleSelectDropdown from "../Components/sellComponents/SingleSelectDropdown.jsx";

export default function Sell() {
    const { bookOffers, setBookOffers } = useContext(BookOffersContext);

    const titles = [...new Set(bookOffers.map(book => book.Title))].sort();
    const authors = [...new Set(bookOffers.map(book => book.Author))].sort();
    const categories = ["Fantasy", "Horror", "Romance", "Action", "Thriller"];
    const bookCondition = ["New", "Very good", "Good", "Acceptable"];
    const covers = ["Hardcover", "Paperback"];

    // Lokalny stan formularza
    const [formData, setFormData] = useState({
        Title: "",
        Author: "",
        Category: "",
        Description: "",
        Condition: "",
        Pages: "",
        Cover: "",
        Price: "",
    });

    // Obsługa inputów tekstowych i liczbowych
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Obsługa dropdownów
    const handleSelect = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newBook = {
            ...formData,
            Pages: parseInt(formData.Pages),
            Price: parseFloat(formData.Price),
            OfferID: bookOffers.length, // lub inny mechanizm ID
            UserID: 999, // tymczasowe ID użytkownika
            uploadTime: new Date().toISOString(),
        };

        console.log("Dodawana książka:", formData);

        setBookOffers(prev => [...prev, newBook]);

        // (opcjonalnie) resetuj formularz
        setFormData({
            Title: "",
            Author: "",
            Category: "",
            Description: "",
            Condition: "",
            Pages: "",
            Cover: "",
            Price: "",
        });

        alert("Book added successfully!");
    };

    return (
        <div className="sell-container">
            <h3>Sell your book now with this simple form!</h3>
            <form className="sell-form" onSubmit={handleSubmit}>
                <div className="sell-div">
                    <label>Title:</label>
                    <AutocompleteInput
                        className="autocomplete-input"
                        suggestions={titles}
                        value={formData.Title}
                        onChange={(value) => setFormData(prev => ({ ...prev, Title: value }))}
                    />
                </div>

                <div className="sell-div">
                    <label>Author:</label>
                    <AutocompleteInput
                        className="autocomplete-input"
                        suggestions={authors}
                        value={formData.Author}
                        onChange={(value) => setFormData(prev => ({ ...prev, Author: value }))}
                    />
                </div>

                <div className="sell-div">
                    <label>Category:</label>
                    <SingleSelectDropdown
                        label="Select Category"
                        options={categories}
                        onSelect={(value) => handleSelect("Category", value)}
                    />
                </div>

                <div className="sell-div">
                    <label>Description:</label>
                    <textarea
                        className="input-sell input-sell-description"
                        rows={4}
                        name="Description"
                        value={formData.Description}
                        onChange={handleChange}
                    />
                </div>

                <div className="sell-div">
                    <label>Condition:</label>
                    <SingleSelectDropdown
                        label="Book condition"
                        options={bookCondition}
                        onSelect={(value) => handleSelect("Condition", value)}
                    />
                </div>

                <div className="sell-div">
                    <label>Pages:</label>
                    <input
                        className="input-sell input-sell-pages"
                        type="number"
                        name="Pages"
                        value={formData.Pages}
                        onChange={handleChange}
                    />
                </div>

                <div className="sell-div">
                    <label>Cover:</label>
                    <SingleSelectDropdown
                        label="Book cover"
                        options={covers}
                        onSelect={(value) => handleSelect("Cover", value)}
                    />
                </div>

                <div className="sell-div">
                    <label>Price:</label>
                    <input
                        className="input-sell input-sell-price"
                        type="number"
                        step="0.01"
                        name="Price"
                        value={formData.Price}
                        onChange={handleChange}
                    />
                </div>

                <button className="btn sell" type="submit">Submit</button>
            </form>
        </div>
    );
}
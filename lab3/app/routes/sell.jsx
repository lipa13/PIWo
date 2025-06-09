import { useState, useContext } from "react";
import "../styles/sellStyle.css"
import AutocompleteInput from "../components/sellComponents/AutocompleteInput";
import SingleSelectDropdown from "../components/sellComponents/SingleSelectDropdown";
import { BookOffersContext } from "../Contexts/BookOffersContext";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useUser } from "../Contexts/UserContext";

export default function Sell() {
    const { bookOffers } = useContext(BookOffersContext);

    const { user } = useUser();

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleDropdownChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!user) {
            alert("You must be logged in to submit a book offer!");
            return;
        }

        const newBook = {
            ...formData,
            Pages: parseInt(formData.Pages),
            Price: parseFloat(formData.Price),
            OfferID: Date.now(),
            UserID: user.uid,
            uploadTime: new Date().toISOString(),
        };

        try {
            await addDoc(collection(db, "bookOffers"), newBook);
            alert("Book added successfully!");
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
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Failed to add book.");
        }
    };

    const authorOptions = [...new Set(bookOffers.map(book => book.Author))].sort();
    const titleOptions = [...new Set(bookOffers.map(book => book.Title))].sort();

    const categoryOptions = ["Fantasy", "Thriller", "Horror", "Romance", "Action"];
    const conditionOptions = ["New", "Very Good", "Good", "Acceptable"];
    const coverOptions = ["Paperback", "Hardcover"];

    return (
        <div className="sell-container">
            <form onSubmit={handleSubmit} className="sell-form">
                <div className="sell-div">
                    <label>Title</label>
                    <AutocompleteInput
                        suggestions={titleOptions}
                        name="Title"
                        value={formData.Title}
                        onChange={(value) => handleDropdownChange("Title", value)}
                    />
                </div>

                <div className="sell-div">
                    <label>Author</label>
                    <AutocompleteInput
                        suggestions={authorOptions}
                        name="Author"
                        value={formData.Author}
                        onChange={(value) => handleDropdownChange("Author", value)}
                    />
                </div>

                <div className="sell-div">
                    <label>Category</label>
                    <SingleSelectDropdown
                        label="Select Category"
                        options={categoryOptions}
                        onSelect={(value) => handleDropdownChange("Category", value)}
                    />
                </div>

                <div className="sell-div">
                    <label>Description</label>
                    <textarea
                        className="input-sell"
                        name="Description"
                        value={formData.Description}
                        onChange={handleChange}
                        rows={3}
                    />
                </div>

                <div className="sell-div">
                    <label>Condition</label>
                    <SingleSelectDropdown
                        label="Select Condition"
                        options={conditionOptions}
                        onSelect={(value) => handleDropdownChange("Condition", value)}
                    />
                </div>

                <div className="sell-div">
                    <label>Pages</label>
                    <input
                        className="input-sell"
                        type="number"
                        name="Pages"
                        value={formData.Pages}
                        onChange={handleChange}
                    />
                </div>

                <div className="sell-div">
                    <label>Cover</label>
                    <SingleSelectDropdown
                        label="Select Cover"
                        options={coverOptions}
                        onSelect={(value) => handleDropdownChange("Cover", value)}
                    />
                </div>

                <div className="sell-div">
                    <label>Price ($)</label>
                    <input
                        className="input-sell"
                        type="number"
                        name="Price"
                        value={formData.Price}
                        onChange={handleChange}
                        step="0.01"
                    />
                </div>

                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    );
}
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase";
import { useUser } from "../Contexts/UserContext";
import "../styles/accountStyle.css";
import { NavLink } from "react-router";

export default function Account() {
    const { user } = useUser();
    const [offers, setOffers] = useState([]);
    const [editingBook, setEditingBook] = useState(null);
    const [editData, setEditData] = useState({});

    useEffect(() => {
        const fetchOffers = async () => {
            if (!user) return;
            const q = query(collection(db, "bookOffers"), where("UserID", "==", user.uid));
            const snapshot = await getDocs(q);
            const userOffers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setOffers(userOffers);
        };

        fetchOffers();
    }, [user]);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this book?");
        if (!confirmDelete) return;

        try {
            await deleteDoc(doc(db, "bookOffers", id));
            setOffers(prev => prev.filter(book => book.id !== id));
        } catch (err) {
            console.error("Failed to delete book:", err);
            alert("Failed to delete the book. Please try again.");
        }
    };

    const handleEdit = (book) => {
        setEditingBook(book.id);
        setEditData(book);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditData(prev => ({ ...prev, [name]: value }));
    };

    const saveEdit = async () => {
        try {
            await updateDoc(doc(db, "bookOffers", editingBook), {
                ...editData,
                Pages: parseInt(editData.Pages),
                Price: parseFloat(editData.Price)
            });
            alert("Book updated!");
            setEditingBook(null);
            // Refresh list
            const q = query(collection(db, "bookOffers"), where("UserID", "==", user.uid));
            const snapshot = await getDocs(q);
            setOffers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } catch (err) {
            console.error("Update failed", err);
            alert("Failed to update book.");
        }
    };

    return (
        <div className="account-container">
            <h2>My Book Offers</h2>
            <NavLink to="/sell" className="add-offer-link">Add New Book</NavLink>

            <div className="offers-list">
                {offers.map(book => (
                    <div key={book.id} className="offer-card">
                        {editingBook === book.id ? (
                            <>
                                <div className="editing-container">
                                    <div>
                                        <p>Title: </p>
                                        <input name="Title" value={editData.Title} onChange={handleEditChange} />
                                    </div>
                                    <div>
                                        <p>Author: </p>
                                        <input name="Author" value={editData.Author} onChange={handleEditChange} />
                                    </div>
                                    <div>
                                        <p>Category: </p>
                                        <input name="Category" value={editData.Category} onChange={handleEditChange} />
                                    </div>
                                    <div>
                                        <p>Price: </p>
                                        <input name="Price" value={editData.Price} onChange={handleEditChange} />
                                    </div>
                                    <div>
                                        <p>Pages: </p>
                                        <input name="Pages" value={editData.Pages} onChange={handleEditChange} />
                                    </div>
                                </div>
                                <div className="edit-btn-group">
                                    <button className="save-btn" onClick={saveEdit}>Save</button>
                                    <button className="cancel-btn" onClick={() => setEditingBook(null)}>Cancel</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h3>{book.Title}</h3>
                                <p><strong>Author:</strong> {book.Author}</p>
                                <p><strong>Category:</strong> {book.Category}</p>
                                <p><strong>Price:</strong> ${book.Price.toFixed(2)}</p>
                                <div className="edit-btn-group">
                                    <button className="edit-btn" onClick={() => handleEdit(book)}>Edit</button>
                                    <button className="delete-btn" onClick={() => handleDelete(book.id)}>Delete</button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
                {offers.length === 0 && <p>You have no book offers.</p>}
            </div>
        </div>
    );
}
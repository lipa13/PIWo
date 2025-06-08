import { createContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const BookOffersContext = createContext();

export const BookOffersContextProvider = ({ children }) => {
    const [bookOffers, setBookOffers] = useState([]);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const snapshot = await getDocs(collection(db, "bookOffers"));
                const data = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setBookOffers(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchOffers();
    }, []);

    return (
        <BookOffersContext.Provider value={{ bookOffers, setBookOffers }}>
            {children}
        </BookOffersContext.Provider>
    );
};
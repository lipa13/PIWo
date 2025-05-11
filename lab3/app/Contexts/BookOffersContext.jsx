import { createContext, useState } from "react";

export const BookOffersContext = createContext();

export const BookOffersContextProvider = ({ children }) => {
    const [bookOffers, setBookOffers] = useState([
        {
            Title: "Harry Potter and the Sorcerer's Stone",
            Author: "J.K. Rowling",
            Category: "Fantasy",
            Description: "A young wizard discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry.",
            Condition: "Good",
            Pages: 320,
            Cover: "Hardcover",
            Price: 12.99,
            OfferID: 1,
            UserID: 101,
            uploadTime: "2025-05-12T01:04:58"
        },
        {
            Title: "The Lord of the Rings: The Fellowship of the Ring",
            Author: "J.R.R. Tolkien",
            Category: "Fantasy",
            Description: "A hobbit sets out on a journey to destroy a powerful ring sought by dark forces.",
            Condition: "New",
            Pages: 423,
            Cover: "Paperback",
            Price: 15.05,
            OfferID: 2,
            UserID: 102,
            uploadTime: "2025-05-11T10:00:00"
        },
        {
            Title: "The Hobbit",
            Author: "J.R.R. Tolkien",
            Category: "Fantasy",
            Description: "Bilbo Baggins embarks on an epic quest with dwarves to reclaim their homeland.",
            Condition: "New",
            Pages: 310,
            Cover: "Paperback",
            Price: 13.45,
            OfferID: 7,
            UserID: 107,
            uploadTime: "2025-05-10T12:00:00"
        },
        {
            Title: "The Da Vinci Code",
            Author: "Dan Brown",
            Category: "Thriller",
            Description: "A symbologist and a cryptologist uncover a secret that could shake the foundations of Christianity.",
            Condition: "Very Good",
            Pages: 489,
            Cover: "Paperback",
            Price: 10.99,
            OfferID: 8,
            UserID: 110,
            uploadTime: "2025-05-09T12:00:00"
        },
        {
            Title: "It",
            Author: "Stephen King",
            Category: "Horror",
            Description: "A group of children face a shape-shifting monster that returns every 27 years to terrorize their town.",
            Condition: "Good",
            Pages: 1138,
            Cover: "Hardcover",
            Price: 14.55,
            OfferID: 9,
            UserID: 111,
            uploadTime: "2025-05-09T12:00:00"
        },
        {
            Title: "The Notebook",
            Author: "Nicholas Sparks",
            Category: "Romance",
            Description: "A heartwarming tale of a love that endures decades of separation, hardship, and memories lost.",
            Condition: "Acceptable",
            Pages: 224,
            Cover: "Paperback",
            Price: 7.99,
            OfferID: 10,
            UserID: 112,
            uploadTime: "2025-05-09T12:00:00"
        },
        {
            Title: "Gone Girl",
            Author: "Gillian Flynn",
            Category: "Thriller",
            Description: "A psychological thriller about a husband suspected of foul play when his wife goes missing.",
            Condition: "New",
            Pages: 422,
            Cover: "Hardcover",
            Price: 11.99,
            OfferID: 11,
            UserID: 113,
            uploadTime: "2025-05-08T12:00:00"
        },
        {
            Title: "The Bourne Identity",
            Author: "Robert Ludlum",
            Category: "Action",
            Description: "An amnesiac man tries to discover his identity while being pursued by assassins.",
            Condition: "Very Good",
            Pages: 535,
            Cover: "Paperback",
            Price: 9.75,
            OfferID: 12,
            UserID: 114,
            uploadTime: "2025-05-08T12:00:00"
        }
    ]);

    return (
        <BookOffersContext.Provider value={{ bookOffers, setBookOffers }}>
            {children}
        </BookOffersContext.Provider>
    );
};

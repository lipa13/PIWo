import { useState } from "react";

export default function AutocompleteInput({ suggestions }) {
    const [input, setInput] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [showList, setShowList] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);

        if (value.length === 0) {
            setFiltered([]);
            setShowList(false);
        }
        else {
            const matches = suggestions.filter((s) =>
                s.toLowerCase().includes(value.toLowerCase())
            );
            setFiltered(matches);
            setShowList(true);
        }
    };

    const handleSelect = (value) => {
        setInput(value);
        setFiltered([]);
        setShowList(false);
    };

    return (
        <div className="auto-wrapper">
            <input className="input-sell"
                   type="text"
                   value={input}
                   onChange={handleChange}
                   autoComplete="off"/>
            {showList && filtered.length > 0 && (
                <ul className="auto-list">
                    {filtered.map((item, idx) => (
                        <li  className="auto-list-item" key={idx}
                             onClick={() => handleSelect(item)}> {item} </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
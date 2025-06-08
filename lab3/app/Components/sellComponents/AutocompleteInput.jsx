import { useState, useEffect } from "react";

export default function AutocompleteInput({ suggestions, value, onChange }) {
    const [input, setInput] = useState(value || "");
    const [filtered, setFiltered] = useState([]);
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        setInput(value || "");
    }, [value]);

    const handleChange = (e) => {
        const val = e.target.value;
        setInput(val);
        onChange(val); // ⬅️ przekazujemy do rodzica

        if (val.length === 0) {
            setFiltered([]);
            setShowList(false);
        } else {
            const matches = suggestions.filter((s) =>
                s.toLowerCase().includes(val.toLowerCase())
            );
            setFiltered(matches);
            setShowList(true);
        }
    };

    const handleSelect = (val) => {
        setInput(val);
        onChange(val); // ⬅️ również przy kliknięciu z listy
        setFiltered([]);
        setShowList(false);
    };

    return (
        <div className="auto-wrapper">
            <input
                className="input-sell"
                type="text"
                value={input}
                onChange={handleChange}
                autoComplete="off"
            />
            {showList && filtered.length > 0 && (
                <ul className="auto-list">
                    {filtered.map((item, idx) => (
                        <li
                            className="auto-list-item"
                            key={idx}
                            onClick={() => handleSelect(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
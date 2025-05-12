import {useState} from "react";

export default function FilterListItemCheck({ label }) {
    const [checked, setChecked] = useState(false);

    return (
        <li className="filter-list-item">
            <button className="filter-list-item-btn" onClick={() => setChecked(prev => !prev)}>
                <p className="filter-list-item-label">
                    {label}
                </p>
                <input
                    className={`filter-list-item-check ${checked ? "checked" : ""}`}
                    type="checkbox"
                    checked={checked}
                    readOnly
                />
            </button>
        </li>
    )
}
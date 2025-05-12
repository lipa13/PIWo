import {useState} from "react";

export default function FilterListItemCheck({ label, type, filters, setFilters }) {
    const isChecked = filters[type].includes(label);

    const toggle = () => {
        const updated = isChecked
            ? filters[type].filter(v => v !== label)
            : [...filters[type], label];

        setFilters(prev => ({
            ...prev,
            [type]: updated
        }));
    };

    return (
        <li className="filter-list-item">
            <button className="filter-list-item-btn" onClick={toggle} type="button">
                <p className="filter-list-item-label">{label}</p>
                <input
                    className={`filter-list-item-check ${isChecked ? "checked" : ""}`}
                    type="checkbox"
                    checked={isChecked}
                    readOnly
                />
            </button>
        </li>
    );
}
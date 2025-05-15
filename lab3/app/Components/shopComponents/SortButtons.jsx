import { useState } from "react";

// cykl sortowania dla każdego pola: rosnąco → malejąco → brak sortu
const sortCycle = {
    Price: ["Price ↑", "Price ↓", null],
    Title: ["Title ↑", "Title ↓", null],
    Pages: ["Pages ↑", "Pages ↓", null],
};

export default function SortButtons({ sort, setSort }) {
    const sortFields = ["Price", "Title", "Pages"];

    const handleClick = (field) => {
        const cycle = sortCycle[field];
        const index = cycle.indexOf(sort);
        const next = cycle[(index + 1) % cycle.length];
        setSort(next);
    };

    return (
        <div className="filters-container">
            <div className="filters">
                {sortFields.map((field) => {
                    const isActive = sort?.startsWith(field);
                    const label = sort?.startsWith(field) ? sort : field;

                    return (
                        <div className="filter-btn-container" key={field}>
                            <button
                                className={`filter-btn ${isActive ? "active" : ""}`}
                                onClick={() => handleClick(field)}
                            >
                                {label}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

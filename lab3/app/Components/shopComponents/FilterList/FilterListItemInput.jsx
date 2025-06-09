export default function FilterListItemInput({ label, type, filters, setFilters }) {
    const isMin = label === "Min";
    const fieldKey = `${type}${isMin ? "Min" : "Max"}`;

    const handleChange = (e) => {
        const value = e.target.value ? parseFloat(e.target.value) : null;
        setFilters(prev => ({
            ...prev,
            [fieldKey]: value
        }));
    };

    return (
        <li className="filter-list-item">
            <div className="filter-list-item-number">
                <p className="filter-list-item-label">{label}:</p>
                <input
                    className="filter-list-item-number-input"
                    type="number"
                    onChange={handleChange}
                    value={filters[fieldKey] ?? ""}
                    data-testid={label}
                />
            </div>
        </li>
    );
}
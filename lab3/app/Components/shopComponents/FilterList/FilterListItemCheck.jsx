export default function FilterListItemCheck() {
    return (
        <li className="filter-list-item">
            <button className="filter-list-item-btn">
                <p className="filter-list-item-label">
                    Author 1
                </p>
                <input className="filter-list-item-check" type="checkbox" />
            </button>
        </li>
    )
}
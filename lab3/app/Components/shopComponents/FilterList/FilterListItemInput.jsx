export default function FilterListItemInput() {
    return (
        <li className="filter-list-item">
            <div className="filter-list-item-number">
                <p className="filter-list-item-label">
                    Min:
                </p>
                <input className="filter-list-item-number-input" type="number" />
            </div>
        </li>
    )
}
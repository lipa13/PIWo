export default function FilterListItemInput({label}) {
    return (
        <li className="filter-list-item">
            <div className="filter-list-item-number">
                <p className="filter-list-item-label">
                    {label}:
                </p>
                <input className="filter-list-item-number-input" type="number" />
            </div>
        </li>
    )
}
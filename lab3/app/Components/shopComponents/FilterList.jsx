
export default function FilterList() {
    return (
        <div className="filter-list-container">
            <ul className="filter-list">
                <li className="filter-list-item">
                    <button className="filter-list-item-btn">
                        <p className="filter-list-item-label">
                            Author 1
                        </p>
                        <input type="checkbox" />
                    </button>
                </li>
                <li className="filter-list-item">
                    <button className="filter-list-item-btn">
                        <p className="filter-list-item-label">
                            Author 2
                        </p>
                        <input type="checkbox" />
                    </button>
                </li>
                <li className="filter-list-item">
                    <button className="filter-list-item-btn">
                        <p className="filter-list-item-label">
                            Author 3
                        </p>
                        <input type="checkbox" />
                    </button>
                </li>
                <li className="filter-list-item">
                    <button className="filter-list-item-btn">
                        <p className="filter-list-item-label">
                            Author 4
                        </p>
                        <input type="checkbox" />
                    </button>
                </li>
                <li className="filter-list-item">
                    <button className="filter-list-item-btn">
                        <p className="filter-list-item-label">
                            Author 5
                        </p>
                        <input type="checkbox" />
                    </button>
                </li>
            </ul>
        </div>
    )
}
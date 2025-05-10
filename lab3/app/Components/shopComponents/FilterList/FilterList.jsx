import FilterListItemCheck from "./FilterListItemCheck.jsx";
import FilterListItemInput from "./FilterListItemInput.jsx";

export default function FilterList() {
    return (
        <div className="filter-list-container">
            <ul className="filter-list">
                <FilterListItemInput />
            </ul>
        </div>
    )
}
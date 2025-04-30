import FilterList from "./FilterList"
import UpIcon from "../../../assets/chevron-up-outline.svg?react";
import DownIcon from "../../../assets/chevron-down-outline.svg?react";

export default function Filters()
{
    return (
        <div className="filters-container">
            <div className="filters">
                <button className="filter-btn">
                    Author
                    <DownIcon className="up-down-icon"/>
                    <FilterList />
                </button>
                <button className="filter-btn">Price<DownIcon className="up-down-icon"/></button>
                <button className="filter-btn">Category<DownIcon className="up-down-icon"/></button>
                <button className="filter-btn">Pages<DownIcon className="up-down-icon"/></button>
                <button className="filter-btn">Cover<DownIcon className="up-down-icon"/></button>
            </div>
        </div>
    )
}
import FilterList from "./FilterList/FilterList.jsx"
import UpIcon from "../../../assets/chevron-up-outline.svg?react";
import DownIcon from "../../../assets/chevron-down-outline.svg?react";

export default function Filters()
{
    return (
        <div className="filters-container">
            <div className="filters">
                <div className="filter-btn-container">
                    <button className="filter-btn">
                        Author
                        <DownIcon className="up-down-icon"/>
                    </button>
                    <FilterList />
                </div>

                <div className="filter-btn-container">
                    <button className="filter-btn">Price<DownIcon className="up-down-icon"/></button>
                </div>

                <div className="filter-btn-container">
                    <button className="filter-btn">Category<DownIcon className="up-down-icon"/></button>
                </div>

                <div className="filter-btn-container">
                    <button className="filter-btn">Pages<DownIcon className="up-down-icon"/></button>
                </div>

                <div className="filter-btn-container">
                    <button className="filter-btn">Cover<DownIcon className="up-down-icon"/></button>
                </div>
            </div>
        </div>
    )
}
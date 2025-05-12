import FilterList from "./FilterList/FilterList.jsx"
import UpIcon from "../../../assets/chevron-up-outline.svg?react";
import DownIcon from "../../../assets/chevron-down-outline.svg?react";
import {useState} from "react";

export default function Filters()
{
    const [openDropdowns, setOpenDropdowns] = useState({
        Author: false,
        Price: false,
        Category: false,
        Pages: false,
        Cover: false
    });

    const toggleDropdown = (key) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const filterTypes = ["Author", "Price", "Category", "Pages", "Cover"];

    return (
        <div className="filters-container">
            <div className="filters">
                {filterTypes.map((type) => (
                    <div className="filter-btn-container" key={type}>
                        <button className="filter-btn" onClick={() => toggleDropdown(type)}>
                            {type}
                            {openDropdowns[type] ? (
                                <UpIcon className="up-down-icon" />
                            ) : (
                                <DownIcon className="up-down-icon" />
                            )}
                        </button>

                        {openDropdowns[type] && <FilterList type={type} />}
                    </div>
                ))}
            </div>
        </div>
    );
}
import "../styles/shopStyle.css";
import UpIcon from "../../assets/chevron-up-outline.svg?react";
import DownIcon from "../../assets/chevron-down-outline.svg?react";
import Filters from "../components/shopComponents/Filters";

export default function Shop(){
    return (
        <main className="shop-content">
            <div className="shop-buttons">
                <button className="btn filter">
                    Filter <DownIcon className="up-down-icon"/>
                </button>
                <button className="btn sort">
                    Sort <DownIcon className="up-down-icon"/>
                </button>
            </div>
            <Filters />
            <div className="shop-books">
                Tutaj pozycje ze sklepu
            </div>
        </main>
    );
}
import "../../styles/homeStyle.css";
import LeftIcon from "../../../assets/arrow-back-outline.svg?react";
import RightIcon from "../../../assets/arrow-forward-outline.svg?react";

export default function NewAndNoticeable() {
    return (
        <section className="new-noticeable-section">
            <h3 className="new-noticeable-title">New and noticeable</h3>
            <button className="new-not-btn new-noticeable-left"><LeftIcon className="left-right-icons"/></button>
            <button className="new-not-btn new-noticeable-right"><RightIcon className="left-right-icons"/></button>
            <div className="new-noticeable-content"></div>
        </section>
    );
}
import HeartIcon from "../../../assets/heart-outline.svg?react";

export default function BookCard(){
    return (
        <div className="bookcard">
            <div className="bookcard-img">
                Photos
                <div className="like-btn-container">
                    <button className="like-btn"><HeartIcon className="heart-icon"/></button>
                    <p className="like-counter">0</p>
                </div>
            </div>
            <div className="bookcard-upload-time">Uploaded 1 day(s) ago</div>
            <div className="bookcard-info">
                <p className="bookcard-title">Very Interesting Book</p>
                <p className="bookcard-price">10.99$</p>
                <button className="btn bookcard-btn">BUY!</button>
            </div>
        </div>
    )
}
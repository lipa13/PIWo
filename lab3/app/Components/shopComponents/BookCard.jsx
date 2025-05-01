export default function BookCard(){
    return (
        <div className="bookcard">
            <div className="bookcard-img">Photos</div>
            <div className="bookcard-upload-time">Uploaded 1 day(s) ago</div>
            <div className="bookcard-info">
                <p className="bookcard-title">Very Interesting Book</p>
                <p className="bookcard-price">10.99$</p>
                <button className="btn bookcard-btn"></button>
            </div>
        </div>
    )
}
import HeartIcon from "../../../assets/heart-outline.svg?react";

export default function BookCard({ book }){
    const {
        Title,
        Author,
        Price,
        Category,
        Condition,
        Cover,
        Pages,
        uploadTime
    } = book;

    function getDaysSinceUpload(uTime) {
        const then = new Date(uTime);
        const now = new Date();

        // zerujemy godziny, minuty itd.
        then.setHours(0, 0, 0, 0);
        now.setHours(0, 0, 0, 0);

        const diffTime = now - then;

        return Math.floor(diffTime / (1000 * 60 * 60 * 24));
    }

    const calcUploadTime = getDaysSinceUpload(uploadTime);

    return (
        <div className="bookcard" data-category={book.Category}
             data-cover={book.Cover} data-author={book.Author}
             data-price={book.Price}>
            <div className="bookcard-img">
                Photos
                <div className="like-btn-container">
                    <button className="like-btn"><HeartIcon className="heart-icon"/></button>
                    <p className="like-counter">0</p>
                </div>
            </div>
            <div className="bookcard-upload-time">
                Uploaded {calcUploadTime === 0 ? "today" : `${calcUploadTime} day(s) ago`}
            </div>
            <div className="bookcard-info">
                <p className="bookcard-title">{Title}</p>
                <p className="bookcard-price">{Price}$</p>
                <button className="btn bookcard-btn">BUY!</button>
            </div>
        </div>
    )
}
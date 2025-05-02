import "../styles/sellStyle.css";

export default function Sell(){
    return (
        <div className="sell-container">
            <h3>Sell your book now with this simple form!</h3>
            <form className="sell-form">
                <div className="sell-div">
                    <label className="sell-title">Title:</label>
                    <input className="input-sell input-sell-title" type="text"/>
                </div>

                <div className="sell-div">
                    <label className="sell-author">Author:</label>
                    <input className="input-sell input-sell-author" type="text"/>
                </div>

                <div className="sell-div">
                    <label className="sell-category">Category:</label>
                </div>

                <div className="sell-div">
                    <label className="sell-description">Description:</label>
                    <textarea
                        className="input-sell input-sell-description"
                        id="multi-input"
                        rows={4}
                    />
                </div>

                <div className="sell-div">
                    <label className="sell-condition">Condition:</label>
                </div>

                <div className="sell-div">
                    <label className="sell-pages">Pages:</label>
                    <input className="input-sell input-sell-pages" type="number"/>
                </div>

                <div className="sell-div">
                    <label className="sell-cover">Cover:</label>
                </div>

                <div className="sell-div">
                    <label className="sell-price">Price:</label>
                    <input className="input-sell input-sell-price" type="number"/>
                </div>

                <button className="btn sell">Submit</button>
            </form>
        </div>
    );
}
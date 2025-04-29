export default function Sell(){
    return (
        <form className="sell-form">
            <label className="Name">Name:</label>
            <input type="text"/>

            <label className="description">Description:</label>
            <input type="text"/>

            <button className="btn sell">Submit</button>
        </form>
    );
}
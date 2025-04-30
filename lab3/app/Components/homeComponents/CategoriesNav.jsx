export default function CategoriesNav() {
    return (
        <nav className="categories-nav">
            <h3 className="categories-title">Categories</h3>
            <div className="categories">
                <button className="btn categories-btn-action">Action</button>
                <button className="btn categories-btn-fantasy">Fantasy</button>
                <button className="btn categories-btn-romance">Romance</button>
                <button className="btn categories-btn-horror">Horror</button>
                <button className="btn categories-btn-thriller">Thriller</button>
            </div>
        </nav>
    );
}
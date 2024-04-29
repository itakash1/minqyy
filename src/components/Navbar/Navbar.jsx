import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <a href="#">Profile</a>
            </div>
            <div>
                <a href="#">Chats</a>
            </div>
            <div>
                <a href="#">Music</a>
            </div>
            <div>
                <a href="#">News</a>
            </div>
        </nav>
    );
}
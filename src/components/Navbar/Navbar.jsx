import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <a className="active" href="#">Profile</a>
            </div>
            <div>
                <a className="" href="#">Chats</a>
            </div>
            <div>
                <a className="" href="#">Music</a>
            </div>
            <div>
                <a className="" href="#">News</a>
            </div>
        </nav>
    );
}
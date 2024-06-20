import css from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export default function Navbar() {
    const  activeTagName = (data) => data.isActive ? `${css.active} ${css.item}` : css.item;
    return (
        <nav className={`${css.navbar}`}>
                <NavLink className={activeTagName} to="/profile">Profile</NavLink>
                <NavLink className={activeTagName} to="/dialogs">Chats</NavLink>
                <NavLink className={activeTagName} to="/music">Music</NavLink>
                <NavLink className={activeTagName} to="/news">News</NavLink>
                <NavLink className={activeTagName} to="/find_user">Find User</NavLink>
        </nav>
    );
}
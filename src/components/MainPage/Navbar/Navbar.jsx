import css from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export default function Navbar() {
    const  activeTagName = (data) => data.isActive ? `${css.active} ${css.item}` : css.item;
    return (
        <nav className={`${css.navbar}`}>
                <NavLink className={activeTagName} to="/profile">Profile</NavLink>
                <NavLink className={activeTagName} to="/dialogs">Chats</NavLink>
                <NavLink className={css.item} to="#">Music</NavLink>
                <NavLink className={css.item} to="#">News</NavLink>
        </nav>
    );
}
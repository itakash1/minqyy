import css from'./Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={css.navbar}>
                <a className={`${css.item} ${css.active}`} href="#">Profile</a>
                <a className={css.item} href="#">Chats</a>
                <a className={css.item} href="#">Music</a>
                <a className={css.item} href="#">News</a>
        </nav>
    );
}
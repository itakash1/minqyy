import css from './Header.module.css'
import logo from '../../assets/minqyy-logo-cutv.svg';

export default function Header() {
    return (
        <header>
            <div className={css.logo_header}>
                <img src={logo} alt="logo"/>
                <p className={css.btn}>Sign In</p>
            </div>
        </header>
    );
}
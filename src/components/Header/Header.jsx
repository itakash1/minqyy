import './Header.css'
import logo from '../../assets/minqyy-logo-cutv.svg';

export default function Header() {
    return (
        <header>
            <div className="logo-header">
                <img src={logo} alt="logo"/>
                <p className="btn">Sign In</p>
            </div>
        </header>
    );
}
import css from "./Users.module.css";
import avatar from "../../../../assets/user-avatar.png";
import {NavLink} from "react-router-dom";

export default function Users(props){
    const  activeTagName = (data) => data.isActive ? `${css.chat_user} ${css.active}` : css.chat_user;
    return (
        <div className={css.dialogs_users_nav}>

            <NavLink to="/dialogs/id1" className={activeTagName}>
                <img src={avatar} alt=""/>
                <p>Никита Турбонадув</p>
            </NavLink>

            <NavLink to="/dialogs/id2" className={activeTagName}>
                <img src={avatar} alt=""/>
                <p>Константин Коленвал</p>
            </NavLink>

            <NavLink to="/dialogs/id3" className={activeTagName}>
                <img src={avatar} alt=""/>
                <p>Дмитрий Чехословакия</p>
            </NavLink>

            <NavLink to="/dialogs/id4" className={activeTagName}>
                <img src={avatar} alt=""/>
                <p>Борис Щипач</p>
            </NavLink>

        </div>
    )
}
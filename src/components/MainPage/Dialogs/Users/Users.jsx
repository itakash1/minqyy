import css from "./Users.module.css";
import {NavLink} from "react-router-dom";

export default function Users(props){
    const  activeTagName = (data) => data.isActive ? `${css.chat_user} ${css.active}` : css.chat_user;

    return (
        <NavLink to={`/dialogs/id${props.id}`} className={activeTagName}>
            <img src={props.avatar} alt=""/>
            <p>{props.name}</p>
        </NavLink>
    )
}
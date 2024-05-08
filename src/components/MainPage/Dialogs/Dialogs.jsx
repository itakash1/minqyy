import css from './Dialogs.module.css';
import Users from "./Users/Users";
import Messagease from "./Messagease/Messagease";
import avatar from "../../../assets/user-avatar.png";

export default function Dialogs(props){
    let arrayUsers = [
        {id: 1, name: "Андрюха Лупатый", avatar: avatar,},
        {id: 2, name: "Николай Турбо", avatar: avatar,},
        {id: 3, name: "Карась Фандю", avatar: avatar,},
        {id: 4, name: "Дмитрий Бычок", avatar: avatar,},
    ]

    let msgData = [
        {id: 1, msg: "hello",},
        {id: 1, msg: "budlo",},
        {id: 1, msg: "ya tut",},
        {id: 1, msg: "poshli v dotu",},
    ]
    return(
        <div className={css.dialogs}>
            <div className={css.dialogs_users_nav}>
                <Users name={arrayUsers[0].name} avatar={arrayUsers[0].avatar} id={arrayUsers[0].id}/>
                <Users name={arrayUsers[1].name} avatar={arrayUsers[1].avatar} id={arrayUsers[1].id}/>
                <Users name={arrayUsers[2].name} avatar={arrayUsers[2].avatar} id={arrayUsers[2].id}/>
                <Users name={arrayUsers[3].name} avatar={arrayUsers[3].avatar} id={arrayUsers[3].id}/>
            </div>
            <div className={css.dialog_chat_void}>
                <Messagease msg={msgData[0].msg}/>
                <Messagease msg={msgData[1].msg}/>
                <Messagease msg={msgData[2].msg}/>

                <div className={css.dialog_free_void}>

                </div>

                <div className={css.dialog_input_void}>
                    <div className={css.chat_input}>
                        <textarea name="" id=""></textarea>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
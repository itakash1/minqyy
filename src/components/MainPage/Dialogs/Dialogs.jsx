import css from './Dialogs.module.css';
import Users from "./Users/Users";
import Messagease from "./Messagease/Messagease";
import avatar from "../../../assets/user-avatar.png";

export default function Dialogs(props) {

    let listUsers = [
        {id: 1, name: "Андрюха Лупатый", avatar: avatar,},
        {id: 2, name: "Николай Турбо", avatar: avatar,},
        {id: 3, name: "Карась Фандю", avatar: avatar,},
        {id: 4, name: "Дмитрий Бычок", avatar: avatar,},
    ]

    let dialogsData = [
        {id: 1, msg: "hello",},
        {id: 2, msg: "budlo",},
        {id: 3, msg: "ya tut",},
        {id: 4, msg: "poshli v dotu",},
    ]

    let dialogsEl = listUsers.map((dialog) => {
        return <Users name={dialog.name} avatar={dialog.avatar} id={dialog.id} />
    })

    let listUserMsg = dialogsData.map(item => {
        return <Messagease msg={item.msg}/>
    })


    return (
        <div className={css.dialogs}>
            <div className={css.dialogs_users_nav}>
                { dialogsEl }
            </div>
            <div className={css.dialog_chat_void}>
                { listUserMsg}
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
import css from './Dialogs.module.css';
import Users from "./Users/Users";
import Messagease from "./Messagease/Messagease";
import avatar from "../../../assets/user-avatar.png";

export default function Dialogs(props){
    return(
        <div className={css.dialogs}>
            <div className={css.dialogs_users_nav}>
                <Users name="Николай Турбо" avatar={avatar} id={0}/>
                <Users name="Андрей Бабуин" avatar={avatar} id={1}/>
                <Users name="Карась Фандю" avatar={avatar} id={2}/>
                <Users name="Дмитрий Бычок" avatar={avatar} id={3}/>
            </div>
            <div className={css.dialog_chat_void}>
                <Messagease msg={'Привет ебанат'}/>
                <Messagease msg={'Я его все ебал'}/>
                <Messagease msg={'Айм файн нахуй'}/>

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
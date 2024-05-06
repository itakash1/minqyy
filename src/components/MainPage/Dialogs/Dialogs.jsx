import css from './Dialogs.module.css';
import avatar from "../../../assets/user-avatar.png";

export default function Dialogs(props){
    return(
        <div className={css.dialogs}>

            <div className={css.dialogs_users_nav}>
                <div className={`${css.chat_user} ${css.active}`}>
                    <img src={avatar} alt=""/>
                    <p>Никита Турбонадув</p>
                </div>
                <div className={css.chat_user}>
                    <img src={avatar} alt=""/>
                    <p>Дмитрий Чехословакия</p>
                </div>
                <div className={css.chat_user}>
                    <img src={avatar} alt=""/>
                    <p>Константин Коленвал</p>
                </div>
            </div>

            <div className={css.dialog_chat_void}>

                <div className={css.dialog_msg_void}>
                    <p>
                        Бассуха лупит - пизда
                    </p>

                    <p>
                        и тормозам кстати тоже пизда
                    </p>
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
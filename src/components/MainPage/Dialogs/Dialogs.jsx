import css from './Dialogs.module.css';
import avatar from "../../../assets/user-avatar.png";

export default function Dialogs(props){
    return(
        <div className={css.dialogs}>

            <div className={css.dialogs_nav}>
                <div className={`${css.chat_user} ${css.active}`}>
                    <img src={avatar} alt=""/>
                    <p>Никита Турбонадув</p>
                </div>
                <div className={css.chat_user}>
                    <img src={avatar} alt=""/>
                    <p>Никита Турбонадув</p>
                </div>
                <div className={css.chat_user}>
                    <img src={avatar} alt=""/>
                    <p>Никита Турбонадув</p>
                </div>
            </div>

            <div className={css.dialogs_chat}>
                <div className={css.chat_void}>
                    <div className={css.msg_user}>
                        <p>msg1</p>
                    </div>

                    <div className={css.msg_user}>
                        <p>msg2</p>
                    </div>

                    <div className={css.input__void}>
                        <textarea placeholder=". . ."/>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
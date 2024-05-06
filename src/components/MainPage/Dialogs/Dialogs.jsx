import css from './Dialogs.module.css';
import Users from "./Users/Users";
import Messagease from "./Messagease/Messagease";

export default function Dialogs(props){
    return(
        <div className={css.dialogs}>

            <Users />

            <div className={css.dialog_chat_void}>
                <Messagease />

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
import css from './Dialogs.module.css';
import Users from "./Users/Users";
import Messagease from "./Messagease/Messagease";
import InputMsg from "./InputMsg/InputMsg";

export default function Dialogs(props) {


    let dialogsEl = props.state.listUsers.map((dialog) => {
        return <Users name={dialog.name} avatar={dialog.avatar} id={dialog.id} />
    })

    let listUserMsg = props.state.dialogsData.map(item => {
        return <Messagease msg={item.msg}/>
    })


    return (
        <div className={css.dialogs}>
            <div className={css.dialogs_users_nav}>
                { dialogsEl }
            </div>
            <div className={css.dialog_chat_void}>
                { listUserMsg}

                <div className={css.dialog_free_void}></div>

                <InputMsg state={props.state} dispatch={props.dispatch}/>
            </div>
        </div>
    );
}
import css from './Dialogs.module.css';
import Users from "./Users/Users";
import Messagease from "./Messagease/Messagease";
import InputMsgComponent from "./InputMsg/InputMsgComponent";
import {connect} from "react-redux";

function DialogsComp(props) {
    let dialogsEl = props.state.dialogs.listUsers.map((dialog) => {
        return <Users name={dialog.name} avatar={dialog.avatar} id={dialog.id} />
    })

    let listUserMsg = props.state.dialogs.dialogsData.map(item => {
        return <Messagease msg={item.msg}/>
    })

    return(
        <div className={css.dialogs}>
            <div className={css.dialogs_users_nav}>
                {dialogsEl}
            </div>
            <div className={css.dialog_chat_void}>
                {listUserMsg}

                <div className={css.dialog_free_void}></div>

                <InputMsgComponent  />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        state: state,
    }
}

const Dialogs = connect(mapStateToProps)(DialogsComp);
export default Dialogs;
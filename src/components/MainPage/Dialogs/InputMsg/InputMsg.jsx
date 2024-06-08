import css from "./InputMsg.module.css";
import React from 'react'
import {sendMsg, updateNewMsg} from "../../../../redux/dialogs-reducer";

export default function InputMsg(props) {
    let Test = () => {
        let action = sendMsg()
        props.store.dispatch(action);
    }

    let onChangeMark = () => {
        let text = newElement.current.value;
        props.store.dispatch(updateNewMsg(text));
    }
    let newElement = React.createRef();
    return (
        <div className={css.dialog_input_void}>
            <div className={css.chat_input}>
                <textarea ref={newElement} value={props.store.newDialogMsg} onChange={onChangeMark}></textarea>
                <button onClick={Test}>Send</button>
            </div>
        </div>
    )
}
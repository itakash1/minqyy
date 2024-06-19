import css from "./InputMsg.module.css";
import React from 'react'

export default function InputMsg(props) {
    let SendMsg = () => {
        props.sendMsg();
    }

    let onChangeMark = () => {
        let text = newElement.current.value;
        props.updateNewMsg(text);
    }
    let newElement = React.createRef();
    return (
        <div className={css.dialog_input_void}>
            <div className={css.chat_input}>
                <textarea ref={newElement} value={props.store.newDialogMsg} onChange={onChangeMark}></textarea>
                <button onClick={SendMsg}>Send</button>
            </div>
        </div>
    )
}
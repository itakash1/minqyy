import css from "./InputMsg.module.css";
import React from 'react'
import {updateNewPostCreator} from "../../../../redux/state";

export default function InputMsg(props) {
    let Test = () => {
        let action = { type: 'NEW-MSG' }
        props.dispatch(action);
    }

    let onChangeMark = () => {
        let text = newElement.current.value;
        props.dispatch({type: 'CHECK-NEW-MSG', newMsg: text });
    }
    let newElement = React.createRef();
    return (
        <div className={css.dialog_input_void}>
            <div className={css.chat_input}>
                <textarea ref={newElement} value={props.state.newDialogMsg} onChange={onChangeMark}></textarea>
                <button onClick={Test}>Send</button>
            </div>
        </div>
    )
}
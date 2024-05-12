import css from "./InputMsg.module.css";
import React from 'react'

export default function InputMsg(props) {
    let Test = () => {
        let text = newElement.current.value;
        alert(text)
    }
    let newElement = React.createRef();
    return (
        <div className={css.dialog_input_void}>
            <div className={css.chat_input}>
                <textarea ref={newElement}></textarea>
                <button onClick={Test}>Send</button>
            </div>
        </div>
    )
}
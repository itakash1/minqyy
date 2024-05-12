import css from './UserInput.module.css'
import React from 'react'

export default function UserInput() {
    let Test = () => {
        let text = newElement.current.value;
        alert(text);
    }

    let newElement = React.createRef();
    return (
        <div className={css.input__void}>
            <textarea ref={newElement} placeholder="What do u think about z1trxks?"/>
            <button onClick={Test}>Send</button>
        </div>
    );
}
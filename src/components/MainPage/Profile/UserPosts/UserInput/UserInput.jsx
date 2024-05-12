import css from './UserInput.module.css'
import React from 'react'

export default function UserInput(props) {
    let Test = () => {
        let text = newElement.current.value;
        props.addPost(text)
        console.log(props.addPost)
    }

    let newElement = React.createRef();
    return (
        <div className={css.input__void}>
            <textarea ref={newElement} placeholder="What do u think about z1trxks?"/>
            <button onClick={Test}>Send</button>
        </div>
    );
}
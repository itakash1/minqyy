import css from './UserInput.module.css'
import React from 'react'

export default function UserInput(props) {
    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newElement.current.value
        props.onPostChange(text);
    }
    let newElement = React.createRef();
    return (
        <div className={css.input__void}>
            <textarea ref={newElement} placeholder="What do u think about z1trxks?" value={props.value} onChange={onPostChange} />
            <button onClick={addPost}>Send</button>
        </div>
    );
}
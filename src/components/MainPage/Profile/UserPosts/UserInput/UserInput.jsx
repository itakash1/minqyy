import css from './UserInput.module.css'
import React from 'react'
import {sendDataToWall, updateNewPostCreator} from "../../../../../redux/state";

export default function UserInput(props) {
    let addPost = () => {
        let action = sendDataToWall()
        props.dispatch(action)
    }

    let onPostChange = () => {
        let text = newElement.current.value
        let action = updateNewPostCreator(text)
        props.dispatch(action)
    }
    let newElement = React.createRef();
    return (
        <div className={css.input__void}>
            <textarea ref={newElement} placeholder="What do u think about z1trxks?" value={props.newText.profile.newText} onChange={onPostChange} />
            <button onClick={addPost}>Send</button>
        </div>
    );
}
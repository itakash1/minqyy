import css from './UserInput.module.css'
import React from 'react'
import {sendDataToWall, updateNewPostCreator} from "../../../../../redux/state";

export default function UserInput(props) {
    let test = () => {
        let text = newElement.current.value
        props.dispatch(updateNewPostCreator(text))
        console.log(text)
    }

    let newElement = React.createRef();
    return (
        <div className={css.input__void}>
            <textarea ref={newElement} placeholder="What do u think about z1trxks?" value={props.newText.profile.newText} onChange={test} />
            <button onClick={sendDataToWall}>Send</button>
        </div>
    );
}
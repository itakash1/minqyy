import css from './UserInput.module.css'
import React from 'react'

export default function UserInput(props) {

    let sendDataToWall = () => {
        let text = newElement.current.value;
        props.addPost(text)
    }

    let test = () => {
        props.changeNewText(newElement.current.value);
    }

    let newElement = React.createRef();
    return (
        <div className={css.input__void}>
            <textarea ref={newElement} placeholder="What do u think about z1trxks?" value={props.newText} onChange={test} />
            <button onClick={sendDataToWall}>Send</button>
        </div>
    );
}
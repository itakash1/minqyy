import React from 'react'
import {sendDataToWall, updateNewPostCreator} from "../../../../../redux/profile-reducer";
import UserInput from "./UserInput";

export default function UserInputComponent(props) {
    let state = props.store

    let addPost = () => {
        let action = sendDataToWall()
        props.dispatch(action)
    }

    let onPostChange = (text) => {
        let action = updateNewPostCreator(text)
        props.dispatch(action)
    }

    return (
        <UserInput store={state} addPost={addPost} onPostChange={onPostChange} />
    );
}
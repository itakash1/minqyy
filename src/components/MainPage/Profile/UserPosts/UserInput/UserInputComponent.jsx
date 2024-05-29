import React from 'react'
import {sendDataToWall, updateNewPostCreator} from "../../../../../redux/profile-reducer";
import UserInput from "./UserInput";
import state from "../../../../../redux/state";

export default function UserInputComponent(props) {
    let addPost = () => {
        let action = sendDataToWall()
        props.dispatch(action)
    }

    let onPostChange = (text) => {
        let action = updateNewPostCreator(text)
        props.dispatch(action)
    }

    return (
        <UserInput value={props.state.profile.newText} addPost={addPost} onPostChange={onPostChange} />
    );
}
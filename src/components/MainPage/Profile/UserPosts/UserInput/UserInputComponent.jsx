import React from 'react'
import {sendDataToWall, updateNewPostCreator} from "../../../../../redux/profile-reducer";
import UserInput from "./UserInput";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
    store: state,
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        addPost: () => {
            dispatch(sendDataToWall())
        },
        onPostChange: (text) => {
            dispatch(updateNewPostCreator(text))
        },
    }
};

const UserInputComponent = connect(mapStateToProps, mapDispatchToProps)(UserInput)

export default UserInputComponent
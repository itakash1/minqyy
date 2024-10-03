import React from 'react';
import css from "./FindUser.module.css";
import axios from "axios";
import {User} from "./User/User";

class FindUser extends React.Component {

    getUsers = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => {
                const dataAx = response.data.items
                this.props.set_users(dataAx);
            });
    }

    render() {
        let userToListOnWall = this.props.state.finduser.user.map((ele) => {
            return <User id={ele.id} followed={ele.followed} avatar={ele.avatar} name={ele.name} place={ele.place} state={this.props}/>
        })
        return (
            <div className={css.blockFind}>
                { userToListOnWall }

                <button className={css.updateNewUsers} onClick={this.getUsers}>
                    <p>Update</p>
                </button>
            </div>
        )
    }
}

export default FindUser;
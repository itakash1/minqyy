import css from "./FindUser.module.css";
import {User} from "./User/User";
import axios from "axios";

export function FindUser(props) {

    let getUsers = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => {
                const dataAx = response.data.items
                props.set_users(dataAx);
            });
    }


    let userToListOnWall = props.state.finduser.user.map((ele) => {
        return <User id={ele.id} followed={ele.followed} avatar={ele.avatar} name={ele.name} place={ele.place} state={props}/>
    })

    return (
        <div className={css.blockFind}>
            { userToListOnWall }

            <button className={css.updateNewUsers} onClick={getUsers}>
                <p>Update</p>
            </button>
        </div>
    )
}
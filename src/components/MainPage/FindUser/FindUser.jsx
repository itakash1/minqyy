import css from "./FindUser.module.css";
import {User} from "./User/User";
import axios from "axios";

export function FindUser(props) {
    console.log(props)

    axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
            props.set_users(response.data.items);
        });


    let userToListOnWall = props.state.finduser.user.map((ele) => {
        return <User id={ele.id} followed={ele.followed} avatar={ele.avatar} name={ele.name} place={ele.place} state={props}/>
    })

    return (
        <div className={css.blockFind}>
            { userToListOnWall }

            <div className={css.updateNewUsers}>
                <p>Update</p>
            </div>
        </div>
    )
}
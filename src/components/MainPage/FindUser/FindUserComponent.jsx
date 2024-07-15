import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../../redux/user-reducer";
import css from "./FindUser.module.css";
import User from "./User/User";

export function FindUser(props) {
    const upFl = (id) => props.followw(id);

    let userToListOnWall = props.state.finduser.user.map((ele) => {
        return <User id={ele.id} followed={ele.followed} avatar={ele.avatar} name={ele.name} place={ele.place} upFl={upFl}/>
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

const mapStateToProps = (state) => {
    return{
        state: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        followw: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        set_users: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const FindUserComponent = connect(mapStateToProps, mapDispatchToProps)(FindUser);
export default FindUserComponent;
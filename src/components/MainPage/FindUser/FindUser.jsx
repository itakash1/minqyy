import css from "./FindUser.module.css";
import User from "./User/User";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../../redux/user-reducer";

function FindUser1(props) {
    let userToListOnWall = props.user.map((ele) => {
        return <User id={ele.id} followed={ele.followed} avatar={ele.avatar} name={ele.name} place={ele.place}/>
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
        user: state.finduser.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
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

const FindUser = connect(mapStateToProps)(FindUser1);
export default FindUser;
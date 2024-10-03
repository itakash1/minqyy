import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../../redux/user-reducer";
import FindUser from "./FindUser";

const mapStateToProps = (state) => {
    return{
        state: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        followAC1: (userID) => {
            dispatch(followAC(userID))
        },
        unfollowAC1: (userID) => {
            dispatch(unfollowAC(userID))
        },
        set_users: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const FindUserComponent = connect(mapStateToProps, mapDispatchToProps)(FindUser);
export default FindUserComponent;
import {connect} from "react-redux";
import {FindUser} from "./FindUser";
import {followAC, setUsersAC, unfollowAC} from "../../../redux/user-reducer";

const mapStateToProps = (state) => {
    return{
        state: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        followAC1: (userID) => {
            console.log('tut +')
            dispatch(followAC(userID))
        },
        unfollowAC1: (userID) => {
            console.log('tut -')
            dispatch(unfollowAC(userID))
        },
        set_users: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const FindUserComponent = connect(mapStateToProps, mapDispatchToProps)(FindUser);
export default FindUserComponent;
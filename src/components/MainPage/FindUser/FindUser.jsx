import css from "./FindUser.module.css";
import User from "./User/User";
import {connect} from "react-redux";

function FindUser1(props) {
    let userToListOnWall = props.store.finduser.user.map((ele) => {
        return <User followed={ele.followed} avatar={ele.avatar} name={ele.name} place={ele.place}/>
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
        store: state,
    }
}

const FindUser = connect(mapStateToProps)(FindUser1);
export default FindUser;
import css from "./UserPosts.module.css";
import Post from "./Post/Post";
import UserInputComponent from "./UserInput/UserInputComponent";
import {connect} from "react-redux";

function UserPosts1(props) {
    let userPostWall = props.store.profile.post.map((ele) => {
        return <Post avatar={ele.avatar} text={ele.text} likes={ele.likes}/>
    })

    return (
        <div className={css.wall__post__void}>
            <UserInputComponent />
            { userPostWall }
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        store: state,
    }
}

const UserPosts = connect(mapStateToProps)(UserPosts1);

export default UserPosts
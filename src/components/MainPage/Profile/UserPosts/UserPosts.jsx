import css from "./UserPosts.module.css";
import Post from "./Post/Post";
import UserInput from "./UserInput/UserInput";

export default function UserPosts(props) {
    let userPostWall = props.state.profile.post.map((ele) => {
        return <Post avatar={ele.avatar} text={ele.text} likes={ele.likes}/>
    })

    return (
        <div className={css.wall__post__void}>
            <UserInput newText={props.state} dispatch={props.dispatch}/>
            { userPostWall }
        </div>
    );
}
import css from "./UserPosts.module.css";
import Post from "./Post/Post";
import UserInputComponent from "./UserInput/UserInputComponent";

export default function UserPosts(props) {
    let userPostWall = props.state.profile.post.map((ele) => {
        return <Post avatar={ele.avatar} text={ele.text} likes={ele.likes}/>
    })

    return (
        <div className={css.wall__post__void}>
            <UserInputComponent state={props.state} newText={props.state} dispatch={props.dispatch}/>
            { userPostWall }
        </div>
    );
}
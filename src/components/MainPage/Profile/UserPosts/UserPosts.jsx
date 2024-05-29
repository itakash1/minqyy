import css from "./UserPosts.module.css";
import Post from "./Post/Post";
import UserInputComponent from "./UserInput/UserInputComponent";

export default function UserPosts(props) {
    let userPostWall = props.store.profile.post.map((ele) => {
        return <Post avatar={ele.avatar} text={ele.text} likes={ele.likes}/>
    })

    return (
        <div className={css.wall__post__void}>
            <UserInputComponent store={props.store} dispatch={props.dispatch}/>
            { userPostWall }
        </div>
    );
}
import css from "./UserPosts.module.css";
import Post from "./Post/Post";
import UserInput from "./UserInput/UserInput";

export default function UserPosts(props) {

    let userPostWall = props.state.map((el) => {
        return <Post avatar={el.avatar} text={el.text} likes={el.likes}/>
    })

    return (
        <div className={css.wall__post__void}>
            <UserInput addPost={props.addPost}/>
            { userPostWall }
        </div>
    );
}
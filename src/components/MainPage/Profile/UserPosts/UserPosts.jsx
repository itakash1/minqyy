import css from "./UserPosts.module.css";
import Post from "./Post/Post";
import UserInput from "./UserInput/UserInput";

export default function UserPosts(props) {

    let userPostWall = props.post.map((el) => {
        return <Post text={el.text}/>
    })

    return (
        <div className={css.wall__post__void}>
            <UserInput />
            {userPostWall}
        </div>
    );
}
import css from "./UserPosts.module.css";
import Post from "./Post/Post";
import UserInput from "./UserInput/UserInput";

export default function UserPosts() {
    return (
        <div className={css.wall__post__void}>
            <UserInput />
            <Post />
            <Post />
        </div>
    );
}
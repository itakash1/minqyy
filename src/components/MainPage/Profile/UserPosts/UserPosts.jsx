import css from "./UserPosts.module.css";
import Post from "./Post/Post";
import UserInput from "./UserInput/UserInput";

export default function UserPosts() {
    return (
        <div className={css.wall__post__void}>
            <UserInput />
            <Post text={'Im so lazy... But im gtg teach React!'}/>
            <Post text={'"cya" - Its one of the way variants say goodbye in English language'}/>
        </div>
    );
}
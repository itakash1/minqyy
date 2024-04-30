import css from "./UserPosts.module.css";
import avatar from "../../../assets/avatar.jpeg";

export default function UserPosts() {
    return (
        <div className={css.profile_wall}>
            <div className={css.input_void}>
                <input type="text" placeholder="What do u think about z1trxks?"/>
                <button>Send</button>
            </div>
            <div className={css.post}>
                <div className={css.title_post}>
                    <div className={css.avatar_user_post}>
                        <img src={avatar} alt="avatar"/>
                    </div>
                    <div className={css.name_user_post}>
                        <span>Nikolay Malikov</span>
                    </div>
                </div>
                <div className={css.data_post}>
                    <p>Im so lazy... But im gtg teach React!</p>
                </div>
            </div>
        </div>
    );
}
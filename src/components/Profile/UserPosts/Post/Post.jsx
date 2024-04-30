import css from './Post.module.css';
import avatar from "../../../../assets/avatar.jpeg";

export default function Post() {
    return (
        <div className={css.user__post}>
            <div className={css.user__post_title}>
                <div className={css.user__post_avatar}>
                    <img src={avatar} alt="avatar"/>
                </div>
                <div className={css.user__post_name}>
                    <span>Nikolay Malikov</span>
                </div>
            </div>
            <div className={css.user__post_data}>
                <p>Im so lazy... But im gtg teach React!</p>
            </div>
        </div>
    );
}
import css from './Post.module.css';

export default function Post(props) {
    return (
        <div className={css.user__post}>
            <div className={css.user__post_title}>
                <div className={css.user__post_avatar}>
                    <img src={props.avatar} alt="avatar"/>
                </div>
                <div className={css.user__post_name}>
                    <span>Nikolay Malikov</span>
                </div>
            </div>
            <div className={css.user__post_data}>
                <p>{props.text}</p>
            </div>
            <div className={css.likes}>
                <p>likes: <span>{props.likes}</span></p>
            </div>
        </div>
    );
}
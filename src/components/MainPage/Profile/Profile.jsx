import css from './Profile.module.css'
import avatar from '../../../assets/avatar.jpeg'
import banner from '../../../assets/banner.jpg'
import UserPosts from './UserPosts/UserPosts'

export default function Profile(props) {
    return(
        <div className={css.profile}>
            <div className={css.profile__header}>
                <img className={css.profile__banner} src={banner} alt=""/>
                <div className={css.profile__user__data}>
                    <img className={css.profile__user__data_avatar} src={avatar} alt=""/>
                    <div>
                        <h1 className={css.profile__user__data_name}>
                            <span>Nikolay Malikov</span>
                        </h1>
                        <p className={css.profile__user__data_status}>
                            <span>Write some about ur</span>
                        </p>
                    </div>
                </div>
            </div>
            <UserPosts state={props.stateData.profile.post} />
        </div>
    );
}
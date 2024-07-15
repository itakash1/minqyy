import css from "./User.module.css";
import {followAC, unfollowAC} from "../../../../redux/user-reducer";

function Followed(props) {
    // if(props.followed === false){
    //     return <p>Add in friend</p>
    // } else{
    //     return <p>You are friend</p>
    // }
    return props.followed ? <button onClick={() => followAC(props.id)}>Unfollow</button> :
        <button onClick={() => unfollowAC(props.id)}>Follow</button>
}

export default function User(props) {
    return (
            <div>
                <div className={css.user}>
                    <div className={css.avatar}>
                        <img src={props.avatar} alt="none"/>
                    </div>
                    <div className={css.user_info}>
                        <div className={css.nameUser}>
                            <p>{props.name}</p>
                        </div>
                        <div className={css.place}>
                            <p>{props.place}</p>
                        </div>
                    </div>
                    <div className={`${css.add_user} ${css.push}`}>
                        <Followed followed={props.followed} id={props.id}/>
                    </div>
                </div>
            </div>
    )
}
import css from "./User.module.css";

export function Followed(props) {
    return props.followed ? <button onClick={() => props.state.followAC1(props.id)}>Unfollow</button> :
        <button onClick={() => props.state.unfollowAC1(props.id)}>Follow</button>
}

export function User(props) {
    return (
            <div>
                <div className={css.user}>
                    <div className={css.avatar}>
                        <img src={props.avatar} alt="none"/>
                    </div>
                    <div className={css.user_info}>
                        <div className={css.nameUser}>b
                            <p>{props.name}</p>
                        </div>
                        <div className={css.place}>
                            <p>{props.place ? props.place : 'none' }</p>
                        </div>
                    </div>
                    <div className={`${css.add_user} ${css.push}`}>
                        {<Followed followed={props.followed} id={props.id} state={props.state}/>}
                    </div>
                </div>
            </div>
    )
}
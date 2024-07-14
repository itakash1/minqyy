import css from "./User.module.css";

function Followed(props) {
    if(props.followed === false){
        return <p>Add in friend</p>
    } else{
        return <p>You are friend</p>
    }
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
                        <Followed followed={props.followed}/>
                    </div>
                </div>
            </div>
    )
}
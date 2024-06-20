import css from "./FindUser.module.css";
import avatarka from "../../../assets/avatar.jpeg"
export default function FindUser(props) {

    return (
        <div className={css.blockFind}>
            <div>
                <div className={css.user}>
                    <div className={css.avatar}>
                        <img src={avatarka} alt="none"/>
                    </div>
                    <div className={css.user_info}>
                        <div className={css.nameUser}>
                            <p>Александр Невский</p>
                        </div>
                        <div className={css.place}>
                            <p>Samara</p>
                        </div>
                    </div>
                    <div className={`${css.add_user} ${css.push}`}>
                        <p>Add in friend</p>
                    </div>
                </div>
            </div>
            <div className={css.updateNewUsers}>
                <p>Update</p>
            </div>
        </div>
    )
}
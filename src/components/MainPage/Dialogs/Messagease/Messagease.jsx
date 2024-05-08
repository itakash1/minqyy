import css from "./Messagease.module.css";

export default function Messagease(props) {
    return (
        <div className={css.dialog_msg_void}>
            <p>{props.msg}</p>
        </div>
    )
}
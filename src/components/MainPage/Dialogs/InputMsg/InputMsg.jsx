import css from "./InputMsg.module.css";

export default function InputMsg(props) {
    return (
        <div className={css.dialog_input_void}>
            <div className={css.chat_input}>
                <textarea name="" id=""></textarea>
                <button>Send</button>
            </div>
        </div>
    )
}
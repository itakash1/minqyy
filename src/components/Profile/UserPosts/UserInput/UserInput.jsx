import css from './UserInput.module.css'

export default function UserInput() {
    return (
        <div className={css.input__void}>
            <textarea placeholder="What do u think about z1trxks?"/>
            <button>Send</button>
        </div>
    );
}
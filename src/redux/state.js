import avatar from "../assets/avatar.jpeg";
import avatar1 from "../assets/user-avatar.png"
import {renderTree} from "../index";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";

let store = {
    _state: {
        profile: {
            post: [
                {id: 1, avatar: avatar, text: 'Im so lazy... But im gtg teach React!', likes: 12,},
                {id: 2, avatar: avatar, text: '"cya" - Its one of the way variants say goodbye in English language', likes: 2,},
                {id: 3, avatar: avatar, text: 'oink-oink', likes: 66,},
                {id: 3, avatar: avatar, text: 'oink-oink', likes: 66,},
            ],
            newText: 'hello world!',
        },
        dialogs: {
            listUsers: [
                {id: 1, name: "Андрюха Лупатый", avatar: avatar1,},
                {id: 2, name: "Николай Турбо", avatar: avatar1,},
                {id: 3, name: "Карась Фандю", avatar: avatar1,},
                {id: 4, name: "Дмитрий Бычок", avatar: avatar1,},
            ],
            dialogsData: [
                {id: 1, msg: "hello",},
                {id: 2, msg: "budlo",},
                {id: 3, msg: "ya tut",},
                {id: 4, msg: "poshli v dotu",},
            ],
            newDialogMsg: "",
        },
        user:[
            {id: 1, avatar: avatar, name: 'Александр Невский', place: 'Samara'},
            {id: 2, avatar: avatar, name: 'Евгений Носов', place: 'Samara'},
            {id: 3, avatar: avatar, name: 'Алина Воронова', place: 'Samara'},
        ],
    },
     dispatch(action){
        this._state.profile = ProfileReducer(this._state.profile, action);
        this._state.dialogs = DialogsReducer(this._state.dialogs, action);
        renderTree();
    },
    getState() {
        return this._state
    },
}

export default store;
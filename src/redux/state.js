import avatar from "../assets/avatar.jpeg";
import avatar1 from "../assets/user-avatar.png"
import {renderTree} from "../index";


const commandAddPost = 'ADD-POST';
const commandPostCreator = 'CHANGE-NEW-TEXT';

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
    },
     dispatch(action){
        if(action.type === commandAddPost){
            let newPost = {
                id: 5,
                avatar: avatar,
                text: this._state.profile.newText,
                likes: 0,
            };
            this._state.profile.post.push(newPost);
            this._state.profile.newText = ''
            renderTree(this._state);
        } else if(action.type === commandPostCreator){
            this._state.profile.newText = action.newText
            renderTree(this._state);
        } else if(action.type === 'NEW-MSG'){
            let newMsg = {id: 5, msg: this._state.dialogs.newDialogMsg};
            this._state.dialogs.dialogsData.push(newMsg)
            this._state.dialogs.newDialogMsg = ''
            renderTree(this._state);
        } else if(action.type === 'CHECK-NEW-MSG'){
            this._state.dialogs.newDialogMsg = action.newMsg;
            renderTree(this._state);
        }
    },
    getState() {
        return this._state
    },
}

export const sendDataToWall = () => {
    return { type: commandAddPost}
};

export const updateNewPostCreator = (text) => {
    return { type: commandPostCreator, newText: text }
};

export default store;
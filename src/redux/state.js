import avatar from "../assets/avatar.jpeg";
import avatar1 from "../assets/user-avatar.png"
import {renderTree} from "../index";



let store = {
    _state: {
        profile: {
            post: [
                {id: 1, avatar: avatar, text: 'Im so lazy... But im gtg teach React!', likes: 12,},
                {id: 2, avatar: avatar, text: '"cya" - Its one of the way variants say goodbye in English language', likes: 2,},
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
                {id: 4, msg: "meme",},
                {id: 4, msg: "saaaaaay",},
                {id: 4, msg: "zxc",},
                {id: 4, msg: "redan",},
                {id: 4, msg: "svin",},
                {id: 4, msg: "oink-oink",},
                {id: 4, msg: "tractor",},
                {id: 4, msg: "poshli v dotu",},
                {id: 4, msg: "poshli v dotu",},
                {id: 4, msg: "poshli v dotu",},
                {id: 4, msg: "poshli v dotu",},
                {id: 4, msg: "poshli v dotu",},
            ],
        },
    },
     dispatch(action){
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                avatar: avatar,
                text: this._state.profile.newText,
                likes: 5,
            };
            this._state.profile.post.push(newPost);
            this._state.profile.newText = ''
            renderTree(this._state);
        } else if(action.type === 'CHANGE-NEW-TEXT'){
            this._state.profile.newText = action.newText
            renderTree(this._state);
        }
    },
    getState() {
        return this._state
    },


    // subscribe(observer) {
    //     if (renderTree.type === 'OBS'){
    //         renderTree = observer
    //     }
    // },
}


export const sendDataToWall = () => {
    return { type: 'ADD-POST' }
};

export const updateNewPostCreator = (text) => {
    return { type: "CHANGE-NEW-TEXT", newText: text }
};

export default store;
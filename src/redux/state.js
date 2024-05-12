import avatar from "../assets/avatar.jpeg";
import avatar1 from "../assets/user-avatar.png"
import {renderTree} from '../render'

export let addPost = (postMsg) => {
    let newPost = {
        id: 5,
        avatar: avatar,
        text: postMsg,
        likes: 5,
    };

    state.profile.post.push(newPost);
    renderTree(state);
}


let state = {
    profile: {
        post: [
            {id: 1, avatar: avatar, text: 'Im so lazy... But im gtg teach React!', likes: 12,},
            {id: 2, avatar: avatar, text: '"cya" - Its one of the way variants say goodbye in English language', likes: 2,},
            {id: 3, avatar: avatar, text: 'oink-oink', likes: 66,},
        ],
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
}

export default state;
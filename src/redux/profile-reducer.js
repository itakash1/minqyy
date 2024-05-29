import avatar from "../assets/avatar.jpeg";

const commandAddPost = 'ADD-POST';
const commandPostCreator = 'CHANGE-NEW-TEXT';

// eslint-disable-next-line no-unused-vars
let initialState = {
        post: [
            {id: 1, avatar: avatar, text: 'Im so lazy... But im gtg teach React!', likes: 12,},
            {id: 2, avatar: avatar, text: '"cya" - Its one of the way variants say goodbye in English language', likes: 2,},
            {id: 3, avatar: avatar, text: 'oink-oink', likes: 66,},
            {id: 3, avatar: avatar, text: 'oink-oink', likes: 66,},
        ],
        newText: 'hello world!',
};

export const ProfileReducer = (state = initialState, action) => {
    if(action.type === commandAddPost){
        let newPost = {
            id: 5,
            avatar: avatar,
            text: state.newText,
            likes: 0,
        };
        state.post.push(newPost);
        state.newText = ''
    } else if(action.type === commandPostCreator){
        state.newText = action.newText
    }
    return state;
}

export const sendDataToWall = () => {
    return { type: 'ADD-POST' }
};
export const updateNewPostCreator = (text) => {
    return { type: 'CHANGE-NEW-TEXT', newText: text }
};
import avatar from "../assets/avatar.jpeg";

const commandAddPost = 'ADD-POST';
const commandPostCreator = 'CHANGE-NEW-TEXT';

// eslint-disable-next-line no-unused-vars
let initialState = {
        post: [
            {id: 1, avatar: avatar, text: 'Im so lazy... But im gtg teach React!', likes: 12,},
            {id: 2, avatar: avatar, text: '"cya" - Its one of the way variants say goodbye in English language', likes: 2,},
            {id: 3, avatar: avatar, text: 'oink-oink', likes: 66,},
            {id: 4, avatar: avatar, text: 'oink-oink', likes: 66,},
        ],
        newText: 'hello world!',
};

export const ProfileReducer = (state = initialState, action) => {
        let stateCopy = {...state}
        if(action.type === commandAddPost){
            let newPost = {
                id: 5,
                avatar: avatar,
                text: state.newText,
                likes: 0,
            };
            stateCopy.post = [...state.post]
            stateCopy.post.unshift(newPost);
            stateCopy.newText = ''
        } else if(action.type === commandPostCreator){
            stateCopy.newText = action.newText
        }
        return stateCopy;
}

export const sendDataToWall = () => {
    return { type: 'ADD-POST' }
};
export const updateNewPostCreator = (text) => {
    return { type: 'CHANGE-NEW-TEXT', newText: text }
};
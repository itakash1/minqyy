import avatar from "../assets/avatar.jpeg";

const commandAddPost = 'ADD-POST';
const commandPostCreator = 'CHANGE-NEW-TEXT';

export const ProfileReducer = (state = {}, action) => {
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
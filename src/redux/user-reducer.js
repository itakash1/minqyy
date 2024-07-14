import avatar from "../assets/avatar.jpeg";

// eslint-disable-next-line no-unused-vars
let initialState = {
    user:[
        {id: 1, followed: true, name: 'Александр Невский', avatar: avatar, place: 'Samara'},
        {id: 2, followed: true, name: 'Евгений Носов', avatar: avatar, place: 'Samara'},
        {id: 3, followed: false, name: 'Алина Воронова', avatar: avatar, place: 'Samara'},
    ]}


export const UserReducer = (state = initialState, action) => {
    return state
}
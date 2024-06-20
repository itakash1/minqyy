import avatar from "../assets/avatar.jpeg";

// eslint-disable-next-line no-unused-vars
let initialState = {
    user:[
        {id: 1, avatar: avatar, name: 'Александр Невский', place: 'Samara'},
        {id: 2, avatar: avatar, name: 'Евгений Носов', place: 'Samara'},
        {id: 3, avatar: avatar, name: 'Алина Воронова', place: 'Samara'},
    ]}


export const UserReducer = (state = initialState, action) => {
    return state
}
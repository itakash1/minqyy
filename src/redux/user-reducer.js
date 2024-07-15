import avatar from "../assets/avatar.jpeg";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'unfollow'
const SET_USERS = 'set_users'

// eslint-disable-next-line no-unused-vars
let initialState = {
    user:[
        {id: 1, followed: true, name: 'Александр Невский', avatar: avatar, place: 'Samara'},
        {id: 2, followed: true, name: 'Евгений Носов', avatar: avatar, place: 'Samara'},
        {id: 3, followed: false, name: 'Алина Воронова', avatar: avatar, place: 'Samara'},
    ]}


export const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return{
                ...state, users: state.user.map( user => {
                    if(user.id === action.userID){
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map( user => {
                    if(user.id === action.userID){
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.user]};
        default:
            return state;
    }
}

export const followAC = (userID) => {
    return { type: FOLLOW, userID }
};

export const unfollowAC = (userID) => {
    return { type: UNFOLLOW, userID}
};

export const setUsersAC = (user) => {
    return { type: SET_USERS, user}
};
import avatar1 from "../assets/user-avatar.png";

const newMsg = 'NEW-MSG';
const checkNewMsg = 'CHECK-NEW-MSG';

let initialDialog = {
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
}
export const DialogsReducer = (state = initialDialog, action) => {
    let stateCopy = {...state};
    if(action.type === newMsg){
        let newMsg = {id: 5, msg: state.newDialogMsg};
        stateCopy.dialogsData = [...state.dialogsData];
        stateCopy.dialogsData.push(newMsg)
        stateCopy.newDialogMsg = ''
    } else if(action.type === checkNewMsg){
        stateCopy.newDialogMsg = action.newMsg;
    }
    return stateCopy;
}

export const sendMsg = () => {
    return {type: 'NEW-MSG'}
}
export const updateNewMsg = (text) => {
    return {type: 'CHECK-NEW-MSG', newMsg: text }
}
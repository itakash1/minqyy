const newMsg = 'NEW-MSG';
const checkNewMsg = 'CHECK-NEW-MSG';

export const DialogsReducer = (state, action) => {
    if(action.type === newMsg){
        let newMsg = {id: 5, msg: state.newDialogMsg};
        state.dialogsData.push(newMsg)
        state.newDialogMsg = ''
    } else if(action.type === checkNewMsg){
        state.newDialogMsg = action.newMsg;
    }
    return state;
}

export const sendMsg = () => {
    return {type: 'NEW-MSG'}
}
export const updateNewMsg = (text) => {
    return {type: 'CHECK-NEW-MSG', newMsg: text }
}
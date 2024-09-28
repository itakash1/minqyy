import {connect} from "react-redux";
import InputMsg from "./InputMsg";
import {sendMsg, updateNewMsg} from "../../../../redux/dialogs-reducer";

const mapStateToProps = (state) => {
    return{
        store: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        updateNewMsg: (text) => {
            dispatch(updateNewMsg(text))
        },
        sendMsg: () => {
            dispatch(sendMsg())
        },
    }
}

const InputMsgComponent = connect(mapStateToProps, mapDispatchToProps)(InputMsg)

export default  InputMsgComponent;
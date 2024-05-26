import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";

let reducerBucket = combineReducers({
    profile: ProfileReducer,
    dialogs: DialogsReducer,
});

let store = createStore(reducerBucket);

export default store
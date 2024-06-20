import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {UserReducer} from "./user-reducer";

let reducerBucket = combineReducers({
    profile: ProfileReducer,
    dialogs: DialogsReducer,
    finduser: UserReducer,
});

let store = createStore(reducerBucket);

export default store
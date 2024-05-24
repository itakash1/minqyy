import Navbar from "./Navbar/Navbar";
import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profile/Profile";
import Music from "./Music/Music"
import News from "./News/News"
import {Route, Routes} from "react-router-dom";
import css from './MainPage.module.css'

export default function MainPage(props) {
    return (
        <main className={css.page}>
            <Navbar/>

            <Routes>
                <Route path="/profile" element={<Profile state={props.state} dispatch={props.dispatch}/>}/>
                <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogs} dispatch={props.dispatch}/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/news" element={<News/>}/>
            </Routes>
        </main>
    )
}
import Navbar from "./Navbar/Navbar";
import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profile/Profile";
import Music from "./Music/Music"
import News from "./News/News"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import css from './MainPage.module.css'

export default function MainPage(props) {
    return (
        <main className={css.page}>
            <BrowserRouter>
                <Navbar/>

                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dialogs/*" element={<Dialogs/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/news" element={<News/>}/>
                </Routes>
            </BrowserRouter>
        </main>
    )
}
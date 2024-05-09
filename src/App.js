import './App.css';
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import {BrowserRouter} from "react-router-dom";

function App(props) {
    return (
        <div className="container">
            <BrowserRouter>
                <Header />
                <MainPage post={props.post} listUsers={props.listUsers} dialogsData={props.dialogsData} />
            </BrowserRouter>
        </div>
    );
}

export default App;

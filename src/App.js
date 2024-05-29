import './App.css';
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import {BrowserRouter} from "react-router-dom";

function App(props) {
    return (
        <div className="container">
            <BrowserRouter>
                <Header />
                <MainPage store={props.store} dispatch={props.dispatch}/>
            </BrowserRouter>
        </div>
    );
}

export default App;

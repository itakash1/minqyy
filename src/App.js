import './App.css';
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className="container">
        <BrowserRouter>
            <Header/>
            <MainPage />
        </BrowserRouter>
        </div>
    );
}

export default App;

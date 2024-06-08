import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderTree = () => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
}
renderTree()
store.subscribe(() => {
    renderTree(store.getState());
})
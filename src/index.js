import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderTree = () => {
    root.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
            </StoreContext.Provider>
        </React.StrictMode>
    );
}
renderTree()
store.subscribe(() => {
    renderTree(store.getState());
})
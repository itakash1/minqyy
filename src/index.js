import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderTree = () => {
    root.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>
    );
}

renderTree();
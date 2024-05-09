import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import avatar from "./assets/user-avatar.png";

let post = [
    {id: 1, text: 'Im so lazy... But im gtg teach React!',},
    {id: 2, text: '"cya" - Its one of the way variants say goodbye in English language',},
    {id: 3, text: 'oink-oink',},
]

let listUsers = [
    {id: 1, name: "Андрюха Лупатый", avatar: avatar,},
    {id: 2, name: "Николай Турбо", avatar: avatar,},
    {id: 3, name: "Карась Фандю", avatar: avatar,},
    {id: 4, name: "Дмитрий Бычок", avatar: avatar,},
]

let dialogsData = [
    {id: 1, msg: "hello",},
    {id: 2, msg: "budlo",},
    {id: 3, msg: "ya tut",},
    {id: 4, msg: "poshli v dotu",},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App post={post} listUsers={listUsers} dialogsData={dialogsData} />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
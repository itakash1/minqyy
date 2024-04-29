import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="container">
        <Header />
      <body>
        <div className="page">
            <Navbar />
            <Profile />
        </div>
      </body>
    </div>
  );
}

export default App;

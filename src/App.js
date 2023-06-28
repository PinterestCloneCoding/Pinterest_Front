import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/Main";
import Regist from "./pages/Regist/Regist";
import User from "./pages/User/User";
import Details from "./pages/Details/Details";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import firebase from "./firebase";
import Create from "./pages/Create/Create";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div style={{ marginTop: "70px" }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/create" element={<Create />} />
            <Route path="/pin/:id" element={<Details />} />
            <Route path="/regist" element={<Regist />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

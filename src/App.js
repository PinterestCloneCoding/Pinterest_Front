import Main from "./pages/Main/Main";
import Regist from "./pages/Regist/Regist";
import User from "./pages/User/User";
import Details from "./pages/Details/Details";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import firebase from "./firebase";

import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Details />
      </div>
    </BrowserRouter>
  );
};

export default App;

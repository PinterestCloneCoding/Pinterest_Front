import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import firebase from "./firebase";

function App() {
  useEffect(() => console.log(firebase));
  return <div className="App">app</div>;
}

export default App;

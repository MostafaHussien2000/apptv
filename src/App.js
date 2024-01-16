import "./App.css";

/* React Router
=========================================*/
import { Switch, Route, BrowserRouter } from "react-router-dom";

/* Pages
=========================================*/
import HomePage from "./pages/HomePage";

/* Components
=========================================*/
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;

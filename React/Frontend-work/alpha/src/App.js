// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Signup from './components/Signup';
import Login from "./components/login";

function App() {
  return (
    <Router>
    <div className="App">



      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>

      </div>
    </Router>
  );
}

export default App;

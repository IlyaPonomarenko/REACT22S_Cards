import "./App.css";
import {Route, Routes, Link} from "react-router-dom";
import Home from "./Home.jsx";
import Animals from "./Animals.jsx";
import Birds from "./Birds.jsx";

function App () {
  return <div>
    <header>
    <nav>
      <ul className="nav__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/animals">Animals</Link></li>
        <li><Link to="/birds">Birds</Link></li>
      </ul>
    </nav>
    </header>
    
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/animals" element={<Animals/>}/>
    <Route path="/birds" element={<Birds/>}/>
  </Routes>
  </div>
}

export default App;

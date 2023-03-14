// import logo from './logo.svg';
import './App.css';
import Addnote from "./components/addnote/Addnote"
import Viewnote from './components/viewnote/Viewnote';
import {Routes,Route,Link} from "react-router-dom"
function App() {
  return (
    <>
    <nav>
      <Link to="/">Add Note</Link>
      <Link to="/Viewnote">View All Note</Link>
    </nav>
      <Routes>
        <Route path='/' element={<Addnote/>}/>
        <Route path='/Viewnote' element={<Viewnote/>}/>
      </Routes>
    </>
  );
}

export default App;

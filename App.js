import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import AddStudent from './Components/AddStudent';
import ShowStudent from './Components/ShowStudent';
import Home from './Components/Home';

function App() {
  return (
   
    <Router>
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path="/src/Components/home" index  element={<Home/>} />
        <Route path="src/Components/addstudent" element={<AddStudent />} />
        <Route path="src/Components/showstudent" element={<ShowStudent />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;

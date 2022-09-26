import './App.css';
import Login from './Login';
import Signup from './register';

import {Routes,BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/reg" element={<Signup/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
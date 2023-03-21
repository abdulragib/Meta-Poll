import './App.css';
import Admin from './Components/Admin/Admin';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

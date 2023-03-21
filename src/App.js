import './App.css';
import Admin from './Components/Admin/Admin';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCampaign from './Components/Admin-CreateCampaign/CreateCampaign';

function App() {
  return (
      <BrowserRouter className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/create-campaign" element={<CreateCampaign/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

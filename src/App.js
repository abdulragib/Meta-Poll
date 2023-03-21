import './App.css';
import Admin from './Components/Admin/Admin';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActiveCampaign from './Components/CheckProgress-ActiveCampaign/ActiveCampaign';

function App() {
  return (
      <BrowserRouter className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route index path="/admin/active-campaign" element={<ActiveCampaign/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

import './App.css';
import Admin from './Components/Admin/Admin';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActiveCampaign from './Components/CheckProgress-ActiveCampaign/ActiveCampaign';

function App() {
  return (
      <BrowserRouter className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/admin/active-campaign" element={<ActiveCampaign/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

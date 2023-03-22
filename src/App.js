import './App.css';
import Admin from './Components/Admin/Admin';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCampaign from './Components/Admin-CreateCampaign/CreateCampaign';
import CheckProgress from './Components/Admin-CheckProgress/CheckProgress';
import ActiveCampaign from './Components/CheckProgress-ActiveCampaign/ActiveCampaign'
import EndedCampaign from './Components/CheckProgress-EndedCampaign/EndedCampaign'

function App() {
  return (
      <BrowserRouter basename='/Meta-Poll' className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/admin/create-campaign" element={<CreateCampaign/>}/>
          <Route exact path="/admin/check-progress" element={<CheckProgress/>}/>
          <Route exact path="/admin/check-progress/active-campaign" element={<ActiveCampaign/>}/>
          <Route exact path="/admin/check-progress/Ended-campaign" element={<EndedCampaign/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

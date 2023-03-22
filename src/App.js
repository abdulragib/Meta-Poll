import './App.css';
import Admin from './Components/Admin/Admin';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCampaign from './Components/Admin-CreateCampaign/CreateCampaign';
import CheckProgress from './Components/Admin-CheckProgress/CheckProgress';
import ActiveCampaign from './Components/CheckProgress-ActiveCampaign/ActiveCampaign'
import EndedCampaign from './Components/CheckProgress-EndedCampaign/EndedCampaign'
import VoterPanel from './Components/VoterPanel/VoterPanel'
import VotingPanel from './Components/VoterPanel-OngoingCampaign/OngoingCampaign'
import UserEndedCampaign from './Components/VoterPanel-EndedCampaign/UserEndedCampaign';

function App() {
  return (
      <BrowserRouter basename='/Meta-Poll' className="App">
        <Routes>
          {/* home routing */}
          <Route exact path="/" element={<Home />} />

          {/* admin routing */}
          <Route exact path="/admin" element={<Admin />}/>
          <Route exact path="/admin/create-campaign" element={<CreateCampaign/>}/>
          <Route exact path="/admin/check-progress" element={<CheckProgress/>}/>
          <Route exact path="/admin/check-progress/active-campaign" element={<ActiveCampaign/>}/>
          <Route exact path="/admin/check-progress/Ended-campaign" element={<EndedCampaign/>}/>
          
          {/* user routing */}
          <Route exact path="/user" element={<VoterPanel/>}/>
          <Route exact path="/user/ongoing-campaign" element={<VotingPanel/>}/>
          <Route exact path="/user/ended-campaign" element={<UserEndedCampaign/>}/>

           {/* unknown route */}
        <Route path="*" element={<h1>Try Correct Path</h1>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

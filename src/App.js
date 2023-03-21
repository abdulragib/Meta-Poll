import './App.css';
import Admin from './Components/Admin/Admin';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCampaign from './Components/Admin-CreateCampaign/CreateCampaign';

function App() {
  return (
      <BrowserRouter className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/admin/create-campaign" element={<CreateCampaign/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

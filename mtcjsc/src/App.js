import HeroGear from './frontend/Hero Gear/herogear.js'
import FrontPage from './frontend/frontpage'
import HeroGearUpdated from './frontend/Hero Gear/Hero Gear Updated/herogearUpdated'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {


  return (
    <Router>
      <Routes>
        <Route exact path = "/" element = {<FrontPage/>}></Route>
        <Route exact path = "/herogear" element = {<HeroGear/>}></Route>
        <Route exact path = 'herogearupdatedversion' element = {<HeroGearUpdated/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

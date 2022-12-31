import React from 'react';
import {  useNavigate } from 'react-router-dom';


function FrontPage() {

    const heroGear = useNavigate()
    const handleClickHeroGear = () => heroGear('/herogear')
    const handleClickHeroGearUpgradeVersion = () => heroGear('/herogearupdatedversion')
    return (
      <div className="Login">
        <header className="Login-header">
          <p>
            <h1>Welcome to SOS</h1>
            <button type = 'button' onClick ={handleClickHeroGear}>Hero Gear</button>
            <button type = 'button' onClick = {handleClickHeroGearUpgradeVersion}>Hero Gear Update Version</button>
          </p>
        </header>
      </div>
    );
  }
  
  export default FrontPage;